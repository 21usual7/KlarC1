import { NextResponse } from 'next/server';
import { readHistory, tutorPrompt } from '@/lib/tutor';
import { assignments } from '@/lib/homework';
export async function POST(request: Request) {
 let input;
 try { input=await request.json(); } catch { return NextResponse.json({error:'Некорректный запрос.'},{status:400}); }
 if(!input || typeof input.message!=='string' || !input.message.trim() || input.message.length>8000) return NextResponse.json({error:'Напишите от 1 до 8000 символов.'},{status:400});
 if(input.mode==='homework' && !assignments.some(a=>a.id===input.assignmentId)) return NextResponse.json({error:'Задание не найдено.'},{status:400});
 const gemini=process.env.GEMINI_API_KEY; const key=gemini || process.env.OPENAI_API_KEY;
 if(!key)return NextResponse.json({error:'Тьютор ещё не подключён. Нужен GEMINI_API_KEY или OPENAI_API_KEY на сервере.'},{status:503});
 const models=(gemini ? process.env.GEMINI_MODEL || 'gemini-flash-lite-latest,gemini-flash-latest' : process.env.OPENAI_MODEL || 'gpt-4.1-mini').split(',').map(m=>m.trim()).filter(Boolean).slice(0,3);
 const messages=[{role:'system',content:tutorPrompt(input)},...readHistory(input.history),{role:'user',content:input.message.trim()}];
 let lastStatus=502;
 for(const model of models) {
  try {
   const response=await fetch(gemini?'https://generativelanguage.googleapis.com/v1beta/openai/chat/completions':'https://api.openai.com/v1/chat/completions',{
    method:'POST',signal:AbortSignal.timeout(25000),headers:{Authorization:`Bearer ${key}`,'Content-Type':'application/json'},
    body:JSON.stringify({model,messages,...(gemini?{}:{max_tokens:1400})})
   });
   lastStatus=response.status;
   if(!response.ok){if([429,500,502,503,504,404].includes(response.status))continue;break;}
   const result=await response.json();const reply=result.choices?.[0]?.message?.content;
   if(typeof reply!=='string' || !reply.trim()){lastStatus=502;continue;}
   return NextResponse.json({reply,provider:gemini?'Gemini':'OpenAI',model});
  }catch{lastStatus=504;}
 }
 const limited=lastStatus===429;
 return NextResponse.json({error:limited?'Лимит запросов Gemini исчерпан. Подождите немного и попробуйте снова; текст остаётся у вас.':'Тьютор временно недоступен. Попробуйте снова; текст остаётся у вас.'},{status:limited?429:502});
}
