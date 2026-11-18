import test from 'node:test';
import assert from 'node:assert/strict';
import { getWord, modules, type Word } from '../content/index.ts';
import { available, checkChoice, checkTiles, checkTyped, makeExercise, rng, tierTypes, type Exercise, type TypeExercise } from './exercises.ts';
import { advance, answerStep, buildLessonRun, buildReviewRun, buildTestRun, currentStep, firstTryScore, MAX_REQUEUE, poolFor, runProgress, type Run } from './lesson.ts';

const module = modules.find(m => m.id === 'cyber-a2-angriffe')!;
const all = modules.flatMap(m => m.words);

test('every available exercise type builds a solvable exercise for every word', () => {
  for (const word of all) for (const type of Object.values(tierTypes).flat()) {
    if (!available(word, type)) continue;
    const ex = makeExercise(word, type, poolFor([word]), rng(7));
    if (ex.kind === 'choice') {
      assert.ok(ex.options.includes(ex.answer), `${word.id} ${type}`);
      assert.equal(new Set(ex.options).size, ex.options.length, `${word.id} ${type}: duplicate options`);
      assert.ok(ex.options.length >= (type === 'article' ? 3 : 4), `${word.id} ${type}: options`);
    }
    if (ex.kind === 'tiles') assert.deepEqual([...ex.tiles].filter(t => ex.answer.includes(t)).sort(), [...ex.answer].sort(), `${word.id} ${type}: tiles`);
    if (ex.sentence) assert.ok(ex.sentence.includes('_____'), `${word.id} ${type}: gap`);
  }
});

test('typed answers: tolerant to case, quotes, punctuation and umlaut spelling, but says so', () => {
  const word = getWord('cyb-a2-sicherheitsluecke')!;
  const ex = makeExercise(word, 'cloze-typed', poolFor([word]), rng(1)) as TypeExercise;
  assert.deepEqual(checkTyped(ex, 'Sicherheitslücke'), { correct: true, note: undefined });
  assert.equal(checkTyped(ex, 'sicherheitslücke').correct, true);
  assert.ok(checkTyped(ex, 'sicherheitslücke').note);
  assert.equal(checkTyped(ex, 'Sicherheitsluecke').correct, true);
  assert.match(checkTyped(ex, 'Sicherheitsluecke').note!, /умлаут/);
  assert.equal(checkTyped(ex, 'Schwachstelle').correct, false);
  assert.equal(checkTyped(ex, '   ').correct, false);
  const colloc = makeExercise(getWord('cyb-a12-passwort')!, 'collocation', all, rng(1)) as TypeExercise;
  assert.equal(checkTyped(colloc, 'mein Passwort ändern').correct, true);
  const dictation = makeExercise(getWord('cyb-a2-schwachstelle')!, 'dictation', all, rng(1)) as TypeExercise;
  assert.equal(checkTyped(dictation, 'die software hat eine schwachstelle').correct, true);
});

test('choice and tiles checking', () => {
  const word = getWord('cyb-a2-schwachstelle')!;
  const article = makeExercise(word, 'article', all, rng(3));
  assert.equal(article.kind === 'choice' && checkChoice(article, 'die').correct, true);
  const compound = makeExercise(word, 'compound', all, rng(3));
  assert.ok(compound.kind === 'tiles' && checkTiles(compound, ['Schwach', 'stelle']).correct);
  assert.ok(compound.kind === 'tiles' && !checkTiles(compound, ['stelle', 'Schwach']).correct);
});

test('words without a plural, article or plain example skip those exercises', () => {
  assert.equal(available(getWord('inf-a2-daten')!, 'article'), false);
  assert.equal(available(getWord('inf-a2-daten')!, 'plural'), false);
  assert.equal(available(getWord('cyb-a12-sicher')!, 'compound'), false);
  assert.equal(available(getWord('mat-a2-darausfolgt')!, 'dictation'), false);
});

const solve = (run: Run, wrongFor = new Set<string>()) => {
  let guard = 0;
  while (!run.finished && guard++ < 500) {
    const step = currentStep(run)!;
    if (step.kind !== 'intro') run = answerStep(run, !wrongFor.has(step.wordId));
    run = advance(run);
  }
  return run;
};

test('lesson: two blocks of intro + recognize + recall + use, then a mixed final round', () => {
  const run = buildLessonRun(module, 0, 42, 0);
  assert.equal(run.rounds.length, 9);
  assert.equal(run.rounds[0].every(s => s.kind === 'intro'), true);
  assert.deepEqual(run.rounds.slice(1, 4).map(r => (r[0] as Exercise).tier), ['recognize', 'recall', 'use']);
  assert.equal(run.rounds[8].length, 8);
  assert.equal(new Set(run.rounds[8].map(s => s.wordId)).size, 8);
  assert.deepEqual(runProgress(run), { done: 0, total: 40 });
  const done = solve(run);
  assert.equal(done.finished, true);
  assert.equal(Object.keys(done.results).length, 8);
  assert.ok(Object.values(done.results).every(r => r.wrong === 0 && r.firstCorrect));
});

test('a mistake re-queues the word at the end of the round, but never endlessly', () => {
  let run = buildLessonRun(module, 0, 5, 0);
  run = advance(advance(advance(advance(run)))); // skip 4 intro cards
  const step = currentStep(run)!;
  const before = run.rounds[run.round].length;
  run = answerStep(run, false);
  assert.equal(run.rounds[run.round].length, before + 1);
  assert.equal(run.rounds[run.round].at(-1)!.wordId, step.wordId);
  const finished = solve(run, new Set([step.wordId]));
  assert.equal(finished.finished, true);
  assert.equal(finished.results[step.wordId].firstCorrect, false);
  assert.ok(finished.results[step.wordId].wrong <= 1 + MAX_REQUEUE * finished.rounds.length);
});

test('test mode: no second chances; score is share of first answers', () => {
  let run = buildTestRun(module, 9, 0);
  assert.equal(run.rounds[0].length, 16);
  const wrong = new Set(module.words.slice(0, 4).map(w => w.id));
  run = solve(run, wrong);
  assert.equal(run.rounds[0].length, 16);
  assert.equal(firstTryScore(run), 0.75);
});

test('review builds one exercise per known word, recall for stage 1 and use above', () => {
  const run = buildReviewRun([{ wordId: 'cyb-a2-angriff', stage: 1 }, { wordId: 'cyb-a2-zugriff', stage: 3 }, { wordId: 'gone', stage: 2 }], 3, 0);
  assert.equal(run.rounds[0].length, 2);
  const tiers = Object.fromEntries(run.rounds[0].map(s => [s.wordId, (s as Exercise).tier]));
  assert.deepEqual(tiers, { 'cyb-a2-angriff': 'recall', 'cyb-a2-zugriff': 'use' });
  assert.equal(buildReviewRun([], 1, 0).finished, true);
});

test('distractors stay inside the sphere', () => {
  const pool: Word[] = poolFor([getWord('mat-a12-zahl')!]);
  assert.ok(pool.every(w => w.id.startsWith('mat-')));
});
