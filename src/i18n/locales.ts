/** Interface languages: UI text and the translations of the German course content. */
export const locales = ['ru', 'en'] as const;
export type Locale = (typeof locales)[number];

/** Locale for visitors whose browser asks for none of ours. */
export const defaultLocale: Locale = 'en';
export const LOCALE_COOKIE = 'klar-locale';

/** Each language under its own name, for the language picker. */
export const localeNames: Record<Locale, string> = { ru: 'Русский', en: 'English' };
/** Name of the language in English, for AI prompts: "explain in Russian". */
export const localeEnglishNames: Record<Locale, string> = { ru: 'Russian', en: 'English' };
/** Formats for dates and numbers. */
export const intlLocale: Record<Locale, string> = { ru: 'ru-RU', en: 'en-GB' };
/** Right-to-left scripts (Arabic later). */
export const rtlLocales: readonly Locale[] = [];

export const isLocale = (value: unknown): value is Locale => typeof value === 'string' && (locales as readonly string[]).includes(value);

/** Browser languages that read Russian comfortably, until they get a locale of their own. */
const russianReaders = new Set(['ru', 'be', 'kk', 'ky']);

/**
 * The cookie wins (an explicit choice); otherwise the first supported language of `Accept-Language`
 * in the order of the header's q-values.
 */
export function pickLocale(cookie?: string | null, acceptLanguage?: string | null): Locale {
  if (isLocale(cookie)) return cookie;
  const wanted = (acceptLanguage || '').split(',')
    .map((part, index) => {
      const [tag, ...params] = part.trim().split(';');
      const q = params.map(p => p.trim()).find(p => p.startsWith('q='));
      return { tag: tag.toLowerCase().split('-')[0], q: q ? Number(q.slice(2)) || 0 : 1, index };
    })
    .filter(l => l.tag && l.q > 0)
    .sort((a, b) => b.q - a.q || a.index - b.index);
  for (const { tag } of wanted) {
    if (isLocale(tag)) return tag;
    if (russianReaders.has(tag)) return 'ru';
  }
  return defaultLocale;
}
