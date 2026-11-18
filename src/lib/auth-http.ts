import {isSameOriginRequest} from './request-origin';
import { NextResponse } from 'next/server';
import { AuthError, SESSION_COOKIE, SESSION_SECONDS } from './auth';
export function authResponse(body: unknown, status = 200) {
  return NextResponse.json(body, { status, headers: { 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' } });
}
export function authFailure(error: unknown) {
  return authResponse({ error: error instanceof AuthError ? error.message : 'Хранилище аккаунтов временно недоступно. Попробуйте ещё раз.' }, error instanceof AuthError ? error.status : 500);
}
export function assertSameOrigin(request: Request) {
  if(!isSameOriginRequest(request,process.env.APP_ORIGIN))throw new AuthError(403, 'Откройте форму на этом сайте и повторите попытку.');
}
export async function authInput(request: Request): Promise<Record<string, unknown>> {
  assertSameOrigin(request);
  if (!request.headers.get('content-type')?.toLowerCase().startsWith('application/json')) throw new AuthError(415, 'Ожидается JSON.');
  const reader = request.body?.getReader();
  if (!reader) throw new AuthError(400, 'Заполните форму.');
  const chunks: Uint8Array[] = []; let size = 0;
  for (;;) {
    const { done, value } = await reader.read(); if (done) break;
    size += value.length;
    if (size > 8192) { await reader.cancel(); throw new AuthError(413, 'Форма слишком большая.'); }
    chunks.push(value);
  }
  try {
    const value = JSON.parse(Buffer.concat(chunks).toString('utf8'));
    if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error();
    return value;
  } catch { throw new AuthError(400, 'Не удалось прочитать форму.'); }
}
export function setSessionCookie(response: NextResponse, token: string, secure: boolean) {
  response.cookies.set(SESSION_COOKIE, token, { httpOnly: true, secure, sameSite: 'lax', path: '/', maxAge: SESSION_SECONDS });
  return response;
}
