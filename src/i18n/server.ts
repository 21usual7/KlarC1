import { cookies, headers } from 'next/headers';
import { LOCALE_COOKIE, pickLocale, type Locale } from './locales.ts';
import { dictFor } from './runtime.ts';

/** Locale of the current request in Server Components: the cookie, else `Accept-Language`. */
export async function getLocale(): Promise<Locale> {
  const [cookieStore, headerList] = await Promise.all([cookies(), headers()]);
  return pickLocale(cookieStore.get(LOCALE_COOKIE)?.value, headerList.get('accept-language'));
}
export const getDict = async () => dictFor(await getLocale());

/** Locale of a Route Handler request, parsed from its own headers. */
export function localeFromRequest(request: Request): Locale {
  const cookie = request.headers.get('cookie')?.split(';').map(c => c.trim()).find(c => c.startsWith(`${LOCALE_COOKIE}=`));
  return pickLocale(cookie ? decodeURIComponent(cookie.slice(LOCALE_COOKIE.length + 1)) : undefined, request.headers.get('accept-language'));
}
