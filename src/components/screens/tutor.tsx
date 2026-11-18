'use client';
import { memo, useEffect, useRef, useState, type RefObject, type SetStateAction } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import type { ChatMessage } from '@/lib/cloud-state';
import FeedbackText from '../feedback-text';
import VoicePractice from '../voice-practice';
import { PageTitle } from './shared';

type Props = { role: string; level: string; track: string; studyStage: string; chat: ChatMessage[]; setChat: (value: SetStateAction<ChatMessage[]>) => void; setRole: (name: string) => void; initialMessage: string; onDraftUsed: () => void };

export default function Tutor({ role, level, track, studyStage, chat, setChat, setRole, initialMessage, onDraftUsed }: Props) {
  // Draft text lives here, so typing re-renders only the chat, not the whole app shell.
  const [message, setMessage] = useState(initialMessage); const [busy, setBusy] = useState(false); const [tutorError, setTutorError] = useState('');
  const chatEnd = useRef<HTMLDivElement>(null);
  useEffect(() => { if (initialMessage) onDraftUsed(); }, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => { chatEnd.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }, [chat, busy]);
  const send = async (text = message) => {
    if (!text.trim() || busy) return;
    setBusy(true); setTutorError(''); setChat(c => [...c, { author: 'Вы', text }]); setMessage('');
    try {
      const response = await fetch('/api/tutor', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: text, history: chat.slice(-12).map(c => ({ role: c.author === 'Вы' ? 'user' : 'assistant', content: c.text })), role, level, track, studyStage }) });
      const result = await response.json();
      if (!response.ok) { setTutorError(result.error || 'Не удалось получить ответ.'); setMessage(text); } else setChat(c => [...c, { author: role, text: result.reply }]);
    } catch { setTutorError('Нет соединения с сервером. Попробуйте ещё раз.'); setMessage(text); } finally { setBusy(false); }
  };
  const reset = () => { setChat([]); setTutorError(''); };
  return <><PageTitle label="РАЗГОВОРНАЯ ПРАКТИКА" title="Поговорим по-настоящему" text="Спроси, объясни, попробуй ещё раз. Здесь можно ошибаться." /><div className="tutor-layout"><section className="chat-panel"><div className="chat-top"><MessageCircle size={20} /><strong>{role}</strong><span className="muted small">Немецкий {level}</span></div><Messages role={role} level={level} chat={chat} busy={busy} tutorError={tutorError} chatEnd={chatEnd} /><form className="chat-form" onSubmit={e => { e.preventDefault(); void send(); }}><label className="sr-only" htmlFor="message">Сообщение тьютору</label><textarea id="message" maxLength={8000} placeholder="Schreib einfach los …" value={message} onChange={e => setMessage(e.target.value)} onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) { e.preventDefault(); void send(); } }} /><button className="button primary" disabled={busy || !message.trim()} type="submit" aria-label="Отправить сообщение"><Send size={18} /></button></form></section><aside className="tutor-info"><h3>Выбери собеседника</h3><button className="text-button" disabled={busy} onClick={reset}>Новый разговор</button>{[{ name: 'Kommilitone', text: 'Учёба и жизнь в Вене' }, { name: 'Professor', text: 'Консультация и вопросы' }, { name: 'Beamter', text: 'Документы и регистрация' }, { name: 'Mitbewohner', text: 'Быт и общая квартира' }].map(r => <button className={`role-card ${role === r.name ? 'selected' : ''}`} disabled={busy} onClick={() => { setRole(r.name); reset(); }} key={r.name}><strong>{r.name}</strong><small>{r.text}</small></button>)}<p className="muted small">При отправке сообщение и последние реплики передаются Gemini или настроенному AI-провайдеру. В аккаунте история сохраняется в Cloudflare D1; без входа — только в этом браузере. При смене роли начинается новый разговор.</p></aside></div></>;
}

// Memoised so typing in the composer does not re-render (and re-voice) every message.
const Messages = memo(function Messages({ role, level, chat, busy, tutorError, chatEnd }: { role: string; level: string; chat: ChatMessage[]; busy: boolean; tutorError: string; chatEnd: RefObject<HTMLDivElement | null> }) {
  return <div className="messages"><div className="chat-message assistant"><small>{role}</small><p lang="de">{role === 'Professor' ? (level === 'A1' ? 'Guten Tag! Wie heißen Sie? Was möchten Sie studieren?' : 'Guten Tag! Welche Frage haben Sie zur Vorlesung?') : role === 'Beamter' ? (level === 'A1' ? 'Guten Tag! Wie heißen Sie? Wo wohnen Sie?' : 'Guten Tag! Wie kann ich Ihnen bei der Anmeldung helfen?') : role === 'Mitbewohner' ? (level === 'A1' ? 'Hallo! Ich heiße Alex. Woher kommst du?' : 'Hallo! Wie war dein erster Tag in der neuen Wohnung?') : (level === 'A1' ? 'Hallo! Ich heiße Alex. Wie heißt du?' : 'Hallo! Du bist neu in Wien, oder? Was möchtest du hier studieren?')}</p><small>Начни разговор: тьютор учитывает твой уровень и предыдущие реплики.</small></div>{chat.map((c, i) => <div className={`chat-message ${c.author === 'Вы' ? 'user' : 'assistant'}`} key={i}><small>{c.author}</small><FeedbackText text={c.text}/>{c.author!=='Вы' && <VoicePractice text={c.text.split('\n\n')[0]}/>}</div>)}<div ref={chatEnd}/>{busy && <p role="status" className="muted">Тьютор готовит ответ…</p>}{tutorError && <p role="alert" className="notice">{tutorError}</p>}</div>;
});
