import { commonWords } from '../content/common-words.ts';
import { displayWord, modules, type Word } from '../content/index.ts';
import { contentVersion, trCommon, trWord } from '../content/translate.ts';

export type Gloss = { /** Translation in the interface language. */ tr: string; /** Dictionary form when the token is an inflected module word: `melde` → `sich anmelden`. */ lemma?: string };
export type Segment = { text: string; word: boolean };

/** A word: letters, optionally joined by hyphens (`E-Mail`, `Zwei-Faktor-Authentifizierung`). */
const WORD = /\p{L}+(?:-\p{L}+)*/gu;

/** Splits text into words and everything between them, so it can be rendered back unchanged. */
export function segments(text: string): Segment[] {
  const out: Segment[] = []; let last = 0;
  for (const m of text.matchAll(WORD)) {
    if (m.index! > last) out.push({ text: text.slice(last, m.index), word: false });
    out.push({ text: m[0], word: true }); last = m.index! + m[0].length;
  }
  if (last < text.length) out.push({ text: text.slice(last), word: false });
  return out;
}
export const words = (text: string) => segments(text).filter(s => s.word).map(s => s.text);

/** Tokens of verb forms that say nothing about the verb itself. */
const FORM_NOISE = new Set(['er', 'sie', 'es', 'hat', 'ist', 'sich', 'war', 'wurde']);

/** Every module word under its lemma, plural, example form and verb forms. */
function buildWordIndex() {
  const index = new Map<string, Gloss>();
  const add = (form: string, word: Word) => {
    const key = form.toLowerCase();
    if (!key || FORM_NOISE.has(key) || index.has(key)) return;
    index.set(key, { tr: trWord(word), lemma: displayWord(word) });
  };
  for (const module of modules) for (const word of module.words) {
    const lemma = words(word.de);
    if (lemma.length === 1) add(lemma[0], word);
    else for (const part of lemma) if (!commonWords[part.toLowerCase()]) add(part, word);
    if (word.plural) add(word.plural, word);
    const cloze = words(word.example.cloze);
    if (cloze.length === 1) add(cloze[0], word);
    // `an`, `zu`, `aus` in `er meldet sich an` are separable prefixes: elsewhere they are prepositions.
    if (word.forms) for (const f of words(word.forms)) if (!commonWords[f.toLowerCase()]) add(f, word);
  }
  return index;
}
/** Built lazily and rebuilt when the interface language of the course changes. */
let wordIndex: { version: number; index: Map<string, Gloss> } | undefined;

/**
 * Translation of one word form. Order: the text's own glossary (it knows the context),
 * then module words, then common words.
 */
export function glossFor(token: string, local: Record<string, string> = {}): Gloss | undefined {
  const key = token.toLowerCase();
  if (local[key]) return { tr: local[key] };
  if (wordIndex?.version !== contentVersion()) wordIndex = { version: contentVersion(), index: buildWordIndex() };
  const common = trCommon(key);
  return wordIndex.index.get(key) || (common ? { tr: common } : undefined);
}

/** Word forms of `text` that have no translation; tests keep this empty for readings. */
export const missingGlosses = (text: string, local: Record<string, string> = {}) =>
  [...new Set(words(text).filter(w => !glossFor(w, local)))];
