import test from 'node:test';
import assert from 'node:assert/strict';
import { getWord, modules, type Word } from '../content/index.ts';
import { available, checkChoice, checkTiles, checkTyped, makeExercise, readingExercises, rng, sentenceLookalikes, splitSentences, textListening, tierTypes, type ChoiceExercise, type Exercise, type TypeExercise } from './exercises.ts';
import { advance, answerStep, buildLessonRun, buildReviewRun, buildTestRun, currentStep, firstTryScore, MAX_REQUEUE, poolFor, runProgress, type Run } from './lesson.ts';

const module = modules.find(m => m.id === 'cyber-a12-sicher')!;
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
    if (step.kind !== 'intro' && step.kind !== 'reading') run = answerStep(run, !wrongFor.has(step.wordId ?? ''));
    run = advance(run);
  }
  return run;
};

test('lesson: two blocks of intro + recognize + recall + use, a mixed final round, then the text', () => {
  const run = buildLessonRun(module, 0, 42, 0);
  assert.equal(run.rounds.length, 12);
  assert.equal(run.rounds[0].every(s => s.kind === 'intro'), true);
  assert.deepEqual(run.rounds.slice(1, 4).map(r => (r[0] as Exercise).tier), ['recognize', 'recall', 'use']);
  assert.equal(run.rounds[8].length, 8);
  assert.equal(new Set(run.rounds[8].map(s => s.wordId)).size, 8);
  const reading = module.readings!.find(r => r.lesson === 0)!;
  assert.equal(run.rounds[9][0].kind, 'reading');
  const listening = run.rounds[10].filter(s => (s as Exercise).type === 'listen-text').length;
  assert.ok(listening >= 1 && listening <= 2, 'one or two sentences of the text by ear');
  assert.deepEqual(run.rounds[10].map(s => (s as Exercise).type), [...reading.questions.map(() => 'comprehension'), ...Array(listening).fill('listen-text')]);
  assert.ok(run.rounds[11].every(s => (s as Exercise).type.startsWith('translate-')));
  const texts = reading.questions.length + listening + reading.translate.length;
  assert.deepEqual(runProgress(run), { done: 0, total: 40 + 1 + texts });
  const done = solve(run);
  assert.equal(done.finished, true);
  assert.equal(Object.keys(done.results).length, 8);
  assert.ok(Object.values(done.results).every(r => r.wrong === 0 && r.firstCorrect));
  assert.deepEqual(done.text, { right: texts, wrong: 0 });
});

test('text exercises: questions keep their options, translations are solvable and never touch word results', () => {
  for (const m of modules) for (const reading of m.readings || []) {
    const others = m.readings!.filter(r => r !== reading);
    const exercises = readingExercises(reading, others, rng(4), 't');
    for (const ex of exercises) {
      assert.equal(ex.wordId, undefined);
      if (ex.kind === 'choice') {
        assert.ok(ex.options.includes(ex.answer), `${m.id} ${ex.id}`);
        assert.equal(new Set(ex.options).size, ex.options.length, `${m.id} ${ex.id}: duplicate options`);
        assert.ok(ex.options.length >= 3, `${m.id} ${ex.id}: options`);
      }
      if (ex.kind === 'tiles') {
        assert.ok(checkTiles(ex, ex.answer).correct);
        assert.ok(ex.tiles.length >= ex.answer.length + 1, `${m.id} ${ex.id}: no extra tile`);
      }
    }
  }
  let run = buildLessonRun(module, 0, 3, 0);
  while (currentStep(run)?.kind !== 'reading') { const s = currentStep(run)!; if (s.kind !== 'intro') run = answerStep(run, true); run = advance(run); }
  run = advance(run);
  const before = run.rounds[run.round].length;
  run = answerStep(run, false);
  assert.equal(run.rounds[run.round].length, before, 'text mistakes are not re-queued');
  assert.deepEqual(run.text, { right: 0, wrong: 1 });
});

test('a mistake re-queues the word at the end of the round, but never endlessly', () => {
  let run = buildLessonRun(module, 0, 5, 0);
  run = advance(advance(advance(advance(run)))); // skip 4 intro cards
  const step = currentStep(run)!;
  const wordId = step.wordId!;
  const before = run.rounds[run.round].length;
  run = answerStep(run, false);
  assert.equal(run.rounds[run.round].length, before + 1);
  assert.equal(run.rounds[run.round].at(-1)!.wordId, step.wordId);
  const finished = solve(run, new Set([wordId]));
  assert.equal(finished.finished, true);
  assert.equal(finished.results[wordId].firstCorrect, false);
  assert.ok(finished.results[wordId].wrong <= 1 + MAX_REQUEUE * finished.rounds.length);
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

test('listen-sentence: four distinct written sentences, the spoken example among them, options locked until played', () => {
  let built = 0;
  for (const word of all) {
    if (!available(word, 'listen-sentence')) { assert.match(word.example.de, /[0-9=²+()]/, `${word.id}: only formulas skip listening`); continue; }
    for (const seed of [1, 2, 3]) {
      const ex = makeExercise(word, 'listen-sentence', poolFor([word]), rng(seed)) as ChoiceExercise;
      assert.equal(ex.kind, 'choice');
      assert.equal(ex.tier, 'recognize');
      assert.equal(ex.audio, word.example.de);
      assert.equal(ex.answer, word.example.de);
      assert.equal(ex.listenFirst, true);
      assert.equal(ex.options.length, 4, `${word.id}: options`);
      assert.equal(new Set(ex.options.map(o => o.toLowerCase())).size, 4, `${word.id}: duplicate options ${ex.options}`);
      assert.ok(checkChoice(ex, word.example.de).correct);
      assert.equal(ex.options.filter(o => checkChoice(ex, o).correct).length, 1);
      built++;
    }
  }
  assert.ok(built > 0);
});

test('listen-sentence distractors: most are the same sentence with another word, none breaks agreement', () => {
  let similar = 0, total = 0;
  for (const word of all) {
    if (!available(word, 'listen-sentence')) continue;
    for (const wrong of sentenceLookalikes(word, poolFor([word]), rng(11))) {
      total++;
      const [a, b] = word.example.de.split(word.example.cloze);
      const words = new Set(word.example.de.toLowerCase().split(/\s+/));
      const shared = wrong.toLowerCase().split(/\s+/).filter(t => words.has(t)).length;
      if ((wrong.startsWith(a) && wrong.endsWith(b)) || shared >= words.size - 1) similar++;
    }
  }
  // Grammar beats similarity: when no word of the same gender / ending fits, a real course sentence is used instead.
  assert.ok(similar / total > 0.5, `similar ${similar}/${total}`);
  const options = sentenceLookalikes(getWord('cyb-a2-schwachstelle')!, all, rng(3));
  assert.ok(options.every(o => !/eine (Administrator|Angriff|Zugriff)\b/.test(o)), options.join(' | '));
  assert.ok(sentenceLookalikes(getWord('cyb-a2-ausnutzen')!, all, rng(3)).every(o => !/(schützt|blockiert) die Schwachstelle aus/.test(o)));
});

test('text listening: a sentence of the reading among 3–4 distinct options, solvable, no word progress', () => {
  for (const m of modules) for (const reading of m.readings || []) {
    const others = m.readings!.filter(r => r !== reading);
    const sentences = splitSentences(reading.de);
    const exercises = textListening(reading, others, rng(5), 't');
    assert.ok(exercises.length >= 1 && exercises.length <= 2, `${m.id} ${reading.lesson}: listening tasks`);
    assert.equal(new Set(exercises.map(e => e.answer)).size, exercises.length, 'different sentences');
    for (const ex of exercises) {
      assert.equal(ex.wordId, undefined);
      assert.equal(ex.type, 'listen-text');
      assert.ok(sentences.includes(ex.answer), `${m.id}: ${ex.answer}`);
      assert.equal(ex.audio, ex.answer);
      assert.ok(ex.options.length >= 3 && ex.options.length <= 4, `${m.id} ${ex.id}: options`);
      assert.equal(new Set(ex.options.map(o => o.toLowerCase())).size, ex.options.length, `${m.id} ${ex.id}: duplicate options`);
      assert.ok(checkChoice(ex, ex.answer).correct);
    }
  }
  let run = buildLessonRun(module, 0, 8, 0);
  while (currentStep(run) && (currentStep(run) as Exercise).type !== 'listen-text') { const s = currentStep(run)!; if (s.kind !== 'intro' && s.kind !== 'reading') run = answerStep(run, true); run = advance(run); }
  const words = run.results;
  run = answerStep(run, false);
  assert.equal(run.results, words, 'listening to the text never touches word results');
  assert.equal(run.text!.wrong, 1);
});

test('splitSentences keeps every sentence of a paragraph text', () => {
  assert.deepEqual(splitSentences('Das ist gut. Ist das sicher?\n\nJa! „Nein“, sagt er.'), ['Das ist gut.', 'Ist das sicher?', 'Ja!', '„Nein“, sagt er.']);
});
