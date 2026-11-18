import Link from 'next/link';
import { ArrowLeft, Leaf } from 'lucide-react';
import type { ReactNode } from 'react';

export default function AuthPage({ children }: { children: ReactNode }) {
  return <div style={{ minHeight: '100dvh', padding: 'clamp(20px, 5vw, 48px) 20px 35px', background: 'var(--bg)' }}>
    <header style={{ maxWidth: 1040, margin: '0 auto 35px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
      <Link href="/" className="brand" style={{ fontSize: 28, padding: 0 }} aria-label="Klar C1 — на главную"><span className="brand-mark"><Leaf size={22} /></span>Klar<span className="brand-c1">C1</span></Link>
      <Link href="/" className="small-link" style={{ fontSize: 15 }}><ArrowLeft size={18} />К занятиям</Link>
    </header>
    <main style={{ maxWidth: 540, margin: '0 auto', padding: 'clamp(25px, 5vw, 40px)', background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 14 }}>
      {children}
    </main>
    <footer style={{ maxWidth: 540, margin: '25px auto 0', textAlign: 'center', color: 'var(--muted)', fontSize: 14, lineHeight: 1.8 }}>Шаг за шагом, от первого Hallo до первой лекции.</footer>
  </div>;
}
