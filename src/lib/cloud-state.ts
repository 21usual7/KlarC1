import {restoreProgress, initialProgress, type Progress} from './learning.ts';
export type ChatMessage={author:string;text:string};
export type HomeworkAttempt={text:string;feedback:string;date:string};
export type HomeworkWork={text:string;attempts:HomeworkAttempt[];done:boolean};
export type LearningState={progress:Progress;chat:{role:string;messages:ChatMessage[]};homework:Record<string,HomeworkWork>};
export const emptyLearningState=():LearningState=>({progress:restoreProgress(initialProgress),chat:{role:'Kommilitone',messages:[]},homework:{}});
const obj=(v:unknown):Record<string,unknown>=>v&&typeof v==='object'&&!Array.isArray(v)?v as Record<string,unknown>:{};
export function normalizeLearningState(value:unknown):LearningState{
 const source=obj(value),chat=obj(source.chat),homework:Record<string,HomeworkWork>={};
 for(const [id,raw]of Object.entries(obj(source.homework))){if(!/^[a-z0-9-]{1,80}$/.test(id))continue;const work=obj(raw);
  homework[id]={text:typeof work.text==='string'?work.text.slice(0,8000):'',done:work.done===true,attempts:Array.isArray(work.attempts)?work.attempts.flatMap(raw=>{const a=obj(raw);return typeof a.text==='string'&&typeof a.feedback==='string'&&typeof a.date==='string'?[{text:a.text.slice(0,8000),feedback:a.feedback.slice(0,30000),date:a.date}]:[]}):[]};
 }
 return {progress:restoreProgress(source.progress),chat:{role:typeof chat.role==='string'&&['Kommilitone','Professor','Beamter','Mitbewohner'].includes(chat.role)?chat.role:'Kommilitone',messages:Array.isArray(chat.messages)?chat.messages.flatMap(raw=>{const m=obj(raw);return typeof m.author==='string'&&typeof m.text==='string'?[{author:m.author.slice(0,40),text:m.text.slice(0,30000)}]:[]}).slice(-40):[]},homework};
}
export function hasLearningWork(value:LearningState){const p=value.progress;return !!(p.profile||p.writing||p.warmup||p.completed.length||p.reviews.length||p.stage||Object.values(p.drafts).some(d=>d.writing||d.warmup||d.stage||Object.keys(d.answers).length)||value.chat.messages.length||Object.keys(value.homework).length);}
