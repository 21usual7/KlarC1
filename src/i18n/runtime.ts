import { defaultLocale, intlLocale, type Locale } from './locales.ts';
import ru, { type Dict } from './dict/ru.ts';
import en from './dict/en.ts';

export const dicts: Record<Locale, Dict> = { ru, en };

/**
 * Locale of the running page, for code outside React (exercise builders, the cloud hook).
 * The client sets it once from `I18nProvider` before anything renders; a language switch reloads the page.
 * Server code never relies on it: it gets the locale of the request explicitly.
 */
let current: Locale = 'ru';
export const setRuntimeLocale = (locale: Locale) => { current = locale; };
export const runtimeLocale = () => current;
/** Interface text of the running page. */
export const dict = (): Dict => dicts[current];
export const dictFor = (locale: Locale): Dict => dicts[locale] ?? dicts[defaultLocale];
/** BCP 47 tag for `toLocaleString` and friends. */
export const intl = () => intlLocale[current];

/** Server messages are Russian; other locales translate them by exact text, unknown ones stay as they are. */
export const serverText = (message: unknown, fallback: string): string =>
  typeof message === 'string' && message ? dict().server[message] ?? message : fallback;
