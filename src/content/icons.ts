import { a12Icons } from './icons-a12.ts';
import { a21Icons } from './icons-a21.ts';
import { a22Icons } from './icons-a22.ts';
import { generatedIcons } from './modules/icons.ts';

/**
 * Pictures for word cards. Every level registers the Lucide icons it uses in its own file
 * (named imports keep the client bundle small); a word refers to an icon by its name.
 */
export const wordIcons = { ...a12Icons, ...a21Icons, ...a22Icons, ...generatedIcons };
export type WordIcon = keyof typeof wordIcons;
