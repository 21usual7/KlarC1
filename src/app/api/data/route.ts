import {cookies} from 'next/headers';
import {activeSession,SESSION_COOKIE,sessionParams,sessionUser} from '@/lib/auth';
import {authFailure,authResponse,assertSameOrigin} from '@/lib/auth-http';
import {d1Configured,d1Query} from '@/lib/d1';
import {normalizeLearningState} from '@/lib/cloud-state';
export const runtime='nodejs';
async function currentUser(){return sessionUser((await cookies()).get(SESSION_COOKIE)?.value);}
export async function GET(){try{
 const user=await currentUser();if(!user)return authResponse({user:null,state:null,revision:0});
 if(!d1Configured())return authResponse({error:'Cloudflare D1 не настроена.'},503);
 const [row]=await d1Query<{payload:string;revision:number}>('SELECT payload, revision FROM learning_state WHERE user_id=?',[user.id]);
 return authResponse({user,state:row?normalizeLearningState(JSON.parse(row.payload)):null,revision:row?.revision||0});
}catch(error){return authFailure(error);}}
export async function PUT(request:Request){try{
 assertSameOrigin(request);const token=(await cookies()).get(SESSION_COOKIE)?.value;const user=await sessionUser(token);if(!user)return authResponse({error:'Войди в аккаунт для сохранения в облаке.'},401);
 if(!d1Configured())return authResponse({error:'Cloudflare D1 не настроена.'},503);
 if(!request.headers.get('content-type')?.startsWith('application/json'))return authResponse({error:'Ожидается JSON.'},415);
 const reader=request.body?.getReader();if(!reader)return authResponse({error:'Нет данных.'},400);let size=0;const chunks:Uint8Array[]=[];
 for(;;){const {done,value}=await reader.read();if(done)break;size+=value.length;if(size>1000000){await reader.cancel();return authResponse({error:'Объём сохранения превышает 1 МБ. Экспортируй историю и сократи её.'},413);}chunks.push(value);}
 let input;try{input=JSON.parse(Buffer.concat(chunks).toString('utf8'));}catch{return authResponse({error:'Некорректные данные.'},400);}
 if(!input||!Number.isSafeInteger(input.revision)||input.revision<0||!input.state||typeof input.state!=='object')return authResponse({error:'Некорректная версия сохранения.'},400);
 const payload=JSON.stringify(normalizeLearningState(input.state));const now=new Date().toISOString();
 const session = sessionParams(token);
 const rows = input.revision === 0
  ? await d1Query<{revision:number}>(
    `INSERT INTO learning_state (user_id,payload,revision,updated_at)
     SELECT ?,?,1,? WHERE ? = (${activeSession}) ON CONFLICT(user_id) DO NOTHING RETURNING revision`,
    [user.id,payload,now,user.id,...session])
  : await d1Query<{revision:number}>(
    `UPDATE learning_state SET payload=?, revision=revision+1, updated_at=?
     WHERE user_id=? AND revision=? AND user_id = (${activeSession}) RETURNING revision`,
    [payload,now,user.id,input.revision,...session]);
 if (!rows.length) {
  if (!await sessionUser(token)) return authResponse({error:'Войди в аккаунт для сохранения в облаке.'},401);
  return authResponse({error:'На другом устройстве уже сохранены изменения. Обнови облачную версию перед продолжением.'},409);
 }
 return authResponse({revision:rows[0].revision});
}catch(error){return authFailure(error);}}
