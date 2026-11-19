import { authFailure, authInput, authResponse, clearSessionCookie } from '@/lib/auth-http';
import { resetPassword } from '@/lib/password-reset';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    await resetPassword(await authInput(request));
    return clearSessionCookie(authResponse({ ok: true }), request);
  } catch (error) { return authFailure(error); }
}
