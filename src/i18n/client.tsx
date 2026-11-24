'use client';
import { createContext, useContext, type ReactNode } from 'react';
import { Languages } from 'lucide-react';
import { intlLocale, LOCALE_COOKIE, localeNames, locales, type Locale } from './locales';
import { dicts, setRuntimeLocale } from './runtime';
import type { Dict } from './dict/ru';

type I18n = {
  locale: Locale;
  t: Dict;
  /** BCP 47 tag for dates and numbers. */
  intl: string;
  setLocale: (locale: Locale) => void;
};
const Context = createContext<I18n | null>(null);

/** Remembers the choice for a year and reloads, so server-rendered parts and cached runs switch too. */
function chooseLocale(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;
  location.reload();
}

export function I18nProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  // Before any child renders: exercise builders and hooks outside React read the runtime locale.
  // Only in the browser: on the server one module instance serves every request.
  if (typeof window !== 'undefined') setRuntimeLocale(locale);
  return <Context.Provider value={{ locale, t: dicts[locale], intl: intlLocale[locale], setLocale: chooseLocale }}>{children}</Context.Provider>;
}

export function useI18n(): I18n {
  const value = useContext(Context);
  if (!value) throw new Error('useI18n needs <I18nProvider>');
  return value;
}

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, t, setLocale } = useI18n();
  return <label className={`language-switcher ${className || ''}`} title={t.language.label}>
    <Languages size={16} aria-hidden="true" />
    <span className="sr-only">{t.language.label}</span>
    <select value={locale} onChange={e => setLocale(e.target.value as Locale)}>
      {locales.map(l => <option key={l} value={l} lang={l}>{localeNames[l]}</option>)}
    </select>
  </label>;
}
