import test from 'node:test';
import assert from 'node:assert/strict';
import { getModule, modules } from '../content/index.ts';
import { advance, answerStep, buildLessonRun, buildReviewRun, buildTestRun, currentStep, type Run } from './lesson.ts';
import { applyLesson, applyReview, applyTest, contentLevelFor, dueWords, initialProgress, nextStep, placement, placementLevel, restoreProgress, stageCounts, updateProfile, type Profile } from './learning.ts';

const profile: Profile = { name: 'Мила', level: 'A2', track: 'Informatik', exam: 'ÖSD C1', date: '2027-09-01', vwuEnrolled: false };
const module = getModule('cyber-a2-angriffe')!;
const DAY = 86400000;
const solve = (run: Run, wrong = new Set<string>()) => { while (!run.finished) { const s = currentStep(run)!; if (s.kind !== 'intro' && s.kind !== 'reading') run = answerStep(run, !wrong.has(s.wordId ?? ''));  run = advance(run); } return run; };

test('screening distinguishes a beginner and never certifies C1', () => {
  assert.equal(placementLevel([]), 'A1');
  assert.equal(placementLevel(placement.map(q => q.correct)), 'B2');
  assert.equal(placementLevel(placement.map((q, i) => i < 4 ? q.correct : -1)), 'A2');
});

test('A1 learners start with A1.2, A2 with A2.1, B1 and above with A2.2', () => {
  assert.equal(contentLevelFor('A1'), 'A1.2');
  assert.equal(contentLevelFor(undefined), 'A1.2');
  assert.equal(contentLevelFor('A2'), 'A2.1');
  assert.equal(contentLevelFor('B1'), 'A2.2');
  assert.equal(contentLevelFor('C1'), 'A2.2');
});

test('next step walks lessons, then the module test, then the next level', () => {
  let p = initialProgress;
  assert.deepEqual(nextStep(p, 'cyber', 'A2.1'), { kind: 'lesson', module, lesson: 0 });
  p = applyLesson(p, solve(buildLessonRun(module, 0, 1, 0)), 60000);
  assert.deepEqual(nextStep(p, 'cyber', 'A2.1'), { kind: 'lesson', module, lesson: 1 });
  p = applyLesson(p, solve(buildLessonRun(module, 1, 2, 0)), 60000);
  assert.deepEqual(nextStep(p, 'cyber', 'A2.1'), { kind: 'test', module });
  p = applyTest(p, solve(buildTestRun(module, 3, 0)), 60000);
  assert.equal(p.modules[module.id].test?.passed, true);
  assert.equal(nextStep(p, 'cyber', 'A2.1')?.module.level, 'A2.2');
});

test('lesson result: flawless words reach stage 2 and come back in two days; mistakes tomorrow', () => {
  const run = solve(buildLessonRun(module, 0, 11, 0), new Set(['cyb-a2-angriff']));
  const p = applyLesson(initialProgress, run, 1000);
  const words = Object.keys(p.words);
  assert.equal(words.length, 8);
  assert.equal(p.words['cyb-a2-angriff'].stage, 1);
  assert.equal(p.words['cyb-a2-angriff'].card.due, 1000 + DAY);
  const ok = words.find(w => w !== 'cyb-a2-angriff')!;
  assert.equal(p.words[ok].stage, 2);
  assert.equal(p.words[ok].card.due, 1000 + 2 * DAY);
  assert.deepEqual(p.modules[module.id].lessons, [0]);
  assert.equal(p.sessions.length, 1);
  assert.equal(p.sessions[0].kind, 'lesson');
  assert.deepEqual(applyLesson(p, run, 2000).modules[module.id].lessons, [0]);
});

test('review: right answers move a word up, wrong ones down and back in 10 minutes', () => {
  let p = applyLesson(initialProgress, solve(buildLessonRun(module, 0, 4, 0)), 0);
  const now = 3 * DAY;
  const due = dueWords(p, now);
  assert.equal(due.length, 8);
  assert.equal(dueWords(p, 0).length, 0);
  const wrong = due[0].wordId;
  p = applyReview(p, solve(buildReviewRun(due, 5, now), new Set([wrong])), now);
  assert.equal(p.words[wrong].stage, 1);
  assert.equal(p.words[wrong].card.due, now + 10 * 60000);
  assert.equal(p.words[due[1].wordId].stage, 3);
  assert.ok(p.words[due[1].wordId].card.due > now + 3 * DAY);
});

test('failed test: below 80 %, mistaken words are due again', () => {
  const wrong = new Set(module.words.slice(0, 4).map(w => w.id));
  const p = applyTest(initialProgress, solve(buildTestRun(module, 6, 0), wrong), 5000);
  assert.equal(p.modules[module.id].test?.passed, false);
  assert.equal(p.modules[module.id].test?.best, 0.75);
  assert.equal(Object.keys(p.words).length, 4);
  assert.equal(p.sessions[0].score, 0.75);
});

test('stage counts cover all words', () => {
  const p = applyLesson(initialProgress, solve(buildLessonRun(module, 0, 4, 0)), 0);
  const counts = stageCounts(p);
  assert.equal(counts[2], 8);
  assert.equal(counts.reduce((a, b) => a + b, 0), modules.reduce((n, m) => n + m.words.length, 0));
});

test('progress survives a JSON round trip', () => {
  const p = applyLesson(updateProfile(initialProgress, profile), solve(buildLessonRun(module, 0, 4, 0)), 0);
  assert.deepEqual(restoreProgress(JSON.parse(JSON.stringify(p))), p);
});

test('old story saves keep profile, skills and log; drop drafts and story cards', () => {
  const restored = restoreProgress({ profile: { ...profile, vwuEnrolled: true }, writing: 'Mein alter Text.', stage: 3, completed: ['erste-woche'], reviews: [{ word: 'die Voraussetzung', translation: 'x', example: 'y', due: 0, interval: 1 }], sessions: [{ date: '2026-11-18T10:00:00.000Z', minutes: 20, confidence: 4, sessionId: 'hallo-wien', title: 'Hallo, Wien!' }], skills: [20, 40, 60, 80, 30, 50] });
  assert.equal(restored.profile?.exam, 'VWU Ergänzungsprüfung');
  assert.deepEqual(restored.skills, [20, 40, 60, 80, 30, 50]);
  assert.deepEqual(restored.sessions, [{ date: '2026-11-18T10:00:00.000Z', minutes: 20, title: 'Hallo, Wien!', kind: 'lesson' }]);
  assert.deepEqual(restored.words, {});
  assert.equal(restored.sphere, 'cyber');
});

test('restoration tolerates corrupt fields', () => {
  const restored = restoreProgress({ sphere: 'kochen', words: { 'cyb-a2-angriff': { card: { due: 'x' } }, nope: {} }, modules: { 'cyber-a2-angriffe': { lessons: [0, 0, 7, -1, 'a'], test: { best: 3 } }, fake: {} }, sessions: [null], skills: [200, -10, 'bad'] });
  assert.equal(restored.sphere, 'cyber');
  assert.deepEqual(restored.words, {});
  assert.deepEqual(restored.modules, { 'cyber-a2-angriffe': { lessons: [0], test: { best: 1, passed: true, date: '' } } });
  assert.deepEqual(restored.skills, [100, 0, 0, 0, 0, 0]);
  assert.equal(restoreProgress(null).profile, null);
});
