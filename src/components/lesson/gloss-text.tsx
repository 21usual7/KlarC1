'use client';
import { useEffect, useRef, useState } from 'react';
import { glossFor, segments } from '@/lib/gloss';

type Props = {
  text: string;
  /** Translations of the current text; module and common words are found automatically. */
  gloss?: Record<string, string>;
  /** Plain text, no translations (e.g. the translation would give the answer away). */
  disabled?: boolean;
  className?: string;
};

/**
 * German text where every known word shows its translation: on hover / keyboard focus,
 * and pinned by a click or tap (needed on touch screens). A click elsewhere or Escape closes it.
 */
export default function GlossText({ text, gloss, disabled = false, className }: Props) {
  const [pinned, setPinned] = useState<number | null>(null);
  const root = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (pinned === null) return;
    const close = (e: Event) => { if (e instanceof KeyboardEvent ? e.key === 'Escape' : !root.current?.contains(e.target as Node)) setPinned(null); };
    document.addEventListener('pointerdown', close); document.addEventListener('keydown', close);
    return () => { document.removeEventListener('pointerdown', close); document.removeEventListener('keydown', close); };
  }, [pinned]);

  if (disabled) return <span className={className} lang="de">{text}</span>;
  return <span ref={root} className={`gloss-text ${className || ''}`} lang="de">
    {segments(text).map((seg, i) => {
      const g = seg.word ? glossFor(seg.text, gloss) : undefined;
      if (!g) return <span key={i}>{seg.text}</span>;
      const showLemma = g.lemma && g.lemma.toLowerCase() !== seg.text.toLowerCase();
      return <span key={i} className={`gloss-word ${pinned === i ? 'pinned' : ''}`}>
        <button type="button" aria-expanded={pinned === i} onClick={() => setPinned(pinned === i ? null : i)}>{seg.text}</button>
        <span className="gloss-tip" role="tooltip" lang="ru">{showLemma && <b lang="de">{g.lemma}</b>}{g.ru}</span>
      </span>;
    })}
  </span>;
}
