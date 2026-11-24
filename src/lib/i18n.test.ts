import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { pickLocale } from '../i18n/locales.ts';
import ru from '../i18n/dict/ru.ts';
import en from '../i18n/dict/en.ts';
import { dict, serverText, setRuntimeLocale } from '../i18n/runtime.ts';
import { getWord, modules, readingFor } from '../content/index.ts';
import { setContentOverlay, trExample, trNote, trReading, trWord, type ContentOverlay } from '../content/translate.ts';
import { glossFor } from './gloss.ts';
import { buildLessonRun } from './lesson.ts';
import { studyTracks } from './study-focus.ts';
import { tutorRoles } from './cloud-state.ts';
import { assignments } from './homework.ts';
import { tutorPrompt } from './tutor.ts';

test('locale: cookie first, then Accept-Language by q-value; Russian readers get Russian, others English', () => {
  assert.equal(pickLocale('en', 'ru-RU,ru;q=0.9'), 'en');
  assert.equal(pickLocale('xx', 'ru-RU,ru;q=0.9'), 'ru');
  assert.equal(pickLocale(undefined, 'de-AT,de;q=0.9,en;q=0.8,ru;q=0.7'), 'en');
  assert.equal(pickLocale(undefined, 'en;q=0.5,ru;q=0.9'), 'ru');
  assert.equal(pickLocale(undefined, 'be-BY'), 'ru');
  assert.equal(pickLocale(undefined, 'es-ES,es;q=0.9'), 'en');
  assert.equal(pickLocale(undefined, ''), 'en');
});

/** Every key of `a` exists in `b` with the same kind of value (string, function, array, object). */
function sameShape(a: unknown, b: unknown, path: string, open: Set<string>) {
  assert.equal(typeof b, typeof a, `${path}: type`);
  if (Array.isArray(a)) { assert.ok(Array.isArray(b) && b.length === a.length, `${path}: array length`); return; }
  if (!a || typeof a !== 'object' || open.has(path)) return;
  for (const key of Object.keys(a)) sameShape((a as Record<string, unknown>)[key], (b as Record<string, unknown>)[key], `${path}.${key}`, open);
}

test('English dictionary has every Russian key, and the open maps cover their data', () => {
  sameShape(ru, en, 'dict', new Set(['dict.server', 'dict.tracks', 'dict.tutor.roles', 'dict.homework.tasks']));
  for (const track of studyTracks) assert.ok(en.tracks[track], `track ${track}`);
  for (const role of tutorRoles) assert.ok(en.tutor.roles[role] && ru.tutor.roles[role], `role ${role}`);
  for (const a of assignments) assert.ok(en.homework.tasks[a.id] && ru.homework.tasks[a.id], `homework ${a.id}`);
  assert.equal(en.stages.length, ru.stages.length);
});

/** Russian string literals (single-quoted) in server code: error and status messages sent to the client. */
function serverMessages() {
  const files: string[] = [];
  const walk = (dir: string) => { for (const name of readdirSync(dir)) { const p = join(dir, name); if (statSync(p).isDirectory()) walk(p); else if (p.endsWith('.ts')) files.push(p); } };
  walk('src/app/api');
  files.push(...['auth', 'auth-local', 'auth-http', 'email-verification', 'password-reset'].map(f => `src/lib/${f}.ts`));
  const found = new Set<string>();
  for (const file of files) for (const m of readFileSync(file, 'utf8').matchAll(/'([^'\n]*[А-Яа-яЁё][^'\n]*)'/g)) found.add(m[1]);
  return [...found].filter(text => text !== 'УДАЛИТЬ');
}

test('every Russian server message has an English translation', () => {
  const messages = serverMessages();
  assert.ok(messages.length > 30, 'messages found');
  const missing = messages.filter(m => !en.server[m]);
  assert.deepEqual(missing, []);
  setRuntimeLocale('en');
  assert.equal(serverText('Неверный email или пароль.', 'x'), 'Wrong email or password.');
  assert.equal(serverText('unknown text', 'x'), 'unknown text');
  assert.equal(serverText(undefined, 'fallback'), 'fallback');
  setRuntimeLocale('ru');
  assert.equal(serverText('Неверный email или пароль.', 'x'), 'Неверный email или пароль.');
});

test('course translations: an overlay replaces the Russian text, missing entries fall back to it', () => {
  const module = modules.find(m => m.readings?.length)!;
  const word = module.words.find(w => w.note)!;
  const other = module.words.find(w => w !== word)!;
  const reading = readingFor(module, 0)!;
  const overlay: ContentOverlay = {
    words: { [word.id]: { tr: 'EN word', example: 'EN example' } },
    modules: {},
    readings: { [`${module.id}:0`]: { text: 'EN text', gloss: { zzz: 'EN gloss' }, questions: reading.questions.map(() => 'EN question'), translate: reading.translate.map(() => ({ tr: 'EN sentence', wrong: ['EN wrong 1', 'EN wrong 2'] })) } },
    common: {},
  };
  try {
    setContentOverlay(overlay);
    assert.equal(trWord(word), 'EN word');
    assert.equal(trExample(word), 'EN example');
    assert.equal(trNote(word), undefined, 'a Russian note is not shown next to an English translation');
    assert.equal(trWord(other), other.ru, 'untranslated word falls back to Russian');
    assert.equal(trReading(reading).text, 'EN text');
    assert.equal(glossFor('zzz', trReading(reading).gloss)?.tr, 'EN gloss');
    // The gloss index of module words is rebuilt for the new language.
    assert.equal(glossFor(word.de)?.tr, 'EN word');
    setRuntimeLocale('en');
    const run = buildLessonRun(module, 0, 7, 0);
    assert.match(run.title, /lesson 1$/);
    const translate = run.rounds.flat().find(s => s.kind === 'choice' && s.type === 'translate-to-ru');
    assert.ok(translate && translate.kind === 'choice' && translate.answer === 'EN sentence' && translate.optionsLang === 'tr');
  } finally {
    setContentOverlay(null); setRuntimeLocale('ru');
  }
  assert.equal(trWord(word), word.ru);
  assert.equal(glossFor(word.de)?.tr, getWord(word.id)!.ru);
  assert.equal(dict().run.review, 'Повторение');
});

test('tutor explains in the interface language', () => {
  assert.match(tutorPrompt({ level: 'A1' }), /Russian/);
  const english = tutorPrompt({ level: 'A1', mode: 'homework', assignmentId: 'a1-introduction' }, 'en');
  assert.match(english, /in English using short sections: “What worked”/);
  assert.doesNotMatch(english, /in Russian/);
});
