'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Mail } from 'lucide-react';

export default function Verification({ token }: { token: string | null }) {
  const [verificationToken, setVerificationToken] = useState<string | null>(token);
  const [readingLink, setReadingLink] = useState(true);
  useEffect(() => {
    const hashToken = new URLSearchParams(window.location.hash.slice(1)).get('token');
    if (hashToken && hashToken.length <= 512) setVerificationToken(hashToken);
    setReadingLink(false);
  }, []);
  const [busy, setBusy] = useState(false);
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState('');
  async function verify() {
    if (!verificationToken || busy || verified) return;
    setBusy(true); setError('');
    try {
      const response = await fetch('/api/auth/verify-email', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ token: verificationToken }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Не удалось подтвердить email.');
      setVerified(true);
      // Remove the consumed token from the visible URL and browser history entry.
      window.history.replaceState(null, '', '/verify-email');
    } catch (reason) { setError(reason instanceof Error ? reason.message : 'Нет соединения с сервером. Попробуй ещё раз.'); }
    finally { setBusy(false); }
  }
  return <section aria-labelledby="verification-title">
    <span className="eyebrow">ТВОЙ АККАУНТ В KLAR</span>
    <h1 id="verification-title" style={{ fontSize: 32, lineHeight: 1.4, letterSpacing: '-1px', marginBottom: 22 }}>{verified ? 'Email подтверждён' : 'Подтверди свой email'}</h1>
    {readingLink ? <p role="status" style={{ fontSize: 17, color: 'var(--muted)' }}>Проверяем ссылку…</p> : verified ? <><div style={{ display: 'flex', gap: 13, alignItems: 'flex-start', margin: '24px 0' }}><CheckCircle2 size={27} color="#63844c" /><p role="status" style={{ fontSize: 17 }}>Всё готово. Теперь можно войти в Klar со своим email и паролем.</p></div><Link href="/login" className="button primary" style={{ textDecoration: 'none', marginTop: 8 }}>Перейти ко входу <ArrowRight size={20} /></Link></> : verificationToken ? <><div style={{ display: 'flex', gap: 13, alignItems: 'flex-start', margin: '24px 0' }}><Mail size={27} color="#63844c" /><p style={{ fontSize: 17, color: 'var(--muted)' }}>Нажми кнопку, чтобы подтвердить адрес, на который пришло письмо.</p></div><p style={{ fontSize: 15, color: 'var(--muted)', marginBottom: 26 }}>Открытие этой страницы само по себе не подтверждает email.</p>{error && <p className="notice" role="alert">{error}</p>}<button type="button" className="button primary" onClick={verify} disabled={busy} style={{ minHeight: 52, fontSize: 17 }}>{busy ? 'Подтверждаем…' : 'Подтвердить email'}{!busy && <ArrowRight size={20} />}</button>{error && <p style={{ marginTop: 23, fontSize: 16 }}>Ссылка устарела? <Link href="/login" className="small-link">Войди, чтобы запросить новое письмо.</Link></p>}</> : <><p style={{ fontSize: 17, color: 'var(--muted)', marginBottom: 25 }}>В ссылке нет кода подтверждения. Открой полную ссылку из письма или запроси новое письмо на странице входа.</p><Link href="/login" className="button secondary" style={{ textDecoration: 'none' }}>Перейти ко входу <ArrowRight size={20} /></Link></>}
  </section>;
}
