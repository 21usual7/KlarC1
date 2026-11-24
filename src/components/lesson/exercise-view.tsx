'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Check, X } from 'lucide-react';
import { getModule, getWord, readingFor } from '@/content';
import { answerText, checkChoice, checkTiles, checkTyped, GAP, typeLabel, type Check as Result, type Exercise, type Step } from '@/lib/exercises';
import { useI18n } from '@/i18n/client';
import { SpeakButton, speak } from './speak';
import GlossText from './gloss-text';
import ListenPlayer from './listen-player';
import ReadingView from './reading-view';
import WordCard from './word-card';

const UMLAUTS = ['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'];

type Props = { step: Step; onAnswer: (correct: boolean) => void; onNext: () => void };

/** One step of a run. The parent remounts it per step (key), so state never leaks between exercises. */
export default function ExerciseView({ step, onAnswer, onNext }: Props) {
  const { t } = useI18n();
  if (step.kind === 'reading') {
    const module = getModule(step.moduleId); const reading = module && readingFor(module, step.lesson);
    return reading ? <ReadingView reading={reading} onNext={onNext} /> : <div className="exercise"><button className="button primary" onClick={onNext}>{t.common.next} <ArrowRight size={18} /></button></div>;
  }
  if (step.kind === 'intro') return <div className="exercise">
    <span className="eyebrow">{t.exercise.newWord}</span>
    <WordCard word={getWord(step.wordId)!} />
    <div className="exercise-actions"><button className="button primary" autoFocus onClick={onNext}>{t.common.next} <ArrowRight size={18} /></button></div>
  </div>;
  return <ExerciseBody exercise={step} onAnswer={onAnswer} onNext={onNext} />;
}

function ExerciseBody({ exercise, onAnswer, onNext }: { exercise: Exercise; onAnswer: (correct: boolean) => void; onNext: () => void }) {
  const word = exercise.wordId ? getWord(exercise.wordId) : undefined;
  const { t, locale } = useI18n(); const e = t.exercise;
  const [result, setResult] = useState<Result | null>(null);
  const [picked, setPicked] = useState<string | null>(null);
  const [input, setInput] = useState('');
  const [order, setOrder] = useState<number[]>([]);
  /** Listening exercises: options unlock after the first playback. */
  const [heard, setHeard] = useState(!exercise.listenFirst);
  const inputRef = useRef<HTMLInputElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => { if (exercise.audio && (exercise.type === 'listen' || exercise.type === 'dictation')) speak(exercise.audio); }, [exercise]);
  useEffect(() => { if (result) nextRef.current?.focus(); }, [result]);

  const finish = (r: Result) => { if (result) return; setResult(r); onAnswer(r.correct); };
  const insert = (char: string) => { const el = inputRef.current; if (!el) { setInput(v => v + char); return; } const s = el.selectionStart ?? input.length, e = el.selectionEnd ?? input.length; setInput(input.slice(0, s) + char + input.slice(e)); requestAnimationFrame(() => { el.focus(); el.setSelectionRange(s + 1, s + 1); }); };
  const showAudio = exercise.audio && exercise.type !== 'meaning' && !exercise.listenFirst;
  const locked = !heard && !result;
  const sentence = exercise.sentence && (() => { const [a, b] = exercise.sentence.split(GAP); return <p className="exercise-sentence" lang="de"><GlossText text={a} gloss={exercise.gloss} /><span className="gap">{result ? answerText(exercise) : '_____'}</span><GlossText text={b} gloss={exercise.gloss} /></p>; })();
  const optionsLang = exercise.optionsLang === 'tr' ? locale : exercise.optionsLang || (exercise.type === 'reverse' || exercise.type === 'article' || exercise.type === 'cloze-bank' ? 'de' : undefined);

  return <div className="exercise">
    <span className="eyebrow">{e.tiers[exercise.tier].toUpperCase()} · {typeLabel(exercise.type).toUpperCase()}</span>
    <div className="exercise-prompt"><h2 lang={exercise.type === 'meaning' || exercise.type === 'article' ? 'de' : undefined}>{exercise.prompt}</h2>{showAudio && <SpeakButton text={exercise.audio!} label={e.hearAgain} withSlow />}</div>
    {exercise.de && <p className="exercise-sentence exercise-de"><GlossText text={exercise.de} gloss={exercise.gloss} disabled={exercise.glossAfterAnswer && !result} /></p>}
    {exercise.deRu && <details className="de-ru"><summary>{e.questionTranslation}</summary><p>{exercise.deRu}</p></details>}
    {sentence}
    {exercise.hint && <p className="muted exercise-hint">{exercise.hint}</p>}

    {exercise.listenFirst && exercise.audio && <ListenPlayer text={exercise.audio} onPlayed={() => setHeard(true)} />}

    {exercise.kind === 'choice' && <div className={`listen-options-wrap ${locked ? 'locked' : ''}`}>
      <div className={`quiz-options exercise-options ${exercise.listenFirst ? 'sentence-options' : ''}`} aria-hidden={locked || undefined}>{exercise.options.map(o => {
        const state = result ? (o === exercise.answer ? 'right' : o === picked ? 'wrong' : '') : '';
        return <button key={o} className={state} disabled={!!result || locked} lang={optionsLang} onClick={() => { setPicked(o); finish(checkChoice(exercise, o)); }}>{o}</button>;
      })}</div>
      {locked && <p className="listen-lock" role="note">{e.listenLock}</p>}
    </div>}

    {exercise.kind === 'type' && <form className="type-answer" onSubmit={e => { e.preventDefault(); if (!result && input.trim()) finish(checkTyped(exercise, input)); }}>
      <input ref={inputRef} autoFocus lang="de" spellCheck={false} autoCapitalize="off" autoComplete="off" value={input} disabled={!!result} onChange={e => setInput(e.target.value)} placeholder={e.typePlaceholder} aria-label={e.answer} />
      <div className="umlauts">{UMLAUTS.map(c => <button type="button" key={c} disabled={!!result} onClick={() => insert(c)}>{c}</button>)}</div>
      {!result && <button className="button primary" disabled={!input.trim()} type="submit">{t.common.check}</button>}
    </form>}

    {exercise.kind === 'tiles' && <div className="tiles-answer">
      <div className={`tile-line ${exercise.joiner === '' ? 'joined' : ''}`} aria-label={e.yourAnswer}>{order.length ? order.map((i, pos) => <button key={pos} className="tile chosen" disabled={!!result} onClick={() => setOrder(order.filter((_, p) => p !== pos))} lang="de">{exercise.tiles[i]}</button>) : <span className="muted">{e.tapParts}</span>}</div>
      <div className="tile-pool">{exercise.tiles.map((t, i) => <button key={i} className="tile" lang="de" disabled={!!result || order.includes(i)} onClick={() => setOrder([...order, i])}>{t}</button>)}</div>
      {!result && <button className="button primary" disabled={!order.length} onClick={() => finish(checkTiles(exercise, order.map(i => exercise.tiles[i])))}>{t.common.check}</button>}
    </div>}

    {result && <div className={`exercise-feedback ${result.correct ? 'ok' : 'bad'}`} role="status">
      <strong>{result.correct ? <><Check size={18} /> Richtig!</> : <><X size={18} /> {e.rightAnswer}</>}</strong>
      {!result.correct && <p lang="de" className="right-answer">{answerText(exercise)}</p>}
      {result.note && <p>{result.note}</p>}
      {word && <WordCard word={word} compact />}
      <button ref={nextRef} className="button primary" onClick={onNext}>{t.common.next} <ArrowRight size={18} /></button>
    </div>}
  </div>;
}
