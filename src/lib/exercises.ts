import { displayWord, type Word } from '../content/index.ts';

/** recognize → recall → use: from seeing the word to producing it. */
export type Tier = 'recognize' | 'recall' | 'use';
export type ExerciseType =
  | 'listen' | 'meaning'
  | 'reverse' | 'article' | 'compound' | 'cloze-bank' | 'plural'
  | 'cloze-typed' | 'collocation' | 'dictation' | 'build-sentence';

type Base = { id: string; wordId: string; tier: Tier; type: ExerciseType; prompt: string; audio?: string; sentence?: string; hint?: string };
export type ChoiceExercise = Base & { kind: 'choice'; options: string[]; answer: string };
export type TypeExercise = Base & { kind: 'type'; answer: string; accept: string[]; loose?: boolean };
export type TilesExercise = Base & { kind: 'tiles'; tiles: string[]; answer: string[]; joiner: '' | ' ' };
export type IntroStep = { id: string; kind: 'intro'; wordId: string };
export type Exercise = ChoiceExercise | TypeExercise | TilesExercise;
export type Step = IntroStep | Exercise;

export const tierTypes: Record<Tier, ExerciseType[]> = {
  recognize: ['listen', 'meaning'],
  recall: ['reverse', 'article', 'compound', 'cloze-bank', 'plural'],
  use: ['cloze-typed', 'collocation', 'dictation', 'build-sentence'],
};
export const typeLabels: Record<ExerciseType, string> = {
  listen: 'Аудирование', meaning: 'Значение', reverse: 'Найди слово', article: 'Артикль', compound: 'Собери слово',
  'cloze-bank': 'Вставь слово', plural: 'Множественное число', 'cloze-typed': 'Впиши слово', collocation: 'Переведи',
  dictation: 'Диктант', 'build-sentence': 'Собери предложение',
};

export type Rng = () => number;
/** Small deterministic PRNG so lessons are reproducible in tests. */
export function rng(seed: number): Rng {
  let a = seed >>> 0;
  return () => { a = (a + 0x6d2b79f5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
export function shuffle<T>(items: T[], random: Rng): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) { const j = Math.floor(random() * (i + 1)); [copy[i], copy[j]] = [copy[j], copy[i]]; }
  return copy;
}
const pick = <T,>(items: T[], random: Rng) => items[Math.floor(random() * items.length)];

export const GAP = '_____';
const gapped = (word: Word) => word.example.de.replace(word.example.cloze, GAP);
const sentenceTokens = (word: Word) => word.example.de.split(/\s+/).filter(Boolean);
/** Digits and formulas are awkward to type or to hear from a speech engine. */
const plainSentence = (word: Word) => !/[0-9=²+()]/.test(word.example.de);

export function available(word: Word, type: ExerciseType): boolean {
  switch (type) {
    case 'article': return !!word.article && !word.pluralOnly;
    case 'compound': return !!word.parts && word.parts.length > 1;
    case 'plural': return !!word.plural && !word.pluralOnly;
    case 'collocation': return !!word.collocation;
    case 'dictation': return plainSentence(word) && sentenceTokens(word).length <= 9;
    case 'build-sentence': return plainSentence(word) && sentenceTokens(word).length >= 3 && sentenceTokens(word).length <= 9;
    default: return true;
  }
}

/** Up to `count` distinct values from other words, never equal to `exclude`. */
function distractors(pool: Word[], word: Word, value: (w: Word) => string, count: number, random: Rng) {
  const own = value(word).toLowerCase();
  const seen = new Set([own]); const out: string[] = [];
  for (const other of shuffle(pool.filter(w => w.id !== word.id), random)) {
    const v = value(other); if (!v || seen.has(v.toLowerCase())) continue;
    seen.add(v.toLowerCase()); out.push(v); if (out.length === count) break;
  }
  return out;
}
const choice = (base: Omit<ChoiceExercise, 'kind' | 'options'>, wrong: string[], random: Rng): ChoiceExercise =>
  ({ ...base, kind: 'choice', options: shuffle([base.answer, ...wrong], random) });

let counter = 0;
const nextId = (word: Word, type: ExerciseType) => `${word.id}:${type}:${++counter}`;

export function makeExercise(word: Word, type: ExerciseType, pool: Word[], random: Rng): Exercise {
  const id = nextId(word, type);
  const tier = (Object.keys(tierTypes) as Tier[]).find(t => tierTypes[t].includes(type))!;
  const base = { id, wordId: word.id, tier, type };
  switch (type) {
    case 'listen':
      return choice({ ...base, prompt: 'Послушай и выбери перевод', audio: word.de, answer: word.ru }, distractors(pool, word, w => w.ru, 3, random), random);
    case 'meaning':
      return choice({ ...base, prompt: displayWord(word), audio: word.de, hint: 'Что это значит?', answer: word.ru }, distractors(pool, word, w => w.ru, 3, random), random);
    case 'reverse':
      return choice({ ...base, prompt: word.ru, hint: 'Выбери немецкое слово', answer: displayWord(word) }, distractors(pool, word, displayWord, 3, random), random);
    case 'article':
      return choice({ ...base, prompt: `___ ${word.de}`, hint: word.ru, audio: undefined, answer: word.article! }, (['der', 'die', 'das'] as const).filter(a => a !== word.article), random);
    case 'cloze-bank':
      return choice({ ...base, prompt: 'Вставь пропущенное слово', sentence: gapped(word), hint: word.example.ru, answer: word.example.cloze }, distractors(pool, word, w => w.example.cloze, 3, random), random);
    case 'plural':
      return { ...base, kind: 'type', prompt: `Множественное число: ${displayWord(word)} → die …`, hint: word.ru, answer: word.plural!, accept: [`die ${word.plural}`] };
    case 'cloze-typed':
      return { ...base, kind: 'type', prompt: 'Впиши пропущенное слово', sentence: gapped(word), hint: `${word.example.ru}${word.example.cloze.toLowerCase() !== word.de.toLowerCase() ? ` · исходная форма: ${word.de}` : ''}`, answer: word.example.cloze, accept: [] };
    case 'collocation':
      return { ...base, kind: 'type', prompt: `Переведи: «${word.collocation!.ru}»`, hint: `Слово: ${displayWord(word)}`, answer: word.collocation!.de, accept: word.collocation!.accept || [] };
    case 'dictation':
      return { ...base, kind: 'type', prompt: 'Послушай и запиши предложение', audio: word.example.de, hint: word.example.ru, answer: word.example.de, accept: [], loose: true };
    case 'compound': {
      const parts = word.parts!;
      const extra = distractors(pool.filter(w => w.parts), word, w => pick(w.parts!.slice(1), random), 2, random).filter(p => !parts.includes(p));
      return { ...base, kind: 'tiles', prompt: `Собери слово: ${word.ru}`, tiles: shuffle([...parts, ...extra], random), answer: parts, joiner: '' };
    }
    case 'build-sentence':
      return { ...base, kind: 'tiles', prompt: 'Собери предложение', hint: word.example.ru, audio: word.example.de, tiles: shuffle(sentenceTokens(word), random), answer: sentenceTokens(word), joiner: ' ' };
  }
}

/** A random exercise of the tier, avoiding `avoid` types when there is an alternative. */
export function exerciseForTier(word: Word, tier: Tier, pool: Word[], random: Rng, avoid: ExerciseType[] = []): Exercise {
  const types = tierTypes[tier].filter(t => available(word, t));
  const fresh = types.filter(t => !avoid.includes(t));
  return makeExercise(word, pick(fresh.length ? fresh : types, random), pool, random);
}

// ---------- answer checking ----------
export type Check = { correct: boolean; note?: string };
const QUOTES = /[„“”"«»‚‘’']/g;
function normalize(text: string, loose: boolean, keepCase = false) {
  let t = text.normalize('NFC').replace(QUOTES, '').replace(/\s+/g, ' ').trim();
  if (!keepCase) t = t.toLowerCase();
  return loose ? t.replace(/[.,!?;:–—-]/g, ' ').replace(/\s+/g, ' ').trim() : t.replace(/[.!?]+$/, '').trim();
}
const transliterate = (t: string) => t.replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss');

/** Lenient about case, quotes, final punctuation and missing umlauts, but says so. */
export function checkTyped(exercise: TypeExercise, input: string): Check {
  const loose = !!exercise.loose;
  const all = [exercise.answer, ...exercise.accept];
  const given = normalize(input, loose);
  if (!given) return { correct: false };
  if (all.map(t => normalize(t, loose)).includes(given)) {
    const sameCase = all.map(t => normalize(t, loose, true)).includes(normalize(input, loose, true));
    return { correct: true, note: sameCase ? undefined : 'Засчитано, но проверь заглавные буквы: существительные пишутся с большой.' };
  }
  if (all.map(t => transliterate(normalize(t, loose))).includes(transliterate(given))) return { correct: true, note: 'Засчитано, но лучше писать умлауты: ä, ö, ü, ß.' };
  return { correct: false };
}
export const checkChoice = (exercise: ChoiceExercise, option: string): Check => ({ correct: option === exercise.answer });
export const checkTiles = (exercise: TilesExercise, order: string[]): Check => ({ correct: order.join(exercise.joiner) === exercise.answer.join(exercise.joiner) });
export const answerText = (exercise: Exercise) => exercise.kind === 'tiles' ? exercise.answer.join(exercise.joiner) : exercise.answer;
