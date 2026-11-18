import { createHash, randomBytes, randomUUID, scrypt, timingSafeEqual } from 'node:crypto';
import { mkdir, readFile, rename, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

export type PublicUser = { id: string; name: string; email: string };
type User = PublicUser & { passwordHash: string; salt: string; createdAt: string };
type Session = { tokenHash: string; userId: string; expiresAt: number };
type Database = { users: User[]; sessions: Session[] };
export const SESSION_COOKIE = 'klar_session';
export const SESSION_SECONDS = 60 * 60 * 24 * 30;
const directory = path.join(process.cwd(), '.data');
const databaseFile = path.join(directory, 'auth.json');
const lockPath = path.join(directory, 'auth.lock');

export class AuthError extends Error {
  readonly status: number;
  constructor(status: number, message: string) { super(message); this.status = status; }
}
const visible = ({ id, name, email }: User): PublicUser => ({ id, name, email });
const digest = (token: string) => createHash('sha256').update(token).digest('hex');
export const hashPassword = (password: string, salt: string) => new Promise<Buffer>((resolve, reject) => {
  scrypt(password, salt, 64, { N: 32768, r: 8, p: 1, maxmem: 64 * 1024 * 1024 }, (error, result) => error ? reject(error) : resolve(result));
});
async function withDatabase<T>(operation: (database: Database) => T | Promise<T>, save = false): Promise<T> {
  await mkdir(directory, { recursive: true, mode: 0o700 });
  let locked = false;
  for (let attempt = 0; attempt < 100; attempt++) {
    try { await mkdir(lockPath, { mode: 0o700 }); locked = true; break; }
    catch (error) { if ((error as NodeJS.ErrnoException).code !== 'EEXIST') throw error; await new Promise(resolve => setTimeout(resolve, 25)); }
  }
  if (!locked) throw new AuthError(503, 'Хранилище занято. Попробуйте ещё раз через несколько секунд.');
  try {
    let database: Database;
    try {
      database = JSON.parse(await readFile(databaseFile, 'utf8'));
      if (!Array.isArray(database.users) || !Array.isArray(database.sessions)) throw new Error('Invalid auth storage');
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code !== 'ENOENT') throw error;
      database = { users: [], sessions: [] };
    }
    const result = await operation(database);
    if (save) {
      database.sessions = database.sessions.filter(session => session.expiresAt > Date.now());
      const temporary = path.join(directory, `auth-${randomUUID()}.tmp`);
      try { await writeFile(temporary, JSON.stringify(database), { mode: 0o600, flag: 'wx' }); await rename(temporary, databaseFile); }
      finally { await rm(temporary, { force: true }); }
    }
    return result;
  } finally { await rm(lockPath, { recursive: true, force: true }); }
}
export function emailValue(value: unknown): string {
  if (typeof value !== 'string') throw new AuthError(400, 'Укажите email.');
  const email = value.trim().toLowerCase();
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new AuthError(400, 'Проверьте адрес email.');
  return email;
}
export function passwordValue(value: unknown, registration: boolean): string {
  if (typeof value !== 'string' || !value || value.length > 128 || (registration && value.length < 12)) throw new AuthError(400, registration ? 'Пароль должен содержать от 12 до 128 символов.' : 'Укажите email и пароль.');
  return value;
}
// A small process-local limiter for the local prototype. Restarting the server resets it.
const authGlobal = globalThis as typeof globalThis & { klarAuthAttempts?: Map<string, { count: number; reset: number }> };
const attempts = authGlobal.klarAuthAttempts ||= new Map();
export function limit(email: string) {
  const key = digest(email); const now = Date.now();
  if (attempts.size > 1000) for (const [id, entry] of attempts) if (entry.reset < now) attempts.delete(id);
  const entry = attempts.get(key);
  if (entry && entry.reset > now) {
    if (entry.count >= 10) throw new AuthError(429, 'Слишком много попыток. Попробуйте через 15 минут.');
    entry.count++;
  } else attempts.set(key, { count: 1, reset: now + 15 * 60 * 1000 });
}
function addSession(database: Database, userId: string) {
  const token = randomBytes(32).toString('hex');
  const userSessions = database.sessions.filter(session => session.userId === userId && session.expiresAt > Date.now());
  if (userSessions.length >= 10) database.sessions = database.sessions.filter(session => session !== userSessions[0]);
  database.sessions.push({ userId, tokenHash: digest(token), expiresAt: Date.now() + SESSION_SECONDS * 1000 });
  return token;
}
export async function registerUser(input: Record<string, unknown>) {
  const email = emailValue(input.email); const password = passwordValue(input.password, true);
  if (typeof input.name !== 'string' || !input.name.trim() || input.name.trim().length > 60) throw new AuthError(400, 'Укажите имя длиной до 60 символов.');
  const name = input.name.trim(); limit(email);
  const salt = randomBytes(16).toString('hex'); const passwordHash = (await hashPassword(password, salt)).toString('hex');
  return withDatabase(database => {
    if (database.users.some(user => user.email === email)) throw new AuthError(409, 'Этот email уже зарегистрирован. Переключитесь на вход.');
    const user: User = { id: randomUUID(), name, email, salt, passwordHash, createdAt: new Date().toISOString() };
    database.users.push(user);
    return { user: visible(user), token: addSession(database, user.id) };
  }, true);
}
export async function loginUser(input: Record<string, unknown>) {
  const email = emailValue(input.email); const password = passwordValue(input.password, false); limit(email);
  const user = await withDatabase(database => database.users.find(item => item.email === email));
  const calculated = await hashPassword(password, user?.salt || 'klar-local-nonexistent-account');
  const stored = user ? Buffer.from(user.passwordHash, 'hex') : Buffer.alloc(64);
  if (!user || stored.length !== calculated.length || !timingSafeEqual(stored, calculated)) throw new AuthError(401, 'Неверный email или пароль.');
  return withDatabase(database => ({ user: visible(user), token: addSession(database, user.id) }), true);
}
export async function sessionUser(token: string | undefined): Promise<PublicUser | null> {
  if (!token || !/^[a-f0-9]{64}$/.test(token)) return null;
  return withDatabase(database => {
    const session = database.sessions.find(item => item.tokenHash === digest(token) && item.expiresAt > Date.now());
    const user = session && database.users.find(item => item.id === session.userId);
    return user ? visible(user) : null;
  });
}
export async function logoutUser(token: string | undefined) {
  if (!token || !/^[a-f0-9]{64}$/.test(token)) return;
  await withDatabase(database => { database.sessions = database.sessions.filter(item => item.tokenHash !== digest(token)); }, true);
}
