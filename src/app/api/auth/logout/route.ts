import { cookies } from 'next/headers';
import { logoutUser, SESSION_COOKIE } from '@/lib/auth';
import { assertSameOrigin, authFailure, authResponse, clearSessionCookie } from '@/lib/auth-http';
export const runtime = 'nodejs';
export async function POST(request: Request) {
  try {
    assertSameOrigin(request);
    await logoutUser((await cookies()).get(SESSION_COOKIE)?.value);
    return clearSessionCookie(authResponse({ user: null }), request);
  } catch (error) { return authFailure(error); }
}
