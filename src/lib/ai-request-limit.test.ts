import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { isAiAdmin, reserveAiRequest, allowTutorRequest } from './ai-request-limit.ts';
import { signClientIp } from './client-ip.ts';
import { createHash } from 'node:crypto';

test('AI admin exemption requires an exact verified email match', () => {
  assert.equal(isAiAdmin({ email: 'Admin@example.com', emailVerified: true }, ' other@example.com, ADMIN@example.com '), true);
  assert.equal(isAiAdmin(null, 'admin@example.com'), false);
  assert.equal(isAiAdmin({ email: 'admin@example.com', emailVerified: false }, 'admin@example.com'), false);
  assert.equal(isAiAdmin({ email: 'notadmin@example.com', emailVerified: true }, 'admin@example.com'), false);
  assert.equal(isAiAdmin({ email: 'admin@example.com', emailVerified: true }, undefined), false);
});

test('D1 AI reservations enforce shared limits, concurrency and window reset', async () => {
  const { DatabaseSync } = await import('node:sqlite');
  const db = new DatabaseSync(':memory:');
  db.exec(await readFile('migrations/0003_ai_request_limits.sql', 'utf8'));
  db.exec(await readFile('migrations/0001_accounts_and_learning.sql', 'utf8'));
  db.exec(await readFile('migrations/0002_email_verification.sql', 'utf8'));
  const originalFetch = globalThis.fetch;
  const keys = ['CLOUDFLARE_API_TOKEN', 'CLOUDFLARE_ACCOUNT_ID', 'CLOUDFLARE_D1_DATABASE_ID', 'KLAR_INTERNAL_IP_SECRET', 'AI_ADMIN_EMAILS'];
  const saved = keys.map(key => process.env[key]);
  keys.forEach(key => { process.env[key] = 'test'; });
  process.env.AI_ADMIN_EMAILS = '21usaul7@gmail.com';
  globalThis.fetch = async (_url, init) => {
    const { sql, params } = JSON.parse(String(init?.body));
    return Response.json({ success: true, result: [{ success: true, results: db.prepare(sql).all(...params) }] });
  };
  try {
    const limit = { requests: 3, windowMs: 60000 };
    const attempts = await Promise.all(Array.from({ length: 12 }, () => reserveAiRequest('client-a', limit, 1000)));
    assert.equal(attempts.filter(attempt => attempt.allowed).length, 3);
    assert.equal(attempts[3].retryAfter, 59);
    assert.equal((await reserveAiRequest('client-b', limit, 1000)).allowed, true);
    assert.equal((await reserveAiRequest('client-a', limit, 60000)).allowed, true);
    const headers = new Headers({ 'x-klar-client-ip': '192.0.2.2', 'x-klar-client-ip-signature': signClientIp('192.0.2.2', 'test') });
    const results = await Promise.all(Array.from({ length: 105 }, () => allowTutorRequest(undefined, headers)));
    assert.equal(results.filter(Boolean).length, 100);
    assert.equal(await allowTutorRequest(undefined, new Headers({ email: '21usaul7@gmail.com' })), false);
    const token = 'a'.repeat(64);
    db.prepare('INSERT INTO users (id, name, email, password_hash, salt, created_at, email_verified_at) VALUES (?, ?, ?, ?, ?, ?, ?)').run('admin', 'Admin', '21usaul7@gmail.com', 'unused', 'unused', 'now', 'now');
    db.prepare('INSERT INTO sessions (token_hash, user_id, expires_at) VALUES (?, ?, ?)').run(createHash('sha256').update(token).digest('hex'), 'admin', Date.now() + 60000);
    const countBefore = db.prepare('SELECT SUM(request_count) AS n FROM ai_request_limits').get()?.n;
    assert.equal(await allowTutorRequest(token, headers), true, 'admin bypasses an exhausted IP');
    assert.equal(db.prepare('SELECT SUM(request_count) AS n FROM ai_request_limits').get()?.n, countBefore, 'admin does not consume shared IP quota');
    db.prepare('DELETE FROM sessions').run();
    assert.equal(await allowTutorRequest(token, headers), false, 'revoked admin session cannot bypass quota');
    globalThis.fetch = async () => { throw new Error('D1 unavailable'); };
    await assert.rejects(reserveAiRequest('client-a', limit, 60000));
    await assert.rejects(reserveAiRequest('client-a', { requests: 0, windowMs: 60000 }));
  } finally {
    globalThis.fetch = originalFetch;
    keys.forEach((key, index) => { if (saved[index] === undefined) delete process.env[key]; else process.env[key] = saved[index]; });
    db.close();
  }
});
