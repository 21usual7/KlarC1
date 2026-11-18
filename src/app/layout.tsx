import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Klar C1 — Dein Weg nach Wien', description: 'Глубокое изучение немецкого: от A1 до академического C1. Готовься к жизни и учёбе в Вене.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ru"><body>{children}</body></html>; }
