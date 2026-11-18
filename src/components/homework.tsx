'use client';
import {useState} from 'react';
import {getAssignment} from '@/lib/homework';
import VoicePractice from './voice-practice';
import FeedbackText from './feedback-text';
import type {HomeworkWork} from '@/lib/cloud-state';
const empty:HomeworkWork={text:'',attempts:[],done:false};
export default function Homework({level,track,studyStage,allWork,onChange}:{level:string;track:string;studyStage:string;allWork:Record<string,HomeworkWork>;onChange:(id:string,work:HomeworkWork)=>void}){
 const task=getAssignment(level);const work=allWork[task.id]||empty;const [busy,setBusy]=useState(false);const [error,setError]=useState('');
 const save=(next:HomeworkWork)=>onChange(task.id,next);
 const review=async()=>{if(!work.text.trim()||busy)return;setBusy(true);setError('');try{
  const history=work.attempts.slice(-3).flatMap(a=>[{role:'user',content:a.text},{role:'assistant',content:a.feedback}]);
  const response=await fetch('/api/tutor',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message:work.text,mode:'homework',assignmentId:task.id,history,level,track,studyStage})});
  const result=await response.json();if(!response.ok)throw new Error(result.error||'Не удалось проверить задание.');
  save({...work,done:false,attempts:[...work.attempts,{text:work.text,feedback:result.reply,date:new Date().toISOString()}]});
 }catch(e){setError(e instanceof Error?e.message:'Нет соединения с тьютором.');}finally{setBusy(false);}};
 const latest=work.attempts.at(-1);
 return <><div className="page-heading"><div><span className="eyebrow">САМОСТОЯТЕЛЬНАЯ ПРАКТИКА · {task.level}</span><h1>Домашние задания</h1><p>Попробуй сам, получи объяснение и примени исправления.</p></div></div><section className="lesson-paper"><h2>{task.title}</h2><p className="lead">{task.prompt}</p><details className="vocab-details"><summary>Нужна опора?</summary><p lang="de">{task.support}</p><VoicePractice text={task.support}/></details><label className="field-label" htmlFor="homework-answer">Твой ответ на немецком</label><textarea id="homework-answer" className="writing" lang="de" maxLength={8000} readOnly={busy} value={work.text} onChange={e=>save({...work,text:e.target.value,done:false})} placeholder="Schreib einfach los …"/><p className="muted small">В аккаунте черновик и проверки сохраняются в облаке; без входа — на этом устройстве. Объём — ориентир. При проверке текст отправляется AI-провайдеру.</p><div className="lesson-navigation"><span className="muted">{work.done?'Завершено по твоей оценке':`Проверок: ${work.attempts.length}`}</span><button className="button primary" disabled={busy||!work.text.trim()} onClick={review}>{busy?'Тьютор проверяет…':latest?'Отправить исправление':'Проверить у тьютора'}</button></div>{error&&<p className="notice" role="alert">{error}</p>}{latest&&<div aria-live="polite"><h3 style={{marginTop:28}}>Обратная связь тьютора</h3><FeedbackText text={latest.feedback}/><p className="muted small">AI может ошибаться. Это учебная обратная связь, не официальная оценка уровня.</p><button className="button secondary" disabled={busy} onClick={()=>save({...work,done:true})}>Я закончил работу над заданием</button><details className="vocab-details"><summary>История попыток</summary>{work.attempts.map((a,i)=><div key={a.date+i}><strong>Попытка {i+1} · {new Date(a.date).toLocaleString('ru')}</strong><p lang="de" style={{whiteSpace:'pre-wrap'}}>{a.text}</p><FeedbackText text={a.feedback}/></div>)}</details></div>}</section></>;
}
