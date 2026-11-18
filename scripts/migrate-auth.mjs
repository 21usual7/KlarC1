#!/usr/bin/env node
// Run once after creating the D1 schema: node scripts/migrate-auth.mjs
// A successful second invocation is intentionally not a no-op: matching IDs/emails
// count as conflicts, so an operator must review them rather than overwrite data.
import { readFile } from 'node:fs/promises';
import path from 'node:path';

class MigrationError extends Error {}
const source = path.resolve('.data/auth.json');
async function main() {
  try { process.loadEnvFile(path.resolve('.env.local')); }
  catch (error) { if (error.code !== 'ENOENT') throw new MigrationError('Не удалось загрузить .env.local.'); }
  const token = process.env.CLOUDFLARE_API_TOKEN;
  const account = process.env.CLOUDFLARE_ACCOUNT_ID;
  const database = process.env.CLOUDFLARE_D1_DATABASE_ID;
  if (!token || !account || !database) throw new MigrationError('Не заданы все три переменные конфигурации D1.');
  if (!/^[a-f0-9]{32}$/i.test(account) || !/^[a-f0-9-]{36}$/i.test(database)) throw new MigrationError('Некорректный формат идентификаторов D1.');
  let data;
  try { data = JSON.parse(await readFile(source, 'utf8')); }
  catch (error) { if(error.code==='ENOENT'){console.log('Нет локальных аккаунтов для переноса.');return;} throw new MigrationError('Не удалось прочитать .data/auth.json. Исходный файл не изменён.'); }
  if (!data || !Array.isArray(data.users) || !Array.isArray(data.sessions)) throw new MigrationError('Неверный формат локального хранилища.');
  const ids = new Set(); const emails = new Set(); const sessionHashes = new Set();
  for (const user of data.users) {
    if (!user || typeof user.id !== 'string' || !user.id || user.id.length > 128 || typeof user.name !== 'string' || !user.name.trim() || typeof user.email !== 'string' || user.email !== user.email.trim().toLowerCase() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email) || !/^[a-f0-9]{128}$/.test(user.passwordHash) || !/^[a-f0-9]{32}$/.test(user.salt) || typeof user.createdAt !== 'string' || !Number.isFinite(Date.parse(user.createdAt))) throw new MigrationError('Локальный пользователь не прошёл проверку. Ничего не импортировано.');
    if (ids.has(user.id) || emails.has(user.email)) throw new MigrationError('В локальном хранилище есть повторные id/email. Ничего не импортировано.');
    ids.add(user.id); emails.add(user.email);
  }
  const now = Date.now();
  const sessions = data.sessions.filter(session => Number.isFinite(session?.expiresAt) && session.expiresAt > now);
  for (const session of sessions) {
    if (!/^[a-f0-9]{64}$/.test(session.tokenHash) || !ids.has(session.userId) || !Number.isSafeInteger(session.expiresAt) || sessionHashes.has(session.tokenHash)) throw new MigrationError('Активная локальная сессия не прошла проверку. Ничего не импортировано.');
    sessionHashes.add(session.tokenHash);
  }
  async function query(statements) {
    let response;
    try {
      response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${account}/d1/database/${database}/query`, {
        method: 'POST', signal: AbortSignal.timeout(60000),
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(Array.isArray(statements) ? { batch: statements } : statements),
      });
    } catch { throw new MigrationError('D1 недоступна. Повторите проверку состояния базы перед повторным запуском.'); }
    let payload;
    try { payload = await response.json(); }
    catch { throw new MigrationError('Не удалось прочитать ответ D1. Проверьте состояние базы перед повторным запуском.'); }
    if (!response.ok || !payload.success || !Array.isArray(payload.result) || payload.result.some(result => result.success === false)) throw new MigrationError('D1 отклонила запрос. Проверьте доступ, схему и конфликты. Данные ответа скрыты.');
    return payload.result;
  }
  for (const user of data.users) {
    const [result] = await query({ sql: 'SELECT id FROM users WHERE id = ? OR email = ? LIMIT 1', params: [user.id, user.email] });
    if (result.results?.length) throw new MigrationError('В D1 уже существует совпадающий id/email. Миграция остановлена без перезаписи.');
  }
  for (const session of sessions) {
    const [result] = await query({ sql: 'SELECT token_hash FROM sessions WHERE token_hash = ? LIMIT 1', params: [session.tokenHash] });
    if (result.results?.length) throw new MigrationError('В D1 уже существует совпадающая сессия. Миграция остановлена без перезаписи.');
  }
  const statements = [
    ...data.users.map(user => ({ sql: 'INSERT INTO users (id, name, email, password_hash, salt, created_at) VALUES (?, ?, ?, ?, ?, ?)', params: [user.id, user.name, user.email, user.passwordHash, user.salt, user.createdAt] })),
    ...sessions.map(session => ({ sql: 'INSERT INTO sessions (token_hash, user_id, expires_at) VALUES (?, ?, ?)', params: [session.tokenHash, session.userId, session.expiresAt] })),
  ];
  if (!statements.length) { console.log('Нет локальных аккаунтов для переноса.'); return; }
  // D1 query batches are transactional: any failed statement rolls back the batch.
  // Plain INSERT enforces uniqueness even if another process writes after preflight.
  await query(statements);
  console.log(`Перенесено аккаунтов: ${data.users.length}; действующих сессий: ${sessions.length}. Пароли и ID сохранены. Локальный файл не изменён.`);
}
main().catch(error => { console.error(error instanceof MigrationError ? error.message : 'Миграция не завершена. Детали скрыты для защиты данных.'); process.exitCode = 1; });
