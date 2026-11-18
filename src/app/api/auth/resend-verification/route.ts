import {resendVerification} from '@/lib/email-verification';
import {authFailure,authInput,authResponse} from '@/lib/auth-http';
export const runtime='nodejs';
export async function POST(request:Request){try{const input=await authInput(request);return authResponse(await resendVerification(input.email));}catch(error){return authFailure(error);}}
