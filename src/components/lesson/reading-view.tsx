'use client';
import { useEffect, useState } from 'react';
import { ArrowRight, Languages, MousePointerClick, Square, Turtle, Volume2 } from 'lucide-react';
import type { Reading } from '@/content';
import { splitSentences } from '@/lib/exercises';
import GlossText from './gloss-text';
import { trReading } from '@/content/translate';
import { useI18n } from '@/i18n/client';
import { speakQueue, speechMessage, stopSpeaking, useSpeechStatus } from './speak';

/** The lesson text: German with hover translations, the full translation on demand. */
export default function ReadingView({ reading, onNext }: { reading: Reading; onNext: () => void }) {
  const [showRu, setShowRu] = useState(false);
  const { t, locale } = useI18n(); const r = t.reading;
  const tr = trReading(reading);
  const [playing, setPlaying] = useState<'normal' | 'slow' | null>(null);
  const [failed, setFailed] = useState(false);
  const status = useSpeechStatus();
  // Leaving the text (next step, other screen) stops the voice.
  useEffect(() => () => stopSpeaking(), []);
  const play = (mode: 'normal' | 'slow') => {
    const ok = speakQueue(splitSentences(reading.de), mode === 'slow', () => setPlaying(null));
    setFailed(!ok); setPlaying(ok ? mode : null);
  };
  const stop = () => { stopSpeaking(); setPlaying(null); };
  const messages = speechMessage(); const warning = failed ? messages.none : status === 'none' || status === 'no-german' ? messages[status] : null;
  return <div className="exercise reading">
    <span className="eyebrow">{r.eyebrow}</span>
    <h2 lang="de">{reading.title}</h2>
    <p className="muted reading-tip"><MousePointerClick size={16} /> {r.tip}</p>
    <div className="reading-audio" role="group" aria-label={r.audio}>
      {playing
        ? <button type="button" className="button secondary" onClick={stop}><Square size={16} /> {r.stop}{playing === 'slow' ? r.slowSuffix : ''}</button>
        : <>
          <button type="button" className="button secondary" onClick={() => play('normal')}><Volume2 size={18} /> {r.listen}</button>
          <button type="button" className="button secondary" onClick={() => play('slow')}><Turtle size={18} /> {r.slow}</button>
        </>}
      {warning && <p className="speech-warning" role="note">{warning}</p>}
    </div>
    <div className="reading-text">
      {reading.de.split(/\n\s*\n/).map((p, i) => <p key={i}><GlossText text={p.trim()} gloss={tr.gloss} /></p>)}
    </div>
    <button type="button" className="text-button" aria-expanded={showRu} onClick={() => setShowRu(v => !v)}><Languages size={17} /> {showRu ? r.hide : r.show}</button>
    {showRu && <div className="reading-ru" lang={locale}>{tr.text.split(/\n\s*\n/).map((p, i) => <p key={i}>{p.trim()}</p>)}</div>}
    <div className="exercise-actions"><button className="button primary" onClick={() => { stop(); onNext(); }}>{r.toQuestions} <ArrowRight size={18} /></button></div>
  </div>;
}
