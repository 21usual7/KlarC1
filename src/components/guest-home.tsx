import Link from 'next/link';
import { ArrowRight, BookOpen, Check, GraduationCap, Leaf, MessageCircle, RotateCcw } from 'lucide-react';
import { LanguageSwitcher } from '@/i18n/client';
import { getDict } from '@/i18n/server';

const featureIcons = [BookOpen, MessageCircle, RotateCcw];

export default async function GuestHome() {
  const t = await getDict(); const g = t.guest;
  const features = g.features.map((f, i) => ({ ...f, icon: featureIcons[i] }));
  return <div className="guest-page">
    <a href="#guest-main" className="guest-skip">{g.skip}</a>
    <header className="guest-header">
      <Link href="/" className="brand" aria-label={t.common.toHome}><span className="brand-mark"><Leaf size={22} /></span>Klar<span className="brand-c1">C1</span></Link>
      <nav aria-label={t.common.mainNav} className="guest-nav">
        <LanguageSwitcher />
        <a href="#how-it-works" className="guest-about-link">{g.howItWorks}</a>
        <Link href="/login" className="text-button">{g.login}</Link>
        <Link href="/register" className="button primary">{g.createAccount} <ArrowRight size={17} /></Link>
      </nav>
    </header>
    <main id="guest-main" className="guest-main">
      <section className="guest-hero" aria-labelledby="guest-title">
        <div className="guest-intro">
          <span className="eyebrow">{g.eyebrow}</span>
          <h1 id="guest-title">{g.titleBefore}<span lang="de">Hallo</span><br />{g.titleAfter}</h1>
          <p>{g.intro}</p>
          <div className="guest-actions"><Link href="/register" className="button primary">{g.start} <ArrowRight size={19} /></Link><a href="#how-it-works" className="small-link">{g.more} <ArrowRight size={17} /></a></div>
          <p className="guest-note">{g.already}<Link href="/login">{g.continue}</Link></p>
        </div>
        <div className="guest-preview" aria-label={g.previewAria}>
          <div className="guest-preview-top"><span>{g.firstStep}</span><span className="pill">A2 · Cybersecurity</span></div>
          <div className="guest-postcard"><span>WIEN, ÖSTERREICH</span><GraduationCap size={65} strokeWidth={1} aria-hidden="true" /><p lang="de">die Schwachstelle</p><span>{g.compound}</span></div>
          <div className="guest-preview-content"><h2>{g.previewTitle}</h2><p>{g.previewText}</p><ul>{g.steps.map(text => <li key={text}><Check size={17} aria-hidden="true" />{text}</li>)}</ul></div>
          <div className="guest-preview-bottom"><BookOpen size={17} aria-hidden="true" />{g.previewFooter}</div>
        </div>
      </section>
      <section id="how-it-works" className="guest-features" aria-labelledby="guest-features-title">
        <div className="guest-section-heading"><span className="eyebrow">{g.featuresEyebrow}</span><h2 id="guest-features-title">{g.featuresTitle}</h2><p>{g.featuresText}</p></div>
        <div className="guest-feature-grid">{features.map(({ icon: Icon, title, text }) => <article key={title}><span className="guest-feature-icon"><Icon size={25} strokeWidth={1.5} aria-hidden="true" /></span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>
      <section className="guest-route" aria-labelledby="guest-route-title"><div><span className="eyebrow">{g.routeEyebrow}</span><h2 id="guest-route-title">{g.routeTitle[0]}<br />{g.routeTitle[1]}</h2><p>{g.routeText}</p></div><div className="guest-levels"><ol aria-label={g.levelsAria}>{['A1', 'A2', 'B1', 'B2', 'C1'].map(level => <li key={level}>{level}</li>)}</ol><p>{g.levelsText}</p></div></section>
      <section className="guest-start" aria-labelledby="guest-start-title"><span className="eyebrow" lang="de">DEIN WEG BEGINNT HIER</span><h2 id="guest-start-title">{g.startTitle}</h2><p>{g.startText}</p><Link href="/register" className="button primary">{g.createAccount} <ArrowRight size={19} /></Link></section>
    </main>
    <footer className="guest-footer"><span>{g.footer}</span><Link href="/login">{g.footerLogin} <ArrowRight size={15} /></Link></footer>
  </div>;
}
