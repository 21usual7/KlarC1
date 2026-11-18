'use client';
import { spheres, type Sphere } from '@/content';

export default function SphereTabs({ value, onChange }: { value: Sphere; onChange: (s: Sphere) => void }) {
  return <div className="sphere-tabs" role="tablist" aria-label="Сфера">{spheres.map(s => <button key={s.id} role="tab" aria-selected={value === s.id} className={value === s.id ? 'selected' : ''} onClick={() => onChange(s.id)}>{s.label}<small lang="de">{s.de}</small></button>)}</div>;
}
