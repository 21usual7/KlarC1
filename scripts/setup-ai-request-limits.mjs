import { readFile } from 'node:fs/promises';
process.loadEnvFile('.env.local');
const { d1Query } = await import('../src/lib/d1.ts');
await d1Query(await readFile('migrations/0003_ai_request_limits.sql', 'utf8'));
console.log('AI request limit schema ready. Existing accounts and learning data retained.');
