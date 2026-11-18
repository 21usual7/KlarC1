import { loginUser } from '@/lib/auth';
import { authFailure, authInput, authResponse, setSessionCookie } from '@/lib/auth-http';
export const runtime = 'nodejs';
export async function POST(request: Request) {
  try {
    const { user, token } = await loginUser(await authInput(request));
    return setSessionCookie(authResponse({ user }), token, new URL(request.url).protocol === 'https:');
  } catch (error) { return authFailure(error); }
}
