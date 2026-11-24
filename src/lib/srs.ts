import { createEmptyCard, fsrs, generatorParameters, Rating, type Card, type Grade } from 'ts-fsrs';

/**
 * FSRS with one learning step of a day: a lesson is intensive practice already,
 * so a new word comes back tomorrow (mistakes) or in ~2 days (no mistakes).
 * A word forgotten in review comes back after 10 minutes.
 */
const scheduler = fsrs(generatorParameters({ enable_fuzz: false, learning_steps: ['1d'], relearning_steps: ['10m'] }));

/** Word stages: what the learner can already do with the word. */
export type Stage = 1 | 2 | 3 | 4;

/** JSON-safe FSRS card: dates as epoch milliseconds. */
export type StoredCard = { due: number; stability: number; difficulty: number; scheduled_days: number; learning_steps: number; reps: number; lapses: number; state: number; last_review?: number };
export type WordProgress = { card: StoredCard; stage: Stage; right: number; wrong: number };

export { Rating };
export type { Grade };

const toStored = (card: Card): StoredCard => ({
  due: card.due.getTime(), stability: card.stability, difficulty: card.difficulty, scheduled_days: card.scheduled_days,
  learning_steps: card.learning_steps, reps: card.reps, lapses: card.lapses, state: card.state,
  ...(card.last_review ? { last_review: card.last_review.getTime() } : {}),
});
const fromStored = (card: StoredCard): Card => ({
  due: new Date(card.due), stability: card.stability, difficulty: card.difficulty, scheduled_days: card.scheduled_days,
  learning_steps: card.learning_steps, reps: card.reps, lapses: card.lapses, state: card.state,
  ...(card.last_review !== undefined ? { last_review: new Date(card.last_review) } : {}),
} as Card);

export function newCard(now: number): StoredCard { return toStored(createEmptyCard(new Date(now))); }
export function rate(card: StoredCard, grade: Grade, now: number): StoredCard { return toStored(scheduler.next(fromStored(card), new Date(now), grade).card); }

/** Grade after a lesson, by the number of mistakes on the word. */
export const lessonGrade = (mistakes: number): Grade => mistakes === 0 ? Rating.Good : mistakes === 1 ? Rating.Hard : Rating.Again;
export const clampStage = (n: number): Stage => Math.max(1, Math.min(4, Math.trunc(n))) as Stage;

const finite = (v: unknown) => typeof v === 'number' && Number.isFinite(v);
/** Validates a stored card from browser / cloud data; returns null when broken. */
export function readCard(value: unknown): StoredCard | null {
  if (!value || typeof value !== 'object') return null;
  const c = value as Record<string, unknown>;
  const keys = ['due', 'stability', 'difficulty', 'scheduled_days', 'learning_steps', 'reps', 'lapses', 'state'] as const;
  if (!keys.every(k => finite(c[k]))) return null;
  if (c.last_review !== undefined && !finite(c.last_review)) return null;
  const card = Object.fromEntries(keys.map(k => [k, c[k] as number])) as StoredCard;
  if (c.last_review !== undefined) card.last_review = c.last_review as number;
  return card;
}
