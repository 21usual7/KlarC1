'use client';
import { memo, useEffect, useRef, useState, type RefObject } from 'react';
import Link from 'next/link';
import { ArrowLeft, Leaf, MessageCircle, Plus, Send, Trash2 } from 'lucide-react';
import { CHAT_TTL_DAYS, tutorRoles, type ChatMessage } from '@/lib/cloud-state';
import { useCloudLearning } from '@/hooks/use-cloud-learning';
import { defaultStudyTrack } from '@/lib/study-focus';
import { TUTOR_DRAFT_KEY } from '@/lib/views';
import FeedbackText from '../feedback-text';
import VoicePractice from '../voice-practice';

const roleText: Record<string, string> = { Kommilitone: 'Учёба и жизнь в Вене', Professor: 'Консультация и вопросы', Beamter: 'Документы и регистрация', Mitbewohner: 'Быт и общая квартира' };

export default function Tutor() {
  const cloud = useCloudLearning();
  const profile = cloud.snapshot.progress.profile; const level = profile?.level || 'A1';
  // Every visit starts a new chat; it is saved only once the first message is sent.
  const [activeId, setActiveId] = useState<string | null>(null); const [newRole, setNewRole] = useState('Kommilitone');
  const [message, setMessage] = useState(''); const [busy, setBusy] = useState(false); const [tutorError, setTutorError] = useState('');
  const chatEnd = useRef<HTMLDivElement>(null);
  const active = cloud.snapshot.chats.find(c => c.id === activeId); const role = active?.role || newRole; const chat = active?.messages || [];
  useEffect(() => { try { const draft = sessionStorage.getItem(TUTOR_DRAFT_KEY); if (draft) { setMessage(draft); sessionStorage.removeItem(TUTOR_DRAFT_KEY); } } catch {} }, []);
  useEffect(() => { chatEnd.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }, [chat, busy]);
  const append = (id: string, m: ChatMessage) => cloud.update(s => ({ ...s, chats: s.chats.some(c => c.id === id) ? s.chats.map(c => c.id === id ? { ...c, messages: [...c.messages, m] } : c) : [...s.chats, { id, role, created: Date.now(), messages: [m] }].slice(-30) }));
  const send = async (text = message) => {
    if (!text.trim() || busy) return;
    const id = activeId ?? crypto.randomUUID();
    setBusy(true); setTutorError(''); append(id, { author: 'Вы', text }); setActiveId(id); setMessage('');
    try {
      const response = await fetch('/api/tutor', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: text, history: chat.slice(-12).map(c => ({ role: c.author === 'Вы' ? 'user' : 'assistant', content: c.text })), role, level, track: profile?.track || defaultStudyTrack, studyStage: profile?.studyStage || 'both' }) });
      const result = await response.json();
      if (!response.ok) { setTutorError(result.error || 'Не удалось получить ответ.'); setMessage(text); } else append(id, { author: role, text: result.reply });
    } catch { setTutorError('Нет соединения с сервером. Попробуйте ещё раз.'); setMessage(text); } finally { setBusy(false); }
  };
  const open = (id: string | null) => { setActiveId(id); setTutorError(''); };
  const remove = (id: string) => { if (!confirm('Удалить этот чат? Его нельзя будет восстановить.')) return; cloud.update(s => ({ ...s, chats: s.chats.filter(c => c.id !== id) })); if (id === activeId) open(null); };
  if (!cloud.ready) return <div className="loading" style={{ flexDirection: 'column', fontSize: 18 }}><Leaf />{cloud.error || 'Загрузка твоих чатов…'}{cloud.error && <button className="button primary" onClick={() => void cloud.reload()}>Повторить загрузку</button>}</div>;
  return <div className="tutor-page">
    <header className="tutor-header"><Link href="/" className="brand" aria-label="Klar C1 — на главную"><span className="brand-mark"><Leaf size={22} /></span>Klar<span className="brand-c1">C1</span></Link><span className="muted small sync-text">{cloud.status}</span><Link href="/" className="small-link"><ArrowLeft size={18} />К обучению</Link></header>
    {cloud.error && <p className="notice" role="alert">{cloud.error}</p>}
    <div className="tutor-layout">
      <aside className="chat-list" aria-label="Чаты">
        <button className="button primary" disabled={busy} onClick={() => open(null)}><Plus size={17} />Новый чат</button>
        {cloud.snapshot.chats.length ? [...cloud.snapshot.chats].reverse().map(c => <div className="chat-item" key={c.id}><button disabled={busy} aria-current={c.id === activeId ? 'page' : undefined} className={`role-card ${c.id === activeId ? 'selected' : ''}`} onClick={() => open(c.id)}><strong>{c.messages.find(m => m.author === 'Вы')?.text.slice(0, 60) || 'Разговор'}</strong><small>{c.role}{c.created ? ` · ${new Date(c.created).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}` : ''}</small></button><button className="icon-button" disabled={busy} aria-label="Удалить чат" title="Удалить чат" onClick={() => remove(c.id)}><Trash2 size={16} /></button></div>) : <p className="muted small">Здесь появятся твои разговоры.</p>}
      </aside>
      <section className="chat-panel"><div className="chat-top"><MessageCircle size={20} /><strong>{role}</strong><span className="muted small">Немецкий {level}</span></div><Messages role={role} level={level} chat={chat} busy={busy} tutorError={tutorError} chatEnd={chatEnd} /><form className="chat-form" onSubmit={e => { e.preventDefault(); void send(); }}><label className="sr-only" htmlFor="message">Сообщение тьютору</label><textarea id="message" maxLength={8000} placeholder="Schreib einfach los …" value={message} onChange={e => setMessage(e.target.value)} onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) { e.preventDefault(); void send(); } }} /><button className="button primary" disabled={busy || !message.trim()} type="submit" aria-label="Отправить сообщение"><Send size={18} /></button></form></section>
      <aside className="tutor-info">{active ? <><h3>Собеседник</h3><p className="muted">{role} — {roleText[role]}. Чтобы поговорить с другим собеседником, начни новый чат.</p></> : <><h3>Выбери собеседника</h3>{tutorRoles.map(name => <button className={`role-card ${newRole === name ? 'selected' : ''}`} disabled={busy} onClick={() => setNewRole(name)} key={name}><strong>{name}</strong><small>{roleText[name]}</small></button>)}</>}<p className="muted small">При отправке сообщение и последние реплики передаются Gemini или настроенному AI-провайдеру. {`История чатов сохраняется в аккаунте (Cloudflare D1), хранятся последние 30 разговоров; чаты старше ${CHAT_TTL_DAYS} дней удаляются автоматически.`}</p></aside>
    </div>
  </div>;
}

// Memoised so typing in the composer does not re-render (and re-voice) every message.
const Messages = memo(function Messages({ role, level, chat, busy, tutorError, chatEnd }: { role: string; level: string; chat: ChatMessage[]; busy: boolean; tutorError: string; chatEnd: RefObject<HTMLDivElement | null> }) {
  return <div className="messages"><div className="chat-message assistant"><small>{role}</small><p lang="de">{role === 'Professor' ? (level === 'A1' ? 'Guten Tag! Wie heißen Sie? Was möchten Sie studieren?' : 'Guten Tag! Welche Frage haben Sie zur Vorlesung?') : role === 'Beamter' ? (level === 'A1' ? 'Guten Tag! Wie heißen Sie? Wo wohnen Sie?' : 'Guten Tag! Wie kann ich Ihnen bei der Anmeldung helfen?') : role === 'Mitbewohner' ? (level === 'A1' ? 'Hallo! Ich heiße Alex. Woher kommst du?' : 'Hallo! Wie war dein erster Tag in der neuen Wohnung?') : (level === 'A1' ? 'Hallo! Ich heiße Alex. Wie heißt du?' : 'Hallo! Du bist neu in Wien, oder? Was möchtest du hier studieren?')}</p><small>Начни разговор: тьютор учитывает твой уровень и предыдущие реплики.</small></div>{chat.map((c, i) => <div className={`chat-message ${c.author === 'Вы' ? 'user' : 'assistant'}`} key={i}><small>{c.author}</small><FeedbackText text={c.text}/>{c.author!=='Вы' && <VoicePractice text={c.text.split('\n\n')[0]}/>}</div>)}<div ref={chatEnd}/>{busy && <p role="status" className="muted">Тьютор готовит ответ…</p>}{tutorError && <p role="alert" className="notice">{tutorError}</p>}</div>;
});
