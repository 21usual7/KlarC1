import type { Metadata, Viewport } from 'next';
import ServiceWorkerRegister from '@/components/service-worker-register';
import './globals.css';
export const metadata: Metadata = {
  title: 'Klar C1 — Dein Weg nach Wien',
  description: 'Глубокое изучение немецкого: от A1 до академического C1. Готовься к жизни и учёбе в Вене.',
  applicationName: 'Klar C1',
  appleWebApp: { capable: true, title: 'Klar C1', statusBarStyle: 'default' },
  formatDetection: { telephone: false },
};
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f8f3' },
    { media: '(prefers-color-scheme: dark)', color: '#121410' },
  ],
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ru"><head><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" /><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap" /></head><body>{children}<ServiceWorkerRegister /></body></html>; }
