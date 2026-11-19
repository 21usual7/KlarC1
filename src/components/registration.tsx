'use client';

import { useEffect, useState, type FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CheckCircle2, Eye, EyeOff, LogOut, ArrowRight, Mail, RotateCcw } from 'lucide-react';
import type { PublicUser } from '@/lib/auth';

type Mode = 'register' | 'login';
type Delivery = 'sent' | 'not_configured' | 'failed';
type Props = { onClose?: () => void; initialMode?: Mode; standalone?: boolean };

export default function Registration({ onClose, initialMode = 'register', standalone = false }: Props) {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>(initialMode);
  const [user, setUser] = useState<PublicUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [pendingEmail, setPendingEmail] = useState('');
  const [delivery, setDelivery] = useState<Delivery | undefined>();
  const Heading = standalone ? 'h1' : 'h2';

  useEffect(() => {
    const controller = new AbortController();
    fetch('/api/auth/session', { cache: 'no-store', signal: controller.signal })
      .then(async response => {
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || 'Не удалось проверить аккаунт.');
        setUser(result.user);
      })
      .catch(reason => { if (!controller.signal.aborted) setError(reason instanceof Error ? reason.message : 'Не удалось проверить аккаунт.'); })
      .finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => controller.abort();
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    setError(''); setSuccess(''); setBusy(true);
    try {
      const response = await fetch(`/api/auth/${mode}`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      const result = await response.json();
      if (response.status === 403 && result.code === 'EMAIL_NOT_VERIFIED') {
        setPendingEmail(result.email || email.trim().toLowerCase()); setPassword(''); setDelivery(undefined); return;
      }
      if (!response.ok) throw new Error(result.error || 'Не удалось войти. Попробуйте ещё раз.');
      setPassword('');
      if (mode === 'register') {
        // Registration never implies authentication or verification: only a real
        // successful login (or GET session) may show the signed-in account state.
        if (result.verificationRequired !== true) throw new Error('Аккаунт создан, но подтверждение адреса ещё не завершено. Попробуйте войти после подтверждения email.');
        setPendingEmail(result.user?.email || email.trim().toLowerCase());
        setDelivery(result.emailDelivery); return;
      }
      if (!result.user) throw new Error('Не удалось подтвердить вход. Попробуйте ещё раз.');
      setUser(result.user); setSuccess('Ты вошёл в аккаунт.');
      router.refresh();
      window.dispatchEvent(new Event('klar-auth-changed'));
    } catch (reason) { setError(reason instanceof Error ? reason.message : 'Нет соединения с сервером. Попробуйте ещё раз.'); }
    finally { setBusy(false); }
  }

  async function resend() {
    setBusy(true); setError(''); setSuccess('');
    try {
      const response = await fetch('/api/auth/resend-verification', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: pendingEmail }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Не удалось запросить новое письмо.');
      setDelivery(result.emailDelivery);
      setSuccess(result.emailDelivery === 'sent' ? 'Новое письмо отправлено. Проверь почту и папку «Спам».' : result.emailDelivery === undefined ? result.message || 'Если аккаунт ожидает подтверждения, письмо будет отправлено.' : '');
    } catch (reason) { setError(reason instanceof Error ? reason.message : 'Нет соединения с сервером. Попробуйте ещё раз.'); }
    finally { setBusy(false); }
  }

  async function logout() {
    setBusy(true); setError('');
    try {
      const response = await fetch('/api/auth/logout', { method: 'POST' });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Не удалось выйти.');
      setUser(null); setSuccess('Ты вышел из аккаунта.'); setMode(standalone ? initialMode : 'login');
      router.refresh();
      window.dispatchEvent(new Event('klar-auth-changed'));
    } catch (reason) { setError(reason instanceof Error ? reason.message : 'Нет соединения с сервером.'); }
    finally { setBusy(false); }
  }

  const labelStyle = { display: 'grid', gap: 9, fontSize: 16 } as const;
  const inputStyle = { width: '100%', minHeight: 50, fontSize: 17 } as const;
  const switchText = mode === 'register' ? 'Войти' : 'Зарегистрироваться';

  return <div style={{ fontSize: 16 }}>
    <span className="eyebrow">ТВОЁ МЕСТО В KLAR</span>
    <Heading id="registration-title" style={{ fontSize: 32, letterSpacing: '-1px', lineHeight: 1.4, marginBottom: 15 }}>{user ? `Привет, ${user.name}.` : pendingEmail ? 'Подтверди свой email' : mode === 'register' ? 'Начнём с знакомства' : 'С возвращением'}</Heading>
    {loading ? <p role="status" style={{ margin: '25px 0' }}>Проверяем аккаунт…</p> : user ? <>
      <div style={{ padding: '22px 0', display: 'flex', alignItems: 'flex-start', gap: 13 }}><CheckCircle2 size={25} color="var(--green)" /><div><strong style={{ display: 'block', fontSize: 17 }}>Ты вошёл в Klar</strong><p style={{ color: 'var(--muted)', overflowWrap: 'anywhere', marginTop: 5 }}>{user.email}</p></div></div>
      {success && <p role="status" style={{ margin: '0 0 20px', color: 'var(--green)' }}>{success}</p>}
      <p style={{ color: 'var(--muted)', fontSize: 16, marginBottom: 26 }}>Можно возвращаться к занятиям. Твои учебные данные доступны в аккаунте.</p>
      <div style={{ display: 'flex', gap: 15, flexWrap: 'wrap' }}>{standalone || !onClose ? <Link href="/profile" className="button primary" style={{ textDecoration: 'none' }}>Открыть профиль <ArrowRight size={19} /></Link> : <button type="button" className="button primary" onClick={onClose}>Продолжить учиться <ArrowRight size={19} /></button>}<button type="button" disabled={busy} className="button secondary" onClick={logout}><LogOut size={18} />{busy ? 'Выходим…' : 'Выйти'}</button></div>
    </> : pendingEmail ? <>
      <div style={{ display: 'flex', gap: 13, margin: '25px 0', alignItems: 'flex-start' }}><Mail size={25} color="var(--green)" /><div><p style={{ fontSize: 17, fontWeight: 500, overflowWrap: 'anywhere' }}>{pendingEmail}</p><p style={{ color: 'var(--muted)', marginTop: 8 }}>Для входа нужен подтверждённый адрес. Открой ссылку в письме и нажми «Подтвердить email».</p></div></div>
      {delivery === 'sent' && !success && <p role="status" style={{ marginBottom: 23, color: 'var(--green)' }}>Письмо отправлено. Если его нет во входящих, проверь папку «Спам».</p>}
      {delivery === 'not_configured' && <p role="alert" className="notice">Аккаунт создан, но письмо не отправлено: отправка почты ещё не настроена. Email пока не подтверждён. Попробуй запросить письмо позже.</p>}
      {delivery === 'failed' && <p role="alert" className="notice">Не удалось отправить письмо. Email ещё не подтверждён. Попробуй ещё раз.</p>}
      {success && <p role="status" style={{ margin: '0 0 22px', color: 'var(--green)' }}>{success}</p>}
      {error && <p role="alert" className="notice">{error}</p>}
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 25 }}><button type="button" className="button secondary" onClick={resend} disabled={busy}><RotateCcw size={18} />{busy ? 'Отправляем…' : 'Отправить письмо ещё раз'}</button>{standalone && mode === 'register' ? <Link className="small-link" href="/login">Перейти ко входу <ArrowRight size={18} /></Link> : <button type="button" className="small-link" disabled={busy} onClick={() => { setPendingEmail(''); setMode('login'); setError(''); setSuccess(''); }}>Перейти ко входу <ArrowRight size={18} /></button>}</div>
      <button type="button" className="text-button" style={{ fontSize: 15, marginTop: 20 }} disabled={busy} onClick={() => { setPendingEmail(''); setDelivery(undefined); setError(''); setSuccess(''); }}>Изменить email</button>
    </> : <>
      <p style={{ color: 'var(--muted)', marginBottom: 25 }}>{mode === 'register' ? 'Создай аккаунт, чтобы сохранять свой путь и возвращаться к занятиям.' : 'Введи email и пароль, с которыми регистрировался.'}</p>
      {success && <p role="status" style={{ marginBottom: 20, color: 'var(--green)' }}>{success}</p>}
      <form onSubmit={submit} style={{ display: 'grid', gap: 21 }}>
        {mode === 'register' && <label style={labelStyle} htmlFor="registration-name">Как тебя зовут?<input id="registration-name" name="name" required autoComplete="given-name" maxLength={60} value={name} disabled={busy} onChange={event => setName(event.target.value)} placeholder="Твоё имя" style={inputStyle} /></label>}
        <label style={labelStyle} htmlFor="registration-email">Email<input id="registration-email" name="email" required type="email" autoComplete="email" maxLength={254} value={email} disabled={busy} onChange={event => setEmail(event.target.value)} placeholder="you@example.com" style={inputStyle} /></label>
        <label style={labelStyle} htmlFor="registration-password">Пароль<div style={{ display: 'flex', gap: 8, alignItems: 'center' }}><input id="registration-password" name="password" required type={showPassword ? 'text' : 'password'} autoComplete={mode === 'register' ? 'new-password' : 'current-password'} minLength={mode === 'register' ? 12 : 1} maxLength={128} value={password} disabled={busy} onChange={event => setPassword(event.target.value)} aria-describedby={mode === 'register' ? 'registration-password-hint' : undefined} style={{ ...inputStyle, minWidth: 0 }} /><button type="button" className="icon-button" aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'} aria-pressed={showPassword} onClick={() => setShowPassword(value => !value)}>{showPassword ? <EyeOff size={21} /> : <Eye size={21} />}</button></div>{mode === 'register' && <span id="registration-password-hint" style={{ fontSize: 14, color: 'var(--muted)', fontWeight: 400 }}>От 12 символов. Подойдёт длинная фраза, которую легко запомнить.</span>}</label>
        {error && <p role="alert" className="notice" style={{ margin: 0 }}>{error}</p>}
        <button type="submit" disabled={busy} className="button primary" style={{ minHeight: 52, fontSize: 17 }}>{busy ? 'Подождём немного…' : mode === 'register' ? 'Создать аккаунт' : 'Войти'}{!busy && <ArrowRight size={20} />}</button>
      </form>
      {mode === 'login' && <p style={{ marginTop: 18 }}><Link href="/forgot-password" className="small-link">Забыли пароль?</Link></p>}
      <p style={{ marginTop: 25, fontSize: 16 }}>{mode === 'register' ? 'Уже есть аккаунт? ' : 'Первый раз здесь? '}{standalone ? <Link href={mode === 'register' ? '/login' : '/register'} className="small-link" style={{ fontSize: 16 }}>{switchText}</Link> : <button type="button" disabled={busy} className="small-link" style={{ fontSize: 16 }} onClick={() => { setMode(mode === 'register' ? 'login' : 'register'); setError(''); setSuccess(''); setPassword(''); }}>{switchText}</button>}</p>
      {mode === 'register' && <p style={{ marginTop: 22, fontSize: 14, color: 'var(--muted)' }}>После регистрации нужно подтвердить email. Мы отправим письмо со ссылкой.</p>}
    </>}
    {user && error && <p role="alert" className="notice">{error}</p>}
  </div>;
}
