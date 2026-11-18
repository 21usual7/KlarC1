import test from 'node:test';
import assert from 'node:assert/strict';
import { completeSession, getSession, initialProgress, placement, placementLevel, restoreProgress, scheduleCard, updateProfile, type Profile } from './learning.ts';
const profile: Profile = { name: 'Мила', level: 'A1', track: 'Informatik', exam: 'ÖSD C1', date: '2027-09-01' };

test('screening distinguishes a beginner and never certifies C1', () => {
  assert.equal(placementLevel([]), 'A1');
  assert.equal(placementLevel(placement.map(q => q.correct)), 'B2');
  assert.equal(placementLevel(placement.map((q, i) => i < 4 ? q.correct : -1)), 'A2');
  assert.equal(placementLevel(placement.map((q, i) => i < 6 ? q.correct : -1)), 'B1');
});
test('A1 offers a separate accessible session and valid questions', () => {
  const a1 = getSession('A1');
  assert.equal(a1.level, 'A1');
  assert.notEqual(a1.id, getSession('A2').id);
  assert.ok(a1.writingMin < getSession('A2').writingMin);
  assert.ok(a1.writingPrompt.includes('Ich heiße'));
  for (const q of a1.comprehension) assert.ok(q.correct >= 0 && q.correct < q.options.length);
});
test('review handles forgetting, first recall, interval growth and maximum', () => {
  const card = { word: 'die Voraussetzung', translation: 'условие', example: 'Eine Voraussetzung.', due: 0, interval: 0 };
  assert.equal(scheduleCard(card, false, 100).due, 600100);
  const first = scheduleCard(card, true, 100);
  assert.equal(first.due, 86400100);
  assert.equal(scheduleCard(first, true, 100).interval, 2);
  assert.equal(scheduleCard({ ...card, interval: 40 }, true, 100).interval, 60);
  assert.equal(scheduleCard(first, false, 100).interval, 0);
});
test('different levels complete independently and never duplicate vocabulary', () => {
  const result = completeSession(initialProgress, 20, 4, 1000, 'A1');
  assert.deepEqual(result.completed, ['hallo-wien']);
  assert.equal(result.sessions[0].title, 'Hallo, Wien!');
  assert.equal(result.sessions[0].minutes, 20);
  assert.equal(result.reviews.length, getSession('A1').vocabulary.length);
  assert.equal(result.reviews[0].due, 1000);
  assert.deepEqual(completeSession(result, 20, 4, 2000, 'A1'), result);
  const advanced = completeSession(result, 45, 3, 3000, 'A2');
  assert.equal(advanced.sessions.length, 2);
  assert.ok(advanced.completed.includes('erste-woche'));
  assert.equal(advanced.reviews.length, 10);
  assert.deepEqual(initialProgress.completed, []);
});
test('switching levels preserves and restores independent writing and stage', () => {
  const a1 = { ...updateProfile(initialProgress, profile), writing: 'Ich heiße Mila.', stage: 3, answers: { 'a1-q1': '1' } };
  const a2 = updateProfile(a1, { ...profile, level: 'A2' });
  assert.equal(a2.writing, '');
  assert.equal(a2.stage, 0);
  const back = updateProfile({ ...a2, writing: 'Mein erster Tag in Wien.' }, profile);
  assert.equal(back.writing, a1.writing);
  assert.equal(back.stage, 3);
  assert.deepEqual(back.answers, a1.answers);
  assert.equal(updateProfile(back, { ...profile, level: 'B1' }).writing, 'Mein erster Tag in Wien.');
});
test('legacy v1 save without profile keeps A2 work as a draft and starts A1', () => {
  const restored = restoreProgress({ writing: 'Mein alter Text.', stage: 3, completed: ['erste-woche'], skills: [20, 40, 60, 80, 30, 50] });
  assert.equal(restored.sessionId, 'hallo-wien');
  assert.equal(restored.writing, '');
  assert.equal(restored.drafts['erste-woche'].writing, 'Mein alter Text.');
  assert.equal(updateProfile(restored, { ...profile, level: 'A2' }).writing, 'Mein alter Text.');
  assert.deepEqual(restored.skills, [20, 40, 60, 80, 30, 50]);
});
test('restoration tolerates corrupt fields and normalizes VWU goal', () => {
  assert.equal(restoreProgress(null).sessionId, 'hallo-wien');
  const restored = restoreProgress({ writing: 4, stage: 999, answers: null, reviews: [null, {}], sessions: [null], skills: [200, -10, 'bad'], profile: { ...profile, vwuEnrolled: true } });
  assert.equal(restored.writing, '');
  assert.equal(restored.stage, 5);
  assert.deepEqual(restored.reviews, []);
  assert.deepEqual(restored.sessions, []);
  assert.deepEqual(restored.skills, [100, 0, 0, 0, 0, 0]);
  assert.equal(restored.profile?.exam, 'VWU Ergänzungsprüfung');
});
