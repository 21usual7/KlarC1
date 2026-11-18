'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Check, X } from 'lucide-react';
import { getWord } from '@/content';
import { answerText, checkChoice, checkTiles, checkTyped, GAP, typeLabels, type Check as Result, type Exercise, type Step } from '@/lib/exercises';
import { SpeakButton, speak } from './speak';
import WordCard from './word-card';

const UMLAUTS = ['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'];
const tierLabel = { recognize: 'Узнать', recall: 'Вспомнить', use: 'Использовать' } as const;

type Props = { step: Step; onAnswer: (correct: boolean) => void; onNext: () => void };

/** One step of a run. The parent remounts it per step (key), so state never leaks between exercises. */
export default function ExerciseView({ step, onAnswer, onNext }: Props) {
  const word = getWord(step.wordId)!;
  if (step.kind === 'intro') return <div className="exercise">
    <span className="eyebrow">НОВОЕ СЛОВО</span>
    <WordCard word={word} />
    <div className="exercise-actions"><button className="button primary" autoFocus onClick={onNext}>Дальше <ArrowRight size={18} /></button></div>
  </div>;
  return <ExerciseBody exercise={step} onAnswer={onAnswer} onNext={onNext} />;
}

function ExerciseBody({ exercise, onAnswer, onNext }: { exercise: Exercise; onAnswer: (correct: boolean) => void; onNext: () => void }) {
  const word = getWord(exercise.wordId)!;
  const [result, setResult] = useState<Result | null>(null);
  const [picked, setPicked] = useState<string | null>(null);
  const [input, setInput] = useState('');
  const [order, setOrder] = useState<number[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => { if (exercise.audio && (exercise.type === 'listen' || exercise.type === 'dictation')) speak(exercise.audio); }, [exercise]);
  useEffect(() => { if (result) nextRef.current?.focus(); }, [result]);

  const finish = (r: Result) => { if (result) return; setResult(r); onAnswer(r.correct); };
  const insert = (char: string) => { const el = inputRef.current; if (!el) { setInput(v => v + char); return; } const s = el.selectionStart ?? input.length, e = el.selectionEnd ?? input.length; setInput(input.slice(0, s) + char + input.slice(e)); requestAnimationFrame(() => { el.focus(); el.setSelectionRange(s + 1, s + 1); }); };
  const showAudio = exercise.audio && exercise.type !== 'meaning';
  const sentence = exercise.sentence && (() => { const [a, b] = exercise.sentence.split(GAP); return <p className="exercise-sentence" lang="de">{a}<span className="gap">{result ? answerText(exercise) : '_____'}</span>{b}</p>; })();

  return <div className="exercise">
    <span className="eyebrow">{tierLabel[exercise.tier].toUpperCase()} · {typeLabels[exercise.type].toUpperCase()}</span>
    <div className="exercise-prompt"><h2 lang={exercise.type === 'meaning' || exercise.type === 'article' ? 'de' : undefined}>{exercise.prompt}</h2>{showAudio && <SpeakButton text={exercise.audio!} label="Послушать ещё раз" withSlow />}</div>
    {sentence}
    {exercise.hint && <p className="muted exercise-hint">{exercise.hint}</p>}

    {exercise.kind === 'choice' && <div className="quiz-options exercise-options">{exercise.options.map(o => {
      const state = result ? (o === exercise.answer ? 'right' : o === picked ? 'wrong' : '') : '';
      return <button key={o} className={state} disabled={!!result} lang={exercise.type === 'reverse' || exercise.type === 'article' || exercise.type === 'cloze-bank' ? 'de' : undefined} onClick={() => { setPicked(o); finish(checkChoice(exercise, o)); }}>{o}</button>;
    })}</div>}

    {exercise.kind === 'type' && <form className="type-answer" onSubmit={e => { e.preventDefault(); if (!result && input.trim()) finish(checkTyped(exercise, input)); }}>
      <input ref={inputRef} autoFocus lang="de" spellCheck={false} autoCapitalize="off" autoComplete="off" value={input} disabled={!!result} onChange={e => setInput(e.target.value)} placeholder="Напиши по-немецки…" aria-label="Ответ" />
      <div className="umlauts">{UMLAUTS.map(c => <button type="button" key={c} disabled={!!result} onClick={() => insert(c)}>{c}</button>)}</div>
      {!result && <button className="button primary" disabled={!input.trim()} type="submit">Проверить</button>}
    </form>}

    {exercise.kind === 'tiles' && <div className="tiles-answer">
      <div className={`tile-line ${exercise.joiner === '' ? 'joined' : ''}`} aria-label="Твой ответ">{order.length ? order.map((i, pos) => <button key={pos} className="tile chosen" disabled={!!result} onClick={() => setOrder(order.filter((_, p) => p !== pos))} lang="de">{exercise.tiles[i]}</button>) : <span className="muted">Нажимай на части по порядку</span>}</div>
      <div className="tile-pool">{exercise.tiles.map((t, i) => <button key={i} className="tile" lang="de" disabled={!!result || order.includes(i)} onClick={() => setOrder([...order, i])}>{t}</button>)}</div>
      {!result && <button className="button primary" disabled={!order.length} onClick={() => finish(checkTiles(exercise, order.map(i => exercise.tiles[i])))}>Проверить</button>}
    </div>}

    {result && <div className={`exercise-feedback ${result.correct ? 'ok' : 'bad'}`} role="status">
      <strong>{result.correct ? <><Check size={18} /> Richtig!</> : <><X size={18} /> Правильный ответ:</>}</strong>
      {!result.correct && <p lang="de" className="right-answer">{answerText(exercise)}</p>}
      {result.note && <p>{result.note}</p>}
      <WordCard word={word} compact />
      <button ref={nextRef} className="button primary" onClick={onNext}>Дальше <ArrowRight size={18} /></button>
    </div>}
  </div>;
}
