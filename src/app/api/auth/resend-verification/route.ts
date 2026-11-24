import { localeFromRequest } from '@/i18n/server';
import {resendVerification} from '@/lib/email-verification';
import {authFailure,authInput,authResponse} from '@/lib/auth-http';
export const runtime='nodejs';
export async function POST(request:Request){try{const input=await authInput(request);return authResponse(await resendVerification(input.email,localeFromRequest(request)));}catch(error){return authFailure(error);}}
