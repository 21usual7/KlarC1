import { cookies } from 'next/headers';
import { SESSION_COOKIE, sessionUser } from '@/lib/auth';
import { authFailure, authResponse } from '@/lib/auth-http';
export const runtime = 'nodejs';
export async function GET() {
  try { return authResponse({ user: await sessionUser((await cookies()).get(SESSION_COOKIE)?.value) }); }
  catch (error) { return authFailure(error); }
}
