import { test } from 'node:test';
import assert from 'node:assert/strict';
import { audioKey, normalizeAudioText } from './audio-key.ts';

test('audioKey is 16 hex characters and stable', () => {
  assert.match(audioKey('die Schwachstelle'), /^[0-9a-f]{16}$/);
  assert.equal(audioKey('die Schwachstelle'), audioKey('die Schwachstelle'));
  // Pinned values: the generated files in public/audio depend on them.
  assert.equal(audioKey(''), '811c9dc59747b28c');
  assert.equal(audioKey('a'), 'e40c292c12deab17'); // first half = standard FNV-1a('a')
  assert.equal(audioKey('die Schwachstelle'), '8e3b6e2dc69a6c02');
});

test('audioKey ignores Unicode form and extra whitespace', () => {
  const composed = 'Schlüssel'; const decomposed = 'Schlüssel';
  assert.notEqual(composed, decomposed);
  assert.equal(audioKey(composed), audioKey(decomposed));
  assert.equal(audioKey('  Das ist\n  gut. '), audioKey('Das ist gut.'));
  assert.equal(normalizeAudioText(' a \t b '), 'a b');
});

test('audioKey distinguishes different phrases', () => {
  const phrases = ['der Schlüssel', 'die Schlüssel', 'Der Schlüssel', 'der Schlüssel.', 'das Passwort', 'Passwort'];
  assert.equal(new Set(phrases.map(audioKey)).size, phrases.length);
});
