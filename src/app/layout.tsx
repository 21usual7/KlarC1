import type { Metadata, Viewport } from 'next';
import ServiceWorkerRegister from '@/components/service-worker-register';
import { I18nProvider } from '@/i18n/client';
import { rtlLocales } from '@/i18n/locales';
import { getDict, getLocale } from '@/i18n/server';
import './globals.css';
export async function generateMetadata(): Promise<Metadata> {
  const t = await getDict();
  return {
    title: t.meta.title,
    description: t.meta.description,
    applicationName: 'Jargeo',
    appleWebApp: { capable: true, title: 'Jargeo', statusBarStyle: 'default' },
    formatDetection: { telephone: false },
  };
}
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f8f3' },
    { media: '(prefers-color-scheme: dark)', color: '#121410' },
  ],
};
export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { const locale = await getLocale(); return <html lang={locale} dir={rtlLocales.includes(locale) ? 'rtl' : 'ltr'}><head><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" /><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap" /></head><body><I18nProvider locale={locale}>{children}</I18nProvider><ServiceWorkerRegister /></body></html>; }
