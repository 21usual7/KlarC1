import { timingSafeEqual } from 'node:crypto';
import { cookies } from 'next/headers';
import { accountName, activeSession, AuthError, SESSION_COOKIE, sessionParams, sessionUser } from '@/lib/auth';
import { hashPassword, limit, passwordValue } from '@/lib/auth-local';
import { authFailure, authInput, authResponse, clearSessionCookie } from '@/lib/auth-http';
import { d1Batch, d1Query } from '@/lib/d1';

export const runtime = 'nodejs';

async function account() {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  const user = await sessionUser(token);
  if (!user) throw new AuthError(401, 'Войди в аккаунт.');
  return { user, token };
}

export async function GET() {
  try {
    const { user } = await account();
    const rows = await d1Query('SELECT 1 FROM scoreboard WHERE user_id = ?', [user.id]);
    return authResponse({ user, ranked: rows.length > 0 });
  } catch (error) { return authFailure(error); }
}

export async function PATCH(request: Request) {
  try {
    const input = await authInput(request);
    const { user, token } = await account();
    const name = accountName(input.name);
    if (typeof input.ranked !== 'boolean') throw new AuthError(400, 'Укажи, хочешь ли участвовать в рейтинге.');
    const params = [user.id, ...sessionParams(token)];
    const [updated] = await d1Batch([
      { sql: `UPDATE users SET name = ? WHERE id = ? AND id = (${activeSession}) RETURNING id`, params: [name, ...params] },
      input.ranked ? {
        sql: `INSERT INTO scoreboard (user_id, lessons, tests)
              SELECT users.id, COALESCE(scores.lessons, 0), COALESCE(scores.tests, 0)
              FROM users LEFT JOIN learning_scores AS scores ON scores.user_id = users.id
              WHERE users.id = ? AND users.id = (${activeSession})
              ON CONFLICT(user_id) DO NOTHING`,
        params,
      } : {
        sql: `DELETE FROM scoreboard WHERE user_id = ? AND user_id = (${activeSession})`,
        params,
      },
    ]);
    if (!updated.length) throw new AuthError(401, 'Войди в аккаунт.');
    return authResponse({ user: { ...user, name }, ranked: input.ranked });
  } catch (error) { return authFailure(error); }
}

export async function DELETE(request: Request) {
  try {
    const input = await authInput(request);
    const { user, token } = await account();
    if (input.acknowledged !== true || input.confirmation !== 'УДАЛИТЬ') {
      throw new AuthError(400, 'Подтверди последствия и введи слово УДАЛИТЬ.');
    }
    const password = passwordValue(input.password, false);
    limit(`account-deletion:${user.id}`);
    const [credentials] = await d1Query<{ salt: string; password_hash: string }>(
      'SELECT salt, password_hash FROM users WHERE id = ?', [user.id],
    );
    if (!credentials) throw new AuthError(401, 'Войди в аккаунт.');
    const calculated = await hashPassword(password, credentials.salt);
    const stored = Buffer.from(credentials.password_hash, 'hex');
    if (stored.length !== calculated.length || !timingSafeEqual(stored, calculated)) {
      throw new AuthError(403, 'Текущий пароль неверен.');
    }
    const rows = await d1Query(
      `DELETE FROM users WHERE id = ? AND password_hash = ? AND id = (${activeSession}) RETURNING id`,
      [user.id, credentials.password_hash, ...sessionParams(token)],
    );
    if (!rows.length) throw new AuthError(401, 'Сессия истекла. Войди снова.');
    return clearSessionCookie(authResponse({ ok: true }), request);
  } catch (error) { return authFailure(error); }
}
