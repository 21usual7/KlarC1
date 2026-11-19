import {readFile} from 'node:fs/promises';
import {parseEnv} from 'node:util';
Object.assign(process.env,parseEnv(await readFile('.env.local','utf8')));
const {d1Query}=await import('../src/lib/d1.ts');
const sql=await readFile('migrations/0001_accounts_and_learning.sql','utf8');
await d1Query(sql);
console.log('D1 schema applied (non-destructive CREATE IF NOT EXISTS).');

await import('./setup-email-verification.mjs');
await import('./setup-ai-request-limits.mjs');
await import('./setup-profiles.mjs');
