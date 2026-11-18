import { createHash, randomBytes, randomUUID, timingSafeEqual } from 'node:crypto';
import { d1Batch, d1Configured, d1PartiallyConfigured, d1Query } from './d1.ts';
import * as local from './auth-local.ts';

export { AuthError, SESSION_COOKIE, SESSION_SECONDS } from './auth-local.ts';
export type { PublicUser } from './auth-local.ts';

function useD1() {
  if (d1Configured()) return true;
  if (d1PartiallyConfigured()) throw new local.AuthError(503, 'Настройка облачного хранилища не завершена. Локальная запись отключена.');
  return false;
}

type D1User = local.PublicUser & { password_hash: string; salt: string; created_at: string };
const visible = ({ id, name, email }: local.PublicUser): local.PublicUser => ({ id, name, email });
const digest = (token: string) => createHash('sha256').update(token).digest('hex');
const validToken = (token: string | undefined): token is string => !!token && /^[a-f0-9]{64}$/.test(token);
function newSession(userId: string) {
  const token = randomBytes(32).toString('hex');
  return { token, statement: { sql: 'INSERT INTO sessions (token_hash, user_id, expires_at) VALUES (?, ?, ?)', params: [digest(token), userId, Date.now() + local.SESSION_SECONDS * 1000] } };
}

export async function registerUser(input: Record<string, unknown>) {
  if (!useD1()) return local.registerUser(input);
  const email = local.emailValue(input.email);
  const password = local.passwordValue(input.password, true);
  if (typeof input.name !== 'string' || !input.name.trim() || input.name.trim().length > 60) throw new local.AuthError(400, 'Укажите имя длиной до 60 символов.');
  local.limit(email);
  const salt = randomBytes(16).toString('hex');
  const passwordHash = (await local.hashPassword(password, salt)).toString('hex');
  const user = { id: randomUUID(), name: input.name.trim(), email };
  const session = newSession(user.id);
  try {
    await d1Batch([
      { sql: 'INSERT INTO users (id, name, email, password_hash, salt, created_at) VALUES (?, ?, ?, ?, ?, ?)', params: [user.id, user.name, user.email, passwordHash, salt, new Date().toISOString()] },
      session.statement,
    ]);
  } catch (error) {
    // Check the database instead of depending on upstream error text or leaking it.
    // A configured D1 failure must never write an account to the local fallback.
    const existing = await d1Query<{ id: string }>('SELECT id FROM users WHERE email = ? LIMIT 1', [email]);
    if (existing.length) throw new local.AuthError(409, 'Этот email уже зарегистрирован. Переключитесь на вход.');
    throw error;
  }
  return { user, token: session.token };
}

export async function loginUser(input: Record<string, unknown>) {
  if (!useD1()) return local.loginUser(input);
  const email = local.emailValue(input.email);
  const password = local.passwordValue(input.password, false);
  local.limit(email);
  const [user] = await d1Query<D1User>('SELECT id, name, email, password_hash, salt, created_at FROM users WHERE email = ? LIMIT 1', [email]);
  const calculated = await local.hashPassword(password, user?.salt || 'klar-local-nonexistent-account');
  const stored = user ? Buffer.from(user.password_hash, 'hex') : Buffer.alloc(64);
  if (!user || stored.length !== calculated.length || !timingSafeEqual(stored, calculated)) throw new local.AuthError(401, 'Неверный email или пароль.');
  const session = newSession(user.id);
  const now = Date.now();
  await d1Batch([
    { sql: 'DELETE FROM sessions WHERE expires_at <= ?', params: [now] },
    { sql: 'DELETE FROM sessions WHERE user_id = ? AND token_hash NOT IN (SELECT token_hash FROM sessions WHERE user_id = ? ORDER BY expires_at DESC LIMIT 9)', params: [user.id, user.id] },
    session.statement,
  ]);
  return { user: visible(user), token: session.token };
}

export async function sessionUser(token: string | undefined): Promise<local.PublicUser | null> {
  if (!useD1()) return local.sessionUser(token);
  if (!validToken(token)) return null;
  const [user] = await d1Query<local.PublicUser>('SELECT users.id, users.name, users.email FROM sessions JOIN users ON users.id = sessions.user_id WHERE sessions.token_hash = ? AND sessions.expires_at > ? LIMIT 1', [digest(token), Date.now()]);
  return user ? visible(user) : null;
}

export async function logoutUser(token: string | undefined) {
  if (!useD1()) return local.logoutUser(token);
  if (!validToken(token)) return;
  await d1Query('DELETE FROM sessions WHERE token_hash = ?', [digest(token)]);
}
