'use client';

import { useEffect, useState, type FormEvent } from 'react';
import { CheckCircle2, Eye, EyeOff, LogOut, ArrowRight } from 'lucide-react';
import type { PublicUser } from '@/lib/auth';

type Props = { onClose?: () => void };

export default function Registration({ onClose }: Props) {
  const [mode, setMode] = useState<'register' | 'login'>('register');
  const [user, setUser] = useState<PublicUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

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
      if (!response.ok) throw new Error(result.error || 'Не удалось войти. Попробуйте ещё раз.');
      setUser(result.user); setPassword('');
      setSuccess(mode === 'register' ? 'Аккаунт создан. Ты уже вошёл.' : 'Ты вошёл в аккаунт.');
      window.dispatchEvent(new Event('klar-auth-changed'));
    } catch (reason) { setError(reason instanceof Error ? reason.message : 'Нет соединения с сервером. Попробуйте ещё раз.'); }
    finally { setBusy(false); }
  }

  async function logout() {
    setBusy(true); setError('');
    try {
      const response = await fetch('/api/auth/logout', { method: 'POST' });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Не удалось выйти.');
      setUser(null); setSuccess('Ты вышел из аккаунта.'); setMode('login');
      window.dispatchEvent(new Event('klar-auth-changed'));
    } catch (reason) { setError(reason instanceof Error ? reason.message : 'Нет соединения с сервером.'); }
    finally { setBusy(false); }
  }

  const labelStyle = { display: 'grid', gap: 9, fontSize: 16 } as const;
  const inputStyle = { width: '100%', minHeight: 50, fontSize: 17 } as const;

  return <div style={{ fontSize: 16 }}>
    <span className="eyebrow">ТВОЁ МЕСТО В KLAR</span>
    <h2 id="registration-title" style={{ fontSize: 30, lineHeight: 1.4, marginBottom: 15 }}>{user ? `Привет, ${user.name}.` : mode === 'register' ? 'Начнём с знакомства' : 'С возвращением'}</h2>
    {loading ? <p role="status" style={{ margin: '25px 0' }}>Проверяем аккаунт…</p> : user ? <>
      <div style={{ padding: '22px 0', display: 'flex', alignItems: 'flex-start', gap: 13 }}><CheckCircle2 size={25} color="#63844c" /><div><strong style={{ display: 'block', fontSize: 17 }}>Ты вошёл в Klar</strong><p style={{ color: 'var(--muted)', overflowWrap: 'anywhere', marginTop: 5 }}>{user.email}</p></div></div>
      {success && <p role="status" style={{ margin: '0 0 20px', color: '#4d713d' }}>{success}</p>}
      <p style={{ color: 'var(--muted)', fontSize: 15, marginBottom: 26 }}>Это локальный аккаунт на этом компьютере. Учебный прогресс пока хранится отдельно в твоём браузере.</p>
      <div style={{ display: 'flex', gap: 15, flexWrap: 'wrap' }}>{onClose && <button type="button" className="button primary" onClick={onClose}>Продолжить учиться <ArrowRight size={19} /></button>}<button type="button" disabled={busy} className="button secondary" onClick={logout}><LogOut size={18} />{busy ? 'Выходим…' : 'Выйти'}</button></div>
    </> : <>
      <p style={{ color: 'var(--muted)', marginBottom: 25 }}>{mode === 'register' ? 'Создай аккаунт с email и паролем.' : 'Введи email и пароль, с которыми регистрировался.'}</p>
      {success && <p role="status" style={{ marginBottom: 20, color: '#4d713d' }}>{success}</p>}
      <form onSubmit={submit} style={{ display: 'grid', gap: 21 }}>
        {mode === 'register' && <label style={labelStyle} htmlFor="registration-name">Как тебя зовут?<input id="registration-name" name="name" required autoComplete="given-name" maxLength={60} value={name} disabled={busy} onChange={event => setName(event.target.value)} placeholder="Твоё имя" style={inputStyle} /></label>}
        <label style={labelStyle} htmlFor="registration-email">Email<input id="registration-email" name="email" required type="email" autoComplete="email" maxLength={254} value={email} disabled={busy} onChange={event => setEmail(event.target.value)} placeholder="you@example.com" style={inputStyle} /></label>
        <label style={labelStyle} htmlFor="registration-password">Пароль<div style={{ display: 'flex', gap: 8, alignItems: 'center' }}><input id="registration-password" name="password" required type={showPassword ? 'text' : 'password'} autoComplete={mode === 'register' ? 'new-password' : 'current-password'} minLength={mode === 'register' ? 12 : 1} maxLength={128} value={password} disabled={busy} onChange={event => setPassword(event.target.value)} aria-describedby={mode === 'register' ? 'registration-password-hint' : undefined} style={{ ...inputStyle, minWidth: 0 }} /><button type="button" className="icon-button" aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'} aria-pressed={showPassword} onClick={() => setShowPassword(value => !value)}>{showPassword ? <EyeOff size={21} /> : <Eye size={21} />}</button></div>{mode === 'register' && <span id="registration-password-hint" style={{ fontSize: 14, color: 'var(--muted)', fontWeight: 400 }}>От 12 символов. Подойдёт длинная фраза, которую легко запомнить.</span>}</label>
        {error && <p role="alert" className="notice" style={{ margin: 0 }}>{error}</p>}
        <button type="submit" disabled={busy} className="button primary" style={{ minHeight: 52, fontSize: 17 }}>{busy ? 'Подождём немного…' : mode === 'register' ? 'Создать аккаунт' : 'Войти'}{!busy && <ArrowRight size={20} />}</button>
      </form>
      <p style={{ marginTop: 24, fontSize: 15 }}>{mode === 'register' ? 'Уже есть аккаунт? ' : 'Первый раз здесь? '}<button type="button" disabled={busy} className="small-link" style={{ fontSize: 16 }} onClick={() => { setMode(mode === 'register' ? 'login' : 'register'); setError(''); setSuccess(''); setPassword(''); }}>{mode === 'register' ? 'Войти' : 'Зарегистрироваться'}</button></p>
      <p style={{ marginTop: 24, fontSize: 14, color: 'var(--muted)' }}>Локальная версия: аккаунт хранится на этом компьютере. Прогресс в браузере пока не синхронизируется между устройствами.</p>
    </>}
    {user && error && <p role="alert" className="notice">{error}</p>}
  </div>;
}
