import { readingKey, type Module, type Reading, type Word } from './index.ts';
import { commonWords } from './common-words.ts';
import type { Locale } from '../i18n/locales.ts';

/*
 * The course is authored in German with Russian translations (`ru` fields). Every other interface language
 * is an overlay: `src/content/i18n/<locale>.json` holds the same translations keyed by word id, module id and
 * `moduleId:lesson`. Code reads translations only through the functions below; with no overlay (Russian)
 * or a missing entry they return the Russian source, so a half-translated course still works.
 */

export type WordTr = { tr: string; note?: string; collocation?: string; example: string };
export type TranslateTr = { tr: string; wrong: string[] };
export type ReadingTr = { text: string; gloss: Record<string, string>; questions: string[]; translate: TranslateTr[] };
export type ContentOverlay = {
  words: Record<string, WordTr>;
  modules: Record<string, { subtitle: string }>;
  readings: Record<string, ReadingTr>;
  /** `src/content/common-words.ts` in this language. */
  common: Record<string, string>;
};

/** Overlays are large: each loads only when its language is chosen. */
const overlays: Partial<Record<Locale, () => Promise<ContentOverlay>>> = {
  en: () => import('./i18n/en.json').then(m => m.default as ContentOverlay),
};
export const hasOverlay = (locale: Locale) => locale in overlays;
export const loadOverlay = (locale: Locale) => overlays[locale]?.() ?? Promise.resolve(null);

let overlay: ContentOverlay | null = null;
let version = 0;
/** Switches the language of course translations on this page (client only). */
export function setContentOverlay(next: ContentOverlay | null) { overlay = next; version++; }
/** Changes with every overlay switch, so caches built from translations know to rebuild. */
export const contentVersion = () => version;

const wordTr = (word: Word) => overlay?.words[word.id];
/** Translation of the word itself. */
export const trWord = (word: Word) => wordTr(word)?.tr || word.ru;
export const trExample = (word: Word) => wordTr(word)?.example || word.example.ru;
export const trCollocation = (word: Word) => word.collocation && (wordTr(word)?.collocation || word.collocation.ru);
/** A Russian note stays hidden once the word itself is translated: it would explain in the wrong language. */
export const trNote = (word: Word) => { const tr = wordTr(word); return tr ? tr.note : word.note; };
export const trSubtitle = (module: Module) => overlay?.modules[module.id]?.subtitle || module.subtitle;
export const trCommon = (key: string): string | undefined => (overlay ? overlay.common[key] : undefined) ?? commonWords[key];

/** Translation, glossary, question translations and translate items of a reading, in the page language. */
export function trReading(reading: Reading): ReadingTr {
  const key = readingKey(reading);
  const tr = key ? overlay?.readings[key] : undefined;
  return {
    text: tr?.text || reading.ru,
    gloss: tr?.gloss ?? reading.gloss,
    questions: reading.questions.map((q, i) => tr?.questions[i] || q.ru),
    translate: reading.translate.map((t, i) => tr?.translate[i] ?? { tr: t.ru, wrong: t.wrongRu }),
  };
}
