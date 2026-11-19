import { readFile } from 'node:fs/promises';
process.loadEnvFile('.env.local');
const { d1Query } = await import('../src/lib/d1.ts');
const migration = await readFile(new URL('../migrations/0004_profiles_and_recovery.sql', import.meta.url), 'utf8');
// Keep each trigger body intact when sending statements to D1.
for (const statement of migration.trim().split(/\n\s*\n/)) {
  await d1Query(statement);
}
console.log('Profile, scoreboard and password recovery schema ready.');
