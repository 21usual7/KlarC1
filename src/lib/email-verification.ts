import {createHash,randomBytes} from 'node:crypto';
import {d1Configured,d1Query} from './d1.ts';
import {AuthError} from './auth-local.ts';
import {deliverEmail,emailConfigured,emailLink,type EmailDelivery} from './email-delivery.ts';
import {emails} from '../i18n/emails.ts';
import type {Locale} from '../i18n/locales.ts';
export async function sendVerification(userId:string,email:string,locale:Locale='ru'):Promise<EmailDelivery>{
 if(!d1Configured())throw new AuthError(503,'Облачное хранилище не настроено.');
 if(!emailConfigured())return 'not_configured';
 const token=randomBytes(32).toString('hex');const hash=createHash('sha256').update(token).digest('hex');
 let link:string;try{link=emailLink(`/verify-email#token=${token}`);}catch{return 'failed';}
 const now=Date.now();
 const claimed=await d1Query('INSERT INTO email_send_limits (user_id,next_send_at,window_start,send_count) VALUES (?,?,?,1) ON CONFLICT(user_id) DO UPDATE SET next_send_at=excluded.next_send_at, window_start=CASE WHEN email_send_limits.window_start<=? THEN excluded.window_start ELSE email_send_limits.window_start END, send_count=CASE WHEN email_send_limits.window_start<=? THEN 1 ELSE email_send_limits.send_count+1 END WHERE email_send_limits.next_send_at<=? AND (email_send_limits.window_start<=? OR email_send_limits.send_count<5) RETURNING user_id',[userId,now+60000,now,now-3600000,now-3600000,now,now-3600000]);
 if(!claimed.length)throw new AuthError(429,'Подожди минуту перед повторной отправкой. Допускается не больше пяти писем в час.');
 await d1Query('DELETE FROM email_verifications WHERE expires_at<=?',[now]);
 await d1Query('INSERT INTO email_verifications (token_hash,user_id,expires_at) VALUES (?,?,?)',[hash,userId,now+86400000]);
 return deliverEmail(email,emails[locale].verify.subject,emails[locale].verify.text(link),`klar-verify-${hash}`);
}
export async function confirmEmail(token:unknown){
 if(!d1Configured())throw new AuthError(503,'Облачное хранилище не настроено.');
 if(typeof token!=='string'||!/^[a-f0-9]{64}$/.test(token))throw new AuthError(400,'Ссылка недействительна или устарела. Запроси новое письмо.');
 const hash=createHash('sha256').update(token).digest('hex');
 const rows=await d1Query<{id:string}>('UPDATE users SET email_verified_at=? WHERE email_verified_at IS NULL AND id=(SELECT user_id FROM email_verifications WHERE token_hash=? AND expires_at>?) RETURNING id',[new Date().toISOString(),hash,Date.now()]);
 if(!rows.length)throw new AuthError(400,'Ссылка недействительна, устарела или уже использована. Запроси новое письмо или войди, если email подтверждён.');
 try{await d1Query('DELETE FROM email_verifications WHERE user_id=?',[rows[0].id]);}catch{/* Already verified; leftover hashes cannot be reused. */}
}
export async function resendVerification(email:unknown,locale:Locale='ru'){
 if(!d1Configured())throw new AuthError(503,'Облачное хранилище не настроено.');
 if(typeof email!=='string'||email.length>254||! /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))throw new AuthError(400,'Проверь адрес email.');
 const [user]=await d1Query<{id:string;email:string;email_verified_at:string|null}>('SELECT id,email,email_verified_at FROM users WHERE email=?',[email.trim().toLowerCase()]);
 if(!user||user.email_verified_at)return {message:'Если аккаунт существует и ожидает подтверждения, письмо будет отправлено.'};
 const emailDelivery=await sendVerification(user.id,user.email,locale);
 return {message:emailDelivery==='sent'?'Письмо отправлено. Проверь входящие и спам.':emailDelivery==='not_configured'?'Отправка писем ещё не настроена. Аккаунт сохранён и ждёт подтверждения.':'Письмо не удалось отправить. Попробуй повторить позже.',emailDelivery};
}
