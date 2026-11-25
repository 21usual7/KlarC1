import test from 'node:test';
import assert from 'node:assert/strict';
import { contentLevels, lessonCount, modules, modulesFor, spheres, wordIcons } from '../content/index.ts';
import { missingGlosses, words } from './gloss.ts';
import { sentenceTiles } from './exercises.ts';

test('every sphere has a module on every content level', () => {
  for (const s of spheres) for (const l of contentLevels) assert.ok(modulesFor(s.id, l).length >= 1, `${s.id} ${l}`);
});
test('module ids are unique and a word never repeats inside a sphere', () => {
  const moduleIds = modules.map(m => m.id);
  assert.equal(new Set(moduleIds).size, moduleIds.length, 'duplicate module id');
  for (const s of spheres) {
    const seen = new Map<string, string>();
    for (const m of modulesFor(s.id)) for (const w of m.words) {
      const key = `${w.pos}:${w.de.toLowerCase()}`;
      assert.ok(!seen.has(key), `${w.id}: «${w.de}» is already in ${seen.get(key)}`);
      seen.set(key, m.id);
    }
  }
});
test('word ids are unique and every module splits into full lessons', () => {
  const ids = modules.flatMap(m => m.words.map(w => w.id));
  assert.equal(new Set(ids).size, ids.length);
  for (const m of modules) { assert.equal(m.words.length, 16, m.id); assert.equal(lessonCount(m), 2); }
});
test('cards are consistent: cloze inside the example, compounds join to the word, nouns have articles', () => {
  for (const m of modules) for (const w of m.words) {
    assert.ok(w.example.de.includes(w.example.cloze), `${w.id}: cloze`);
    assert.ok(w.ru && w.example.ru, `${w.id}: translations`);
    if (w.parts) assert.equal(w.parts.join(''), w.de, `${w.id}: parts`);
    if (w.pos === 'noun') assert.ok(w.article, `${w.id}: article`);
    if (w.pluralOnly) assert.equal(w.plural, undefined, `${w.id}: plural-only`);
    if (w.collocation) assert.ok(w.collocation.de && w.collocation.ru, `${w.id}: collocation`);
  }
});
test('every word has a picture from the icon registry', () => {
  for (const m of modules) for (const w of m.words) {
    assert.ok(w.icon, `${w.id}: icon`);
    assert.ok(wordIcons[w.icon!], `${w.id}: unknown icon ${w.icon}`);
  }
});
test('every lesson has a text with questions and translations', () => {
  for (const m of modules) {
    for (let lesson = 0; lesson < lessonCount(m); lesson++) {
      const found = (m.readings || []).filter(r => r.lesson === lesson);
      assert.equal(found.length, 1, `${m.id}: one reading for lesson ${lesson}`);
    }
    for (const r of m.readings || []) {
      const where = `${m.id} «${r.title}»`;
      const length = words(r.de).length;
      assert.ok(length >= ({ 'A1.1': 35, 'A1.2': 50 }[m.level as string] ?? 70) && length <= 160, `${where}: ${length} words`);
      assert.ok(r.ru.length > 0, `${where}: translation`);
      assert.ok(r.questions.length >= 3, `${where}: questions`);
      for (const q of r.questions) {
        assert.ok(q.options.includes(q.answer), `${where}: answer among options «${q.q}»`);
        assert.ok(q.options.length >= 3 && new Set(q.options).size === q.options.length, `${where}: options «${q.q}»`);
        assert.ok(q.ru, `${where}: question translation`);
      }
      assert.ok(r.translate.length >= 3, `${where}: translate items`);
      for (const t of r.translate) {
        const tiles = sentenceTiles(t.de).length;
        assert.ok(tiles >= 3 && tiles <= 12, `${where}: «${t.de}» has ${tiles} tiles`);
        assert.ok(t.wrongRu.length >= 2 && !t.wrongRu.includes(t.ru), `${where}: near-miss translations «${t.de}»`);
      }
      for (const [k, v] of Object.entries(r.gloss)) assert.ok(k === k.toLowerCase() && v, `${where}: gloss key «${k}» must be lowercase with a translation`);
      const texts = [r.de, ...r.questions.flatMap(q => [q.q, ...q.options]), ...r.translate.map(t => t.de)];
      assert.deepEqual(missingGlosses(texts.join(' '), r.gloss), [], `${where}: words without hover translation`);
    }
  }
});
