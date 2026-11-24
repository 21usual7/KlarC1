'use client';

import { useEffect, useState, type FormEvent } from 'react';
import Link from 'next/link';
import { useI18n } from '@/i18n/client';
import { serverText } from '@/i18n/runtime';

export default function PasswordRecovery({ reset = false }: { reset?: boolean }) {
  const { t: { recovery: r, common } } = useI18n();
  const [token, setToken] = useState<string | null | undefined>(undefined);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!reset) return;
    const code = new URLSearchParams(window.location.hash.slice(1)).get('token');
    setToken(code && /^[a-f0-9]{64}$/.test(code) ? code : null);
  }, [reset]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy || (reset && !token)) return;
    const form = event.currentTarget;
    const values = new FormData(form);
    const password = values.get('password');
    if (reset && password !== values.get('confirmation')) {
      setError(r.mismatch);
      return;
    }
    setBusy(true);
    setError('');
    try {
      const response = await fetch(`/api/auth/${reset ? 'reset-password' : 'forgot-password'}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reset ? { token, password } : { email: values.get('email') }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(serverText(result.error, r.retry));
      form.reset();
      if (reset) window.history.replaceState(null, '', '/reset-password');
      setToken(null);
      setMessage(reset ? r.changed : serverText(result.message, ''));
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : common.noConnection);
    } finally {
      setBusy(false);
    }
  }

  return <section className="recovery-screen">
    <h1>{reset ? r.newPassword : r.reset}</h1>
    {message ? <p className="notice" role="status">{message}</p> : reset && token === undefined
      ? <p role="status">{r.checking}</p>
      : reset && token === null
        ? <p className="notice" role="alert">{r.invalid}</p>
        : <form className="account-form" onSubmit={submit}>
          {reset ? <>
            <p className="muted">{r.rules}</p>
            <label>{r.newPassword}<input type="password" name="password" autoComplete="new-password" required minLength={12} maxLength={128} disabled={busy} /></label>
            <label>{r.repeat}<input type="password" name="confirmation" autoComplete="new-password" required minLength={12} maxLength={128} disabled={busy} /></label>
          </> : <label>Email<input type="email" name="email" autoComplete="email" required maxLength={254} disabled={busy} /></label>}
          {error && <p className="notice" role="alert">{error}</p>}
          <button className="button primary" disabled={busy}>{busy ? common.wait : reset ? r.save : r.send}</button>
        </form>}
    <div className="account-actions">
      <Link href="/login" className="small-link">{common.backToLogin}</Link>
      {reset && !message && <Link href="/forgot-password" className="small-link">{r.requestNew}</Link>}
    </div>
  </section>;
}
