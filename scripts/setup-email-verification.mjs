import {readFile} from 'node:fs/promises';
process.loadEnvFile('.env.local');
const {d1Query}=await import('../src/lib/d1.ts');
const columns=await d1Query('PRAGMA table_info(users)');
let sql=await readFile('migrations/0002_email_verification.sql','utf8');
if(columns.some(c=>c.name==='email_verified_at'))sql=sql.replace('ALTER TABLE users ADD COLUMN email_verified_at TEXT;','');
await d1Query(sql);
console.log('Email verification schema ready. Existing users and learning data retained.');
