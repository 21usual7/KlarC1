// Free-licensed photos for word cards: Wikimedia Commons (fallback: Openverse) → public/words/<wordId>.webp + credits.json.
//
//   node --experimental-strip-types scripts/fetch-images.mjs            # only words without a photo (default)
//   node --experimental-strip-types scripts/fetch-images.mjs --force cyb-a12-wlan [--force …]
//   node --experimental-strip-types scripts/fetch-images.mjs --prune    # also delete photos of words that are gone
//   … --retry-misses   search again for words whose query found nothing last time
//   … --dry-run        search and print, download nothing
//
// Words: every word with `imageQuery` (src/content). scripts/image-overrides.json: { wordId: "File:Name.jpg" | null }
// picks a Commons file by hand or forbids a photo (the card then shows the icon).
// Licenses: CC0, public domain, CC BY, CC BY-SA (any version) only. Needs ImageMagick (`magick`) with WebP.
// Progress is saved after every word (credits.json), so an interrupted run just continues.
// Run state and the report of skipped words: node_modules/.cache/klar-word-images/.
import { existsSync, mkdirSync, readdirSync, readFileSync, renameSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const outDir = join(root, 'public/words');
const creditsPath = join(outDir, 'credits.json');
const overridesPath = join(root, 'scripts/image-overrides.json');
const cacheDir = join(root, 'node_modules/.cache/klar-word-images');
const missesPath = join(cacheDir, 'misses.json');
const reportPath = join(cacheDir, 'report.json');

const UA = 'vocab-images/1.0 (educational project; https://commons.wikimedia.org/wiki/Commons:Reusing_content_outside_Wikimedia)';
const COMMONS = 'https://commons.wikimedia.org/w/api.php';
const OPENVERSE = 'https://api.openverse.org/v1/images/';
const WIDTH = 640, HEIGHT = 480, MIN_SIDE = 400, MAX_BYTES = 45_000;
const WORKERS = 2;

const args = process.argv.slice(2);
const force = new Set(args.flatMap((a, i) => a === '--force' && args[i + 1] ? [args[i + 1]] : []));
const prune = args.includes('--prune');
const retryMisses = args.includes('--retry-misses');
const dryRun = args.includes('--dry-run');

// ---------- words ----------
/** All modules; if the index fails (a module being written right now), load every file on its own. */
async function loadWords() {
  const content = join(root, 'src/content');
  try {
    const { modules } = await import(join(content, 'index.ts'));
    return { words: modules.flatMap(m => m.words), complete: true };
  } catch (error) {
    console.warn(`! src/content/index.ts failed (${error.message.split('\n')[0]}); loading module files one by one`);
  }
  const files = ['cyber', 'informatik', 'mathe', 'a22-cyber', 'a22-informatik', 'a22-mathe'].map(f => join(content, `${f}.ts`));
  const dir = join(content, 'modules');
  if (existsSync(dir)) files.push(...readdirSync(dir).filter(f => f.endsWith('.ts') && !f.endsWith('.icons.ts') && f !== 'index.ts' && f !== 'icons.ts').map(f => join(dir, f)));
  const words = []; let complete = true;
  for (const file of files) {
    try { for (const value of Object.values(await import(file))) if (Array.isArray(value?.words)) words.push(...value.words); }
    catch (error) { complete = false; console.warn(`! skipped ${file}: ${error.message.split('\n')[0]}`); }
  }
  return { words, complete };
}

// ---------- json files ----------
const readJson = (path, fallback) => { try { return JSON.parse(readFileSync(path, 'utf8')); } catch { return fallback; } };
function writeJson(path, value) {
  const sorted = Object.fromEntries(Object.entries(value).sort(([a], [b]) => a.localeCompare(b)));
  const tmp = `${path}.tmp`;
  writeFileSync(tmp, JSON.stringify(sorted, null, 2) + '\n');
  renameSync(tmp, path);
}

// ---------- polite HTTP ----------
const sleep = ms => new Promise(r => setTimeout(r, ms));
const lastHit = new Map();
/** At most one request per host every `gap` ms; retries 429/5xx/network errors with backoff and Retry-After. */
async function request(url, { gap = 400, tries = 6 } = {}) {
  const host = new URL(url).host;
  for (let attempt = 1; ; attempt++) {
    const wait = (lastHit.get(host) || 0) + gap - Date.now();
    lastHit.set(host, Date.now() + Math.max(0, wait));
    if (wait > 0) await sleep(wait);
    let response;
    try { response = await fetch(url, { headers: { 'User-Agent': UA, 'Api-User-Agent': UA }, signal: AbortSignal.timeout(30_000) }); }
    catch (error) { if (attempt >= tries) throw error; await sleep(1000 * 2 ** attempt); continue; }
    if (response.ok) return response;
    if ((response.status === 429 || response.status >= 500) && attempt < tries) {
      const retryAfter = Number(response.headers.get('retry-after'));
      const delay = Number.isFinite(retryAfter) && retryAfter > 0 ? retryAfter * 1000 : 1500 * 2 ** attempt;
      console.warn(`  … ${response.status} from ${host}, waiting ${Math.round(delay / 1000)} s`);
      await response.body?.cancel();
      await sleep(Math.min(delay, 120_000));
      continue;
    }
    await response.body?.cancel();
    throw new Error(`HTTP ${response.status} ${url}`);
  }
}
const getJson = async (url, opts) => (await request(url, opts)).json();

// ---------- license & metadata ----------
const decode = s => s.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#0?39;|&apos;/g, "'").replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n));
const plain = html => decode(String(html || '').replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').trim();

/** Normalized license name or null if not allowed. */
function allowedLicense(shortName, code = '') {
  const s = `${shortName} ${code}`.toLowerCase();
  if (/\bnc\b|\bnd\b|-nc|-nd|non-?commercial|no ?deriv|fair use|non-?free|all rights/.test(s)) return null;
  if (/\bcc0\b|cc-zero|cc zero/.test(s)) return 'CC0';
  if (/public domain|^pd\b|\bpd-|\bpdm\b|^pd$/.test(s) || code.toLowerCase() === 'pd') return 'Public domain';
  const m = s.match(/cc[ -]by(?:[ -](sa))?(?:[ -](\d(?:\.\d)?))?/);
  if (m) return `CC BY${m[1] ? '-SA' : ''}${m[2] ? ' ' + m[2] : ''}`;
  return null;
}
const licenseUrlFor = (license, given) => given || (license === 'CC0' ? 'https://creativecommons.org/publicdomain/zero/1.0/' : license === 'Public domain' ? 'https://creativecommons.org/publicdomain/mark/1.0/' : '');

const BAD_TITLE = /logo|screenshot|screen ?shot|diagram|\bicons?\b|\bmaps?\b|chart|svg|drawing|clipart|clip art|illustration|cartoon|poster|banner|\bflag\b|coat of arms|wappen|\bsignature\b|scan of|\bstamps?\b|\bpdf\b|floor ?plan/i;

/** Commons imageinfo → candidate, or reason why not. */
function commonsCandidate(page) {
  const info = page.imageinfo?.[0];
  if (!info) return { reject: 'no imageinfo' };
  const meta = info.extmetadata || {};
  const value = k => meta[k]?.value ?? '';
  if (!/^image\/(jpeg|png|webp|tiff)$/.test(info.mime)) return { reject: `mime ${info.mime}` };
  if (Math.min(info.width, info.height) < MIN_SIDE) return { reject: 'too small' };
  const ratio = info.width / info.height;
  if (ratio < 0.6 || ratio > 2.6) return { reject: `ratio ${ratio.toFixed(2)}` };
  if (/^true$/i.test(value('NonFree'))) return { reject: 'non-free' };
  const license = allowedLicense(plain(value('LicenseShortName')), plain(value('License')));
  if (!license) return { reject: `license ${plain(value('LicenseShortName')) || '?'}` };
  if (/personality|trademark|insignia/i.test(value('Restrictions'))) return { reject: `restrictions ${value('Restrictions')}` };
  let author = plain(value('Artist'));
  if (!author && license.startsWith('CC BY')) author = plain(value('Credit'));
  if (!author && license.startsWith('CC BY')) return { reject: 'CC BY without author' };
  if (author.length > 90) author = author.slice(0, 87).trimEnd() + '…';
  const name = page.title.replace(/^File:/, '');
  return {
    url: info.thumburl || info.url,
    width: info.width, height: info.height,
    penalty: (BAD_TITLE.test(name) ? 6 : 0) + (ratio < 1 ? 2 : 0) + (info.mime === 'image/png' ? 2 : 0) + (Math.min(info.width, info.height) < 600 ? 1 : 0),
    credit: {
      title: plain(value('ObjectName')) || name.replace(/\.[a-z0-9]+$/i, '').replace(/_/g, ' '),
      author: author || (license === 'Public domain' ? 'public domain' : 'unknown'),
      license, licenseUrl: licenseUrlFor(license, plain(value('LicenseUrl'))),
      sourceUrl: info.descriptionurl || `https://commons.wikimedia.org/wiki/${encodeURIComponent(page.title.replace(/ /g, '_'))}`,
    },
  };
}

const IMAGEINFO = { prop: 'imageinfo', iiprop: 'url|size|mime|extmetadata', iiurlwidth: '1024', iiextmetadatafilter: 'LicenseShortName|License|LicenseUrl|Artist|Credit|ObjectName|NonFree|Restrictions' };
const commonsUrl = params => `${COMMONS}?${new URLSearchParams({ action: 'query', format: 'json', formatversion: '2', maxlag: '5', ...IMAGEINFO, ...params })}`;

async function commonsSearch(query) {
  const data = await getJson(commonsUrl({ generator: 'search', gsrsearch: `${query} filetype:bitmap`, gsrnamespace: '6', gsrlimit: '20' }));
  const pages = (data.query?.pages || []).sort((a, b) => a.index - b.index);
  const out = []; const rejected = [];
  pages.forEach((page, rank) => { const c = commonsCandidate(page); if (c.reject) rejected.push(`${page.title}: ${c.reject}`); else out.push({ ...c, score: rank + c.penalty, file: page.title }); });
  return { candidates: out.sort((a, b) => a.score - b.score), rejected };
}
async function commonsFile(title) {
  const data = await getJson(commonsUrl({ titles: title }));
  const page = data.query?.pages?.[0];
  if (!page || page.missing) throw new Error(`${title} not found on Commons`);
  const c = commonsCandidate(page);
  if (c.reject) throw new Error(`${title}: ${c.reject}`);
  return { ...c, file: page.title };
}

async function openverseSearch(query) {
  const url = `${OPENVERSE}?${new URLSearchParams({ q: query, license: 'cc0,pdm,by,by-sa', page_size: '20', mature: 'false', extension: 'jpg,jpeg,png,webp' })}`;
  const data = await getJson(url, { gap: 1500 });
  const out = [];
  (data.results || []).forEach((r, rank) => {
    const license = allowedLicense(r.license === 'pdm' ? 'public domain' : `cc ${r.license} ${r.license_version || ''}`.replace('cc cc0', 'cc0'));
    if (!license || !r.width || !r.height || Math.min(r.width, r.height) < MIN_SIDE) return;
    const ratio = r.width / r.height; if (ratio < 0.6 || ratio > 2.6) return;
    if (license.startsWith('CC BY') && !r.creator) return;
    out.push({
      url: r.url, width: r.width, height: r.height, file: r.foreign_landing_url,
      score: rank + (BAD_TITLE.test(r.title || '') ? 6 : 0) + (ratio < 1 ? 2 : 0),
      credit: { title: plain(r.title) || 'untitled', author: plain(r.creator) || 'public domain', license, licenseUrl: licenseUrlFor(license, r.license_url), sourceUrl: r.foreign_landing_url },
    });
  });
  return out.sort((a, b) => a.score - b.score);
}

// ---------- image ----------
function convert(input, output) {
  for (const quality of [75, 68, 60]) {
    execFileSync('magick', [input + '[0]', '-auto-orient', '-colorspace', 'sRGB', '-resize', `${WIDTH}x${HEIGHT}^`, '-gravity', 'center', '-extent', `${WIDTH}x${HEIGHT}`, '-strip', '-quality', String(quality), '-define', 'webp:method=6', output], { stdio: 'pipe' });
    if (statSync(output).size <= MAX_BYTES) return;
  }
}
async function download(candidate, wordId) {
  const response = await request(candidate.url, { gap: 300 });
  const bytes = Buffer.from(await response.arrayBuffer());
  if (bytes.length < 2000) throw new Error('download too small');
  const tmp = join(cacheDir, `${wordId}.src`);
  writeFileSync(tmp, bytes);
  const out = join(outDir, `${wordId}.webp`); const outTmp = `${out}.tmp.webp`;
  try { convert(tmp, outTmp); renameSync(outTmp, out); } finally { rmSync(tmp, { force: true }); rmSync(outTmp, { force: true }); }
  return statSync(out).size;
}

// ---------- main ----------
mkdirSync(outDir, { recursive: true }); mkdirSync(cacheDir, { recursive: true });
try { execFileSync('magick', ['-version'], { stdio: 'pipe' }); } catch { console.error('ImageMagick (`magick`) is required'); process.exit(1); }

const { words, complete } = await loadWords();
const credits = readJson(creditsPath, {});
const overrides = readJson(overridesPath, {});
const misses = readJson(missesPath, {});
const byId = new Map(words.map(w => [w.id, w]));
const saveCredits = () => { if (!dryRun) writeJson(creditsPath, credits); };
const removePhoto = id => { rmSync(join(outDir, `${id}.webp`), { force: true }); delete credits[id]; };

// Photos forbidden in overrides, or credits without a file (and files without credits) are cleaned up first.
for (const [id, value] of Object.entries(overrides)) if (value === null && (credits[id] || existsSync(join(outDir, `${id}.webp`)))) { console.log(`- ${id}: forbidden in overrides, removed`); if (!dryRun) removePhoto(id); }
for (const id of Object.keys(credits)) if (!existsSync(join(outDir, `${id}.webp`))) delete credits[id];
for (const f of readdirSync(outDir)) if (f.endsWith('.webp') && !credits[f.slice(0, -5)]) { console.log(`- ${f}: no credits entry, removed`); if (!dryRun) rmSync(join(outDir, f)); }
if (prune) {
  if (!complete) console.warn('! --prune skipped: not every module could be loaded');
  else for (const id of Object.keys(credits)) {
    const w = byId.get(id);
    if (!w || (!w.imageQuery && typeof overrides[id] !== 'string')) { console.log(`- ${id}: ${w ? 'no imageQuery any more' : 'word is gone'}, removed`); if (!dryRun) removePhoto(id); }
  }
}
saveCredits();

const todo = words.filter(w => {
  if (!/^[a-z0-9-]+$/.test(w.id)) { console.warn(`! ${w.id}: id is not a safe file name, skipped`); return false; }
  if (overrides[w.id] === null) return false;
  if (!w.imageQuery && typeof overrides[w.id] !== 'string') return false;
  if (force.has(w.id)) return true;
  // A changed manual choice replaces the photo: the credits keep the Commons page of the chosen file.
  if (typeof overrides[w.id] === 'string') return !credits[w.id] || !decodeURIComponent(credits[w.id].sourceUrl).replace(/_/g, ' ').endsWith(overrides[w.id].replace(/_/g, ' '));
  if (credits[w.id]) return false;
  if (!retryMisses && typeof overrides[w.id] !== 'string' && misses[w.id]?.query === w.imageQuery) return false;
  return true;
});
for (const id of force) if (!byId.has(id)) console.warn(`! --force ${id}: no such word`);
console.log(`${words.length} words, ${words.filter(w => w.imageQuery).length} with imageQuery, ${Object.keys(credits).length} photos present, ${todo.length} to fetch${dryRun ? ' (dry run)' : ''}`);

const report = { at: new Date().toISOString(), fetched: [], missed: [], failed: [] };
let next = 0;
async function worker() {
  while (next < todo.length) {
    const word = todo[next++];
    const label = `[${next}/${todo.length}] ${word.id}`;
    try {
      const manual = typeof overrides[word.id] === 'string' ? overrides[word.id] : null;
      let candidates;
      if (manual) candidates = [await commonsFile(manual)];
      else {
        const { candidates: found, rejected } = await commonsSearch(word.imageQuery);
        candidates = found.filter(c => c.score < 12);
        if (!candidates.length) candidates = (await openverseSearch(word.imageQuery).catch(e => { console.warn(`  openverse: ${e.message}`); return []; })).filter(c => c.score < 12);
        if (!candidates.length) {
          console.log(`${label}: nothing for "${word.imageQuery}" (${rejected.length} rejected)`);
          if (!dryRun) misses[word.id] = { query: word.imageQuery, at: report.at };
          report.missed.push({ id: word.id, query: word.imageQuery, rejected: rejected.slice(0, 8) });
          continue;
        }
      }
      if (dryRun) { console.log(`${label}: ${candidates[0].file} · ${candidates[0].credit.license}`); continue; }
      let done = false;
      for (const candidate of candidates.slice(0, 3)) {
        try {
          const size = await download(candidate, word.id);
          credits[word.id] = candidate.credit; saveCredits(); delete misses[word.id];
          report.fetched.push({ id: word.id, file: candidate.file, license: candidate.credit.license, size });
          console.log(`${label}: ${candidate.file} · ${candidate.credit.license} · ${Math.round(size / 1024)} KB`);
          done = true; break;
        } catch (error) { console.warn(`  ${candidate.file}: ${error.message.split('\n')[0]}`); }
      }
      if (!done) throw new Error('no candidate could be downloaded');
    } catch (error) {
      console.warn(`${label}: FAILED ${error.message}`);
      report.failed.push({ id: word.id, query: word.imageQuery, error: error.message });
    } finally {
      if (!dryRun) writeJson(missesPath, misses);
    }
  }
}
await Promise.all(Array.from({ length: WORKERS }, worker));
if (!dryRun) writeJson(reportPath, report);

const files = readdirSync(outDir).filter(f => f.endsWith('.webp'));
const total = files.reduce((sum, f) => sum + statSync(join(outDir, f)).size, 0);
const licenses = Object.values(credits).reduce((acc, c) => ({ ...acc, [c.license]: (acc[c.license] || 0) + 1 }), {});
console.log(`\nfetched ${report.fetched.length}, nothing found ${report.missed.length}, failed ${report.failed.length}`);
console.log(`photos: ${files.length}, ${(total / 1024).toFixed(0)} KB total; licenses: ${JSON.stringify(licenses)}`);
if (report.missed.length || report.failed.length) console.log(`report: ${reportPath}`);
if (report.failed.length) process.exitCode = 1;
