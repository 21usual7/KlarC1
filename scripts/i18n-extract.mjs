// Prints the course text that needs translating, one module per line (compact JSON), for translators.
// Usage: node --experimental-strip-types scripts/i18n-extract.mjs [moduleIdPrefix] [--missing <locale>]
// --missing en: only modules not yet in src/content/i18n/en.json.
import { readFileSync } from 'node:fs';
import { modules } from '../src/content/index.ts';
import { commonWords } from '../src/content/common-words.ts';

const args = process.argv.slice(2);
const missingAt = args.indexOf('--missing');
const locale = missingAt >= 0 ? args[missingAt + 1] : null;
const prefix = args.find((a, i) => !a.startsWith('--') && (missingAt < 0 || i !== missingAt + 1)) || '';
const done = locale ? JSON.parse(readFileSync(`src/content/i18n/${locale}.json`, 'utf8')) : null;

if (prefix === 'common') { console.log(JSON.stringify(commonWords)); process.exit(0); }
for (const m of modules) {
  if (!m.id.startsWith(prefix)) continue;
  if (done && m.words.every(w => done.words[w.id])) continue;
  console.log(JSON.stringify({
    id: m.id, title: m.title, subtitle: m.subtitle,
    words: m.words.map(w => ({ id: w.id, de: w.de, ru: w.ru, ...(w.note && { note: w.note }), ...(w.collocation && { col: [w.collocation.de, w.collocation.ru] }), ex: [w.example.de, w.example.ru] })),
    readings: (m.readings || []).map(r => ({ lesson: r.lesson, de: r.de, gloss: r.gloss, q: r.questions.map(q => [q.q, q.ru]), tr: r.translate.map(t => [t.de, t.ru, t.wrongRu]) })),
  }));
}
