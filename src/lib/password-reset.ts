import { randomBytes } from 'node:crypto';
import { digest, requireD1, validToken } from './auth.ts';
import { AuthError, passwordValue, hashPassword } from './auth-local.ts';
import { d1Query } from './d1.ts';
import { deliverEmail, emailLink } from './email-delivery.ts';

const invalidLink = () => new AuthError(400, 'Ссылка недействительна или устарела. Запроси новое письмо.');

export async function sendPasswordReset(email: string) {
  const token = randomBytes(32).toString('hex');
  const hash = digest(token);
  const link = emailLink(`/reset-password#token=${token}`);
  const now = Date.now();
  const rows = await d1Query(
    `INSERT INTO password_resets (user_id, token_hash, expires_at, next_send_at)
     SELECT id, ?, ?, ? FROM users WHERE email = ? AND email_verified_at IS NOT NULL
     ON CONFLICT (user_id) DO UPDATE SET token_hash = excluded.token_hash,
      expires_at = excluded.expires_at, next_send_at = excluded.next_send_at
     WHERE password_resets.next_send_at <= ? RETURNING user_id`,
    [hash, now + 30 * 60_000, now + 5 * 60_000, email, now],
  );
  if (!rows.length) return;
  const delivery = await deliverEmail(email, 'Сброс пароля Klar C1',
    `Задай новый пароль для Klar C1.\n\n${link}\n\nСсылка действует 30 минут и используется один раз. Если ты не запрашивал сброс, проигнорируй письмо.`,
    `klar-reset-${hash}`);
  if (delivery !== 'sent') console.error('Klar C1: password reset email delivery failed.');
}

export async function resetPassword(input: Record<string, unknown>) {
  requireD1();
  if (typeof input.token !== 'string' || !validToken(input.token)) throw invalidLink();
  const password = passwordValue(input.password, true);
  const hash = digest(input.token);
  const [reset] = await d1Query<{ user_id: string }>(
    'SELECT user_id FROM password_resets WHERE token_hash = ? AND expires_at > ?', [hash, Date.now()],
  );
  if (!reset) throw invalidLink();

  const salt = randomBytes(16).toString('hex');
  const passwordHash = (await hashPassword(password, salt)).toString('hex');
  // The trigger consumes the link and revokes all sessions in the same write.
  const rows = await d1Query(
    `UPDATE users SET password_hash = ?, salt = ? WHERE id = (
      SELECT user_id FROM password_resets WHERE token_hash = ? AND expires_at > ?
    ) RETURNING id`, [passwordHash, salt, hash, Date.now()],
  );
  if (!rows.length) throw invalidLink();
}
