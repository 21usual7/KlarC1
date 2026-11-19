'use client';
import { useSyncExternalStore } from 'react';
import { Turtle, Volume2 } from 'lucide-react';

const supported = () => typeof window !== 'undefined' && 'speechSynthesis' in window;
const germanVoice = () => {
  const voices = window.speechSynthesis.getVoices();
  return voices.find(v => v.lang === 'de-AT') || voices.find(v => v.lang === 'de-DE') || voices.find(v => v.lang.toLowerCase().startsWith('de'));
};
const utteranceFor = (text: string, slow: boolean) => {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'de-DE';
  utterance.rate = slow ? 0.6 : 0.95;
  const voice = germanVoice();
  if (voice) utterance.voice = voice;
  return utterance;
};

/** Bumped by every new playback, so callbacks of a cancelled queue are ignored. */
let generation = 0;
/** Chrome may garbage-collect queued utterances and never fire `end`; keep them referenced. */
let queued: SpeechSynthesisUtterance[] = [];

/** Speaks German text with the browser's local voice. Returns false when no speech engine exists. */
export function speak(text: string, slow = false): boolean {
  if (!supported()) return false;
  generation++;
  window.speechSynthesis.cancel();
  queued = [utteranceFor(text, slow)];
  window.speechSynthesis.speak(queued[0]);
  return true;
}

/**
 * Speaks a long text sentence by sentence (one utterance each): Chrome cuts off long utterances.
 * `onDone` fires once when the queue ends or fails, not when it was replaced by another playback.
 */
export function speakQueue(sentences: string[], slow = false, onDone?: () => void): boolean {
  if (!supported() || !sentences.length) return false;
  const mine = ++generation;
  window.speechSynthesis.cancel();
  queued = sentences.map(s => utteranceFor(s, slow));
  const last = queued[queued.length - 1];
  const done = () => { if (mine === generation) { queued = []; onDone?.(); } };
  last.onend = done;
  queued.forEach(u => { u.onerror = done; });
  queued.forEach(u => window.speechSynthesis.speak(u));
  return true;
}

export function stopSpeaking() {
  if (!supported()) return;
  generation++; queued = [];
  window.speechSynthesis.cancel();
}

/** `unknown` until mounted (server render), then whether German can be spoken. */
export type SpeechStatus = 'unknown' | 'none' | 'no-german' | 'ok';
const subscribe = (notify: () => void) => {
  if (!supported()) return () => {};
  window.speechSynthesis.addEventListener('voiceschanged', notify);
  return () => window.speechSynthesis.removeEventListener('voiceschanged', notify);
};
const snapshot = (): SpeechStatus => {
  if (!supported()) return 'none';
  // Voices load asynchronously; an empty list is not yet a verdict.
  if (!window.speechSynthesis.getVoices().length) return 'unknown';
  return germanVoice() ? 'ok' : 'no-german';
};
export const useSpeechStatus = () => useSyncExternalStore(subscribe, snapshot, () => 'unknown' as const);

export const speechMessage: Record<Exclude<SpeechStatus, 'ok' | 'unknown'>, string> = {
  none: 'Этот браузер не умеет озвучивать текст. Попробуй Chrome, Edge или Safari.',
  'no-german': 'В системе нет немецкого голоса — текст прочитает голос по умолчанию, произношение может быть неверным. Немецкий голос можно добавить в настройках речи системы.',
};

export function SpeakButton({ text, label = 'Послушать', withSlow = false }: { text: string; label?: string; withSlow?: boolean }) {
  return <span className="speak-buttons">
    <button type="button" className="icon-button" aria-label={`${label}: ${text}`} title={label} onClick={() => speak(text)}><Volume2 size={18} /></button>
    {withSlow && <button type="button" className="icon-button" aria-label={`Медленно: ${text}`} title="Медленно" onClick={() => speak(text, true)}><Turtle size={18} /></button>}
  </span>;
}
