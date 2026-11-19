import {restoreProgress, initialProgress, type Progress} from './learning.ts';
export type ChatMessage={author:string;text:string};
export type HomeworkAttempt={text:string;feedback:string;date:string};
export type HomeworkWork={text:string;attempts:HomeworkAttempt[];done:boolean};
export type Chat={id:string;role:string;created:number;messages:ChatMessage[]};
export const tutorRoles=['Kommilitone','Professor','Beamter','Mitbewohner'];
/** Chats older than this are removed on every load and save (client and server). */
export const CHAT_TTL_DAYS=14;
export type LearningState={progress:Progress;chats:Chat[];homework:Record<string,HomeworkWork>};
export const emptyLearningState=():LearningState=>({progress:restoreProgress(initialProgress),chats:[],homework:{}});
const obj=(v:unknown):Record<string,unknown>=>v&&typeof v==='object'&&!Array.isArray(v)?v as Record<string,unknown>:{};
export function normalizeLearningState(value:unknown):LearningState{
 const source=obj(value),homework:Record<string,HomeworkWork>={};
 for(const [id,raw]of Object.entries(obj(source.homework))){if(!/^[a-z0-9-]{1,80}$/.test(id))continue;const work=obj(raw);
  homework[id]={text:typeof work.text==='string'?work.text.slice(0,8000):'',done:work.done===true,attempts:Array.isArray(work.attempts)?work.attempts.flatMap(raw=>{const a=obj(raw);return typeof a.text==='string'&&typeof a.feedback==='string'&&typeof a.date==='string'?[{text:a.text.slice(0,8000),feedback:a.feedback.slice(0,30000),date:a.date}]:[]}):[]};
 }
 const now=Date.now(),messages=(v:unknown)=>Array.isArray(v)?v.flatMap(raw=>{const m=obj(raw);return typeof m.author==='string'&&typeof m.text==='string'?[{author:m.author.slice(0,40),text:m.text.slice(0,30000)}]:[]}).slice(-40):[];
 const chat=(raw:unknown,id:unknown):Chat[]=>{const c=obj(raw),list=messages(c.messages);return list.length&&typeof id==='string'&&/^[\w-]{1,64}$/.test(id)?[{id,role:typeof c.role==='string'&&tutorRoles.includes(c.role)?c.role:'Kommilitone',created:Number.isSafeInteger(c.created)?c.created as number:now,messages:list}]:[];};
 // Older saves kept a single conversation in `chat`; it becomes the first chat in the list.
 const chats=Array.isArray(source.chats)?source.chats.flatMap(c=>chat(c,obj(c).id)):chat(source.chat,'legacy');
 return {progress:restoreProgress(source.progress),chats:chats.filter(c=>c.created>now-CHAT_TTL_DAYS*86400000).slice(-30),homework};
}
export function hasLearningWork(value:LearningState){const p=value.progress;return !!(p.profile||Object.keys(p.words).length||Object.keys(p.modules).length||p.sessions.length||value.chats.length||Object.keys(value.homework).length);}
