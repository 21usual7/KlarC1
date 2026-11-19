/**
 * File name of the pre-generated recording of a German phrase: `public/audio/<key>.mp3`.
 * Shared by `scripts/gen-audio.mjs` (Node) and the browser, so it must stay dependency-free and
 * give the same result in both. Changing the algorithm orphans every generated file.
 */

/** Same text → same key, whatever the Unicode form or the whitespace around and inside it. */
export const normalizeAudioText = (text: string) => text.normalize('NFC').replace(/\s+/g, ' ').trim();

/** FNV-1a, 32 bit, over UTF-8 bytes, starting from `seed`. */
function fnv1a(bytes: Uint8Array, seed: number) {
  let h = seed >>> 0;
  for (let i = 0; i < bytes.length; i++) { h ^= bytes[i]; h = Math.imul(h, 0x01000193) >>> 0; }
  return h >>> 0;
}
const hex8 = (n: number) => n.toString(16).padStart(8, '0');

/** 16 hex characters: two FNV-1a hashes with different seeds (64 bits, collisions negligible for ~10⁴ phrases). */
export function audioKey(text: string): string {
  const bytes = new TextEncoder().encode(normalizeAudioText(text));
  return hex8(fnv1a(bytes, 0x811c9dc5)) + hex8(fnv1a(bytes, 0x9747b28c));
}
