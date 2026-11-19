import { cyberA12, cyberA2 } from './cyber.ts';
import { informatikA12, informatikA2 } from './informatik.ts';
import { matheA12, matheA2 } from './mathe.ts';
import { cyberA22 } from './a22-cyber.ts';
import { informatikA22 } from './a22-informatik.ts';
import { matheA22 } from './a22-mathe.ts';
import { LESSON_SIZE, type ContentLevel, type Module, type Sphere, type Word } from './types.ts';
export { wordIcons, type WordIcon } from './icons.ts';

export * from './types.ts';

/** Order inside a sphere = learning order. */
export const modules: Module[] = [informatikA12, informatikA2, informatikA22, cyberA12, cyberA2, cyberA22, matheA12, matheA2, matheA22];

const wordIndex = new Map<string, { word: Word; module: Module }>();
for (const module of modules) for (const word of module.words) wordIndex.set(word.id, { word, module });

export const getModule = (id: string) => modules.find(m => m.id === id);
export const getWord = (id: string) => wordIndex.get(id)?.word;
export const moduleOfWord = (id: string) => wordIndex.get(id)?.module;
export const modulesFor = (sphere: Sphere, level?: ContentLevel) => modules.filter(m => m.sphere === sphere && (!level || m.level === level));
export const lessonCount = (module: Module) => Math.ceil(module.words.length / LESSON_SIZE);
export const readingFor = (module: Module, lesson: number) => module.readings?.find(r => r.lesson === lesson);
export const lessonWords = (module: Module, lesson: number) => module.words.slice(lesson * LESSON_SIZE, (lesson + 1) * LESSON_SIZE);
/** Text with article for display: `die Schwachstelle`, `die Daten (Pl.)`. */
export function displayWord(word: Word) {
  if (word.pluralOnly) return `die ${word.de} (Pl.)`;
  return word.article ? `${word.article} ${word.de}` : word.de;
}
