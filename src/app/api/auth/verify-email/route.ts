import {confirmEmail} from '@/lib/email-verification';
import {authFailure,authInput,authResponse} from '@/lib/auth-http';
export const runtime='nodejs';
export async function POST(request:Request){try{const input=await authInput(request);await confirmEmail(input.token);return authResponse({message:'Email подтверждён. Теперь можно войти в аккаунт.'});}catch(error){return authFailure(error);}}
