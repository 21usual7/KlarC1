'use client';
import { useState } from 'react';
import { ArrowRight, BookOpen, CheckCircle2, MessageCircle, RotateCcw, X } from 'lucide-react';
import { displayWord, getModule, getWord, lessonWords } from '@/content';
import { advance, answerStep, currentStep, firstTryScore, PASS_SCORE, runProgress, type Run } from '@/lib/lesson';
import ExerciseView from '../lesson/exercise-view';
import { Empty } from './shared';

type Props = { run: Run | null; onChange: (run: Run) => void; onExit: () => void; onHome: () => void; onTutor: (text: string) => void; onRestart: (run: Run) => void };
const modeLabel = { lesson: 'УРОК', review: 'ПОВТОРЕНИЕ', test: 'ТЕСТ МОДУЛЯ' } as const;

export default function LessonScreen({ run, onChange, onExit, onHome, onTutor, onRestart }: Props) {
  if (!run) return <Empty icon={<BookOpen size={36} />} title="Сейчас нет активного урока" text="Начни следующий урок на главной или выбери модуль." action="На главную" onClick={onHome} />;
  const step = currentStep(run);
  const { done, total } = runProgress(run);
  return <div className="lesson-run">
    <div className="run-top">
      <div><span className="eyebrow">{modeLabel[run.mode]}</span><h1>{run.title}</h1></div>
      <button className="icon-button" aria-label="Выйти из урока" title="Выйти (прогресс урока не сохранится)" onClick={() => { if (run.finished || confirm('Выйти? Результаты незаконченного урока не сохранятся.')) onExit(); }}><X /></button>
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
  const entries = Object.entries(run.results);
  const hard = entries.filter(([, r]) => r.wrong > 0).map(([id]) => getWord(id)).filter(w => !!w);
  const module = run.moduleId ? getModule(run.moduleId) : undefined;
  const score = firstTryScore(run);
  const lessonList = module && run.lesson !== undefined ? lessonWords(module, run.lesson) : [];
  return <div className="completion run-summary">
    <CheckCircle2 size={52} />
    {run.mode === 'test' ? <><span className="eyebrow">РЕЗУЛЬТАТ ТЕСТА</span><h2>{Math.round(score * 100)} %</h2><p>{score >= PASS_SCORE ? 'Модуль пройден. Слова с ошибками вернутся в повторение.' : `Для зачёта нужно ${PASS_SCORE * 100} %. Слова с ошибками уже ждут в повторении — повтори их и попробуй ещё раз.`}</p></>
      : <><span className="eyebrow">{run.mode === 'lesson' ? 'УРОК ЗАВЕРШЁН' : 'ПОВТОРЕНИЕ ЗАВЕРШЕНО'}</span><h2>{entries.length - hard.length} из {entries.length} слов без ошибок</h2><p>Слова попали в интервальное повторение. Когда их пора повторить — увидишь на главной.</p></>}
    {hard.length > 0 && <div className="hard-words"><h3>Обрати внимание</h3><ul>{hard.map(w => <li key={w!.id}><strong lang="de">{displayWord(w!)}</strong> — {w!.ru}</li>)}</ul></div>}
    {run.mode === 'lesson' && <div className="prompt-box production">
      <strong>Своё предложение · 2–3 минуты</strong>
      <p>Напиши 1–2 предложения, используя хотя бы два слова урока: <span lang="de">{lessonList.slice(0, 4).map(displayWord).join(', ')}</span>…</p>
      <textarea lang="de" value={text} onChange={e => setText(e.target.value)} placeholder="Zum Beispiel: …" />
      <button className="button secondary" disabled={!text.trim()} onClick={() => onTutor(`Bitte prüfe meine Sätze mit neuen Wörtern (${lessonList.map(displayWord).join(', ')}). Erkläre Fehler kurz auf Russisch:\n${text}`)}><MessageCircle size={17} /> Проверить с ИИ-тьютором</button>
    </div>}
    <div className="summary-actions">
      {run.mode === 'test' && score < PASS_SCORE && module && <button className="button secondary" onClick={() => onRestart(run)}><RotateCcw size={17} /> Пройти тест ещё раз</button>}
      <button className="button primary" onClick={onHome}>На главную <ArrowRight size={17} /></button>
    </div>
  </div>;
}
