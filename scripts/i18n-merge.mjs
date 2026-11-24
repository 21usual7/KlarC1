// Merges translated modules into src/content/i18n/<locale>.json after checking them against the source.
// Usage: node --experimental-strip-types scripts/i18n-merge.mjs <locale> <file>
// <file>: one JSON object per line, the shape below; or {"common": {...}} for common words.
//   { id, subtitle, words: { [wordId]: { tr, note?, col?, ex } },
//     readings: { [lesson]: { text, gloss: { [germanForm]: tr }, q: [questionTr...], tr: [[sentenceTr, [nearMiss, nearMiss, ...]]...] } } }
import { readFileSync, writeFileSync } from 'node:fs';
import { getModule } from '../src/content/index.ts';
import { commonWords } from '../src/content/common-words.ts';

const [locale, file] = process.argv.slice(2);
const target = `src/content/i18n/${locale}.json`;
const out = JSON.parse(readFileSync(target, 'utf8'));
const errors = [];
const need = (ok, where, what) => { if (!ok) errors.push(`${where}: ${what}`); };
const text = v => typeof v === 'string' && v.trim().length > 0;
let merged = 0;

for (const line of readFileSync(file, 'utf8').split('\n').filter(l => l.trim())) {
  const input = JSON.parse(line);
  if (input.common) {
    for (const key of Object.keys(commonWords)) need(text(input.common[key]), 'common', `missing «${key}»`);
    out.common = { ...out.common, ...input.common }; merged++; continue;
  }
  const m = getModule(input.id);
  if (!m) { errors.push(`unknown module ${input.id}`); continue; }
  need(text(input.subtitle), m.id, 'subtitle');
  const words = {};
  for (const w of m.words) {
    const t = input.words?.[w.id]; const where = `${m.id}/${w.id}`;
    if (!t) { errors.push(`${where}: missing`); continue; }
    need(text(t.tr) && text(t.ex), where, 'tr/ex');
    need(!w.collocation || text(t.col), where, 'collocation');
    need(!t.note || !!w.note, where, 'note without source');
    words[w.id] = { tr: t.tr, ...(t.note && { note: t.note }), ...(t.col && { collocation: t.col }), example: t.ex };
  }
  const readings = {};
  for (const r of m.readings || []) {
    const t = input.readings?.[r.lesson]; const where = `${m.id}:${r.lesson}`;
    if (!t) { errors.push(`${where}: reading missing`); continue; }
    need(text(t.text) && t.text.split(/\n\s*\n/).length === r.ru.split(/\n\s*\n/).length, where, 'text paragraphs');
    for (const key of Object.keys(r.gloss)) need(text(t.gloss?.[key]), where, `gloss «${key}»`);
    need(t.q?.length === r.questions.length && t.q.every(text), where, 'questions');
    need(t.tr?.length === r.translate.length, where, 'translate items');
    (t.tr || []).forEach(([tr, wrong], i) => need(text(tr) && Array.isArray(wrong) && wrong.length >= 2 && wrong.every(text) && !wrong.includes(tr) && new Set(wrong).size === wrong.length, where, `translate ${i}: needs a sentence and 2+ distinct near misses`));
    readings[`${m.id}:${r.lesson}`] = { text: t.text, gloss: t.gloss, questions: t.q, translate: (t.tr || []).map(([tr, wrong]) => ({ tr, wrong })) };
  }
  Object.assign(out.words, words); Object.assign(out.readings, readings);
  out.modules[m.id] = { subtitle: input.subtitle };
  merged++;
}
if (errors.length) { console.error(errors.join('\n')); console.error(`${errors.length} problem(s); nothing written.`); process.exit(1); }
writeFileSync(target, JSON.stringify(out, null, 0) + '\n');
console.log(`merged ${merged}; ${locale}: ${Object.keys(out.modules).length} modules, ${Object.keys(out.words).length} words, ${Object.keys(out.readings).length} readings, ${Object.keys(out.common).length} common`);
