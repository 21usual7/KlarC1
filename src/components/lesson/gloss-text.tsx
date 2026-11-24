'use client';
import { useEffect, useRef, useState } from 'react';
import { glossFor, segments } from '@/lib/gloss';
import { useI18n } from '@/i18n/client';

const EDGE = 8;
/**
 * Keeps the tooltip of `button` inside the viewport: shifts it sideways (`--gloss-shift`, the arrow stays
 * over the word) and flips it below the word when there is no room above.
 */
function placeTip(button: HTMLElement) {
  const tip = button.nextElementSibling as HTMLElement | null;
  if (!tip) return;
  const word = button.getBoundingClientRect();
  const width = tip.offsetWidth, height = tip.offsetHeight;
  const viewport = document.documentElement.clientWidth;
  const left = word.left + word.width / 2 - width / 2;
  const clamped = Math.min(Math.max(left, EDGE), Math.max(EDGE, viewport - EDGE - width));
  tip.style.setProperty('--gloss-shift', `${Math.round(clamped - left)}px`);
  tip.toggleAttribute('data-below', word.top - height - 12 < EDGE);
}

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
  const { locale } = useI18n();
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
        <button type="button" aria-expanded={pinned === i} onPointerEnter={e => placeTip(e.currentTarget)} onFocus={e => placeTip(e.currentTarget)} onClick={e => { placeTip(e.currentTarget); setPinned(pinned === i ? null : i); }}>{seg.text}</button>
        <span className="gloss-tip" role="tooltip" lang={locale}>{showLemma && <b lang="de">{g.lemma}</b>}{g.tr}</span>
      </span>;
    })}
  </span>;
}
