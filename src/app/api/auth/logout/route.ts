import { cookies } from 'next/headers';
import { logoutUser, SESSION_COOKIE } from '@/lib/auth';
import { assertSameOrigin, authFailure, authResponse } from '@/lib/auth-http';
export const runtime = 'nodejs';
export async function POST(request: Request) {
  try {
    assertSameOrigin(request);
    await logoutUser((await cookies()).get(SESSION_COOKIE)?.value);
    const response = authResponse({ user: null });
    response.cookies.set(SESSION_COOKIE, '', { httpOnly: true, sameSite: 'lax', path: '/', maxAge: 0, secure: new URL(request.url).protocol === 'https:' });
    return response;
  } catch (error) { return authFailure(error); }
}
