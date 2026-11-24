'use client';
import { spheres, type Sphere } from '@/content';
import { useI18n } from '@/i18n/client';

export default function SphereTabs({ value, onChange }: { value: Sphere; onChange: (s: Sphere) => void }) {
  const { t } = useI18n();
  return <div className="sphere-tabs" role="tablist" aria-label={t.app.sphere}>{spheres.map(s => <button key={s.id} role="tab" aria-selected={value === s.id} className={value === s.id ? 'selected' : ''} onClick={() => onChange(s.id)}>{t.spheres[s.id]}<small lang="de">{s.de}</small></button>)}</div>;
}
