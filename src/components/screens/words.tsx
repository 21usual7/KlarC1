'use client';
import { ArrowRight, RotateCcw } from 'lucide-react';
import { contentLevels, displayWord, modulesFor, type Sphere } from '@/content';
import type { Progress } from '@/lib/learning';
import { SpeakButton } from '../lesson/speak';
import { PageTitle } from './shared';
import SphereTabs from './sphere-tabs';
import { trWord } from '@/content/translate';
import { useI18n } from '@/i18n/client';

type Props = { progress: Progress; due: number; nextDue: number; onReview: () => void; onSphere: (s: Sphere) => void };

export default function Words({ progress, due, nextDue, onReview, onSphere }: Props) {
  const { t, intl } = useI18n(); const w = t.words;
  return <><PageTitle label={w.label} title={w.title} text={w.text} />
    <div className="review-reminder static"><RotateCcw size={20} /><span>{due ? w.due(due) : Number.isFinite(nextDue) ? w.next(new Date(nextDue).toLocaleString(intl, { dateStyle: 'short', timeStyle: 'short' })) : w.nothing}</span>{due > 0 && <button className="button primary" onClick={onReview}>{w.review} <ArrowRight size={17} /></button>}</div>
    <SphereTabs value={progress.sphere} onChange={onSphere} />
    {contentLevels.map(level => modulesFor(progress.sphere, level).map(module => <section className="word-module" key={module.id}>
      <h2><span className="pill">{level}</span> {module.title}</h2>
      <ul className="word-list">{module.words.map(word => { const p = progress.words[word.id]; const stage = p?.stage || 0; return <li key={word.id}>
        <span className={`stage-badge s${stage}`} title={t.stages[stage]}>{t.stages[stage]}</span>
        <strong lang="de">{displayWord(word)}</strong><SpeakButton text={displayWord(word)} />
        <span className="muted">{trWord(word)}</span>
      </li>; })}</ul>
    </section>))}
  </>;
}
