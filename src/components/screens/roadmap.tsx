'use client';
import { ArrowRight, CheckCircle2, Lock } from 'lucide-react';
import { contentLevels, lessonCount, lessonWords, modulesFor, displayWord, type ContentLevel, type Module, type Sphere } from '@/content';
import { lessonDone, moduleLessonsDone, type Progress } from '@/lib/learning';
import { PASS_SCORE } from '@/lib/lesson';
import { PageTitle } from './shared';
import SphereTabs from './sphere-tabs';
import { trSubtitle } from '@/content/translate';
import { useI18n } from '@/i18n/client';

type Props = { progress: Progress; level: ContentLevel; onSphere: (s: Sphere) => void; onLesson: (module: Module, lesson: number) => void; onTest: (module: Module) => void };

export default function Roadmap({ progress, level, onSphere, onLesson, onTest }: Props) {
  const profile = progress.profile;
  const r = useI18n().t.roadmap; const ad = r.admission;
  return <><PageTitle label={r.label} title={r.title} text={r.text} />
    <SphereTabs value={progress.sphere} onChange={onSphere} />
    {contentLevels.map(l => <section className="roadmap-section" key={l}>
      <div className="roadmap-number">{l}</div>
      <div className="roadmap-content">
        <span className="eyebrow">{l === level ? r.yourLevel : contentLevels.indexOf(l) < contentLevels.indexOf(level) ? r.easier : r.harder}</span>
        {modulesFor(progress.sphere, l).map(module => {
          const test = progress.modules[module.id]?.test; const ready = moduleLessonsDone(progress, module);
          return <div key={module.id} className="module-block">
            <h2 lang="de">{module.title}</h2><p>{trSubtitle(module)}</p>
            <div className="module-list">
              {Array.from({ length: lessonCount(module) }, (_, i) => <div key={i}>
                {lessonDone(progress, module.id, i) ? <CheckCircle2 size={20} className="done-icon" /> : <span className="empty-circle" />}
                <span><strong>{r.lesson(i + 1)}</strong><small lang="de">{lessonWords(module, i).map(displayWord).join(' · ')}</small></span>
                <button className="small-link" onClick={() => onLesson(module, i)}>{lessonDone(progress, module.id, i) ? r.again : r.start} <ArrowRight size={17} /></button>
              </div>)}
              <div>
                {test?.passed ? <CheckCircle2 size={20} className="done-icon" /> : ready ? <span className="empty-circle" /> : <Lock size={18} className="muted" />}
                <span><strong>{r.test}</strong><small>{test ? r.best(Math.round(test.best * 100)) : r.testInfo(PASS_SCORE * 100)}</small></span>
                <button className="small-link" disabled={!ready} title={ready ? '' : r.lockedTest} onClick={() => onTest(module)}>{test ? r.retake : r.start} <ArrowRight size={17} /></button>
              </div>
            </div>
          </div>;
        })}
      </div>
    </section>)}
    <p className="notice">{r.ready} {profile && profile.level !== 'A1' && profile.level !== 'A2' ? r.later : r.more}</p>
    <details className="home-more"><summary>{ad.summary}</summary>{profile?.studyStage !== 'master' && <><p><a href="https://www.tuwien.at/studium/studienangebot/bachelorstudien/technische-mathematik/technische-mathematik" target="_blank" rel="noreferrer">{ad.mathBachelor}</a>{ad.mathBachelorText}</p><p><a href="https://www.tuwien.at/studium/studienangebot/bachelorstudien/informatik-und-wirtschaftsinformatik/informatik" target="_blank" rel="noreferrer">{ad.infBachelor}</a>{ad.infBachelorText}</p></>}{profile?.studyStage !== 'bachelor' && <><p><a href="https://www.tuwien.at/studium/studienangebot/masterstudien/mathematik-und-geoinformation/technische-mathematik" target="_blank" rel="noreferrer">{ad.mathMaster}</a>{ad.and}<a href="https://informatics.tuwien.ac.at/master/" target="_blank" rel="noreferrer">{ad.infMaster}</a>{ad.masterText}</p></>}<p>{ad.disclaimer}</p></details>
  </>;
}
