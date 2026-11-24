'use client';
import { useCallback, useEffect, useState, type SetStateAction } from 'react';
import { ArrowRight, ArrowUpRight, BookOpen, ChartNoAxesCombined, CheckCircle2, Compass, GraduationCap, Languages, Leaf, Medal, Menu, MessageCircle, RotateCcw, Settings2, Target, UserRound, X } from 'lucide-react';
import { applyLesson, applyReview, applyTest, contentLevelFor, dueWords, nextDue, nextStep, placement, placementLevel, setSphere, updateProfile, type Profile, type Progress } from '@/lib/learning';
import { buildLessonRun, buildReviewRun, buildTestRun, type Run } from '@/lib/lesson';
import { displayWord, getModule, lessonWords, type Module, type Sphere } from '@/content';
import { defaultStudyTrack, studyStages, studyTracks } from '@/lib/study-focus';
import { useCloudLearning } from '@/hooks/use-cloud-learning';
import Homework from './homework';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { TUTOR_DRAFT_KEY, viewFromPath, viewPaths, type View } from '@/lib/views';
import SphereTabs from './screens/sphere-tabs';
import { LanguageSwitcher, useI18n } from '@/i18n/client';
import { useCourseTranslations } from '@/i18n/use-course-translations';

const Roadmap = dynamic(() => import('./screens/roadmap'));
const Words = dynamic(() => import('./screens/words'));
const LessonScreen = dynamic(() => import('./screens/lesson'));
const ProgressScreen = dynamic(() => import('./screens/progress'));
const ProfileScreen = dynamic(() => import('./screens/profile'));
const ScoreboardScreen = dynamic(() => import('./screens/scoreboard'));

const nav = [
  { id: 'home', icon: Compass },
  { id: 'roadmap', icon: Target },
  { id: 'session', icon: BookOpen },
  { id: 'review', icon: Languages },
  { id: 'tutor', icon: MessageCircle },
  { id: 'homework', icon: GraduationCap },
  { id: 'progress', icon: ChartNoAxesCombined },
  { id: 'profile', icon: UserRound },
  { id: 'scoreboard', icon: Medal },
] as const;
/** At most this many words in one review, so a review stays a short session. */
const REVIEW_LIMIT = 20;

export default function KlarApp({ initialView = 'home' }: { initialView?: View }) {
  const cloud = useCloudLearning();
  const { t } = useI18n(); const a = t.app, m = t.modal;
  const courseReady = useCourseTranslations();
  const data = cloud.snapshot.progress; const loaded = cloud.ready; const storageError = cloud.error;
  const setData = useCallback((value: SetStateAction<Progress>) => cloud.update(s => ({ ...s, progress: typeof value === 'function' ? value(s.progress) : value })), [cloud.update]);

  const [view, setView] = useState<View>(initialView); const [mobile, setMobile] = useState(false);
  const [onboard, setOnboard] = useState(false); const [quiz, setQuiz] = useState(false); const [quizIndex, setQuizIndex] = useState(0); const [quizAnswers, setQuizAnswers] = useState<number[]>([]); const [quizResult, setQuizResult] = useState(false);
  const [profile, setProfile] = useState<Profile>({ name: '', level: 'A1', track: defaultStudyTrack, studyStage: 'both', exam: 'ÖSD C1', date: '2027-09-01' });
  const router = useRouter();
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
  const sphereLabel = t.spheres[data.sphere];
  const editPlan = () => {
    const name = cloud.user?.name;
    if (!data.profile && name) setProfile(current => ({ ...current, name: name.slice(0, 40) }));
    setOnboard(true);
  };

  if (!loaded || !courseReady) return <div className="loading" style={{ flexDirection: 'column', fontSize: 18 }}><Leaf />{storageError || a.loading}{storageError && <button className="button primary" onClick={() => void cloud.reload()}>{t.common.retryLoad}</button>}</div>;
  return <div className="app">
    {mobile && <button className="mobile-scrim" aria-label={a.closeMenu} onClick={() => setMobile(false)} />}
    <aside className={`sidebar ${mobile ? 'mobile-open' : ''}`}>
      <a className="brand" href="#" onClick={e => { e.preventDefault(); go('home'); }}><span className="brand-mark"><Leaf size={22} /></span>Jargeo</a>
      <div className="sidebar-caption">{a.caption}</div>
      <nav aria-label={t.common.mainNav}>{nav.map(n => <button key={n.id} onClick={() => n.id === 'tutor' ? router.push('/tutor') : go(n.id)} aria-current={view === n.id ? 'page' : undefined} className={`nav-item ${view === n.id ? 'active' : ''}`}><n.icon size={19} />{t.nav[n.id]}{n.id === 'review' && due.length > 0 && <span className="count">{due.length}</span>}{n.id === 'session' && run && !run.finished && <span className="count">•</span>}</button>)}</nav>
      <div className="sidebar-bottom"><div className="profile"><span className="avatar">{(data.profile?.name || 'K').slice(0, 1).toUpperCase()}</span><span><strong>{data.profile?.name || a.startProfile}</strong><small>{data.profile ? `${data.profile.level} · ${sphereLabel}` : a.setLevelGoal}</small></span><button className="icon-button" aria-label={a.editPlan} onClick={() => setOnboard(true)}><Settings2 size={17} /></button></div><LanguageSwitcher className="sidebar-language" /></div>
    </aside>
    <div className="workspace">
      <header className="topbar"><div><button className="mobile-menu icon-button" aria-label={a.openMenu} onClick={() => setMobile(!mobile)}>{mobile ? <X /> : <Menu />}</button><span>{a.topbar}</span></div><div className="topbar-right">{cloud.user ? <button className="text-button login-link" onClick={() => go('profile')}>{a.account}</button> : <Link className="text-button login-link" href="/login">{a.login}</Link>}<span className="sync" role="status" title={cloud.status}><span className={`status-dot ${cloud.status === t.cloud.saved || cloud.status === t.cloud.guest ? 'ok' : ''}`} /><span className="sync-text">{cloud.user ? `${cloud.user.name} · ${cloud.status}` : cloud.status}</span></span>{cloud.user && <button className="icon-button" aria-label={a.refreshCloud} title={a.refreshCloud} onClick={() => void cloud.reload()}><RotateCcw size={16} /></button>}<span className="top-level">{level}</span></div></header>
      <main>
        {storageError && <div className="notice" role="alert"><p>{storageError}</p>{cloud.conflict ? <><button className="button secondary" onClick={cloud.exportLocal}>{a.downloadLocal}</button><button className="button secondary" onClick={() => void cloud.useCloud()}>{a.loadCloud}</button></> : <button className="button secondary" onClick={() => void cloud.flush()}>{a.retrySave}</button>}</div>}
        {cloud.canImport && <div className="notice"><p>{a.importGuest}</p><button className="button secondary" onClick={cloud.importGuest}>{a.importGuestButton}</button></div>}

        {view === 'home' && <>
          <div className="page-heading"><div><h1>{data.profile ? a.greeting(data.profile.name) : a.homeTitle}</h1><p>{a.homeText}</p></div></div>
          {due.length > 0 && <button className="review-reminder" onClick={startReview}><RotateCcw size={20} /><span>{a.reviewDue(due.length, REVIEW_LIMIT)}</span><ArrowRight size={18} /></button>}
          <section className="today-lesson">
            <div className="today-content">
              {next ? <>
                <span className="pill">{next.module.level} · {sphereLabel} · {next.kind === 'lesson' ? a.lessonPill(next.lesson + 1) : a.testPill}</span>
                <h2 lang="de">{next.module.title}</h2>
                <p>{next.kind === 'lesson' ? a.lessonText : a.testText}</p>
                {next.kind === 'lesson' && <div className="today-goal"><CheckCircle2 size={20} /><span lang="de">{lessonWords(next.module, next.lesson).map(displayWord).join(' · ')}</span></div>}
                <button className="button primary" onClick={startNext}>{next.kind === 'lesson' ? a.startLesson : a.startTest}<ArrowRight size={20} /></button>
                {run && !run.finished && <button className="text-button resume" onClick={() => go('session')}>{a.resume(run.title)} <ArrowRight size={16} /></button>}
              </> : <>
                <span className="pill">{sphereLabel}</span><h2>{a.allDone}</h2>
                <p>{a.allDoneText}</p>
              </>}
            </div>
            <div className="today-art" aria-hidden="true"><span className="art-stamp">WORTSCHATZ</span><Languages size={130} strokeWidth={.7} /><span className="art-greeting">{next ? next.module.words[0].de : 'Super!'}</span></div>
          </section>
          <h2 className="section-title">{a.sphere}</h2>
          <SphereTabs value={data.sphere} onChange={chooseSphere} />
          <div className="home-next"><div><h2>{a.yourLevel(level)}</h2><p>{data.profile ? a.levelGoal(data.profile.level, data.profile.exam) : a.levelHint}</p></div><button className="text-button" onClick={() => setOnboard(true)}>{data.profile ? a.editGoal : a.setupProfile}<ArrowUpRight size={18} /></button></div>
          {!data.profile && <details className="home-more"><summary>{a.unknownLevel}</summary><p>{a.quizText}</p><button className="button secondary" onClick={() => { setQuiz(true); setQuizResult(false); setQuizIndex(0); setQuizAnswers([]); }}>{a.tryQuiz} <ArrowRight size={18} /></button></details>}
        </>}
        {view === 'roadmap' && <Roadmap progress={data} level={level} onSphere={chooseSphere} onLesson={startLesson} onTest={startTest} />}
        {view === 'session' && <LessonScreen run={run} onChange={changeRun} onExit={() => { setRun(null); go('home'); }} onHome={() => go('home')} onTutor={text => { try { sessionStorage.setItem(TUTOR_DRAFT_KEY, text); } catch {} router.push('/tutor'); }} onRestart={r => { const m = r.moduleId && getModule(r.moduleId); if (m) startTest(m); }} />}
        {view === 'review' && <Words progress={data} due={due.length} nextDue={nextDue(data)} onReview={startReview} onSphere={chooseSphere} />}
        {view === 'homework' && <Homework key={cloud.owner + ':' + (data.profile?.level || 'A1')} allWork={cloud.snapshot.homework} onChange={(id, work) => cloud.update(s => ({ ...s, homework: { ...s.homework, [id]: work } }))} level={data.profile?.level || 'A1'} track={data.profile?.track || defaultStudyTrack} studyStage={data.profile?.studyStage || 'both'} />}
        {view === 'progress' && <ProgressScreen progress={data} onSkill={(i, value) => setData(d => ({ ...d, skills: d.skills.map((v, j) => j === i ? value : v) }))} onStart={() => go('home')} />}
        {view === 'profile' && (cloud.user ? <ProfileScreen key={cloud.user.id} user={cloud.user} progress={data}
          onEditPlan={editPlan}
          onUserChange={cloud.updateUser} onDeleted={cloud.clearDeletedAccount} onScoreboard={() => go('scoreboard')} />
          : <Link className="small-link" href="/login">{a.profileLogin}</Link>)}
        {view === 'scoreboard' && <ScoreboardScreen revision={cloud.revision} onProfile={() => go('profile')} />}
        {view === 'profile' && cloud.user && <Link href="/login" className="small-link account-signout">{a.session}</Link>}
        <footer className="footer"><span>{a.footer}</span><span>Deutsch für dein nächstes Kapitel.</span></footer>
      </main>
    </div>

    {(onboard || quiz) && <div className="modal-backdrop"><section className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button className="modal-close icon-button" onClick={() => { setOnboard(false); setQuiz(false); }} aria-label={t.common.close}><X /></button>{quiz ? quizResult ? <><span className="eyebrow">{m.placementEyebrow}</span><h2 id="modal-title">{m.startWith(placementLevel(quizAnswers))}</h2><p>{m.placementText}</p><p>{m.placementScore(quizAnswers.filter((answer, i) => answer === placement[i].correct).length, placement.length)}</p><button className="button primary" onClick={() => { const lvl = placementLevel(quizAnswers); setProfile(p => ({ ...p, level: lvl })); setData(d => d.profile ? updateProfile(d, { ...d.profile, level: lvl }) : d); setQuiz(false); setOnboard(true); }}>{a.setupProfile} <ArrowRight size={16} /></button></> : <><span className="eyebrow">{m.quizEyebrow(quizIndex + 1, placement.length)}</span><h2 id="modal-title">{placement[quizIndex].question}</h2><div className="quiz-options">{placement[quizIndex].options.map((o, i) => <button key={o} className={quizAnswers[quizIndex] === i ? 'selected' : ''} onClick={() => setQuizAnswers(a => { const n = [...a]; n[quizIndex] = i; return n; })}>{o}</button>)}</div><button className="button primary" disabled={quizAnswers[quizIndex] === undefined} onClick={() => quizIndex === placement.length - 1 ? setQuizResult(true) : setQuizIndex(i => i + 1)}>{quizIndex === placement.length - 1 ? m.seeResult : t.common.next}<ArrowRight size={16} /></button></> : <><span className="eyebrow">DEIN WEG BEGINNT HIER</span><h2 id="modal-title">{m.onboardTitle}</h2><p>{m.onboardText}</p><form className="onboard-form" onSubmit={e => { e.preventDefault(); setData(d => updateProfile(d, profile)); setOnboard(false); if (view !== 'profile') go('home'); }}><label>{m.name}<input required maxLength={40} autoComplete="given-name" value={profile.name} onChange={e => setProfile(p => ({ ...p, name: e.target.value }))} placeholder={m.namePlaceholder} /></label><div className="form-row"><label>{m.currentLevel}<select value={profile.level} onChange={e => setProfile(p => ({ ...p, level: e.target.value as Profile['level'] }))}>{['A1', 'A2', 'B1', 'B2', 'C1'].map(l => <option key={l}>{l}</option>)}</select></label><label>{m.examDate}<input required type="date" min={data.profile?.date && data.profile.date < new Date().toISOString().slice(0, 10) ? data.profile.date : new Date().toISOString().slice(0, 10)} value={profile.date} onChange={e => setProfile(p => ({ ...p, date: e.target.value }))} /></label></div><label>{m.track}<select value={profile.track} onChange={e => setProfile(p => ({ ...p, track: e.target.value }))}>{[...studyTracks, ...(!studyTracks.some(t => t === profile.track) ? [profile.track] : [])].map(tr => <option key={tr} value={tr}>{t.tracks[tr] ?? tr}</option>)}</select></label><label>{m.stage}<select value={profile.studyStage || 'both'} onChange={e => setProfile(p => ({ ...p, studyStage: e.target.value as Profile['studyStage'] }))}>{studyStages.map(s => <option key={s.value} value={s.value}>{t.studyStages[s.value]}</option>)}</select></label><label className="checkbox-label"><input type="checkbox" checked={profile.vwuEnrolled || false} onChange={e => setProfile(p => ({ ...p, vwuEnrolled: e.target.checked, exam: e.target.checked ? 'VWU Ergänzungsprüfung' : 'ÖSD C1' }))} /><span>{m.vwu}</span></label>{profile.vwuEnrolled ? <p className="notice">{m.vwuNotice}</p> : <label>{m.exam}<select value={profile.exam} onChange={e => setProfile(p => ({ ...p, exam: e.target.value }))}>{['ÖSD C1', 'Goethe-Zertifikat C1', 'telc Deutsch C1 Hochschule', 'TestDaF TDN 4', 'DSH-2'].map(t => <option key={t}>{t}</option>)}</select></label>}<p className="muted small">{m.examNote}</p><button className="button primary" type="submit">{m.save} <ArrowRight size={16} /></button></form></>}</section></div>}
  </div>;
}
