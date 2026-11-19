'use client';
import { useSyncExternalStore } from 'react';
import { Turtle, Volume2 } from 'lucide-react';
import { audioKey } from '@/lib/audio-key';

/*
 * German voice of the course. Every phrase listed in /audio/manifest.json has a pre-generated recording
 * (scripts/gen-audio.mjs, Piper, voice de_DE-thorsten-high): it plays as /audio/<audioKey(text)>.mp3.
 * Anything else — a phrase added after the last generation, a failed download — falls back to the
 * browser's speech engine (speechSynthesis), sentence by sentence.
 */

// ---------- recordings ----------
/** Keys of the recorded phrases; null until the manifest is loaded. */
let recorded: Set<string> | null = null;
let manifestLoad: Promise<Set<string>> | null = null;
const listeners = new Set<() => void>();

function loadManifest(): Promise<Set<string>> {
  manifestLoad ??= fetch('/audio/manifest.json')
    .then(r => (r.ok ? r.json() : { keys: [] }))
    .then((m: { keys?: string[] }) => new Set(m.keys ?? []))
    .catch(() => new Set<string>())
    .then(keys => { recorded = keys; listeners.forEach(notify => notify()); return keys; });
  return manifestLoad;
}
// Start early, so the first click usually finds the manifest already loaded.
if (typeof window !== 'undefined') void loadManifest();

// ---------- browser voice (fallback) ----------
const synthSupported = () => typeof window !== 'undefined' && 'speechSynthesis' in window;
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

// ---------- playback ----------
/** Bumped by every new playback and by stop, so a replaced queue stops at its next sentence. */
let generation = 0;
let current: HTMLAudioElement | null = null;
/** Chrome may garbage-collect a pending utterance and never fire `end`; keep it referenced. */
let utterance: SpeechSynthesisUtterance | null = null;

function halt() {
  generation++;
  if (current) { current.pause(); current = null; }
  utterance = null;
  if (synthSupported()) window.speechSynthesis.cancel();
}

function speakWithBrowser(text: string, slow: boolean): Promise<void> {
  return new Promise(resolve => {
    if (!synthSupported()) return resolve();
    const u = utteranceFor(text, slow);
    utterance = u;
    u.onend = u.onerror = () => { if (utterance === u) utterance = null; resolve(); };
    window.speechSynthesis.speak(u);
  });
}

function playRecording(key: string, slow: boolean): Promise<boolean> {
  return new Promise(resolve => {
    const audio = new Audio(`/audio/${key}.mp3`);
    // The slow mode keeps the pitch (preservesPitch is on by default).
    audio.playbackRate = slow ? 0.7 : 1;
    current = audio;
    let settled = false;
    const finish = (ok: boolean) => { if (settled) return; settled = true; if (current === audio) current = null; resolve(ok); };
    audio.onended = () => finish(true);
    audio.onerror = () => finish(false);
    audio.play().catch(() => finish(false));
  });
}

/** Plays the sentences one after another; returns early when another playback took over. */
async function run(sentences: string[], slow: boolean, mine: number, onDone?: () => void) {
  const keys = recorded ?? (await loadManifest());
  for (const text of sentences) {
    if (mine !== generation) return;
    const key = audioKey(text);
    const played = keys.has(key) && (await playRecording(key, slow));
    if (mine !== generation) return;
    if (!played) await speakWithBrowser(text, slow);
  }
  if (mine === generation) onDone?.();
}

/** Can anything be played: a recording for each sentence, or the browser voice? Optimistic while the manifest loads. */
const playable = (sentences: string[]) => synthSupported() || !recorded || sentences.every(s => recorded!.has(audioKey(s)));

/** Speaks German text: the recording if there is one, else the browser voice. Returns false when nothing can play it. */
export function speak(text: string, slow = false): boolean {
  if (typeof window === 'undefined' || !playable([text])) return false;
  halt();
  void run([text], slow, generation);
  return true;
}

/**
 * Speaks a long text sentence by sentence. `onDone` fires once when the queue ends (failed sentences are
 * skipped), not when it was replaced by another playback or stopped.
 */
export function speakQueue(sentences: string[], slow = false, onDone?: () => void): boolean {
  if (typeof window === 'undefined' || !sentences.length || !playable(sentences)) return false;
  halt();
  void run(sentences, slow, generation, onDone);
  return true;
}

export function stopSpeaking() {
  if (typeof window === 'undefined') return;
  halt();
}

/**
 * `unknown` until mounted (server render) and while nothing is known yet; then whether German can be played.
 * With recordings the course always has a German voice; without them it depends on the browser's voices.
 */
export type SpeechStatus = 'unknown' | 'none' | 'no-german' | 'ok';
const subscribe = (notify: () => void) => {
  listeners.add(notify);
  if (synthSupported()) window.speechSynthesis.addEventListener('voiceschanged', notify);
  return () => {
    listeners.delete(notify);
    if (synthSupported()) window.speechSynthesis.removeEventListener('voiceschanged', notify);
  };
};
const snapshot = (): SpeechStatus => {
  if (recorded?.size) return 'ok';
  if (!synthSupported()) return recorded ? 'none' : 'unknown';
  // Voices load asynchronously; an empty list is not yet a verdict.
  if (!window.speechSynthesis.getVoices().length) return 'unknown';
  return germanVoice() ? 'ok' : 'no-german';
};
export const useSpeechStatus = () => useSyncExternalStore(subscribe, snapshot, () => 'unknown' as const);

export const speechMessage: Record<Exclude<SpeechStatus, 'ok' | 'unknown'>, string> = {
  none: 'Этот браузер не умеет воспроизводить звук. Попробуй Chrome, Edge или Safari.',
  'no-german': 'В системе нет немецкого голоса — текст прочитает голос по умолчанию, произношение может быть неверным. Немецкий голос можно добавить в настройках речи системы.',
};

export function SpeakButton({ text, label = 'Послушать', withSlow = false }: { text: string; label?: string; withSlow?: boolean }) {
  return <span className="speak-buttons">
    <button type="button" className="icon-button" aria-label={`${label}: ${text}`} title={label} onClick={() => speak(text)}><Volume2 size={18} /></button>
    {withSlow && <button type="button" className="icon-button" aria-label={`Медленно: ${text}`} title="Медленно" onClick={() => speak(text, true)}><Turtle size={18} /></button>}
  </span>;
}
