'use client';

import { useEffect, useState, type CSSProperties, type FormEvent } from 'react';
import { BookOpen, GraduationCap, Leaf, Lock, Medal, Settings2, Sparkles, Trash2 } from 'lucide-react';
import type { PublicUser } from '@/lib/auth';
import type { Progress } from '@/lib/learning';

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
        if (!response.ok) throw new Error(result.error || 'Не удалось загрузить профиль.');
        setRanked(result.ranked);
      })
      .catch(reason => { if (!controller.signal.aborted) setError(reason.message || 'Не удалось загрузить профиль.'); });
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
      if (!response.ok) throw new Error(result.error || 'Не удалось сохранить профиль.');
      setName(result.user.name);
      onUserChange(result.user);
      setStatus('Профиль сохранён.');
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Нет соединения с сервером.');
    } finally {
      setBusy(false);
    }
  }

  const modules = Object.values(progress.modules);
  const lessons = modules.reduce((count, module) => count + module.lessons.length, 0);
  const tests = modules.filter(module => module.test?.passed).length;
  const words = Object.keys(progress.words).length;
  const achievements = [
    { title: 'Первый шаг', detail: 'Завершить первый урок', icon: Leaf, earned: lessons >= 1 },
    { title: 'В ритме', detail: 'Завершить пять уроков', icon: BookOpen, earned: lessons >= 5 },
    { title: 'Wortschatz', detail: 'Добавить 25 слов в словарь', icon: Sparkles, earned: words >= 25 },
    { title: 'Словарный запас', detail: 'Добавить 50 слов в словарь', icon: BookOpen, earned: words >= 50 },
    { title: 'Модуль сдан', detail: 'Сдать первый тест модуля', icon: GraduationCap, earned: tests >= 1 },
    { title: 'Тройной зачёт', detail: 'Сдать тесты трёх модулей', icon: Medal, earned: tests >= 3 },
  ];
  const plan = progress.profile;

  return <>
    <header className="account-hero">
      <span className="account-avatar" aria-hidden="true">{Array.from(user.name)[0]?.toUpperCase()}</span>
      <div><h1>{user.name}</h1><p>{user.email}</p></div>
      <button className="button secondary" onClick={onScoreboard}><Medal size={18} />Рейтинг</button>
    </header>
    <section className="account-section" aria-labelledby="achievements-heading">
      <div className="account-section-heading">
        <h2 id="achievements-heading">Достижения</h2><span className="pill">{achievements.filter(badge => badge.earned).length} из {achievements.length} получено</span>
      </div>
      <ul className="achievement-grid">
        {achievements.map(({ title, detail, icon: Icon, earned }, index) => <li key={title} className={earned ? 'achievement earned' : 'achievement'} style={{ '--badge-delay': `${index * 65}ms` } as CSSProperties}>
          <span className="achievement-medal"><Icon size={25} strokeWidth={1.7} aria-hidden="true" /></span>
          <div><h3>{title}</h3><p>{detail}</p></div>
          <span className="achievement-state">{earned ? 'Получено' : <><Lock size={14} aria-hidden="true" />Закрыто</>}</span>
        </li>)}
      </ul>
    </section>
    <div className="account-settings">
      <section className="account-panel" aria-labelledby="account-settings">
        <h2 id="account-settings">Настройки профиля</h2>
        <form className="account-form" onSubmit={save}>
          <label>Имя в аккаунте<input autoComplete="nickname" required maxLength={60} value={name} onChange={event => { setName(event.target.value); setStatus(''); }} disabled={busy || ranked === null} /></label>
          <label className="checkbox-label"><input type="checkbox" checked={ranked ?? false} onChange={event => { setRanked(event.target.checked); setStatus(''); }} disabled={busy || ranked === null} /><span>Показывать моё имя и очки в рейтинге</span></label>
          {ranked === null && !error && <p className="muted" role="status">Загружаем настройки…</p>}
          {error && <p className="notice" role="alert">{error}</p>}
          {status && <p role="status">{status}</p>}
          {ranked === null && error
            ? <button type="button" className="button secondary" onClick={() => { setError(''); setLoadAttempt(value => value + 1); }}>Повторить загрузку</button>
            : <button className="button primary" disabled={busy || ranked === null}>{busy ? 'Сохраняем…' : 'Сохранить профиль'}</button>}
        </form>
      </section>
      <section className="account-panel" aria-labelledby="study-settings">
        <h2 id="study-settings">Учебный план</h2>
        {plan ? <dl className="account-plan">
          <dt>Имя в учебном плане</dt><dd>{plan.name || user.name}</dd>
          <dt>Уровень</dt><dd>{plan.level}</dd>
          <dt>Учебный фокус</dt><dd>{plan.track}</dd>
          <dt>Экзамен</dt><dd>{plan.exam}</dd>
          <dt>Дата экзамена</dt><dd>{plan.date ? plan.date.split('-').reverse().join('.') : 'Не указана'}</dd>
        </dl> : <p className="muted">Укажи свой уровень, учебный фокус и цель.</p>}
        <button type="button" className="button secondary" onClick={onEditPlan}><Settings2 size={18} />{plan ? 'Изменить учебный план' : 'Настроить учебный план'}</button>
      </section>
    </div>
    <AccountDeletion onDeleted={onDeleted} />
  </>;
}

function AccountDeletion({ onDeleted }: { onDeleted: () => void }) {
  const [step, setStep] = useState(0);
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
    if (busy || !acknowledged || confirmation !== 'УДАЛИТЬ') return;
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
      if (!response.ok) throw new Error(result.error || 'Не удалось удалить аккаунт.');
      form.reset();
      onDeleted();
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Нет соединения с сервером.');
      setBusy(false);
    }
  }

  return <section className="account-panel account-danger" aria-labelledby="delete-account">
    <h2 id="delete-account">Удаление аккаунта</h2>
    <p>Аккаунт, учебный прогресс, задания, чат и место в рейтинге будут удалены без возможности восстановления.</p>
    {step === 0 && <button type="button" className="button danger-outline" onClick={() => setStep(1)}><Trash2 size={18} />Удалить аккаунт</button>}
    {step === 1 && <form className="account-form" onSubmit={event => { event.preventDefault(); if (acknowledged) setStep(2); }}>
      <label className="checkbox-label"><input type="checkbox" required checked={acknowledged} onChange={event => setAcknowledged(event.target.checked)} /><span>Я понимаю, что потеряю аккаунт и весь прогресс.</span></label>
      <div className="account-actions"><button className="button danger-outline" disabled={!acknowledged}>Продолжить удаление</button><button type="button" className="button secondary" onClick={cancel}>Отмена</button></div>
    </form>}
    {step === 2 && <form className="account-form" onSubmit={remove}>
      <label>Введи слово УДАЛИТЬ<input value={confirmation} onChange={event => setConfirmation(event.target.value)} autoComplete="off" maxLength={7} required disabled={busy} /></label>
      <label>Текущий пароль<input type="password" name="password" autoComplete="current-password" maxLength={128} required disabled={busy} /></label>
      {error && <p className="notice" role="alert">{error}</p>}
      <div className="account-actions"><button className="button danger-fill" disabled={busy || confirmation !== 'УДАЛИТЬ'}>{busy ? 'Удаляем…' : 'Удалить навсегда'}</button><button type="button" className="button secondary" disabled={busy} onClick={cancel}>Отмена</button></div>
    </form>}
  </section>;
}
