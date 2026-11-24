import Link from 'next/link';
import { ArrowLeft, Leaf } from 'lucide-react';
import type { ReactNode } from 'react';
import { LanguageSwitcher } from '@/i18n/client';
import { getDict } from '@/i18n/server';

export default async function AuthPage({ children }: { children: ReactNode }) {
  const t = await getDict();
  return <div style={{ minHeight: '100dvh', padding: 'clamp(20px, 5vw, 48px) 20px 35px', background: 'var(--bg)' }}>
    <header style={{ maxWidth: 1040, margin: '0 auto 35px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
      <Link href="/" className="brand" style={{ fontSize: 28, padding: 0 }} aria-label={t.common.toHome}><span className="brand-mark"><Leaf size={22} /></span>Jargeo</Link>
      <span style={{ display: 'flex', alignItems: 'center', gap: 16 }}><LanguageSwitcher /><Link href="/" className="small-link" style={{ fontSize: 15 }}><ArrowLeft size={18} />{t.auth.home}</Link></span>
    </header>
    <main style={{ maxWidth: 540, margin: '0 auto', padding: 'clamp(25px, 5vw, 40px)', background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 14 }}>
      {children}
    </main>
    <footer style={{ maxWidth: 540, margin: '25px auto 0', textAlign: 'center', color: 'var(--muted)', fontSize: 14, lineHeight: 1.8 }}>{t.auth.footer}</footer>
  </div>;
}
