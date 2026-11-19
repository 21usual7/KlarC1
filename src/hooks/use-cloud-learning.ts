'use client';
import {useCallback,useEffect,useRef,useState,type SetStateAction} from 'react';
import {emptyLearningState,hasLearningWork,normalizeLearningState,type LearningState} from '@/lib/cloud-state';
import type {PublicUser} from '@/lib/auth';
type Cache={snapshot:LearningState;revision:number;dirty:boolean};
type State={snapshot:LearningState;user:PublicUser|null;owner:string;ready:boolean;revision:number;status:string;error:string;conflict:boolean;canImport:boolean};
const cacheKey=(owner:string)=>`klar-cloud-v1:${owner}`;
function readCache(owner:string):Cache|null{try{const raw=JSON.parse(localStorage.getItem(cacheKey(owner))||'null');return raw?{snapshot:normalizeLearningState(raw.snapshot),revision:Number(raw.revision)||0,dirty:raw.dirty===true}:null;}catch{return null;}}
function writeCache(owner:string,snapshot:LearningState,revision:number,dirty:boolean){localStorage.setItem(cacheKey(owner),JSON.stringify({snapshot,revision,dirty}));}
function guestCache():Cache{
 const cached=readCache('guest');if(cached)return cached;
 let snapshot=emptyLearningState();try{const oldChat=JSON.parse(localStorage.getItem('klar-chat-v1')||'null');snapshot=normalizeLearningState({progress:JSON.parse(localStorage.getItem('klar-c1-v1')||'null'),chat:{role:oldChat?.role,messages:oldChat?.chat},homework:JSON.parse(localStorage.getItem('klar-homework-v1')||'{}')});}catch{}
 try{writeCache('guest',snapshot,0,false);}catch{}return {snapshot,revision:0,dirty:false};
}
export function useCloudLearning(){
 const [state,setState]=useState<State>({snapshot:emptyLearningState(),user:null,owner:'guest',ready:false,revision:0,status:'Загрузка…',error:'',conflict:false,canImport:false});
 const live=useRef(state);const epoch=useRef(0);const dirty=useRef(false);const saving=useRef(false);const seq=useRef(0);
 const commit=useCallback((next:State)=>{live.current=next;setState(next);},[]);
 const persist=useCallback((s:State,pending:boolean)=>{try{writeCache(s.owner,s.snapshot,s.revision,pending);}catch{commit({...s,error:'Не удалось сохранить резервную копию в браузере.'});}},[commit]);
 // background: refresh from the cloud without unmounting the screen (keeps drafts, timers, focus).
 const reload=useCallback(async(background=false)=>{
  const generation=++epoch.current;saving.current=false;dirty.current=false;
  const quiet=background&&live.current.ready;
  const startSeq=seq.current;
  if(!quiet)commit({...live.current,ready:false,error:'',conflict:false,status:'Загрузка…'});
  try{
   const guest=guestCache();const response=await fetch('/api/data',{cache:'no-store'});const result=await response.json();if(!response.ok)throw new Error(result.error||'Не удалось загрузить данные.');if(generation!==epoch.current)return;
   if(quiet&&seq.current!==startSeq)return; // edited while fetching: keep local work, the autosave will push it
   const owner=result.user?.id||'guest';const cached=owner==='guest'?guest:readCache(owner);
   const remote=result.state?normalizeLearningState(result.state):emptyLearningState();
   const conflict=!!(result.user&&cached?.dirty&&cached.revision!==result.revision);
   const pending=!!(result.user&&cached?.dirty);
   const snapshot=!result.user?guest.snapshot:pending?cached!.snapshot:remote;
   const next:State={snapshot,user:result.user,owner,ready:true,revision:pending?cached!.revision:result.revision,status:result.user?pending?'Есть несохранённые изменения':'Сохранено в Cloudflare D1':'Гостевой режим · на этом устройстве',error:conflict?'Облачная версия изменилась. Твоя локальная работа сохранена отдельно.':'',conflict,canImport:!!(result.user&&!result.state&&!pending&&hasLearningWork(guest.snapshot))};
   dirty.current=pending;commit(next);persist(next,pending);
  }catch(e){if(generation===epoch.current)commit({...live.current,ready:quiet,error:e instanceof Error?e.message:'Нет соединения с сервером.',status:'Нет соединения'});}
 },[commit,persist]);
 const flush=useCallback(async()=>{
  const generation=epoch.current;if(saving.current||!dirty.current||!live.current.user||!live.current.ready||live.current.conflict)return;
  saving.current=true;
  try{while(dirty.current&&generation===epoch.current){
   const s=live.current;const version=seq.current;commit({...s,status:'Сохраняем…',error:''});
   const response=await fetch('/api/data',{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({state:s.snapshot,revision:s.revision})});
   const result=await response.json();if(generation!==epoch.current)return;
   if(response.status===409){commit({...live.current,conflict:true,status:'Конфликт версий',error:'На другом устройстве есть изменения. Скачай локальную копию, затем загрузи облачную версию.'});return;}
   if(!response.ok)throw new Error(result.error||'Не удалось сохранить данные.');
   dirty.current=seq.current!==version;
   const next={...live.current,revision:result.revision,status:dirty.current?'Есть изменения':'Сохранено в Cloudflare D1',error:''};commit(next);persist(next,dirty.current);
  }}catch(e){if(generation===epoch.current)commit({...live.current,status:'Пока не сохранено в облаке',error:e instanceof Error?e.message:'Нет соединения. Локальная копия сохранена.'});}
  finally{if(generation===epoch.current)saving.current=false;}
 },[commit,persist]);
 useEffect(()=>{void reload();const changed=()=>{void reload();};const focus=()=>{if(!dirty.current&&!saving.current)void reload(true);};window.addEventListener('klar-auth-changed',changed);window.addEventListener('focus',focus);return()=>{epoch.current++;window.removeEventListener('klar-auth-changed',changed);window.removeEventListener('focus',focus);};},[reload]);
 useEffect(()=>{if(!state.ready||!state.user||state.conflict)return;const timer=setTimeout(()=>{void flush();},1200);return()=>clearTimeout(timer);},[state.snapshot,state.ready,state.user,state.conflict,flush]);
 useEffect(()=>{const unload=(e:BeforeUnloadEvent)=>{if(dirty.current&&live.current.user){e.preventDefault();e.returnValue='';}};window.addEventListener('beforeunload',unload);return()=>window.removeEventListener('beforeunload',unload);},[]);
 useEffect(()=>{
  const cacheRemoved=(event:StorageEvent)=>{
   const user=live.current.user;
   if(!user||event.key!==cacheKey(user.id)||event.newValue!==null)return;
   epoch.current++;dirty.current=false;saving.current=false;
   window.location.replace('/');
  };
  window.addEventListener('storage',cacheRemoved);
  return()=>window.removeEventListener('storage',cacheRemoved);
 },[]);
 const owner=state.owner;
 const update=useCallback((change:SetStateAction<LearningState>)=>{if(live.current.owner!==owner||!live.current.ready)return;const snapshot=typeof change==='function'?change(live.current.snapshot):change;seq.current++;dirty.current=!!live.current.user;const next={...live.current,snapshot,canImport:false,status:live.current.user?'Есть изменения':'Гостевой режим · на этом устройстве'};commit(next);persist(next,dirty.current);},[owner,commit,persist]);
 const useCloud=async()=>{const cached=readCache(live.current.owner);if(cached){const backup=`klar-cloud-conflict-backup:${live.current.owner}:${Date.now()}`;localStorage.setItem(backup,JSON.stringify(cached));writeCache(live.current.owner,cached.snapshot,cached.revision,false);}await reload();};
 const exportLocal=()=>{const blob=new Blob([JSON.stringify(live.current.snapshot,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='klar-learning-backup.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);};
 const updateUser=(user:PublicUser)=>{if(live.current.user?.id===user.id)commit({...live.current,user});};
 const clearDeletedAccount=()=>{
  const user=live.current.user;
  if(!user)return;
  epoch.current++;dirty.current=false;saving.current=false;
  try{
   localStorage.removeItem(cacheKey(user.id));
   const prefix=`klar-cloud-conflict-backup:${user.id}:`;
   for(const key of Object.keys(localStorage))if(key.startsWith(prefix))localStorage.removeItem(key);
  }catch{}
  window.location.replace('/');
 };
 return {...state,update,updateUser,clearDeletedAccount,reload,flush,useCloud,exportLocal,importGuest:()=>{if(live.current.canImport){update(guestCache().snapshot);commit({...live.current,canImport:false});}}};
}
