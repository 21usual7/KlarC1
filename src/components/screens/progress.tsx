'use client';
import { ArrowRight, Clock3 } from 'lucide-react';
import { modules } from '@/content';
import { skillNames, stageCounts, type Progress } from '@/lib/learning';
import { useI18n } from '@/i18n/client';
import { PageTitle } from './shared';

function Radar({ values }: { values: number[] }) { const p = useI18n().t.progress; const point = (i: number, r: number) => `${(150 + Math.sin(i * Math.PI / 3) * r).toFixed(2)},${(140 - Math.cos(i * Math.PI / 3) * r).toFixed(2)}`; return <svg viewBox="0 0 300 285" className="radar" role="img" aria-label={skillNames.map((s, i) => p.radar(s, values[i])).join(', ')}>{[25, 50, 75, 100].map(r => <polygon key={r} points={values.map((_, i) => point(i, r)).join(' ')} fill="none" stroke="var(--line)" />)}{values.map((v, i) => <line key={i} x1="150" y1="140" x2={point(i, 100).split(',')[0]} y2={point(i, 100).split(',')[1]} stroke="var(--line)" />)}<polygon points={values.map((v, i) => point(i, v)).join(' ')} fill="var(--green)" fillOpacity={.25} stroke="var(--green)" strokeWidth="2" />{skillNames.map((s, i) => <text key={s} x={point(i, 124).split(',')[0]} y={Number(point(i, 124).split(',')[1]) + 4} textAnchor="middle" fontSize="14" fill="var(--muted)">{s}</text>)}</svg>; }

type Props = { progress: Progress; onSkill: (index: number, value: number) => void; onStart: () => void };

export default function ProgressScreen({ progress, onSkill, onStart }: Props) {
  const { t, intl } = useI18n(); const p = t.progress;
  const counts = stageCounts(progress); const total = counts.reduce((a, b) => a + b, 0);
  const minutes = progress.sessions.reduce((n, s) => n + s.minutes, 0);
  const lessons = Object.values(progress.modules).reduce((n, m) => n + m.lessons.length, 0);
  const tests = Object.values(progress.modules).filter(m => m.test?.passed).length;
  return <><PageTitle label={p.label} title={p.title} text={p.text} /><div className="progress-grid">
    <section className="progress-details">
      <div className="metric-large"><Clock3 /><strong>{minutes}<small>{p.summary(lessons, tests, modules.length)}</small></strong></div>
      <h2>{p.stages}</h2>
      <div className="stage-bars">{t.stages.map((name, i) => <div key={name} className="stage-bar"><span>{name}</span><div><span className={`s${i}`} style={{ width: `${total ? (counts[i] / total) * 100 : 0}%` }} /></div><strong>{counts[i]}</strong></div>)}</div>
      <h3>{p.journal}</h3>
      {progress.sessions.length ? [...progress.sessions].reverse().slice(0, 30).map((s, i) => <div className="journal" key={i}><strong>{s.title}</strong><span>{p.kind[s.kind]} · {new Date(s.date).toLocaleDateString(intl)} · {s.minutes} {t.common.min}{s.score !== undefined ? ` · ${Math.round(s.score * 100)} %` : ''}</span></div>) : <p className="muted">{p.empty}</p>}
      <button className="button primary" onClick={onStart}>{p.continue} <ArrowRight size={16} /></button>
    </section>
    <section className="skill-card"><h2>{p.skills}</h2><Radar values={progress.skills} /><p className="muted small">{p.skillsNote}</p>{skillNames.map((s, i) => <label className="skill-slider" key={s}><span>{s}</span><input type="range" min="0" max="100" value={progress.skills[i]} onChange={e => onSkill(i, Number(e.target.value))} /><strong>{progress.skills[i]}</strong></label>)}</section>
  </div></>;
}
