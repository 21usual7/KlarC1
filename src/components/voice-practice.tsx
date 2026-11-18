'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { Square, Volume2 } from 'lucide-react';

export type VoicePracticeProps = { text: string; lang?: string };

// SpeechSynthesis is shared by the page. Keep controls in separate instances in sync.
let stopActivePlayback: (() => void) | null = null;

export default function VoicePractice({ text, lang = 'de-DE' }: VoicePracticeProps) {
  const id = useId();
  const [supported, setSupported] = useState<boolean | null>(null);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState('');
  const [slow, setSlow] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [status, setStatus] = useState('');
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const language = lang.toLowerCase().split(/[-_]/)[0];

  const stop = useCallback(() => {
    if (!utteranceRef.current) return;
    utteranceRef.current.onstart = null;
    utteranceRef.current.onend = null;
    utteranceRef.current.onerror = null;
    utteranceRef.current = null;
    if (stopActivePlayback === stop) {
      stopActivePlayback = null;
      window.speechSynthesis.cancel();
    }
    setPlaying(false);
    setStatus('Чтение остановлено. Можно повторить фразу вслух.');
  }, []);

  useEffect(() => {
    const available = typeof window !== 'undefined'
      && 'speechSynthesis' in window
      && 'SpeechSynthesisUtterance' in window;
    setSupported(available);
    if (!available) return;
    const synth = window.speechSynthesis;
    const updateVoices = () => {
      // Do not select browser/network-backed voices: this component makes no cloud TTS requests.
      const localVoices = synth.getVoices().filter(voice =>
        voice.localService && voice.lang.toLowerCase().split(/[-_]/)[0] === language,
      );
      localVoices.sort((a, b) => Number(b.lang.toLowerCase() === lang.toLowerCase())
        - Number(a.lang.toLowerCase() === lang.toLowerCase()) || a.name.localeCompare(b.name));
      setVoices(localVoices);
    };
    updateVoices();
    synth.addEventListener('voiceschanged', updateVoices);
    return () => {
      synth.removeEventListener('voiceschanged', updateVoices);
      stop();
    };
  }, [lang, language, stop]);

  useEffect(() => {
    stop();
    setStatus('');
  }, [text, lang, stop]);

  const speak = () => {
    if (!supported || !text.trim() || !voices.length) return;
    stopActivePlayback?.();
    const synth = window.speechSynthesis;
    const voice = voices.find(candidate => candidate.voiceURI === selectedVoice) || voices[0];
    const utterance = new SpeechSynthesisUtterance(text.trim().replace(/(?:…|\.{3,})/g, ', '));
    utterance.lang = lang;
    utterance.voice = voice;
    utterance.rate = slow ? 0.72 : 0.95;
    utterance.pitch = 1;
    utteranceRef.current = utterance;
    stopActivePlayback = stop;
    const finish = (message: string) => {
      if (utteranceRef.current !== utterance) return;
      utteranceRef.current = null;
      if (stopActivePlayback === stop) stopActivePlayback = null;
      setPlaying(false);
      setStatus(message);
    };
    utterance.onstart = () => setStatus('Слушай, затем повтори фразу вслух.');
    utterance.onend = () => finish('Готово. Попробуй повторить без образца.');
    utterance.onerror = event => finish(
      event.error === 'not-allowed'
        ? 'Браузер заблокировал звук. Разреши воспроизведение для этой страницы и нажми ещё раз.'
        : 'Не удалось прочитать текст этим голосом. Выбери другой локальный голос или проверь настройки речи системы.',
    );
    setPlaying(true);
    setStatus('Подготовка чтения…');
    try {
      synth.speak(utterance);
    } catch {
      finish('Озвучивание недоступно. Проверь настройки речи браузера и системы.');
    }
  };

  const fallback = supported === null
    ? 'Проверяем доступность голоса…'
    : !supported
      ? 'Чтение текста недоступно в этом браузере. Можно использовать системную озвучку.'
      : voices.length === 0
        ? `Локальный голос ${lang} недоступен. Проверь настройки речи системы и обнови страницу.`
        : !text.trim()
          ? 'Сначала выбери или напиши слово или фразу.'
          : '';

  return (
    <section aria-label="Послушать и повторить" className="voice-practice" style={{ marginBlock: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <button
          type="button"
          className="button primary"
          style={{ fontSize: 16, minHeight: 44 }}
          disabled={!supported || voices.length === 0 || !text.trim() || playing}
          onClick={speak}
          aria-describedby={`${id}-status`}
        >
          <Volume2 size={18} aria-hidden="true" />
          Произнести
        </button>
        {playing && (
          <button
            type="button"
            className="button secondary"
            style={{ fontSize: 16, minHeight: 44 }}
            onClick={stop}
          >
            <Square size={16} aria-hidden="true" />
            Остановить
          </button>
        )}
        <details style={{ fontSize: 14, maxWidth: '100%' }}>
          <summary style={{ cursor: 'pointer', paddingBlock: 12 }}>Настройки голоса</summary>
          <div style={{ display: 'grid', gap: 10, paddingBlock: 8 }}>
            <label style={{ display: 'inline-flex', alignItems: 'center', gap: 8, minHeight: 44 }}>
              <input
                type="checkbox"
                checked={slow}
                disabled={playing}
                onChange={event => setSlow(event.target.checked)}
                style={{ width: 18, height: 18, accentColor: 'var(--green, #28533e)' }}
              />
              Медленно
            </label>
            {voices.length > 1 && (
              <label htmlFor={`${id}-voice`} style={{ display: 'block' }}>
                Голос
                <select
                  id={`${id}-voice`}
                  value={voices.some(voice => voice.voiceURI === selectedVoice) ? selectedVoice : voices[0].voiceURI}
                  disabled={playing}
                  onChange={event => setSelectedVoice(event.target.value)}
                  style={{ display: 'block', maxWidth: '100%', fontSize: 16, minHeight: 44, marginTop: 6 }}
                >
                  {voices.map(voice => <option key={voice.voiceURI} value={voice.voiceURI}>{voice.name} · {voice.lang}</option>)}
                </select>
              </label>
            )}
            <p style={{ fontSize: 14, lineHeight: 1.65 }}>
              Только локальные голоса браузера. Микрофон не включается; произношение не оценивается.
            </p>
          </div>
        </details>
      </div>
      <p id={`${id}-status`} role="status" aria-live="polite" style={{ marginTop: status || fallback ? 8 : 0, fontSize: 14, lineHeight: 1.65, color: 'var(--muted, #667260)' }}>
        {status || fallback}
      </p>
    </section>
  );
}
