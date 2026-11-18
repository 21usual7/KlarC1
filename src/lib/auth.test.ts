import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

test('local registration, login, hashed storage and session revocation', async () => {
  const temporary = await mkdtemp(path.join(os.tmpdir(), 'klar-auth-test-'));
  const original = process.cwd();
  process.chdir(temporary);
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
  } finally { process.chdir(original); await rm(temporary, { recursive: true, force: true }); }
});
