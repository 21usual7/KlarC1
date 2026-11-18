'use client';
import { ArrowRight, CheckCircle2, Lock } from 'lucide-react';
import { contentLevels, lessonCount, lessonWords, modulesFor, displayWord, type ContentLevel, type Module, type Sphere } from '@/content';
import { lessonDone, moduleLessonsDone, type Progress } from '@/lib/learning';
import { PASS_SCORE } from '@/lib/lesson';
import { PageTitle } from './shared';
import SphereTabs from './sphere-tabs';

type Props = { progress: Progress; level: ContentLevel; onSphere: (s: Sphere) => void; onLesson: (module: Module, lesson: number) => void; onTest: (module: Module) => void };

export default function Roadmap({ progress, level, onSphere, onLesson, onTest }: Props) {
  const profile = progress.profile;
  return <><PageTitle label="МОДУЛИ" title="Лексика твоей сферы" text="Модуль — 16 слов: два урока по 10–15 минут и тест. Урок: 4 новых слова → упражнения от «узнать» до «использовать» → следующие 4 → финальный круг." />
    <SphereTabs value={progress.sphere} onChange={onSphere} />
    {contentLevels.map(l => <section className="roadmap-section" key={l}>
      <div className="roadmap-number">{l}</div>
      <div className="roadmap-content">
        <span className="eyebrow">{l === level ? 'ТВОЙ УРОВЕНЬ' : l === 'A1.2' ? 'ПРОЩЕ' : 'СЛОЖНЕЕ'}</span>
        {modulesFor(progress.sphere, l).map(module => {
          const test = progress.modules[module.id]?.test; const ready = moduleLessonsDone(progress, module);
          return <div key={module.id} className="module-block">
            <h2>{module.title}</h2><p>{module.subtitle}</p>
            <div className="module-list">
              {Array.from({ length: lessonCount(module) }, (_, i) => <div key={i}>
                {lessonDone(progress, module.id, i) ? <CheckCircle2 size={20} className="done-icon" /> : <span className="empty-circle" />}
                <span><strong>Урок {i + 1}</strong><small lang="de">{lessonWords(module, i).map(displayWord).join(' · ')}</small></span>
                <button className="small-link" onClick={() => onLesson(module, i)}>{lessonDone(progress, module.id, i) ? 'Ещё раз' : 'Начать'} <ArrowRight size={17} /></button>
              </div>)}
              <div>
                {test?.passed ? <CheckCircle2 size={20} className="done-icon" /> : ready ? <span className="empty-circle" /> : <Lock size={18} className="muted" />}
                <span><strong>Тест модуля</strong><small>{test ? `Лучший результат: ${Math.round(test.best * 100)} %` : `16 слов, без подсказок · зачёт от ${PASS_SCORE * 100} %`}</small></span>
                <button className="small-link" disabled={!ready} title={ready ? '' : 'Сначала пройди оба урока'} onClick={() => onTest(module)}>{test ? 'Пересдать' : 'Начать'} <ArrowRight size={17} /></button>
              </div>
            </div>
          </div>;
        })}
      </div>
    </section>)}
    <p className="notice">Сейчас готовы уровни A1.2 и A2 — по одному модулю на сферу. {profile && profile.level !== 'A1' && profile.level !== 'A2' ? 'Модули B1+ появятся позже; пока используются модули A2.' : 'Следующие модули добавляются по той же схеме.'}</p>
    <details className="home-more"><summary>Математика и кибербезопасность: варианты поступления</summary>{profile?.studyStage !== 'master' && <><p><a href="https://www.tuwien.at/studium/studienangebot/bachelorstudien/technische-mathematik/technische-mathematik" target="_blank" rel="noreferrer">Бакалавриат Technische Mathematik</a>: математический анализ, линейная алгебра, дискретная математика. Вместо конкурсного Aufnahmeverfahren — Studien-VoR-Phase.</p><p><a href="https://www.tuwien.at/studium/studienangebot/bachelorstudien/informatik-und-wirtschaftsinformatik/informatik" target="_blank" rel="noreferrer">Бакалавриат Informatik</a>: есть специализация Cybersecurity и вступительная процедура. Криптография и безопасность — интересы и специализации, а не обещание отдельного бакалавриата.</p></>}{profile?.studyStage !== 'bachelor' && <><p><a href="https://www.tuwien.at/studium/studienangebot/masterstudien/mathematik-und-geoinformation/technische-mathematik" target="_blank" rel="noreferrer">Магистратура Technische Mathematik</a> и <a href="https://informatics.tuwien.ac.at/master/" target="_blank" rel="noreferrer">магистерские программы Informatics</a>: сопоставь предыдущий диплом, учебный план и язык программы. В англоязычных программах немецкий C1 не является общим требованием.</p></>}<p>План немецкого не заменяет предметную подготовку или решение университета о допуске. Условия и даты проверяй для выбранной программы.</p></details>
  </>;
}
