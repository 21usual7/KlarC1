'use client';
import { ArrowRight, RotateCcw } from 'lucide-react';
import { contentLevels, displayWord, modulesFor, type Sphere } from '@/content';
import type { Progress } from '@/lib/learning';
import { STAGES } from '@/lib/srs';
import { SpeakButton } from '../lesson/speak';
import { PageTitle } from './shared';
import SphereTabs from './sphere-tabs';

type Props = { progress: Progress; due: number; nextDue: number; onReview: () => void; onSphere: (s: Sphere) => void };

export default function Words({ progress, due, nextDue, onReview, onSphere }: Props) {
  return <><PageTitle label="WORTSCHATZ" title="Твои слова" text="Каждое слово проходит путь: узнаю → вспоминаю → использую → выучено. Повторения приходят по алгоритму FSRS — ровно тогда, когда слово начинает забываться." />
    <div className="review-reminder static"><RotateCcw size={20} /><span>{due ? `К повторению: ${due}` : Number.isFinite(nextDue) ? `Следующее повторение: ${new Date(nextDue).toLocaleString('ru', { dateStyle: 'short', timeStyle: 'short' })}` : 'Пока нечего повторять — пройди первый урок.'}</span>{due > 0 && <button className="button primary" onClick={onReview}>Повторить <ArrowRight size={17} /></button>}</div>
    <SphereTabs value={progress.sphere} onChange={onSphere} />
    {contentLevels.map(level => modulesFor(progress.sphere, level).map(module => <section className="word-module" key={module.id}>
      <h2><span className="pill">{level}</span> {module.title}</h2>
      <ul className="word-list">{module.words.map(word => { const p = progress.words[word.id]; const stage = p?.stage || 0; return <li key={word.id}>
        <span className={`stage-badge s${stage}`} title={STAGES[stage]}>{STAGES[stage]}</span>
        <strong lang="de">{displayWord(word)}</strong><SpeakButton text={displayWord(word)} />
        <span className="muted">{word.ru}</span>
      </li>; })}</ul>
    </section>))}
  </>;
}
