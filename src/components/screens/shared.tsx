import { ArrowRight } from 'lucide-react';

export function PageTitle({ label, title, text }: { label: string; title: string; text: string }) { return <div className="page-heading"><div><div className="eyebrow">{label}</div><h1>{title}</h1><p>{text}</p></div></div>; }
export function Empty({ icon, title, text, action, onClick }: { icon: React.ReactNode; title: string; text: string; action: string; onClick: () => void }) { return <div className="empty-state">{icon}<h2>{title}</h2><p>{text}</p><button className="button primary" onClick={onClick}>{action}<ArrowRight size={16} /></button></div>; }
