import { contentLevels, getModule, getWord, lessonCount, lessonWords, modules, modulesFor, spheres, type ContentLevel, type Module, type Sphere } from '../content/index.ts';
import { defaultStudyTrack, normalizeStudyStage, type StudyStage } from './study-focus.ts';
import { firstTryScore, PASS_SCORE, type Run } from './lesson.ts';
import { clampStage, lessonGrade, newCard, Rating, rate, readCard, type Stage, type WordProgress } from './srs.ts';
import { dict } from '../i18n/runtime.ts';

export type Level = 'A1' | 'A2' | 'B1' | 'B2' | 'C1';
export const levels: Level[] = ['A1', 'A2', 'B1', 'B2', 'C1'];
export type Profile = { name: string; level: Level; track: string; exam: string; date: string; vwuEnrolled?: boolean; studyStage?: StudyStage };
export type ModuleProgress = { lessons: number[]; test?: { best: number; passed: boolean; date: string } };
export type SessionResult = { date: string; minutes: number; title: string; kind: 'lesson' | 'review' | 'test'; score?: number };
export type Progress = {
  profile: Profile | null;
  sphere: Sphere;
  words: Record<string, WordProgress>;
  modules: Record<string, ModuleProgress>;
  sessions: SessionResult[];
  skills: number[];
};
export type { WordProgress };

export const initialProgress: Progress = { profile: null, sphere: 'cyber', words: {}, modules: {}, sessions: [], skills: [0, 0, 0, 0, 0, 0] };
export const skillNames = ['Lesen', 'Hören', 'Schreiben', 'Sprechen', 'Grammatik', 'Wortschatz'];

/** Content exists up to A2.2 so far: A1 → A1.2, A2 → A2.1, B1 and above start with A2.2 until new modules arrive. */
export const contentLevelFor = (level: Level | undefined): ContentLevel => !level || level === 'A1' ? 'A1.2' : level === 'A2' ? 'A2.1' : 'A2.2';

// ---------- placement (unchanged short screening) ----------
export const placement = [
  { question: 'Hallo! Ich ___ Mila.', options: ['heiße', 'heißt', 'heißen'], correct: 0 },
  { question: 'Wo wohnst du? — Ich wohne ___ Wien.', options: ['aus', 'in', 'nach'], correct: 1 },
  { question: 'Ich interessiere mich ___ ein Studium in Wien.', options: ['an', 'für', 'mit'], correct: 1 },
  { question: 'Ich lerne Deutsch, ___ ich in Wien studieren möchte.', options: ['weil', 'obwohl', 'trotzdem'], correct: 0 },
  { question: 'Wenn ich mehr Zeit hätte, ___ ich häufiger Vorlesungen besuchen.', options: ['werde', 'würde', 'wurde'], correct: 1 },
  { question: 'Die Daten, ___ wir ausgewertet haben, bestätigen die Hypothese.', options: ['denen', 'deren', 'die'], correct: 2 },
  { question: 'Welche Formulierung passt in einen wissenschaftlichen Text?', options: ['Das ist halt so.', 'Die Ergebnisse deuten darauf hin, dass …', 'Ich finde das mega.'], correct: 1 },
  { question: '„Ungeachtet der methodischen Einschränkungen sind die Befunde konsistent.“ bedeutet:', options: ['Die Einschränkungen widerlegen die Befunde.', 'Trotz Einschränkungen stimmen die Ergebnisse überein.', 'Die Methode ist uneingeschränkt gültig.'], correct: 1 },
];
export function placementLevel(answers: number[]): Level {
  const score = placement.reduce((n, q, i) => n + Number(q.correct === answers[i]), 0);
  return score <= 2 ? 'A1' : score <= 4 ? 'A2' : score <= 6 ? 'B1' : 'B2';
}

export function updateProfile(progress: Progress, profile: Profile): Progress {
  return { ...progress, profile: { ...profile, studyStage: normalizeStudyStage(profile.studyStage), exam: profile.vwuEnrolled ? 'VWU Ergänzungsprüfung' : profile.exam } };
}
export const setSphere = (progress: Progress, sphere: Sphere): Progress => ({ ...progress, sphere });

// ---------- what to do next ----------
export type NextStep = { kind: 'lesson'; module: Module; lesson: number } | { kind: 'test'; module: Module } | null;
export const lessonDone = (progress: Progress, moduleId: string, lesson: number) => !!progress.modules[moduleId]?.lessons.includes(lesson);
export const moduleLessonsDone = (progress: Progress, module: Module) => Array.from({ length: lessonCount(module) }, (_, i) => i).every(i => lessonDone(progress, module.id, i));

/** First unfinished lesson in the sphere from the given level upwards, then its test; then the easier levels. */
export function nextStep(progress: Progress, sphere: Sphere, level: ContentLevel): NextStep {
  const from = contentLevels.indexOf(level);
  const ordered = [...contentLevels.slice(from), ...contentLevels.slice(0, from)].flatMap(l => modulesFor(sphere, l));
  for (const module of ordered) {
    for (let i = 0; i < lessonCount(module); i++) if (!lessonDone(progress, module.id, i)) return { kind: 'lesson', module, lesson: i };
    if (!progress.modules[module.id]?.test?.passed) return { kind: 'test', module };
  }
  return null;
}
export const dueWords = (progress: Progress, now = Date.now()) =>
  Object.entries(progress.words).filter(([id, w]) => w.card.due <= now && getWord(id)).sort((a, b) => a[1].card.due - b[1].card.due).map(([wordId, w]) => ({ wordId, stage: w.stage }));
export const nextDue = (progress: Progress) => Math.min(...Object.values(progress.words).map(w => w.card.due));

// ---------- applying results ----------
const minutesSince = (start: number, now: number) => Math.max(1, Math.round((now - start) / 60000));
const log = (progress: Progress, run: Run, now: number, score?: number): SessionResult[] =>
  [...progress.sessions, { date: new Date(now).toISOString(), minutes: minutesSince(run.startedAt, now), title: run.title, kind: run.mode, ...(score !== undefined ? { score } : {}) }].slice(-200);

/** After a lesson every lesson word gets an FSRS card; stage 2 when no mistakes, else 1. */
export function applyLesson(progress: Progress, run: Run, now = Date.now()): Progress {
  const module = run.moduleId ? getModule(run.moduleId) : undefined;
  if (run.mode !== 'lesson' || !module || run.lesson === undefined) return progress;
  const words = { ...progress.words };
  for (const word of lessonWords(module, run.lesson)) {
    const result = run.results[word.id] || { right: 0, wrong: 0 };
    const old = words[word.id];
    const card = rate(old?.card || newCard(now), lessonGrade(result.wrong), now);
    const stage = result.wrong === 0 ? clampStage(Math.max(old?.stage || 1, 2)) : clampStage(old ? old.stage - 1 : 1);
    words[word.id] = { card, stage, right: (old?.right || 0) + result.right, wrong: (old?.wrong || 0) + result.wrong };
  }
  const mp = progress.modules[module.id] || { lessons: [] };
  const lessons = mp.lessons.includes(run.lesson) ? mp.lessons : [...mp.lessons, run.lesson].sort((a, b) => a - b);
  return { ...progress, words, modules: { ...progress.modules, [module.id]: { ...mp, lessons } }, sessions: log(progress, run, now) };
}

/** Review: the first answer counts. Right → Good and stage up; wrong → Again and stage down. */
export function applyReview(progress: Progress, run: Run, now = Date.now()): Progress {
  if (run.mode !== 'review') return progress;
  const words = { ...progress.words };
  for (const [id, result] of Object.entries(run.results)) {
    const old = words[id]; if (!old) continue;
    const ok = result.firstCorrect === true;
    words[id] = { card: rate(old.card, ok ? Rating.Good : Rating.Again, now), stage: clampStage(old.stage + (ok ? 1 : -1)), right: old.right + result.right, wrong: old.wrong + result.wrong };
  }
  return { ...progress, words, sessions: log(progress, run, now) };
}

/** Test: score of first answers; passed at 80 %. Mistaken words return to review now. */
export function applyTest(progress: Progress, run: Run, now = Date.now()): Progress {
  const module = run.moduleId ? getModule(run.moduleId) : undefined;
  if (run.mode !== 'test' || !module) return progress;
  const score = firstTryScore(run);
  const words = { ...progress.words };
  for (const [id, result] of Object.entries(run.results)) {
    if (result.firstCorrect) continue;
    const old = words[id] || { card: newCard(now), stage: 1 as Stage, right: 0, wrong: 0 };
    words[id] = { ...old, card: rate(old.card, Rating.Again, now), stage: clampStage(old.stage - 1), wrong: old.wrong + 1 };
  }
  const mp = progress.modules[module.id] || { lessons: [] };
  const best = Math.max(score, mp.test?.best || 0);
  return { ...progress, words, modules: { ...progress.modules, [module.id]: { ...mp, test: { best, passed: best >= PASS_SCORE, date: new Date(now).toISOString() } } }, sessions: log(progress, run, now, score) };
}

export function stageCounts(progress: Progress) {
  const counts = [0, 0, 0, 0, 0];
  for (const w of Object.values(progress.words)) counts[w.stage]++;
  counts[0] = modules.reduce((n, m) => n + m.words.length, 0) - Object.keys(progress.words).filter(id => getWord(id)).length;
  return counts;
}

// ---------- restoring saved data ----------
function record(value: unknown): Record<string, unknown> { return value !== null && typeof value === 'object' && !Array.isArray(value) ? value as Record<string, unknown> : {}; }
function text(value: unknown, fallback = '') { return typeof value === 'string' ? value : fallback; }
function number(value: unknown, fallback = 0) { return typeof value === 'number' && Number.isFinite(value) ? value : fallback; }

/**
 * Restores browser and cloud saves. Older saves from the story sessions keep profile,
 * skills and the practice log; story drafts and story cards are dropped with the stories.
 */
export function restoreProgress(value: unknown): Progress {
  const source = record(value); const rawProfile = record(source.profile);
  const profile: Profile | null = typeof rawProfile.name === 'string' && levels.includes(rawProfile.level as Level) ? {
    name: rawProfile.name, level: rawProfile.level as Level, track: text(rawProfile.track, defaultStudyTrack), exam: rawProfile.vwuEnrolled === true ? 'VWU Ergänzungsprüfung' : text(rawProfile.exam, 'ÖSD C1'), date: /^\d{4}-\d{2}-\d{2}$/.test(text(rawProfile.date)) ? text(rawProfile.date) : '', vwuEnrolled: rawProfile.vwuEnrolled === true, studyStage: normalizeStudyStage(rawProfile.studyStage),
  } : null;
  const sphere = spheres.some(s => s.id === source.sphere) ? source.sphere as Sphere : initialProgress.sphere;
  const words: Record<string, WordProgress> = {};
  for (const [id, raw] of Object.entries(record(source.words))) {
    const w = record(raw); const card = readCard(w.card);
    if (!getWord(id) || !card) continue;
    words[id] = { card, stage: clampStage(number(w.stage, 1)), right: Math.max(0, Math.trunc(number(w.right))), wrong: Math.max(0, Math.trunc(number(w.wrong))) };
  }
  const moduleState: Record<string, ModuleProgress> = {};
  for (const [id, raw] of Object.entries(record(source.modules))) {
    const module = getModule(id); if (!module) continue;
    const m = record(raw); const t = record(m.test);
    const lessons = Array.isArray(m.lessons) ? [...new Set(m.lessons.filter((n): n is number => Number.isInteger(n) && n >= 0 && n < lessonCount(module)))].sort((a, b) => a - b) : [];
    moduleState[id] = { lessons, ...(typeof t.best === 'number' && Number.isFinite(t.best) ? { test: { best: Math.max(0, Math.min(1, t.best)), passed: Math.max(0, Math.min(1, t.best)) >= PASS_SCORE, date: text(t.date) } } : {}) };
  }
  const sessions: SessionResult[] = Array.isArray(source.sessions) ? source.sessions.flatMap(v => {
    const s = record(v); if (typeof s.date !== 'string' || Number.isNaN(Date.parse(s.date))) return [];
    const kind: SessionResult['kind'] = s.kind === 'review' || s.kind === 'test' ? s.kind : 'lesson';
    return [{ date: s.date, minutes: Math.max(0, number(s.minutes)), title: text(s.title, dict().run.sessionFallback), kind, ...(typeof s.score === 'number' && Number.isFinite(s.score) ? { score: Math.max(0, Math.min(1, s.score)) } : {}) }];
  }).slice(-200) : [];
  const skills = initialProgress.skills.map((_, i) => Math.max(0, Math.min(100, number(Array.isArray(source.skills) ? source.skills[i] : 0))));
  return { profile, sphere, words, modules: moduleState, sessions, skills };
}
