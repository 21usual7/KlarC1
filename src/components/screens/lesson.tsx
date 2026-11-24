'use client';
import { useState } from 'react';
import { ArrowRight, BookOpen, CheckCircle2, MessageCircle, RotateCcw, X } from 'lucide-react';
import { displayWord, getModule, getWord, lessonWords } from '@/content';
import { advance, answerStep, currentStep, firstTryScore, PASS_SCORE, runProgress, type Run } from '@/lib/lesson';
import ExerciseView from '../lesson/exercise-view';
import { Empty } from './shared';
import { trWord } from '@/content/translate';
import { useI18n } from '@/i18n/client';

type Props = { run: Run | null; onChange: (run: Run) => void; onExit: () => void; onHome: () => void; onTutor: (text: string) => void; onRestart: (run: Run) => void };

export default function LessonScreen({ run, onChange, onExit, onHome, onTutor, onRestart }: Props) {
  const l = useI18n().t.lesson;
  if (!run) return <Empty icon={<BookOpen size={36} />} title={l.emptyTitle} text={l.emptyText} action={l.toHome} onClick={onHome} />;
  const step = currentStep(run);
  const { done, total } = runProgress(run);
  return <div className="lesson-run">
    <div className="run-top">
      <div><span className="eyebrow">{l.mode[run.mode]}</span><h1>{run.title}</h1></div>
      <button className="icon-button" aria-label={l.exit} title={l.exitTitle} onClick={() => { if (run.finished || confirm(l.exitConfirm)) onExit(); }}><X /></button>
    </div>
    <div className="run-progress" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={done}><span style={{ width: `${total ? (done / total) * 100 : 0}%` }} /></div>
    <section className="lesson-paper">
      {step ? <ExerciseView key={`${run.round}:${run.index}:${step.id}`} step={step} onAnswer={correct => onChange(answerStep(run, correct))} onNext={() => onChange(advance(run))} />
        : <Summary run={run} onHome={onHome} onTutor={onTutor} onRestart={onRestart} />}
    </section>
  </div>;
}

function Summary({ run, onHome, onTutor, onRestart }: { run: Run; onHome: () => void; onTutor: (text: string) => void; onRestart: (run: Run) => void }) {
  const [text, setText] = useState('');
  const l = useI18n().t.lesson;
  const entries = Object.entries(run.results);
  const hard = entries.filter(([, r]) => r.wrong > 0).map(([id]) => getWord(id)).filter(w => !!w);
  const module = run.moduleId ? getModule(run.moduleId) : undefined;
  const score = firstTryScore(run);
  const lessonList = module && run.lesson !== undefined ? lessonWords(module, run.lesson) : [];
  return <div className="completion run-summary">
    <CheckCircle2 size={52} />
    {run.mode === 'test' ? <><span className="eyebrow">{l.testResult}</span><h2>{Math.round(score * 100)} %</h2><p>{score >= PASS_SCORE ? l.passed : l.failed(PASS_SCORE * 100)}</p></>
      : <><span className="eyebrow">{run.mode === 'lesson' ? l.lessonDone : l.reviewDone}</span><h2>{l.cleanWords(entries.length - hard.length, entries.length)}</h2><p>{l.scheduled}</p>{run.text && <p><strong>{l.textLabel}</strong> {l.textScore(run.text.right, run.text.right + run.text.wrong)}</p>}</>}
    {hard.length > 0 && <div className="hard-words"><h3>{l.hardWords}</h3><ul>{hard.map(w => <li key={w!.id}><strong lang="de">{displayWord(w!)}</strong> — {trWord(w!)}</li>)}</ul></div>}
    {run.mode === 'lesson' && <div className="prompt-box production">
      <strong>{l.ownSentence}</strong>
      <p>{l.ownSentenceText} <span lang="de">{lessonList.slice(0, 4).map(displayWord).join(', ')}</span>…</p>
      <textarea lang="de" value={text} onChange={e => setText(e.target.value)} placeholder="Zum Beispiel: …" />
      <button className="button secondary" disabled={!text.trim()} onClick={() => onTutor(l.tutorRequest(lessonList.map(displayWord).join(', '), text))}><MessageCircle size={17} /> {l.checkWithTutor}</button>
    </div>}
    <div className="summary-actions">
      {run.mode === 'test' && score < PASS_SCORE && module && <button className="button secondary" onClick={() => onRestart(run)}><RotateCcw size={17} /> {l.retryTest}</button>}
      <button className="button primary" onClick={onHome}>{l.toHome} <ArrowRight size={17} /></button>
    </div>
  </div>;
}
