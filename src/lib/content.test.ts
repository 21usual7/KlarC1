import test from 'node:test';
import assert from 'node:assert/strict';
import { contentLevels, lessonCount, modules, modulesFor, spheres } from '../content/index.ts';

test('every sphere has a module on every content level', () => {
  for (const s of spheres) for (const l of contentLevels) assert.equal(modulesFor(s.id, l).length, 1, `${s.id} ${l}`);
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
