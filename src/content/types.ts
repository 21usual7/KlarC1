import type { WordIcon } from './icons.ts';

export type Sphere = 'informatik' | 'cyber' | 'mathe';
export type ContentLevel = 'A1.2' | 'A2.1' | 'A2.2';
export type Article = 'der' | 'die' | 'das';
export type PartOfSpeech = 'noun' | 'verb' | 'adj' | 'adv' | 'phrase';

export type Word = {
  /** Unique across all modules, e.g. `cyber-a2-schwachstelle`. */
  id: string;
  /** Lemma without article: `Schwachstelle`, `zugreifen`, `daraus folgt`. */
  de: string;
  pos: PartOfSpeech;
  article?: Article;
  /** Full plural form (`Schwachstellen`). Omitted when there is no usual plural. */
  plural?: string;
  /** Nouns that exist only in plural (`die Daten`): no article exercise. */
  pluralOnly?: boolean;
  ru: string;
  /** Picture of the word card: a Lucide icon registered in `src/content/icons*.ts`. */
  icon?: WordIcon;
  /** Compound parts, joined they give `de`: ['Schwach', 'stelle']. */
  parts?: string[];
  /** Verb forms: `er nutzt aus · hat ausgenutzt`. */
  forms?: string;
  /** Government / usage note: `zugreifen auf + Akk`. */
  note?: string;
  collocation?: { de: string; ru: string; accept?: string[] };
  /** `cloze` must be an exact substring of `de`; it is the gap in exercises. */
  example: { de: string; ru: string; cloze: string };
};

/** Comprehension question about a reading. Everything German, `ru` translates the question. */
export type ReadingQuestion = { q: string; ru: string; options: string[]; answer: string };
/**
 * A sentence to translate. Odd positions are translated RU → DE by arranging tiles,
 * even ones DE → RU by choosing; `wrongRu` are near-miss Russian variants for that choice.
 */
export type TranslateItem = { de: string; ru: string; wrongRu: string[] };

/** A short text that closes a lesson: read with hover translations, answer questions, translate sentences. */
export type Reading = {
  /** Index of the lesson inside the module (0 or 1). */
  lesson: number;
  title: string;
  /** German text. Paragraphs are separated by a blank line. */
  de: string;
  /** Full Russian translation, shown on demand. */
  ru: string;
  /**
   * Hover translations, key = lowercase word form as it appears in the text (`passwörter`, `meldet`).
   * Module words and common words (`src/content/common-words.ts`) are glossed automatically;
   * every other word of `de`, questions and translate sentences must be listed here (checked by tests).
   */
  gloss: Record<string, string>;
  questions: ReadingQuestion[];
  translate: TranslateItem[];
};

export type Module = {
  id: string;
  sphere: Sphere;
  level: ContentLevel;
  title: string;
  subtitle: string;
  words: Word[];
  /** One reading per lesson. */
  readings?: Reading[];
};

export const spheres: { id: Sphere; label: string; de: string }[] = [
  { id: 'informatik', label: 'Информатика', de: 'Informatik' },
  { id: 'cyber', label: 'Кибербезопасность', de: 'Cybersecurity' },
  { id: 'mathe', label: 'Математика', de: 'Mathematik' },
];
export const contentLevels: ContentLevel[] = ['A1.2', 'A2.1', 'A2.2'];
/** Words per lesson; a lesson is split into blocks of BLOCK_SIZE. */
export const LESSON_SIZE = 8;
export const BLOCK_SIZE = 4;
