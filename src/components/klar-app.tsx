'use client';
import { useCallback, useEffect, useState, type SetStateAction } from 'react';
import { ArrowRight, ArrowUpRight, BookOpen, ChartNoAxesCombined, CheckCircle2, Compass, GraduationCap, Languages, Leaf, Medal, Menu, MessageCircle, RotateCcw, Settings2, Target, UserRound, X } from 'lucide-react';
import { applyLesson, applyReview, applyTest, contentLevelFor, dueWords, nextDue, nextStep, placement, placementLevel, setSphere, updateProfile, type Profile, type Progress } from '@/lib/learning';
import { buildLessonRun, buildReviewRun, buildTestRun, type Run } from '@/lib/lesson';
import { displayWord, getModule, lessonWords, spheres, type Module, type Sphere } from '@/content';
import { defaultStudyTrack, studyStages, studyTracks } from '@/lib/study-focus';
import { useCloudLearning } from '@/hooks/use-cloud-learning';
import type { ChatMessage } from '@/lib/cloud-state';
import Homework from './homework';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { viewFromPath, viewPaths, type View } from '@/lib/views';
import SphereTabs from './screens/sphere-tabs';

const Roadmap = dynamic(() => import('./screens/roadmap'));
const Words = dynamic(() => import('./screens/words'));
const LessonScreen = dynamic(() => import('./screens/lesson'));
const Tutor = dynamic(() => import('./screens/tutor'));
const ProgressScreen = dynamic(() => import('./screens/progress'));
const ProfileScreen = dynamic(() => import('./screens/profile'));
const ScoreboardScreen = dynamic(() => import('./screens/scoreboard'));

const nav = [
  { id: 'home', label: 'Сегодня', icon: Compass },
  { id: 'roadmap', label: 'Модули', icon: Target },
  { id: 'session', label: 'Урок', icon: BookOpen },
  { id: 'review', label: 'Wortschatz', icon: Languages },
  { id: 'tutor', label: 'AI-тьютор', icon: MessageCircle },
  { id: 'homework', label: 'Домашние задания', icon: GraduationCap },
  { id: 'progress', label: 'Мой прогресс', icon: ChartNoAxesCombined },
  { id: 'profile', label: 'Мой профиль', icon: UserRound },
  { id: 'scoreboard', label: 'Рейтинг', icon: Medal },
] as const;
/** At most this many words in one review, so a review stays a short session. */
const REVIEW_LIMIT = 20;

export default function KlarApp({ initialView = 'home' }: { initialView?: View }) {
  const cloud = useCloudLearning();
  const data = cloud.snapshot.progress; const loaded = cloud.ready; const storageError = cloud.error;
  const role = cloud.snapshot.chat.role; const chat = cloud.snapshot.chat.messages;
  const setData = useCallback((value: SetStateAction<Progress>) => cloud.update(s => ({ ...s, progress: typeof value === 'function' ? value(s.progress) : value })), [cloud.update]);
  const setRole = useCallback((value: SetStateAction<string>) => cloud.update(s => ({ ...s, chat: { ...s.chat, role: typeof value === 'function' ? value(s.chat.role) : value } })), [cloud.update]);
  const setChat = useCallback((value: SetStateAction<ChatMessage[]>) => cloud.update(s => ({ ...s, chat: { ...s.chat, messages: typeof value === 'function' ? value(s.chat.messages) : value } })), [cloud.update]);

  const [view, setView] = useState<View>(initialView); const [mobile, setMobile] = useState(false);
  const [onboard, setOnboard] = useState(false); const [quiz, setQuiz] = useState(false); const [quizIndex, setQuizIndex] = useState(0); const [quizAnswers, setQuizAnswers] = useState<number[]>([]); const [quizResult, setQuizResult] = useState(false);
  const [profile, setProfile] = useState<Profile>({ name: '', level: 'A1', track: defaultStudyTrack, studyStage: 'both', exam: 'ÖSD C1', date: '2027-09-01' });
  const [tutorDraft, setTutorDraft] = useState('');
  /** The active lesson / review / test lives in memory: a run takes 10–15 minutes. */
  const [run, setRun] = useState<Run | null>(null);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => { if (data.profile) setProfile(data.profile); }, [data.profile]);
  useEffect(() => { const sync = () => setView(viewFromPath(location.pathname) ?? 'home'); window.addEventListener('popstate', sync); return () => window.removeEventListener('popstate', sync); }, []);
  useEffect(() => { const id = setInterval(() => setNow(Date.now()), 60000); return () => clearInterval(id); }, []);
  useEffect(() => { if (view !== 'session') window.speechSynthesis?.cancel(); }, [view]);
  useEffect(() => {
    if (!onboard && !quiz) return;
    const previous = document.activeElement as HTMLElement | null;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const modal = document.querySelector<HTMLElement>('.modal');
    const controls = () => Array.from(modal?.querySelectorAll<HTMLElement>('button:not(:disabled), input, select, textarea, a[href]') || []);
    controls()[0]?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOnboard(false); setQuiz(false); }
      if (event.key !== 'Tab') return;
      const items = controls(); const first = items[0]; const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    document.addEventListener('keydown', handleKey);
    return () => { document.removeEventListener('keydown', handleKey); document.body.style.overflow = oldOverflow; previous?.focus(); };
  }, [onboard, quiz]);

  const go = (v: View) => { setView(v); if (location.pathname !== viewPaths[v]) history.pushState(null, '', viewPaths[v]); setMobile(false); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const level = contentLevelFor(data.profile?.level);
  const due = dueWords(data, now);
  const next = nextStep(data, data.sphere, level);

  const begin = (r: Run) => { setRun(r); go('session'); };
  const startLesson = (module: Module, lesson: number) => begin(buildLessonRun(module, lesson));
  const startTest = (module: Module) => begin(buildTestRun(module));
  const startReview = () => { if (due.length) begin(buildReviewRun(due.slice(0, REVIEW_LIMIT))); };
  const startNext = () => { if (!next) return; if (next.kind === 'lesson') startLesson(next.module, next.lesson); else startTest(next.module); };
  /** Results are written to the profile once, at the moment the run finishes. */
  const changeRun = (updated: Run) => {
    if (updated.finished && run && !run.finished) {
      const at = Date.now();
      setData(d => updated.mode === 'lesson' ? applyLesson(d, updated, at) : updated.mode === 'review' ? applyReview(d, updated, at) : applyTest(d, updated, at));
      setNow(at);
    }
    setRun(updated);
  };
  const chooseSphere = (sphere: Sphere) => setData(d => setSphere(d, sphere));
  const sphereLabel = spheres.find(s => s.id === data.sphere)?.label;
  const editPlan = () => {
    const name = cloud.user?.name;
    if (!data.profile && name) setProfile(current => ({ ...current, name: name.slice(0, 40) }));
    setOnboard(true);
  };

  if (!loaded) return <div className="loading" style={{ flexDirection: 'column', fontSize: 18 }}><Leaf />{storageError || 'Загрузка твоих данных…'}{storageError && <button className="button primary" onClick={() => void cloud.reload()}>Повторить загрузку</button>}</div>;
  return <div className="app">
    {mobile && <button className="mobile-scrim" aria-label="Закрыть меню" onClick={() => setMobile(false)} />}
    <aside className={`sidebar ${mobile ? 'mobile-open' : ''}`}>
      <a className="brand" href="#" onClick={e => { e.preventDefault(); go('home'); }}><span className="brand-mark"><Leaf size={22} /></span>Klar<span className="brand-c1">C1</span></a>
      <div className="sidebar-caption">Лексика твоей сферы — к учёбе в Вене</div>
      <nav aria-label="Основная навигация">{nav.map(n => <button key={n.id} onClick={() => go(n.id)} aria-current={view === n.id ? 'page' : undefined} className={`nav-item ${view === n.id ? 'active' : ''}`}><n.icon size={19} />{n.label}{n.id === 'review' && due.length > 0 && <span className="count">{due.length}</span>}{n.id === 'session' && run && !run.finished && <span className="count">•</span>}</button>)}</nav>
      <div className="sidebar-bottom"><div className="profile"><span className="avatar">{(data.profile?.name || 'K').slice(0, 1).toUpperCase()}</span><span><strong>{data.profile?.name || 'Начни с профиля'}</strong><small>{data.profile ? `${data.profile.level} · ${sphereLabel}` : 'Укажи уровень и цель'}</small></span><button className="icon-button" aria-label="Изменить учебный план" onClick={() => setOnboard(true)}><Settings2 size={17} /></button></div></div>
    </aside>
    <div className="workspace">
      <header className="topbar"><div><button className="mobile-menu icon-button" aria-label="Открыть меню" onClick={() => setMobile(!mobile)}>{mobile ? <X /> : <Menu />}</button><span>Слова, которые ты услышишь на парах.</span></div><div className="topbar-right">{cloud.user ? <button className="text-button login-link" onClick={() => go('profile')}>Аккаунт</button> : <Link className="text-button login-link" href="/login">Войти</Link>}<span className="sync" role="status" title={cloud.status}><span className={`status-dot ${/^(Сохранено|Гостевой)/.test(cloud.status) ? 'ok' : ''}`} /><span className="sync-text">{cloud.user ? `${cloud.user.name} · ${cloud.status}` : cloud.status}</span></span>{cloud.user && <button className="icon-button" aria-label="Обновить из облака" title="Обновить из облака" onClick={() => void cloud.reload()}><RotateCcw size={16} /></button>}<span className="top-level">{level}</span></div></header>
      <main>
        {storageError && <div className="notice" role="alert"><p>{storageError}</p>{cloud.conflict ? <><button className="button secondary" onClick={cloud.exportLocal}>Скачать локальную копию</button><button className="button secondary" onClick={() => void cloud.useCloud()}>Загрузить облачную версию</button></> : <button className="button secondary" onClick={() => void cloud.flush()}>Повторить сохранение</button>}</div>}
        {cloud.canImport && <div className="notice"><p>На этом устройстве есть гостевая работа. Перенести её в твой новый облачный профиль?</p><button className="button secondary" onClick={cloud.importGuest}>Перенести мою работу в аккаунт</button></div>}

        {view === 'home' && <>
          <div className="page-heading"><div><h1>{data.profile ? `Привет, ${data.profile.name}.` : 'Слова твоей сферы — по 10 минут в день.'}</h1><p>Повтори то, что пора повторить, и пройди один урок. Этого достаточно.</p></div></div>
          {due.length > 0 && <button className="review-reminder" onClick={startReview}><RotateCcw size={20} /><span>Пора повторить: {due.length} {due.length === 1 ? 'слово' : due.length < 5 ? 'слова' : 'слов'}{due.length > REVIEW_LIMIT ? ` (за раз — ${REVIEW_LIMIT})` : ''}</span><ArrowRight size={18} /></button>}
          <section className="today-lesson">
            <div className="today-content">
              {next ? <>
                <span className="pill">{next.module.level} · {sphereLabel} · {next.kind === 'lesson' ? `урок ${next.lesson + 1}` : 'тест модуля'}</span>
                <h2 lang="de">{next.module.title}</h2>
                <p>{next.kind === 'lesson' ? '8 новых слов: знакомство → аудирование → артикли и пропуски → диктант и своё предложение. 10–15 минут.' : 'Все 16 слов модуля, без подсказок и вторых попыток. Зачёт — от 80 %.'}</p>
                {next.kind === 'lesson' && <div className="today-goal"><CheckCircle2 size={20} /><span lang="de">{lessonWords(next.module, next.lesson).map(displayWord).join(' · ')}</span></div>}
                <button className="button primary" onClick={startNext}>{next.kind === 'lesson' ? 'Начать урок' : 'Начать тест'}<ArrowRight size={20} /></button>
                {run && !run.finished && <button className="text-button resume" onClick={() => go('session')}>Вернуться к начатому: {run.title} <ArrowRight size={16} /></button>}
              </> : <>
                <span className="pill">{sphereLabel}</span><h2>Все модули сферы пройдены</h2>
                <p>Повторяй слова по расписанию или выбери другую сферу ниже. Новые модули появятся позже.</p>
              </>}
            </div>
            <div className="today-art" aria-hidden="true"><span className="art-stamp">WORTSCHATZ</span><Languages size={130} strokeWidth={.7} /><span className="art-greeting">{next ? next.module.words[0].de : 'Super!'}</span></div>
          </section>
          <h2 className="section-title">Сфера</h2>
          <SphereTabs value={data.sphere} onChange={chooseSphere} />
          <div className="home-next"><div><h2>Твой уровень: {level}</h2><p>{data.profile ? `${data.profile.level} → C1 · цель: ${data.profile.exam}` : 'Укажи уровень — от него зависит, с каких модулей начать (A1 → A1.2, A2 и выше → A2).'}</p></div><button className="text-button" onClick={() => setOnboard(true)}>{data.profile ? 'Изменить цель' : 'Настроить профиль'}<ArrowUpRight size={18} /></button></div>
          {!data.profile && <details className="home-more"><summary>Не знаешь свой уровень?</summary><p>Короткая диагностика поможет выбрать начальную точку A1–B2. Она не заменяет полноценную оценку языка.</p><button className="button secondary" onClick={() => { setQuiz(true); setQuizResult(false); setQuizIndex(0); setQuizAnswers([]); }}>Попробовать диагностику <ArrowRight size={18} /></button></details>}
        </>}
        {view === 'roadmap' && <Roadmap progress={data} level={level} onSphere={chooseSphere} onLesson={startLesson} onTest={startTest} />}
        {view === 'session' && <LessonScreen run={run} onChange={changeRun} onExit={() => { setRun(null); go('home'); }} onHome={() => go('home')} onTutor={text => { setTutorDraft(text); go('tutor'); }} onRestart={r => { const m = r.moduleId && getModule(r.moduleId); if (m) startTest(m); }} />}
        {view === 'review' && <Words progress={data} due={due.length} nextDue={nextDue(data)} onReview={startReview} onSphere={chooseSphere} />}
        {view === 'tutor' && <Tutor role={role} level={data.profile?.level || 'A1'} track={data.profile?.track || defaultStudyTrack} studyStage={data.profile?.studyStage || 'both'} chat={chat} setChat={setChat} setRole={setRole} initialMessage={tutorDraft} onDraftUsed={() => setTutorDraft('')} />}
        {view === 'homework' && <Homework key={cloud.owner + ':' + (data.profile?.level || 'A1')} allWork={cloud.snapshot.homework} onChange={(id, work) => cloud.update(s => ({ ...s, homework: { ...s.homework, [id]: work } }))} level={data.profile?.level || 'A1'} track={data.profile?.track || defaultStudyTrack} studyStage={data.profile?.studyStage || 'both'} />}
        {view === 'progress' && <ProgressScreen progress={data} onSkill={(i, value) => setData(d => ({ ...d, skills: d.skills.map((v, j) => j === i ? value : v) }))} onStart={() => go('home')} />}
        {view === 'profile' && (cloud.user ? <ProfileScreen key={cloud.user.id} user={cloud.user} progress={data}
          onEditPlan={editPlan}
          onUserChange={cloud.updateUser} onDeleted={cloud.clearDeletedAccount} onScoreboard={() => go('scoreboard')} />
          : <Link className="small-link" href="/login">Войди, чтобы открыть профиль</Link>)}
        {view === 'scoreboard' && <ScoreboardScreen revision={cloud.revision} onProfile={() => go('profile')} />}
        {view === 'profile' && cloud.user && <Link href="/login" className="small-link account-signout">Управление сеансом</Link>}
        <footer className="footer"><span>Klar C1 · Немного слов каждый день.</span><span>Deutsch für dein nächstes Kapitel.</span></footer>
      </main>
    </div>

    {(onboard || quiz) && <div className="modal-backdrop"><section className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button className="modal-close icon-button" onClick={() => { setOnboard(false); setQuiz(false); }} aria-label="Закрыть"><X /></button>{quiz ? quizResult ? <><span className="eyebrow">ПЕРВЫЙ ОРИЕНТИР</span><h2 id="modal-title">Начнём с {placementLevel(quizAnswers)}</h2><p>Это короткий ориентир A1–B2 по грамматике и пониманию письменной речи. Он не оценивает аудирование, письмо и произношение и не подтверждает уровень C1.</p><p>Результат: {quizAnswers.filter((a, i) => a === placement[i].correct).length} из {placement.length}. Уточняй уровень по мере практики.</p><button className="button primary" onClick={() => { const lvl = placementLevel(quizAnswers); setProfile(p => ({ ...p, level: lvl })); setData(d => d.profile ? updateProfile(d, { ...d.profile, level: lvl }) : d); setQuiz(false); setOnboard(true); }}>Настроить профиль <ArrowRight size={16} /></button></> : <><span className="eyebrow">КРАТКАЯ ДИАГНОСТИКА · {quizIndex + 1} / {placement.length}</span><h2 id="modal-title">{placement[quizIndex].question}</h2><div className="quiz-options">{placement[quizIndex].options.map((o, i) => <button key={o} className={quizAnswers[quizIndex] === i ? 'selected' : ''} onClick={() => setQuizAnswers(a => { const n = [...a]; n[quizIndex] = i; return n; })}>{o}</button>)}</div><button className="button primary" disabled={quizAnswers[quizIndex] === undefined} onClick={() => quizIndex === placement.length - 1 ? setQuizResult(true) : setQuizIndex(i => i + 1)}>{quizIndex === placement.length - 1 ? 'Посмотреть результат' : 'Дальше'}<ArrowRight size={16} /></button></> : <><span className="eyebrow">DEIN WEG BEGINNT HIER</span><h2 id="modal-title">Сделаем путь твоим.</h2><p>Расскажи о своей цели. Всё можно изменить позже.</p><form className="onboard-form" onSubmit={e => { e.preventDefault(); setData(d => updateProfile(d, profile)); setOnboard(false); if (view !== 'profile') go('home'); }}><label>Как тебя зовут?<input required maxLength={40} autoComplete="given-name" value={profile.name} onChange={e => setProfile(p => ({ ...p, name: e.target.value }))} placeholder="Твоё имя" /></label><div className="form-row"><label>Текущий уровень<select value={profile.level} onChange={e => setProfile(p => ({ ...p, level: e.target.value as Profile['level'] }))}>{['A1', 'A2', 'B1', 'B2', 'C1'].map(l => <option key={l}>{l}</option>)}</select></label><label>Плановая дата экзамена<input required type="date" min={data.profile?.date && data.profile.date < new Date().toISOString().slice(0, 10) ? data.profile.date : new Date().toISOString().slice(0, 10)} value={profile.date} onChange={e => setProfile(p => ({ ...p, date: e.target.value }))} /></label></div><label>Учебный фокус<select value={profile.track} onChange={e => setProfile(p => ({ ...p, track: e.target.value }))}>{[...studyTracks, ...(!studyTracks.some(t => t === profile.track) ? [profile.track] : [])].map(t => <option key={t}>{t}</option>)}</select></label><label>Ступень обучения<select value={profile.studyStage || 'both'} onChange={e => setProfile(p => ({ ...p, studyStage: e.target.value as Profile['studyStage'] }))}>{studyStages.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}</select></label><label className="checkbox-label"><input type="checkbox" checked={profile.vwuEnrolled || false} onChange={e => setProfile(p => ({ ...p, vwuEnrolled: e.target.checked, exam: e.target.checked ? 'VWU Ergänzungsprüfung' : 'ÖSD C1' }))} /><span>Уже зачислен(а) на подготовительный курс VWU</span></label>{profile.vwuEnrolled ? <p className="notice">Твоя цель — VWU Ergänzungsprüfung. После зачисления на подготовительный курс внешний сертификат не заменяет этот экзамен.</p> : <label>Целевой экзамен<select value={profile.exam} onChange={e => setProfile(p => ({ ...p, exam: e.target.value }))}>{['ÖSD C1', 'Goethe-Zertifikat C1', 'telc Deutsch C1 Hochschule', 'TestDaF TDN 4', 'DSH-2'].map(t => <option key={t}>{t}</option>)}</select></label>}<p className="muted small">Выбор экзамена — учебная цель. Актуальную применимость сертификата необходимо проверить для своей программы TU Wien.</p><button className="button primary" type="submit">Сохранить профиль <ArrowRight size={16} /></button></form></>}</section></div>}
  </div>;
}
