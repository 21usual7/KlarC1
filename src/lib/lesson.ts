import { BLOCK_SIZE, getWord, lessonWords, modules, readingFor, type Module, type Word } from '../content/index.ts';
import { exerciseForTier, isWordExercise, readingExercises, rng, shuffle, type ExerciseType, type Step, type Tier } from './exercises.ts';
import type { Stage } from './srs.ts';

export type RunMode = 'lesson' | 'review' | 'test';
export type WordResult = { right: number; wrong: number; firstCorrect?: boolean };
export type Run = {
  mode: RunMode;
  moduleId?: string;
  lesson?: number;
  title: string;
  seed: number;
  rounds: Step[][];
  round: number;
  index: number;
  results: Record<string, WordResult>;
  /** Answers about the lesson text (questions, translations). They do not touch word progress. */
  text?: { right: number; wrong: number };
  /** `${round}:${wordId}` → how many times the word was re-queued in that round. */
  requeued: Record<string, number>;
  /** How often a step was answered; the counter feeds the PRNG of re-queued exercises. */
  answered: number;
  startedAt: number;
  finished: boolean;
};

/** A mistake re-queues the word at most this many times per round, so a round always ends. */
export const MAX_REQUEUE = 2;
export const PASS_SCORE = 0.8;

/** Distractors come from the whole sphere, so options are always plausible but distinct. */
export const poolFor = (words: Word[]) => {
  const spheres = new Set(words.map(w => modules.find(m => m.words.includes(w))?.sphere));
  return modules.filter(m => spheres.has(m.sphere)).flatMap(m => m.words);
};
const chunk = <T,>(items: T[], size: number) => Array.from({ length: Math.ceil(items.length / size) }, (_, i) => items.slice(i * size, (i + 1) * size));
const emptyRun = (mode: RunMode, title: string, seed: number, now: number, rounds: Step[][], extra: Partial<Run> = {}): Run =>
  ({ mode, title, seed, rounds: rounds.filter(r => r.length), round: 0, index: 0, results: {}, requeued: {}, answered: 0, startedAt: now, finished: rounds.every(r => !r.length), ...extra });

/**
 * Lesson: blocks of 4 words. Per block: meet the words → recognize → recall → use.
 * Then one mixed final round over all lesson words without the intro cards,
 * and, when the module has a text for the lesson: reading → questions + listening → translations.
 */
export function buildLessonRun(module: Module, lesson: number, seed = Date.now(), now = Date.now()): Run {
  const words = lessonWords(module, lesson); const pool = poolFor(words); const random = rng(seed);
  const rounds: Step[][] = [];
  for (const block of chunk(words, BLOCK_SIZE)) {
    rounds.push(block.map(w => ({ id: `${w.id}:intro`, kind: 'intro', wordId: w.id })));
    for (const tier of ['recognize', 'recall', 'use'] as Tier[]) rounds.push(shuffle(block, random).map(w => exerciseForTier(w, tier, pool, random)));
  }
  const used = new Map<string, ExerciseType[]>();
  for (const step of rounds.flat()) if (isWordExercise(step)) used.set(step.wordId, [...(used.get(step.wordId) || []), step.type]);
  rounds.push(shuffle(words, random).map(w => exerciseForTier(w, random() < .5 ? 'recall' : 'use', pool, random, used.get(w.id))));
  const reading = readingFor(module, lesson);
  if (reading) {
    const exercises = readingExercises(reading, (module.readings || []).filter(r => r !== reading), random, `${module.id}:${lesson}`);
    rounds.push([{ id: `${module.id}:${lesson}:reading`, kind: 'reading', moduleId: module.id, lesson }]);
    // Questions about the text, then 1–2 sentences of it by ear, then translations.
    rounds.push(exercises.filter(e => e.type === 'comprehension' || e.type === 'listen-text'));
    rounds.push(exercises.filter(e => e.type.startsWith('translate-')));
  }
  return emptyRun('lesson', `${module.title} · урок ${lesson + 1}`, seed, now, rounds, { moduleId: module.id, lesson });
}

/** Review: one exercise per due word, one tier above its stage. */
export const tierForStage = (stage: Stage): Tier => stage <= 1 ? 'recall' : 'use';
export function buildReviewRun(items: { wordId: string; stage: Stage }[], seed = Date.now(), now = Date.now()): Run {
  const words = items.map(i => getWord(i.wordId)).filter((w): w is Word => !!w);
  const pool = poolFor(words); const random = rng(seed);
  const steps = shuffle(items.filter(i => getWord(i.wordId)), random).map(i => exerciseForTier(getWord(i.wordId)!, tierForStage(i.stage), pool, random));
  return emptyRun('review', 'Повторение', seed, now, [steps]);
}

/** Module test: every word once, alternating recall / use; no second chances. */
export function buildTestRun(module: Module, seed = Date.now(), now = Date.now()): Run {
  const pool = poolFor(module.words); const random = rng(seed);
  const steps = shuffle(module.words, random).map((w, i) => exerciseForTier(w, i % 2 ? 'use' : 'recall', pool, random));
  return emptyRun('test', `${module.title} · тест`, seed, now, [steps], { moduleId: module.id });
}

export const currentStep = (run: Run): Step | undefined => run.finished ? undefined : run.rounds[run.round]?.[run.index];

/** Records an answer. In lessons and reviews a mistake adds a fresh exercise of the same tier to the end of the round. */
export function answerStep(run: Run, correct: boolean): Run {
  const step = currentStep(run);
  if (!step || step.kind === 'intro' || step.kind === 'reading') return run;
  if (!isWordExercise(step)) {
    const text = run.text || { right: 0, wrong: 0 };
    return { ...run, answered: run.answered + 1, text: { right: text.right + (correct ? 1 : 0), wrong: text.wrong + (correct ? 0 : 1) } };
  }
  const prev = run.results[step.wordId] || { right: 0, wrong: 0 };
  const results = { ...run.results, [step.wordId]: { right: prev.right + (correct ? 1 : 0), wrong: prev.wrong + (correct ? 0 : 1), firstCorrect: prev.firstCorrect ?? correct } };
  const next: Run = { ...run, results, answered: run.answered + 1 };
  if (correct || run.mode === 'test') return next;
  const key = `${run.round}:${step.wordId}`;
  if ((run.requeued[key] || 0) >= MAX_REQUEUE) return next;
  const word = getWord(step.wordId)!;
  const retry = exerciseForTier(word, step.tier, poolFor([word]), rng(run.seed + run.answered + 1), [step.type]);
  const rounds = run.rounds.map((r, i) => i === run.round ? [...r, retry] : r);
  return { ...next, rounds, requeued: { ...run.requeued, [key]: (run.requeued[key] || 0) + 1 } };
}

export function advance(run: Run): Run {
  if (run.finished) return run;
  if (run.index + 1 < run.rounds[run.round].length) return { ...run, index: run.index + 1 };
  if (run.round + 1 < run.rounds.length) return { ...run, round: run.round + 1, index: 0 };
  return { ...run, finished: true };
}

export function runProgress(run: Run) {
  const total = run.rounds.reduce((n, r) => n + r.length, 0);
  const done = run.finished ? total : run.rounds.slice(0, run.round).reduce((n, r) => n + r.length, 0) + run.index;
  return { done, total };
}
/** Share of words answered right on the first try (test score). */
export function firstTryScore(run: Run) {
  const values = Object.values(run.results);
  return values.length ? values.filter(r => r.firstCorrect).length / values.length : 0;
}
