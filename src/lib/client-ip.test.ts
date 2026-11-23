import test from 'node:test';
import assert from 'node:assert/strict';
import { connectionIp, normalizeIp, signClientIp, verifiedClientIp } from './client-ip.ts';

test('client IP comes from the socket, and only configured proxies may forward it', () => {
  assert.equal(connectionIp('203.0.113.2', '192.0.2.9'), '203.0.113.2');
  assert.equal(connectionIp('127.0.0.1', '192.0.2.9, 203.0.113.2', '127.0.0.1'), '203.0.113.2');
  assert.equal(connectionIp('127.0.0.1', '192.0.2.9, 203.0.113.2', '127.0.0.1,203.0.113.2'), '192.0.2.9');
  assert.equal(connectionIp('127.0.0.1', 'invalid', '127.0.0.1'), null);
  assert.equal(normalizeIp('::ffff:192.0.2.9'), '192.0.2.9');
  assert.equal(normalizeIp('2001:0DB8:0:0:0:0:0:1'), '2001:db8::1');
  assert.equal(normalizeIp('invalid'), null);
});

test('forged internal IP headers cannot bypass a quota', () => {
  const headers = new Headers({ 'x-klar-client-ip': '192.0.2.9', 'x-forwarded-for': '192.0.2.1' });
  assert.equal(verifiedClientIp(headers, 'secret'), null);
  headers.set('x-klar-client-ip-signature', signClientIp('192.0.2.9', 'secret'));
  assert.equal(verifiedClientIp(headers, 'secret'), '192.0.2.9');
  assert.equal(verifiedClientIp(headers, 'other-secret'), null);
  headers.set('x-klar-client-ip', '192.0.2.10');
  assert.equal(verifiedClientIp(headers, 'secret'), null);
});

test('x-real-ip is trusted only on Vercel', () => {
  const previous = process.env.VERCEL;
  const headers = new Headers({ 'x-real-ip': '203.0.113.7' });
  try {
    delete process.env.VERCEL;
    assert.equal(verifiedClientIp(headers, 'secret'), null);
    process.env.VERCEL = '1';
    assert.equal(verifiedClientIp(headers, 'secret'), '203.0.113.7');
    assert.equal(verifiedClientIp(new Headers({ 'x-real-ip': 'invalid' }), 'secret'), null);
  } finally {
    if (previous === undefined) delete process.env.VERCEL;
    else process.env.VERCEL = previous;
  }
});
