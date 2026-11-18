'use client';
import { CheckCircle2, RotateCcw } from 'lucide-react';
import type { Progress } from '@/lib/learning';
import VoicePractice from '../voice-practice';
import { Empty, PageTitle } from './shared';

type Props = { due: Progress['reviews']; reviews: Progress['reviews']; flipped: boolean; onFlip: () => void; onRate: (word: string, remembered: boolean) => void; onStart: () => void };

export default function Review({ due, reviews, flipped, onFlip, onRate, onStart }: Props) {
  return <><PageTitle label="СЛОВА ИЗ ТВОИХ ИСТОРИЙ" title="Вспомнить. Использовать. Запомнить." text="Выражения из твоих историй возвращаются в нужный момент." />{due.length ? <section className="review-panel"><span className="eyebrow">К ПОВТОРЕНИЮ: {due.length}</span><h2 lang="de">{due[0].word}</h2><VoicePractice text={due[0].word}/><p lang="de" className="lead">{due[0].example}</p>{flipped ? <><p className="translation">{due[0].translation}</p><div className="review-actions">{[false, true].map(remembered => <button className={`button ${remembered ? 'primary' : 'secondary'}`} key={String(remembered)} onClick={() => onRate(due[0].word, remembered)}>{remembered ? 'Вспомнил · повторить позже' : 'Ещё раз · через 10 минут'}</button>)}</div></> : <><p className="muted">Вспомни значение и составь своё предложение перед тем, как перевернуть карточку.</p><button className="button primary" onClick={onFlip}>Показать перевод <RotateCcw size={16} /></button></>}</section> : <Empty icon={<CheckCircle2 size={36} />} title={reviews.length ? 'На сегодня всё повторено' : 'Слова начинаются с истории'} text={reviews.length ? `Следующее повторение: ${new Date(Math.min(...reviews.map(c => c.due))).toLocaleString('ru')}` : 'Заверши первое занятие — и здесь появятся выражения из контекста.'} action="Открыть занятие" onClick={onStart} />}</>;
}
