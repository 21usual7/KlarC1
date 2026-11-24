'use client';
import { useState } from 'react';
import { Play, RotateCcw, Turtle } from 'lucide-react';
import { speak, speechMessage, useSpeechStatus } from './speak';
import { useI18n } from '@/i18n/client';

/**
 * Big play button for listening exercises. Nothing plays on its own: the learner presses
 * the button (again and again, or slowly). `onPlayed` fires on every press — also when the
 * browser cannot speak, so the exercise never gets stuck.
 */
export default function ListenPlayer({ text, onPlayed }: { text: string; onPlayed: () => void }) {
  const status = useSpeechStatus();
  const s = useI18n().t.speech;
  const [plays, setPlays] = useState(0);
  const play = (slow: boolean) => { speak(text, slow); setPlays(n => n + 1); onPlayed(); };
  return <div className="listen-player">
    <button type="button" className="button primary listen-play" onClick={() => play(false)}>
      {plays ? <RotateCcw size={20} /> : <Play size={20} />} {plays ? s.again : s.play}
    </button>
    <button type="button" className="button secondary listen-slow" onClick={() => play(true)}><Turtle size={18} /> {s.slow}</button>
    {status !== 'ok' && status !== 'unknown' && <p className="speech-warning" role="note">{speechMessage()[status]}</p>}
  </div>;
}
