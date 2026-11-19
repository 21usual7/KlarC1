// Pre-generates the German voice of the course: public/audio/<audioKey(text)>.mp3 + public/audio/manifest.json.
// The app plays these files and falls back to the browser voice (speechSynthesis) for anything not listed.
//
//   node --experimental-strip-types scripts/gen-audio.mjs [--prune] [--jobs N] [--threads N] [--limit N] [--dry-run]
//
// Needs Piper (`uv tool install --python 3.12 piper-tts`), the voice de_DE-thorsten-high
// (~/.local/share/piper-voices/, see README "Озвучка") and ffmpeg with libmp3lame.
// Idempotent: existing files are kept, only new phrases are synthesized; --prune deletes files no longer in the content.
// Env: PIPER_VOICE (path to .onnx), PIPER_PYTHON (python of the piper-tts environment).
import { spawn, spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, realpathSync, renameSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { cpus, homedir, tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { createInterface } from 'node:readline';
import { displayWord, modules } from '../src/content/index.ts';
import { audioKey, normalizeAudioText } from '../src/lib/audio-key.ts';
import { splitSentences } from '../src/lib/exercises.ts';

const root = new URL('..', import.meta.url).pathname;
const outDir = join(root, 'public/audio');
const MANIFEST_VERSION = 1;
const VOICE_NAME = 'de_DE-thorsten-high';

// ---------- options ----------
const args = process.argv.slice(2);
const flag = name => args.includes(name);
const option = (name, fallback) => { const i = args.indexOf(name); return i >= 0 && args[i + 1] ? Number(args[i + 1]) : fallback; };
const threads = option('--threads', 2);
const jobs = option('--jobs', Math.max(1, Math.floor(cpus().length / threads)));
const limit = option('--limit', Infinity);
const prune = flag('--prune');
const dryRun = flag('--dry-run');

// ---------- phrases: everything the app can pass to speak()/speakQueue() ----------
// Word card / word list: displayWord(word), example. Exercises (src/lib/exercises.ts `audio`): word.de, example.de,
// translate[].de, sentences of the reading (listen-text). Reading view: splitSentences(reading.de), one by one.
// Collocations are not spoken today, but are cheap and may be.
const phrases = new Map(); // key → normalized text
const add = text => {
  if (!text || !text.trim()) return;
  const norm = normalizeAudioText(text); const key = audioKey(norm);
  const known = phrases.get(key);
  if (known !== undefined && known !== norm) throw new Error(`audioKey collision: "${known}" vs "${norm}"`);
  phrases.set(key, norm);
};
for (const module of modules) {
  for (const word of module.words) {
    add(word.de); add(displayWord(word)); add(word.example.de); add(word.collocation?.de);
  }
  for (const reading of module.readings ?? []) {
    splitSentences(reading.de).forEach(add);
    reading.translate.forEach(t => add(t.de));
  }
}

// ---------- pronunciation: replacements for synthesis only (the key stays the original text) ----------
const lexicon = JSON.parse(readFileSync(join(root, 'scripts/audio-lexicon.json'), 'utf8'));
const escape = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const patterns = lexicon.patterns.map(([re, to]) => [new RegExp(re, 'gu'), to]);
// Longest first, so `HTTPS` wins over `HTTP`; a token is not part of a longer word (letters, digits).
const wordKeys = Object.keys(lexicon.words).sort((a, b) => b.length - a.length);
const wordRe = wordKeys.length ? new RegExp(`(?<![\\p{L}\\p{N}])(?:${wordKeys.map(escape).join('|')})(?![\\p{L}\\p{N}])`, 'gu') : null;
export function forSpeech(text) {
  let t = text;
  for (const [re, to] of patterns) t = t.replace(re, to);
  if (wordRe) t = t.replace(wordRe, m => lexicon.words[m]);
  // Quotes make Piper pause oddly; ellipses read as dots.
  return t.replace(/[„“”"»«]/g, '').replace(/…/g, ', ').replace(/\s+/g, ' ').trim();
}

// ---------- what to do ----------
mkdirSync(outDir, { recursive: true });
const onDisk = new Set(readdirSync(outDir).filter(f => /^[0-9a-f]{16}\.mp3$/.test(f) && statSync(join(outDir, f)).size > 0).map(f => f.slice(0, 16)));
const todo = [...phrases].filter(([key]) => !onDisk.has(key)).slice(0, limit);
const stale = [...onDisk].filter(key => !phrases.has(key));
console.log(`phrases: ${phrases.size}, already generated: ${phrases.size - [...phrases.keys()].filter(k => !onDisk.has(k)).length}, to generate: ${todo.length}, not in content: ${stale.length}${prune ? ' (will be deleted)' : ''}`);

if (dryRun) {
  // Shows every phrase the lexicon changes: the place to check pronunciation fixes.
  for (const [key, text] of todo) { const s = forSpeech(text); if (s !== text) console.log(key, text, ' → ', s); }
  process.exit(0);
}

if (prune) for (const key of stale) { rmSync(join(outDir, `${key}.mp3`)); onDisk.delete(key); }

function writeManifest() {
  const keys = [...phrases.keys()].filter(k => onDisk.has(k)).sort();
  writeFileSync(join(outDir, 'manifest.json'), JSON.stringify({ version: MANIFEST_VERSION, voice: VOICE_NAME, keys }) + '\n');
  return keys.length;
}

if (!todo.length) { console.log(`manifest: ${writeManifest()} files`); process.exit(0); }

// ---------- tools ----------
const voicePath = process.env.PIPER_VOICE || join(homedir(), '.local/share/piper-voices', `${VOICE_NAME}.onnx`);
if (!existsSync(voicePath) || !existsSync(`${voicePath}.json`)) {
  console.error(`Voice not found: ${voicePath} (+ .json). Download ${VOICE_NAME}.onnx and .onnx.json from huggingface.co/rhasspy/piper-voices (de/de_DE/thorsten/high).`);
  process.exit(1);
}
function piperPython() {
  if (process.env.PIPER_PYTHON) return process.env.PIPER_PYTHON;
  // `uv tool install piper-tts` links ~/.local/bin/piper into the tool's virtualenv; its python sits next to it.
  const which = spawnSync('sh', ['-c', 'command -v piper'], { encoding: 'utf8' }).stdout.trim();
  const candidates = [which && join(dirname(realpathSync(which)), 'python'), join(homedir(), '.local/share/uv/tools/piper-tts/bin/python')];
  const found = candidates.find(p => p && existsSync(p));
  if (!found) { console.error('Piper not found: uv tool install --python 3.12 piper-tts (or set PIPER_PYTHON).'); process.exit(1); }
  return found;
}
if (spawnSync('ffmpeg', ['-version']).status !== 0) { console.error('ffmpeg not found'); process.exit(1); }

// One long-lived Python process per job: the model is loaded once, then it reads JSON lines
// {"text", "wav"} from stdin and answers {"ok"} or {"error"} per line.
const WORKER = String.raw`
import json, sys, wave
import onnxruntime
from piper import PiperVoice
from piper.config import SynthesisConfig
model, threads = sys.argv[1], int(sys.argv[2])
voice = PiperVoice.load(model)
opts = onnxruntime.SessionOptions()
opts.intra_op_num_threads = threads
opts.inter_op_num_threads = 1
voice.session = onnxruntime.InferenceSession(model, sess_options=opts, providers=["CPUExecutionProvider"])
config = SynthesisConfig(length_scale=1.05)
print(json.dumps({"ready": True}), flush=True)
for line in sys.stdin:
    job = json.loads(line)
    try:
        with wave.open(job["wav"], "wb") as f:
            voice.synthesize_wav(job["text"], f, syn_config=config)
        print(json.dumps({"ok": True}), flush=True)
    except Exception as e:
        print(json.dumps({"error": repr(e)}), flush=True)
`;

const tmp = mkdtempSync(join(tmpdir(), 'klar-audio-'));
const python = piperPython();
const workers = [];
const cleanup = () => { workers.forEach(w => w.proc.kill()); rmSync(tmp, { recursive: true, force: true }); };
process.on('SIGINT', () => { cleanup(); process.exit(130); });

function startWorker() {
  const proc = spawn(python, ['-I', '-c', WORKER, voicePath, String(threads)], { stdio: ['pipe', 'pipe', 'inherit'] });
  const lines = createInterface({ input: proc.stdout });
  const waiting = [];
  lines.on('line', line => waiting.shift()?.(JSON.parse(line)));
  proc.on('exit', code => { while (waiting.length) waiting.shift()({ error: `piper worker exited with ${code}` }); });
  const ready = new Promise(resolve => waiting.push(resolve));
  const synth = (text, wav) => new Promise(resolve => { waiting.push(resolve); proc.stdin.write(JSON.stringify({ text, wav }) + '\n'); });
  return { proc, ready, synth };
}

const toMp3 = (wav, mp3) => new Promise((resolve, reject) => {
  // Mono, 48 kbps; 150 ms of silence at the end so the last syllable is not clipped by some players.
  const ff = spawn('ffmpeg', ['-v', 'error', '-y', '-i', wav, '-af', 'apad=pad_dur=0.15', '-ac', '1', '-c:a', 'libmp3lame', '-b:a', '48k', '-map_metadata', '-1', '-f', 'mp3', mp3]);
  let err = ''; ff.stderr.on('data', d => { err += d; });
  ff.on('exit', code => code === 0 ? resolve() : reject(new Error(`ffmpeg ${code}: ${err}`)));
});

// ---------- run ----------
const started = Date.now();
for (let i = 0; i < Math.min(jobs, todo.length); i++) workers.push(startWorker());
await Promise.all(workers.map(w => w.ready));
console.log(`${workers.length} piper workers × ${threads} threads, voice ${voicePath}`);

let next = 0, done = 0, failed = 0, lastLog = 0;
const progress = (force = false) => {
  const now = Date.now(); if (!force && now - lastLog < 2000) return; lastLog = now;
  const sec = (now - started) / 1000; const rate = done / Math.max(sec, 0.001);
  const eta = rate ? Math.round((todo.length - done - failed) / rate) : 0;
  console.log(`  ${done + failed}/${todo.length}  ${rate.toFixed(1)}/s  elapsed ${Math.round(sec)}s  eta ${eta}s${failed ? `  failed ${failed}` : ''}`);
};
async function run(worker, slot) {
  while (next < todo.length) {
    const [key, text] = todo[next++];
    const wav = join(tmp, `${slot}.wav`); const part = join(outDir, `${key}.mp3.part`);
    const answer = await worker.synth(forSpeech(text), wav);
    try {
      if (answer.error) throw new Error(answer.error);
      await toMp3(wav, part);
      renameSync(part, join(outDir, `${key}.mp3`));
      onDisk.add(key); done++;
    } catch (e) {
      failed++; rmSync(part, { force: true });
      console.error(`  failed ${key} "${text}": ${e.message}`);
    }
    progress();
  }
  worker.proc.stdin.end();
}
await Promise.all(workers.map((w, i) => run(w, i)));
progress(true);
cleanup();
const listed = writeManifest();
console.log(`done: ${done} generated, ${failed} failed, manifest: ${listed} files, ${((Date.now() - started) / 60000).toFixed(1)} min`);
if (failed) process.exitCode = 1;
