import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

test('local registration, login, hashed storage and session revocation', async () => {
  const temporary = await mkdtemp(path.join(os.tmpdir(), 'klar-auth-test-'));
  const original = process.cwd();
  process.chdir(temporary);
  const configKeys = ['CLOUDFLARE_API_TOKEN', 'CLOUDFLARE_ACCOUNT_ID', 'CLOUDFLARE_D1_DATABASE_ID'] as const;
  const saved = configKeys.map(key => process.env[key]);
  configKeys.forEach(key => delete process.env[key]);
  try {
    const { registerUser, loginUser, sessionUser, logoutUser, AuthError } = await import('./auth.ts');
    const input = { name: 'Mila', email: 'MILA@example.com', password: 'Meine lange Testpassphrase' };
    const registered = await registerUser(input);
    assert.equal(registered.user.email, 'mila@example.com');
    assert.deepEqual(Object.keys(registered.user).sort(), ['email', 'id', 'name']);
    assert.equal((await sessionUser(registered.token))?.id, registered.user.id);
    const storage = await readFile(path.join(temporary, '.data/auth.json'), 'utf8');
    assert.ok(!storage.includes(input.password), 'plaintext password must never be stored');
    assert.ok(!storage.includes(registered.token), 'raw session token must never be stored');
    await assert.rejects(registerUser(input), error => error instanceof AuthError && error.status === 409);
    await assert.rejects(loginUser({ email: input.email, password: 'wrong password' }), error => error instanceof AuthError && error.status === 401);
    const loggedIn = await loginUser(input);
    assert.equal(loggedIn.user.id, registered.user.id);
    assert.notEqual(loggedIn.token, registered.token);
    await logoutUser(loggedIn.token);
    assert.equal(await sessionUser(loggedIn.token), null);
    assert.equal(await sessionUser('not-a-token'), null);
    await assert.rejects(registerUser({ ...input, password: 'short' }), error => error instanceof AuthError && error.status === 400);
    const sameEmail = { ...input, email: 'parallel@example.com' };
    const parallel = await Promise.allSettled([registerUser(sameEmail), registerUser(sameEmail)]);
    assert.equal(parallel.filter(result => result.status === 'fulfilled').length, 1, 'concurrent duplicate registrations must not create two accounts');
  } finally { configKeys.forEach((key, index) => { if (saved[index] === undefined) delete process.env[key]; else process.env[key] = saved[index]; }); process.chdir(original); await rm(temporary, { recursive: true, force: true }); }
});


test('D1 uses atomic account/session creation, supports imported hashes and never silently falls back', async () => {
  const { DatabaseSync } = await import('node:sqlite');
  const database = new DatabaseSync(':memory:');
  database.exec('PRAGMA foreign_keys = ON; CREATE TABLE users (id TEXT PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL UNIQUE, password_hash TEXT NOT NULL, salt TEXT NOT NULL, created_at TEXT NOT NULL); CREATE TABLE sessions (token_hash TEXT PRIMARY KEY, user_id TEXT NOT NULL REFERENCES users(id), expires_at INTEGER NOT NULL)');
  const originalFetch = globalThis.fetch;
  const configKeys = ['CLOUDFLARE_API_TOKEN', 'CLOUDFLARE_ACCOUNT_ID', 'CLOUDFLARE_D1_DATABASE_ID'] as const;
  const saved = configKeys.map(key => process.env[key]);
  process.env.CLOUDFLARE_API_TOKEN = 'test-token';
  process.env.CLOUDFLARE_ACCOUNT_ID = 'test-account';
  process.env.CLOUDFLARE_D1_DATABASE_ID = 'test-database';
  let fail = false;
  let failSessionInsert = false;
  const calls: { sql: string; params?: unknown[] }[][] = [];
  globalThis.fetch = async (_url, init) => {
    if (fail) throw new Error('mock outage');
    const body = JSON.parse(String(init?.body));
    const statements: { sql: string; params?: import('node:sqlite').SQLInputValue[] }[] = body.batch || [body];
    calls.push(statements);
    try {
      if (body.batch) database.exec('BEGIN');
      const result = statements.map(statement => {
        if (failSessionInsert && statement.sql.startsWith('INSERT INTO sessions')) throw new Error('mock session insert failure');
        return { success: true, results: database.prepare(statement.sql).all(...(statement.params || [])) };
      });
      if (body.batch) database.exec('COMMIT');
      return Response.json({ success: true, result });
    } catch (error) {
      if (body.batch) database.exec('ROLLBACK');
      return Response.json({ success: false, errors: [{ message: error instanceof Error ? error.message : 'SQL error' }] });
    }
  };
  try {
    const { registerUser, loginUser, sessionUser, logoutUser, AuthError } = await import('./auth.ts');
    const input = { name: 'Jonas', email: 'd1@example.com', password: 'Eine andere lange Passphrase' };
    const registered = await registerUser(input);
    assert.equal(calls[0].length, 2, 'user and initial session must be in one transaction');
    assert.equal((await sessionUser(registered.token))?.id, registered.user.id);
    await assert.rejects(registerUser(input), error => error instanceof AuthError && error.status === 409);
    assert.equal(database.prepare('SELECT COUNT(*) AS n FROM users').get()?.n, 1);
    await assert.rejects(loginUser({ ...input, password: 'incorrect' }), error => error instanceof AuthError && error.status === 401);
    const login = await loginUser(input);
    assert.equal(login.user.id, registered.user.id);
    await logoutUser(login.token);
    assert.equal(await sessionUser(login.token), null);
    database.prepare('UPDATE sessions SET expires_at = 1').run();
    assert.equal(await sessionUser(registered.token), null);
    // Imported accounts retain the existing scrypt format, without password reset.
    const { hashPassword } = await import('./auth-local.ts');
    const importedSalt = '9'.repeat(32);
    database.prepare('INSERT INTO users VALUES (?, ?, ?, ?, ?, ?)').run('original-local-id', 'Imported', 'imported@example.com', (await hashPassword(input.password, importedSalt)).toString('hex'), importedSalt, new Date().toISOString());
    assert.equal((await loginUser({ email: 'imported@example.com', password: input.password })).user.id, 'original-local-id');
    failSessionInsert = true;
    await assert.rejects(registerUser({ ...input, email: 'rollback@example.com' }));
    assert.equal(database.prepare('SELECT id FROM users WHERE email = ?').get('rollback@example.com'), undefined, 'failed initial session insert must roll back user creation');
    failSessionInsert = false;
    fail = true;
    await assert.rejects(registerUser({ ...input, email: 'outage@example.com' }));
    await assert.rejects(sessionUser(registered.token));
    fail = false;
    delete process.env.CLOUDFLARE_D1_DATABASE_ID;
    await assert.rejects(registerUser({ ...input, email: 'partial@example.com' }), error => error instanceof AuthError && error.status === 503);
  } finally {
    globalThis.fetch = originalFetch;
    configKeys.forEach((key, index) => { if (saved[index] === undefined) delete process.env[key]; else process.env[key] = saved[index]; });
    database.close();
  }
});
