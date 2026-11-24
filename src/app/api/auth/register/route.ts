import { localeFromRequest } from '@/i18n/server';
import {registerUser} from '@/lib/auth';
import {sendVerification} from '@/lib/email-verification';
import {authFailure,authInput,authResponse} from '@/lib/auth-http';
export const runtime='nodejs';
export async function POST(request:Request){try{
 const {user}=await registerUser(await authInput(request));
 let emailDelivery:'sent'|'not_configured'|'failed';
 try{emailDelivery=await sendVerification(user.id,user.email,localeFromRequest(request));}catch{emailDelivery='failed';}
 return authResponse({user,verificationRequired:true,emailDelivery},201);
}catch(error){return authFailure(error);}}
