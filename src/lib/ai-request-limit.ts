import { d1Query } from './d1.ts';
import { createHash } from 'node:crypto';
import { sessionUser } from './auth.ts';
import { verifiedClientIp } from './client-ip.ts';

const DAILY_LIMIT = { requests: 100, windowMs: 86400000 };
const ADMIN_EMAIL = '21usaul7@gmail.com';

export async function allowTutorRequest(token: string | undefined, headers: Headers) {
  const user = token ? await sessionUser(token) : null;
  if (isAiAdmin(user, process.env.AI_ADMIN_EMAILS ?? ADMIN_EMAIL)) return true;
  const ip = verifiedClientIp(headers);
  if (!ip) return false;
  // Keep raw addresses out of persistent storage. Daily rows expire by UTC calendar day.
  const subject = createHash('sha256').update(`tutor-ip:${ip}`).digest('hex');
  return (await reserveAiRequest(subject, DAILY_LIMIT)).allowed;
}

export type RequestLimit = { requests: number; windowMs: number };

/** Atomic reservation shared across processes. Rejected requests do not increment the count. */
export async function reserveAiRequest(subject: string, limit: RequestLimit, now = Date.now()) {
  if (!Number.isSafeInteger(limit.requests) || limit.requests < 1 || !Number.isSafeInteger(limit.windowMs) || limit.windowMs < 1) {
    throw new Error('Invalid AI request limit');
  }
  const windowStart = Math.floor(now / limit.windowMs) * limit.windowMs;
  await d1Query('DELETE FROM ai_request_limits WHERE window_start < ?', [windowStart - 86400000]);
  const rows = await d1Query(
    `INSERT INTO ai_request_limits (subject, window_start, request_count) VALUES (?, ?, 1)
     ON CONFLICT(subject, window_start) DO UPDATE SET request_count = ai_request_limits.request_count + 1
     WHERE ai_request_limits.request_count < ? RETURNING request_count`,
    [subject, windowStart, limit.requests],
  );
  return { allowed: rows.length > 0, retryAfter: Math.max(1, Math.ceil((windowStart + limit.windowMs - now) / 1000)) };
}

export function isAiAdmin(user: { email: string; emailVerified?: boolean } | null, emails: string | undefined) {
  return !!user?.emailVerified && (emails || '').split(',').some(email => email.trim().toLowerCase() === user.email.toLowerCase());
}
