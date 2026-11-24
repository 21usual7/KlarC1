import { localeFromRequest } from '@/i18n/server';
import { after } from 'next/server';
import { requireD1 } from '@/lib/auth';
import { AuthError, emailValue, limit } from '@/lib/auth-local';
import { authFailure, authInput, authResponse } from '@/lib/auth-http';
import { verifiedClientIp } from '@/lib/client-ip';
import { emailConfigured, emailLink } from '@/lib/email-delivery';
import { sendPasswordReset } from '@/lib/password-reset';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const email = emailValue((await authInput(request)).email);
    requireD1();
    if (!emailConfigured()) throw new AuthError(503, 'Отправка писем временно недоступна.');
    emailLink('/reset-password');
    const ip = verifiedClientIp(request.headers);
    limit(`password-reset:${ip ?? 'unknown'}`);

    after(async () => {
      try { await sendPasswordReset(email, localeFromRequest(request)); }
      catch { console.error('Klar C1: password reset request failed.'); }
    });
    return authResponse({ message: 'Если этот адрес подтверждён в Klar C1, мы отправим письмо со ссылкой. Проверь входящие и спам.' }, 202);
  } catch (error) { return authFailure(error); }
}
