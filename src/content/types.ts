export type Sphere = 'informatik' | 'cyber' | 'mathe';
export type ContentLevel = 'A1.2' | 'A2';
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

export type Module = {
  id: string;
  sphere: Sphere;
  level: ContentLevel;
  title: string;
  subtitle: string;
  words: Word[];
};

export const spheres: { id: Sphere; label: string; de: string }[] = [
  { id: 'informatik', label: 'Информатика', de: 'Informatik' },
  { id: 'cyber', label: 'Кибербезопасность', de: 'Cybersecurity' },
  { id: 'mathe', label: 'Математика', de: 'Mathematik' },
];
export const contentLevels: ContentLevel[] = ['A1.2', 'A2'];
/** Words per lesson; a lesson is split into blocks of BLOCK_SIZE. */
export const LESSON_SIZE = 8;
export const BLOCK_SIZE = 4;
