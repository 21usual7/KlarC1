import { displayWord, type Reading, type Word } from '../content/index.ts';

/** recognize → recall → use: from seeing the word to producing it. */
export type Tier = 'recognize' | 'recall' | 'use';
export type ExerciseType =
  | 'listen' | 'listen-sentence' | 'meaning'
  | 'reverse' | 'article' | 'compound' | 'cloze-bank' | 'plural'
  | 'cloze-typed' | 'collocation' | 'dictation' | 'build-sentence'
  | TextExerciseType;
/** Exercises about a lesson text, not about one word: they do not change word progress. */
export type TextExerciseType = 'comprehension' | 'listen-text' | 'translate-to-de' | 'translate-to-ru';
export type WordExerciseType = Exclude<ExerciseType, TextExerciseType>;

type Base = {
  id: string;
  /** Absent for text exercises. */
  wordId?: string;
  tier: Tier | 'text';
  type: ExerciseType;
  prompt: string;
  audio?: string;
  sentence?: string;
  hint?: string;
  /** German text of the task (question, sentence) rendered with hover translations. */
  de?: string;
  /** Translation of `de`, available on demand. */
  deRu?: string;
  /** Hover translations of the reading this exercise belongs to. */
  gloss?: Record<string, string>;
  /** Hover translations would give the answer away until the exercise is answered. */
  glossAfterAnswer?: boolean;
  /** Language of choice options / tiles. */
  optionsLang?: 'de' | 'ru';
  /** Options stay locked until `audio` was played at least once (listening exercises). */
  listenFirst?: boolean;
};
export type ChoiceExercise = Base & { kind: 'choice'; options: string[]; answer: string };
export type TypeExercise = Base & { kind: 'type'; answer: string; accept: string[]; loose?: boolean };
export type TilesExercise = Base & { kind: 'tiles'; tiles: string[]; answer: string[]; joiner: '' | ' ' };
export type IntroStep = { id: string; kind: 'intro'; wordId: string };
/** Read the lesson text before answering questions about it. */
export type ReadingStep = { id: string; kind: 'reading'; moduleId: string; lesson: number; wordId?: undefined };
export type Exercise = ChoiceExercise | TypeExercise | TilesExercise;
export type Step = IntroStep | ReadingStep | Exercise;
export type WordExercise = Exercise & { wordId: string; tier: Tier };
export const isWordExercise = (step: Step): step is WordExercise => step.kind !== 'intro' && step.kind !== 'reading' && !!step.wordId;

export const tierTypes: Record<Tier, WordExerciseType[]> = {
  recognize: ['listen', 'listen-sentence', 'meaning'],
  recall: ['reverse', 'article', 'compound', 'cloze-bank', 'plural'],
  use: ['cloze-typed', 'collocation', 'dictation', 'build-sentence'],
};
export const typeLabels: Record<ExerciseType, string> = {
  listen: 'Аудирование', 'listen-sentence': 'Аудирование: предложение', meaning: 'Значение', reverse: 'Найди слово', article: 'Артикль', compound: 'Собери слово',
  'cloze-bank': 'Вставь слово', plural: 'Множественное число', 'cloze-typed': 'Впиши слово', collocation: 'Переведи',
  dictation: 'Диктант', 'build-sentence': 'Собери предложение',
  comprehension: 'Понимание текста', 'listen-text': 'Аудирование: текст', 'translate-to-de': 'Переведи на немецкий', 'translate-to-ru': 'Переведи на русский',
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
    case 'listen-sentence': return plainSentence(word);
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
const choice = <B extends Omit<ChoiceExercise, 'kind' | 'options'>>(base: B, wrong: string[], random: Rng): B & ChoiceExercise =>
  ({ ...base, kind: 'choice', options: shuffle([base.answer, ...wrong], random) });

// ---------- listening: sentences that sound almost the same ----------
/** `sentence` with its first `from` replaced by `to`, capitalised at the sentence start. */
const swap = (sentence: string, from: string, to: string) => {
  const at = sentence.indexOf(from); if (at < 0) return sentence;
  return sentence.slice(0, at) + (at === 0 ? to[0].toUpperCase() + to.slice(1) : to) + sentence.slice(at + from.length);
};
/** Closer is better: same ending (verb person, adjective ending), similar length. */
const likeness = (a: string, b: string) => (a.slice(-2) === b.slice(-2) ? 0 : 4) + Math.abs(a.length - b.length) / 3;
/** Takes values in order, skipping blanks and anything already seen (case-insensitive). */
function collect(seen: Set<string>, count: number, ...groups: string[][]) {
  const out: string[] = [];
  for (const value of groups.flat()) {
    if (out.length === count) break;
    const key = value.trim().toLowerCase(); if (!key || seen.has(key)) continue;
    seen.add(key); out.push(value);
  }
  return out;
}

/**
 * Three sentences that sound like the example: the gap filled with another word, closest first
 * (same part of speech and gender, same ending, similar length); other examples only as a last resort.
 * Every option is a real sentence of the course or differs only in the gap word: no invented grammar mistakes.
 */
export function sentenceLookalikes(word: Word, pool: Word[], random: Rng): string[] {
  const { de, cloze } = word.example;
  const others = shuffle(pool.filter(w => w.id !== word.id && w.example.cloze && w.example.cloze !== cloze), random);
  const byLikeness = (list: Word[]) => [...list].sort((a, b) => likeness(cloze, a.example.cloze) - likeness(cloze, b.example.cloze));
  // A noun is swapped only for a noun of the same gender in the same (dictionary) form, so `eine Schwachstelle`
  // never turns into `eine Administrator`; verbs and adjectives keep their ending (`ich melde` → `ich ändere`, not `ich greift`).
  const lemma = (w: Word) => w.example.cloze === w.de;
  const sameEnding = (w: Word) => w.example.cloze.slice(-2).toLowerCase() === cloze.slice(-2).toLowerCase();
  // `nutzt … aus` must not become `schützt … aus`: separable verbs are never swapped.
  const separable = (w: Word) => !!w.forms && w.forms.split('·')[0].trim().split(/\s+/).filter(t => t !== 'er' && t !== 'sich').length > 1;
  const fits = (w: Word) => w.pos === word.pos && !separable(w) && !separable(word) && (word.pos === 'noun'
    ? lemma(word) && lemma(w) && w.article === word.article && !w.pluralOnly && !word.pluralOnly
    : sameEnding(w) && !/\s/.test(w.example.cloze) === !/\s/.test(cloze));
  const swaps = byLikeness(others.filter(fits)).map(w => swap(de, cloze, w.example.cloze));
  const examples = others.filter(plainSentence).map(w => w.example.de);
  return collect(new Set([de.trim().toLowerCase()]), 3, swaps, examples);
}

let counter = 0;
const nextId = (word: Word, type: ExerciseType) => `${word.id}:${type}:${++counter}`;

export function makeExercise(word: Word, type: WordExerciseType, pool: Word[], random: Rng): WordExercise {
  const id = nextId(word, type);
  const tier = (Object.keys(tierTypes) as Tier[]).find(t => tierTypes[t].includes(type));
  if (!tier) throw new Error(`${type} is not a word exercise`);
  const base = { id, wordId: word.id, tier, type };
  switch (type) {
    case 'listen':
      return choice({ ...base, prompt: 'Послушай и выбери перевод', audio: word.de, answer: word.ru }, distractors(pool, word, w => w.ru, 3, random), random);
    case 'listen-sentence':
      return choice({ ...base, prompt: 'Послушай и выбери предложение, которое прозвучало', audio: word.example.de, answer: word.example.de, optionsLang: 'de', listenFirst: true }, sentenceLookalikes(word, pool, random), random);
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

// ---------- text exercises ----------
/** Sentence split for tiles: words keep their punctuation (`Passwort.`). */
/** Sentences of a text (paragraphs joined), split after . ! ? before a capital or a quote. */
export const splitSentences = (text: string) =>
  text.replace(/\s+/g, ' ').trim().split(/(?<=[.!?…][“"»]?)\s+(?=[„"»«A-ZÄÖÜ0-9])/).filter(Boolean);
export const sentenceTiles = (sentence: string) => sentence.split(/\s+/).filter(Boolean);
const bare = (tile: string) => tile.replace(/[.,!?;:„“"»«]/g, '').toLowerCase();

/**
 * Questions and translations for one reading. `others` are the module's other readings:
 * their sentences give extra tiles and options.
 */
export function readingExercises(reading: Reading, others: Reading[], random: Rng, key: string): Exercise[] {
  const id = (type: TextExerciseType, i: number) => `${key}:${type}:${i}`;
  const base = { tier: 'text' as const, gloss: reading.gloss };
  const questions: Exercise[] = reading.questions.map((q, i) => choice({
    ...base, id: id('comprehension', i), type: 'comprehension', prompt: 'Ответь на вопрос по тексту', de: q.q, deRu: q.ru, answer: q.answer, optionsLang: 'de',
  }, q.options.filter(o => o !== q.answer), random));
  const items = [...reading.translate, ...others.flatMap(r => r.translate)];
  const translations: Exercise[] = reading.translate.map((t, i) => {
    if (i % 2 === 0) {
      const answer = sentenceTiles(t.de); const own = new Set(answer.map(bare));
      const extra = shuffle(items.filter(o => o !== t).flatMap(o => sentenceTiles(o.de)), random)
        .filter(tile => { const b = bare(tile); if (!b || own.has(b)) return false; own.add(b); return true; }).slice(0, 2);
      return { ...base, id: id('translate-to-de', i), type: 'translate-to-de', kind: 'tiles', prompt: t.ru, hint: 'Собери предложение по-немецки; лишние слова не нужны', audio: t.de, tiles: shuffle([...answer, ...extra], random), answer, joiner: ' ', optionsLang: 'de' } satisfies TilesExercise;
    }
    const near = t.wrongRu.filter(w => w !== t.ru);
    const filler = shuffle(items.filter(o => o !== t && !near.includes(o.ru) && o.ru !== t.ru).map(o => o.ru), random);
    return choice({ ...base, id: id('translate-to-ru', i), type: 'translate-to-ru', prompt: 'Выбери точный перевод', de: t.de, audio: t.de, answer: t.ru, glossAfterAnswer: true, optionsLang: 'ru' }, [...near, ...filler].slice(0, 3), random);
  });
  return [...questions, ...textListening(reading, others, random, key), ...translations];
}

/** Sentences of the reading worth listening to: no digits or formulas, not too short or long. */
const listenable = (reading: Reading) => [...new Set(splitSentences(reading.de))].filter(s => !/[0-9=²+()]/.test(s) && s.split(' ').length >= 4 && s.split(' ').length <= 16);

/**
 * Up to `count` listening tasks: one sentence of the text is spoken, the options are
 * that sentence, a near copy with one determiner changed and other sentences of similar length.
 */
export function textListening(reading: Reading, others: Reading[], random: Rng, key: string, count = 2): ChoiceExercise[] {
  const own = listenable(reading); const extra = others.flatMap(listenable);
  return shuffle(own, random).slice(0, count).map((sentence, i) => {
    const near = (list: string[]) => shuffle(list, random).sort((a, b) => Math.abs(a.length - sentence.length) - Math.abs(b.length - sentence.length));
    const seen = new Set([sentence.toLowerCase()]);
    const wrong = collect(seen, 3, near(own), near(extra));
    return choice({
      id: `${key}:listen-text:${i}`, tier: 'text' as const, type: 'listen-text' as const, prompt: 'Послушай предложение из текста и выбери, какое прозвучало',
      audio: sentence, answer: sentence, optionsLang: 'de' as const, listenFirst: true,
    }, wrong, random);
  });
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
