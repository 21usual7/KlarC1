'use client';

import { useEffect, useState, type CSSProperties, type FormEvent } from 'react';
import { BookOpen, GraduationCap, Leaf, Lock, Medal, Settings2, Sparkles, Trash2 } from 'lucide-react';
import type { PublicUser } from '@/lib/auth';
import type { Progress } from '@/lib/learning';
import { useI18n } from '@/i18n/client';
import { serverText } from '@/i18n/runtime';

type Props = {
  user: PublicUser;
  progress: Progress;
  onEditPlan: () => void;
  onUserChange: (user: PublicUser) => void;
  onDeleted: () => void;
  onScoreboard: () => void;
};

export default function ProfileScreen({ user, progress, onEditPlan, onUserChange, onDeleted, onScoreboard }: Props) {
  const [name, setName] = useState(user.name);
  const { t } = useI18n(); const p = t.profile;
  const [ranked, setRanked] = useState<boolean | null>(null);
  const [loadAttempt, setLoadAttempt] = useState(0);
  const [error, setError] = useState('');
  const [status, setStatus] = useState('');
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch('/api/profile', { signal: controller.signal })
      .then(async response => {
        const result = await response.json();
        if (!response.ok) throw new Error(serverText(result.error, p.loadFailed));
        setRanked(result.ranked);
      })
      .catch(reason => { if (!controller.signal.aborted) setError(reason.message || p.loadFailed); });
    return () => controller.abort();
  }, [loadAttempt]);

  useEffect(() => { setName(user.name); }, [user.name]);

  async function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy || ranked === null) return;
    setBusy(true);
    setError('');
    setStatus('');
    try {
      const response = await fetch('/api/profile', {
        method: 'PATCH', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, ranked }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(serverText(result.error, p.saveFailed));
      setName(result.user.name);
      onUserChange(result.user);
      setStatus(p.saved);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : t.common.noConnection);
    } finally {
      setBusy(false);
    }
  }

  const modules = Object.values(progress.modules);
  const lessons = modules.reduce((count, module) => count + module.lessons.length, 0);
  const tests = modules.filter(module => module.test?.passed).length;
  const words = Object.keys(progress.words).length;
  const achievements = [
    { ...p.badges.first, icon: Leaf, earned: lessons >= 1 },
    { ...p.badges.rhythm, icon: BookOpen, earned: lessons >= 5 },
    { ...p.badges.words25, icon: Sparkles, earned: words >= 25 },
    { ...p.badges.words50, icon: BookOpen, earned: words >= 50 },
    { ...p.badges.test1, icon: GraduationCap, earned: tests >= 1 },
    { ...p.badges.test3, icon: Medal, earned: tests >= 3 },
  ];
  const plan = progress.profile;

  return <>
    <header className="account-hero">
      <span className="account-avatar" aria-hidden="true">{Array.from(user.name)[0]?.toUpperCase()}</span>
      <div><h1>{user.name}</h1><p>{user.email}</p></div>
      <button className="button secondary" onClick={onScoreboard}><Medal size={18} />{p.scoreboard}</button>
    </header>
    <section className="account-section" aria-labelledby="achievements-heading">
      <div className="account-section-heading">
        <h2 id="achievements-heading">{p.achievements}</h2><span className="pill">{p.earnedCount(achievements.filter(badge => badge.earned).length, achievements.length)}</span>
      </div>
      <ul className="achievement-grid">
        {achievements.map(({ title, detail, icon: Icon, earned }, index) => <li key={title} className={earned ? 'achievement earned' : 'achievement'} style={{ '--badge-delay': `${index * 65}ms` } as CSSProperties}>
          <span className="achievement-medal"><Icon size={25} strokeWidth={1.7} aria-hidden="true" /></span>
          <div><h3>{title}</h3><p>{detail}</p></div>
          <span className="achievement-state">{earned ? p.earned : <><Lock size={14} aria-hidden="true" />{p.locked}</>}</span>
        </li>)}
      </ul>
    </section>
    <div className="account-settings">
      <section className="account-panel" aria-labelledby="account-settings">
        <h2 id="account-settings">{p.settings}</h2>
        <form className="account-form" onSubmit={save}>
          <label>{p.accountName}<input autoComplete="nickname" required maxLength={60} value={name} onChange={event => { setName(event.target.value); setStatus(''); }} disabled={busy || ranked === null} /></label>
          <label className="checkbox-label"><input type="checkbox" checked={ranked ?? false} onChange={event => { setRanked(event.target.checked); setStatus(''); }} disabled={busy || ranked === null} /><span>{p.ranked}</span></label>
          {ranked === null && !error && <p className="muted" role="status">{p.loadingSettings}</p>}
          {error && <p className="notice" role="alert">{error}</p>}
          {status && <p role="status">{status}</p>}
          {ranked === null && error
            ? <button type="button" className="button secondary" onClick={() => { setError(''); setLoadAttempt(value => value + 1); }}>{t.common.retryLoad}</button>
            : <button className="button primary" disabled={busy || ranked === null}>{busy ? p.saving : p.save}</button>}
        </form>
      </section>
      <section className="account-panel" aria-labelledby="study-settings">
        <h2 id="study-settings">{p.plan}</h2>
        {plan ? <dl className="account-plan">
          <dt>{p.planName}</dt><dd>{plan.name || user.name}</dd>
          <dt>{p.level}</dt><dd>{plan.level}</dd>
          <dt>{p.track}</dt><dd>{t.tracks[plan.track] ?? plan.track}</dd>
          <dt>{p.exam}</dt><dd>{plan.exam}</dd>
          <dt>{p.examDate}</dt><dd>{plan.date ? plan.date.split('-').reverse().join('.') : p.noDate}</dd>
        </dl> : <p className="muted">{p.noPlan}</p>}
        <button type="button" className="button secondary" onClick={onEditPlan}><Settings2 size={18} />{plan ? p.editPlan : p.setupPlan}</button>
      </section>
    </div>
    <AccountDeletion onDeleted={onDeleted} />
  </>;
}

function AccountDeletion({ onDeleted }: { onDeleted: () => void }) {
  const [step, setStep] = useState(0);
  const { t } = useI18n(); const p = t.profile;
  const [acknowledged, setAcknowledged] = useState(false);
  const [confirmation, setConfirmation] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  function cancel() {
    setStep(0);
    setAcknowledged(false);
    setConfirmation('');
    setError('');
  }

  async function remove(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy || !acknowledged || confirmation !== p.confirmWord) return;
    const form = event.currentTarget;
    const password = new FormData(form).get('password');
    setBusy(true);
    setError('');
    try {
      const response = await fetch('/api/profile', {
        method: 'DELETE', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ acknowledged, confirmation, password }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(serverText(result.error, p.deleteFailed));
      form.reset();
      onDeleted();
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : t.common.noConnection);
      setBusy(false);
    }
  }

  return <section className="account-panel account-danger" aria-labelledby="delete-account">
    <h2 id="delete-account">{p.deleteTitle}</h2>
    <p>{p.deleteText}</p>
    {step === 0 && <button type="button" className="button danger-outline" onClick={() => setStep(1)}><Trash2 size={18} />{p.deleteButton}</button>}
    {step === 1 && <form className="account-form" onSubmit={event => { event.preventDefault(); if (acknowledged) setStep(2); }}>
      <label className="checkbox-label"><input type="checkbox" required checked={acknowledged} onChange={event => setAcknowledged(event.target.checked)} /><span>{p.deleteAck}</span></label>
      <div className="account-actions"><button className="button danger-outline" disabled={!acknowledged}>{p.deleteContinue}</button><button type="button" className="button secondary" onClick={cancel}>{t.common.cancel}</button></div>
    </form>}
    {step === 2 && <form className="account-form" onSubmit={remove}>
      <label>{p.deleteWord(p.confirmWord)}<input value={confirmation} onChange={event => setConfirmation(event.target.value)} autoComplete="off" maxLength={7} required disabled={busy} /></label>
      <label>{p.currentPassword}<input type="password" name="password" autoComplete="current-password" maxLength={128} required disabled={busy} /></label>
      {error && <p className="notice" role="alert">{error}</p>}
      <div className="account-actions"><button className="button danger-fill" disabled={busy || confirmation !== p.confirmWord}>{busy ? p.deleting : p.deleteForever}</button><button type="button" className="button secondary" disabled={busy} onClick={cancel}>{t.common.cancel}</button></div>
    </form>}
  </section>;
}
