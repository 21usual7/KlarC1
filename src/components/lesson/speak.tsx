'use client';
import { Turtle, Volume2 } from 'lucide-react';

/** Speaks German text with the browser's local voice. Returns false when no speech engine exists. */
export function speak(text: string, slow = false): boolean {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return false;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'de-DE';
  utterance.rate = slow ? 0.6 : 0.95;
  const voices = window.speechSynthesis.getVoices();
  const voice = voices.find(v => v.lang === 'de-AT') || voices.find(v => v.lang === 'de-DE') || voices.find(v => v.lang.startsWith('de'));
  if (voice) utterance.voice = voice;
  window.speechSynthesis.speak(utterance);
  return true;
}

export function SpeakButton({ text, label = 'Послушать', withSlow = false }: { text: string; label?: string; withSlow?: boolean }) {
  return <span className="speak-buttons">
    <button type="button" className="icon-button" aria-label={`${label}: ${text}`} title={label} onClick={() => speak(text)}><Volume2 size={18} /></button>
    {withSlow && <button type="button" className="icon-button" aria-label={`Медленно: ${text}`} title="Медленно" onClick={() => speak(text, true)}><Turtle size={18} /></button>}
  </span>;
}
