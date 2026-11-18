export type Level = 'A1' | 'A2' | 'B1' | 'B2' | 'C1';
export const levels: Level[] = ['A1', 'A2', 'B1', 'B2', 'C1'];
export type ReviewCard = { word: string; translation: string; example: string; due: number; interval: number };
export type Profile = { name: string; level: Level; track: string; exam: string; date: string; vwuEnrolled?: boolean };
export type SessionDraft = { warmup: string; writing: string; stage: number; answers: Record<string, string> };
export type SessionResult = { date: string; minutes: number; confidence: number; sessionId?: string; title?: string };
export type Progress = SessionDraft & { profile: Profile | null; sessionId: string; drafts: Record<string, SessionDraft>; completed: string[]; reviews: ReviewCard[]; sessions: SessionResult[]; skills: number[] };
export const initialProgress: Progress = { profile: null, sessionId: 'hallo-wien', drafts: {}, completed: [], warmup: '', writing: '', stage: 0, answers: {}, reviews: [], sessions: [], skills: [0, 0, 0, 0, 0, 0] };
export const skillNames = ['Lesen', 'Hören', 'Schreiben', 'Sprechen', 'Grammatik', 'Wortschatz'];
export const vocabulary = [
  { word: 'die Lehrveranstaltung', translation: 'учебное занятие / курс', example: 'Für diese Lehrveranstaltung muss man sich anmelden.' },
  { word: 'die Voraussetzung', translation: 'необходимое условие', example: 'Deutschkenntnisse sind eine Voraussetzung für das Studium.' },
  { word: 'sich zurechtfinden', translation: 'ориентироваться, осваиваться', example: 'Am Campus finde ich mich schon gut zurecht.' },
  { word: 'die Sprechstunde', translation: 'консультационные часы', example: 'In der Sprechstunde kann ich meine Fragen stellen.' },
  { word: 'nachvollziehbar', translation: 'понятный, логичный', example: 'Die Erklärung der Professorin war nachvollziehbar.' },
];
export const stages = ['Настроиться', 'Погрузиться', 'Разобраться', 'Создать', 'Повторить', 'Рефлексия'];
export const story = [
  'Es ist Montag, kurz vor neun. Mila steht vor dem Hauptgebäude der TU Wien am Karlsplatz. In ihrer Tasche liegen ein Notizbuch und ein ausgedruckter Stundenplan. Sie hat sich auf diesen Tag gefreut. Trotzdem ist sie nervös: Wird sie die Vorlesungen verstehen?',
  '„Suchst du auch den Hörsaal?“, fragt ein Student neben ihr. Er heißt Jonas und studiert Informatik im dritten Semester. Mila nickt. „Ich bin neu hier. Ich weiß noch nicht, wie die Anmeldung zu den Lehrveranstaltungen funktioniert.“ Jonas lächelt: „Am Anfang ist das für alle kompliziert. Die Termine und Voraussetzungen stehen im TISS. Wir schauen nach der Vorlesung gemeinsam nach.“',
  'Im Hörsaal spricht die Professorin über Algorithmen. Nicht jedes Wort ist Mila bekannt, aber sie versteht die zentrale Idee: Ein großes Problem lässt sich in kleinere Schritte zerlegen. Statt jedes unbekannte Wort zu übersetzen, notiert sie die wichtigsten Begriffe und ein Beispiel.',
  'Nach der Vorlesung gehen Mila und Jonas in die Bibliothek. Dort ist es ruhig. „Ich habe nicht alles verstanden“, sagt Mila. „Das musst du auch nicht sofort“, antwortet Jonas. „Schreib eine kurze Zusammenfassung. Wenn du den Gedanken erklären kannst, hast du schon viel verstanden. Und für offene Fragen gibt es die Sprechstunde.“',
  'Am Abend schreibt Mila drei Sätze in ihr Notizbuch. Heute hat sie einen Hörsaal gefunden, einen neuen Menschen kennengelernt und eine Idee verstanden. Wien fühlt sich noch fremd an. Aber der erste Schritt ist gemacht.',
];
export const comprehension = [
  { id: 'q1', question: 'Wobei braucht Mila zuerst Hilfe?', options: ['Bei der Wohnungssuche', 'Bei der Orientierung und der Kursanmeldung', 'Bei der Prüfungsvorbereitung'], correct: 1, explanation: 'Mila sucht den Hörsaal und fragt nach der Anmeldung zu den Lehrveranstaltungen.' },
  { id: 'q2', question: 'Welche Lernstrategie verwendet Mila in der Vorlesung?', options: ['Sie übersetzt jedes Wort.', 'Sie wartet auf eine Übersetzung.', 'Sie notiert zentrale Begriffe und ein Beispiel.'], correct: 2, explanation: 'Sie konzentriert sich auf die zentrale Idee und notiert wichtige Begriffe.' },
  { id: 'q3', question: 'Was empfiehlt Jonas nach der Vorlesung?', options: ['Eine Zusammenfassung schreiben und offene Fragen in der Sprechstunde klären', 'Alle unbekannten Wörter auswendig lernen', 'Den Kurs wechseln'], correct: 0, explanation: 'Eine eigene Erklärung macht sichtbar, was man verstanden hat.' },
];
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
export function scheduleCard(card: ReviewCard, remembered: boolean, now = Date.now()): ReviewCard {
  const interval = remembered ? (card.interval ? Math.min(card.interval * 2, 60) : 1) : 0;
  return { ...card, interval, due: now + (interval ? interval * 86400000 : 600000) };
}

export type LearningSession = {
  id: string; title: string; level: string; goal: string; description: string;
  story: string[]; vocabulary: typeof vocabulary; comprehension: typeof comprehension;
  writingMin: number; writingMax: number; writingPrompt: string; warmupPrompt: string; speakingPrompt: string;
};
const beginnerSession: LearningSession = {
  id: 'hallo-wien', title: 'Hallo, Wien!', level: 'A1',
  goal: 'Познакомиться, назвать город и направление учёбы, спросить, где находится аудитория.',
  description: 'Знакомство в Вене: простые фразы, понятная история и твой первый рассказ о себе.',
  story: [
    'Hallo! Ich heiße Mila. Ich komme aus der Ukraine. Jetzt wohne ich in Wien. Ich lerne Deutsch.',
    'Heute bin ich am Karlsplatz. Hier ist die Universität. Ich suche Raum 10.',
    '„Hallo! Ich bin Mila. Wie heißt du?“ — „Ich heiße Jonas. Bist du neu hier?“ — „Ja. Wo ist Raum 10?“ — „Dort, links.“ — „Danke!“ — „Gerne!“',
    'Jonas fragt: „Was möchtest du studieren?“ — „Ich möchte Informatik studieren.“ — „Willkommen in Wien!“',
    'Am Abend schreibe ich: Ich lerne Deutsch. Morgen lerne ich weiter. Schritt für Schritt.',
  ],
  vocabulary: [
    { word: 'Ich heiße …', translation: 'Меня зовут …', example: 'Ich heiße Mila. Wie heißt du?' },
    { word: 'Ich wohne in …', translation: 'Я живу в …', example: 'Ich wohne in Wien.' },
    { word: 'Ich möchte … studieren.', translation: 'Я хочу изучать … в университете.', example: 'Ich möchte Informatik studieren.' },
    { word: 'Wo ist …?', translation: 'Где находится …?', example: 'Wo ist Raum 10?' },
    { word: 'Danke! — Gerne!', translation: 'Спасибо! — Пожалуйста!', example: 'Danke, Jonas! — Gerne, Mila!' },
  ],
  comprehension: [
    { id: 'a1-q1', question: 'Wo wohnt Mila? / Где живёт Мила?', options: ['In Berlin', 'In Wien', 'In Graz'], correct: 1, explanation: 'Мила говорит: „Jetzt wohne ich in Wien.“ — Сейчас я живу в Вене.' },
    { id: 'a1-q2', question: 'Was sucht Mila? / Что ищет Мила?', options: ['Raum 10', 'Ein Buch', 'Ein Café'], correct: 0, explanation: '„Ich suche Raum 10.“ — Я ищу аудиторию 10.' },
    { id: 'a1-q3', question: 'Was möchte Mila studieren? / Что Мила хочет изучать?', options: ['Architektur', 'Medizin', 'Informatik'], correct: 2, explanation: '„Ich möchte Informatik studieren.“ Обрати внимание: Мила пока учит язык, а не учится на программе.' },
  ],
  writingMin: 25, writingMax: 50,
  writingPrompt: 'Представься новому знакомому: 3–5 коротких предложений о себе, своём городе и цели. Опоры: Hallo! Ich heiße … Ich komme aus … Jetzt wohne ich in … Ich lerne Deutsch. Ich möchte … studieren. Можно выбрать вымышленное имя и город.',
  warmupPrompt: 'Скажи своё имя и выбери одну цель на сегодня. Попробуй: „Ich heiße …“ и „Ich möchte Deutsch lernen.“ Можно сначала записать мысли по-русски.',
  speakingPrompt: 'Представься вслух: „Hallo! Ich heiße … Ich wohne in … Ich möchte … studieren.“ Сначала с опорой на текст, затем ещё раз без подсказки. Достаточно 30–60 секунд; идеальное произношение сейчас не цель.',
};
const foundationSession: LearningSession = {
  id: 'erste-woche', title: 'Dein erster Tag in Wien', level: 'A2 → B1',
  goal: 'Понять основную мысль истории и описать свой первый день на немецком.',
  description: 'Первая лекция и новое знакомство. Пойми главное, задай вопросы и расскажи свою историю.',
  story, vocabulary, comprehension, writingMin: 80, writingMax: 120,
  writingPrompt: 'Du bist neu an der Universität. Was passiert an deinem ersten Tag? Wen lernst du kennen? Was verstehst du schon, und welche Fragen bleiben offen? Опоры: zuerst · trotzdem · nach der Vorlesung · sich zurechtfinden.',
  warmupPrompt: 'Was möchtest du an deinem ersten Tag wissen? Was macht dich neugierig — und was macht dich nervös? Запиши 2–3 мысли. Можно на любом языке.',
  speakingPrompt: 'Перескажи свою историю вслух за 2–3 минуты, не читая текст. Назови одну трудность и то, что помогло с ней справиться.',
};
export function getSession(level: Level = 'A1'): LearningSession { return level === 'A1' ? beginnerSession : foundationSession; }

export function completeSession(progress: Progress, minutes: number, confidence: number, now = Date.now(), level: Level = progress.profile?.level || 'A1'): Progress {
  const lesson = getSession(level);
  if (progress.completed.includes(lesson.id)) return progress;
  return {
    ...progress, completed: [...progress.completed, lesson.id],
    sessions: [...progress.sessions, { date: new Date(now).toISOString(), minutes: Math.max(0, minutes), confidence, sessionId: lesson.id, title: lesson.title }],
    reviews: [...progress.reviews, ...lesson.vocabulary.filter(v => !progress.reviews.some(r => r.word === v.word)).map(v => ({ ...v, due: now, interval: 0 }))],
  };
}

const emptyDraft = (): SessionDraft => ({ warmup: '', writing: '', stage: 0, answers: {} });
function draftOf(progress: SessionDraft): SessionDraft { return { warmup: progress.warmup, writing: progress.writing, stage: progress.stage, answers: { ...progress.answers } }; }
export function updateProfile(progress: Progress, profile: Profile): Progress {
  const nextId = getSession(profile.level).id;
  const drafts = { ...progress.drafts, [progress.sessionId]: draftOf(progress) };
  const nextDraft = nextId === progress.sessionId ? draftOf(progress) : drafts[nextId] || emptyDraft();
  return { ...progress, ...nextDraft, profile: { ...profile, exam: profile.vwuEnrolled ? 'VWU Ergänzungsprüfung' : profile.exam }, sessionId: nextId, drafts };
}

function record(value: unknown): Record<string, unknown> { return value !== null && typeof value === 'object' && !Array.isArray(value) ? value as Record<string, unknown> : {}; }
function text(value: unknown, fallback = '') { return typeof value === 'string' ? value : fallback; }
function number(value: unknown, fallback = 0) { return typeof value === 'number' && Number.isFinite(value) ? value : fallback; }
function readDraft(value: unknown): SessionDraft {
  const source = record(value); const answers: Record<string, string> = {};
  for (const [key, answer] of Object.entries(record(source.answers))) if (typeof answer === 'string') answers[key] = answer;
  return { warmup: text(source.warmup), writing: text(source.writing), stage: Math.max(0, Math.min(5, Math.trunc(number(source.stage)))), answers };
}
/** Restores v1 browser saves, keeping old A2 work separate from the new A1 session. */
export function restoreProgress(value: unknown): Progress {
  const source = record(value); const rawProfile = record(source.profile);
  const profile: Profile | null = typeof rawProfile.name === 'string' && levels.includes(rawProfile.level as Level) ? {
    name: rawProfile.name, level: rawProfile.level as Level, track: text(rawProfile.track, 'Informatik'), exam: rawProfile.vwuEnrolled === true ? 'VWU Ergänzungsprüfung' : text(rawProfile.exam, 'ÖSD C1'), date: /^\d{4}-\d{2}-\d{2}$/.test(text(rawProfile.date)) ? text(rawProfile.date) : '', vwuEnrolled: rawProfile.vwuEnrolled === true,
  } : null;
  const completed = Array.isArray(source.completed) ? source.completed.filter((v): v is string => typeof v === 'string') : [];
  const oldDraft = readDraft(source);
  const legacyWork = oldDraft.stage > 0 || !!oldDraft.writing || !!oldDraft.warmup || Object.keys(oldDraft.answers).length > 0 || completed.includes('erste-woche');
  const sourceId = text(source.sessionId) || (profile ? getSession(profile.level).id : legacyWork ? 'erste-woche' : 'hallo-wien');
  const drafts: Record<string, SessionDraft> = {};
  for (const [id, draft] of Object.entries(record(source.drafts))) if (id === 'hallo-wien' || id === 'erste-woche') drafts[id] = readDraft(draft);
  drafts[sourceId] = oldDraft;
  const sessionId = getSession(profile?.level || 'A1').id;
  const reviews = Array.isArray(source.reviews) ? source.reviews.filter(v => {
    const c = record(v); return typeof c.word === 'string' && typeof c.translation === 'string' && typeof c.example === 'string' && typeof c.due === 'number' && Number.isFinite(c.due) && typeof c.interval === 'number' && Number.isFinite(c.interval);
  }).map(v => ({ ...v, interval: Math.max(0, Math.min(60, v.interval)) })) as ReviewCard[] : [];
  const sessions: SessionResult[] = Array.isArray(source.sessions) ? source.sessions.flatMap(v => {
    const s = record(v); if (typeof s.date !== 'string' || Number.isNaN(Date.parse(s.date))) return [];
    return [{ date: s.date, minutes: Math.max(0, number(s.minutes)), confidence: Math.min(5, Math.max(1, number(s.confidence, 3))), sessionId: text(s.sessionId, 'erste-woche'), title: text(s.title, 'Dein erster Tag in Wien') }];
  }) : [];
  const skills = initialProgress.skills.map((_, i) => Math.max(0, Math.min(100, number(Array.isArray(source.skills) ? source.skills[i] : 0))));
  return { ...initialProgress, ...(drafts[sessionId] || emptyDraft()), profile, sessionId, drafts, completed, reviews, sessions, skills };
}
