'use client';
import {useState} from 'react';
import {getAssignment} from '@/lib/homework';
import VoicePractice from './voice-practice';
import FeedbackText from './feedback-text';
import type {HomeworkWork} from '@/lib/cloud-state';
import {useI18n} from '@/i18n/client';
import {serverText} from '@/i18n/runtime';
const empty:HomeworkWork={text:'',attempts:[],done:false};
export default function Homework({level,track,studyStage,allWork,onChange}:{level:string;track:string;studyStage:string;allWork:Record<string,HomeworkWork>;onChange:(id:string,work:HomeworkWork)=>void}){
 const {t,intl}=useI18n();const h=t.homework;
 const base=getAssignment(level);const task={...base,...h.tasks[base.id]};const work=allWork[task.id]||empty;const [busy,setBusy]=useState(false);const [error,setError]=useState('');
 const save=(next:HomeworkWork)=>onChange(task.id,next);
 const review=async()=>{if(!work.text.trim()||busy)return;setBusy(true);setError('');try{
  const history=work.attempts.slice(-3).flatMap(a=>[{role:'user',content:a.text},{role:'assistant',content:a.feedback}]);
  const response=await fetch('/api/tutor',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message:work.text,mode:'homework',assignmentId:task.id,history,level,track,studyStage})});
  const result=await response.json();if(!response.ok)throw new Error(serverText(result.error,h.reviewFailed));
  save({...work,done:false,attempts:[...work.attempts,{text:work.text,feedback:result.reply,date:new Date().toISOString()}]});
 }catch(e){setError(e instanceof Error?e.message:h.noTutor);}finally{setBusy(false);}};
 const latest=work.attempts.at(-1);
 return <><div className="page-heading"><div><span className="eyebrow">{h.eyebrow(task.level)}</span><h1>{h.title}</h1><p>{h.text}</p></div></div><section className="lesson-paper"><h2>{task.title}</h2><p className="lead">{task.prompt}</p><details className="vocab-details"><summary>{h.support}</summary><p lang="de">{task.support}</p><VoicePractice text={task.support}/></details><label className="field-label" htmlFor="homework-answer">{h.answer}</label><textarea id="homework-answer" className="writing" lang="de" maxLength={8000} readOnly={busy} value={work.text} onChange={e=>save({...work,text:e.target.value,done:false})} placeholder="Schreib einfach los …"/><p className="muted small">{h.storage}</p><div className="lesson-navigation"><span className="muted">{work.done?h.done:h.attempts(work.attempts.length)}</span><button className="button primary" disabled={busy||!work.text.trim()} onClick={review}>{busy?h.checking:latest?h.resubmit:h.submit}</button></div>{error&&<p className="notice" role="alert">{error}</p>}{latest&&<div aria-live="polite"><h3 style={{marginTop:28}}>{h.feedback}</h3><FeedbackText text={latest.feedback}/><p className="muted small">{h.aiNote}</p><button className="button secondary" disabled={busy} onClick={()=>save({...work,done:true})}>{h.finish}</button><details className="vocab-details"><summary>{h.history}</summary>{work.attempts.map((a,i)=><div key={a.date+i}><strong>{h.attempt(i+1,new Date(a.date).toLocaleString(intl))}</strong><p lang="de" style={{whiteSpace:'pre-wrap'}}>{a.text}</p><FeedbackText text={a.feedback}/></div>)}</details></div>}</section></>;
}
