import Link from 'next/link';
import { ArrowRight, BookOpen, Check, GraduationCap, Leaf, MessageCircle, RotateCcw } from 'lucide-react';

const features = [
  { icon: BookOpen, title: 'Учись через истории', text: 'Знакомство, город, первый день в Вене. Читай, разбирай выражения и пиши о том, что близко тебе.' },
  { icon: MessageCircle, title: 'Практикуй с AI-тьютором', text: 'Обсуждай учёбу и повседневную жизнь, задавай вопросы и получай объяснения своих ошибок.' },
  { icon: RotateCcw, title: 'Возвращайся к словам', text: 'Сохраняй выражения из занятий и повторяй их в контексте, постепенно увеличивая интервалы.' },
];

export default function GuestHome() {
  return <div className="guest-page">
    <a href="#guest-main" className="guest-skip">К содержимому</a>
    <header className="guest-header">
      <Link href="/" className="brand" aria-label="Klar C1 — на главную"><span className="brand-mark"><Leaf size={22} /></span>Klar<span className="brand-c1">C1</span></Link>
      <nav aria-label="Основная навигация" className="guest-nav">
        <a href="#how-it-works" className="guest-about-link">Как это работает</a>
        <Link href="/login" className="text-button">Войти</Link>
        <Link href="/register" className="button primary">Создать аккаунт <ArrowRight size={17} /></Link>
      </nav>
    </header>
    <main id="guest-main" className="guest-main">
      <section className="guest-hero" aria-labelledby="guest-title">
        <div className="guest-intro">
          <span className="eyebrow">НЕМЕЦКИЙ ДЛЯ ЖИЗНИ И УЧЁБЫ В ВЕНЕ</span>
          <h1 id="guest-title">От первого <span lang="de">Hallo</span><br />до первой лекции.</h1>
          <p>Твой путь к уверенному немецкому: истории, живая практика и понятные шаги к академическому C1. Начни со своего уровня и двигайся в своём темпе.</p>
          <div className="guest-actions"><Link href="/register" className="button primary">Начать свой путь <ArrowRight size={19} /></Link><a href="#how-it-works" className="small-link">Узнать больше <ArrowRight size={17} /></a></div>
          <p className="guest-note">Уже учишься с Klar? <Link href="/login">Войди и продолжи с того же места.</Link></p>
        </div>
        <div className="guest-preview" aria-label="Пример занятия начального уровня">
          <div className="guest-preview-top"><span>ТВОЙ ПЕРВЫЙ ШАГ</span><span className="pill">A1 · История и практика</span></div>
          <div className="guest-postcard"><span>WIEN, ÖSTERREICH</span><GraduationCap size={65} strokeWidth={1} aria-hidden="true" /><p lang="de">Hallo, Wien!</p><span>Новый город. Новые слова. Твоё начало.</span></div>
          <div className="guest-preview-content"><h2>Немецкий, который пригодится</h2><p>Познакомься с городом, научись представляться и расскажи о себе в нескольких предложениях.</p><ul>{['Прочитай короткую историю', 'Разбери полезные выражения', 'Попробуй написать свой ответ'].map(text => <li key={text}><Check size={17} aria-hidden="true" />{text}</li>)}</ul></div>
          <div className="guest-preview-bottom"><BookOpen size={17} aria-hidden="true" />Пример занятия в Klar C1</div>
        </div>
      </section>
      <section id="how-it-works" className="guest-features" aria-labelledby="guest-features-title">
        <div className="guest-section-heading"><span className="eyebrow">МЕНЬШЕ ХАОСА, БОЛЬШЕ ПРАКТИКИ</span><h2 id="guest-features-title">Один понятный шаг за раз</h2><p>Не просто знать правило, а уметь пользоваться языком.</p></div>
        <div className="guest-feature-grid">{features.map(({ icon: Icon, title, text }) => <article key={title}><span className="guest-feature-icon"><Icon size={25} strokeWidth={1.5} aria-hidden="true" /></span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>
      <section className="guest-route" aria-labelledby="guest-route-title"><div><span className="eyebrow">ТВОЯ ЦЕЛЬ — ТВОЙ МАРШРУТ</span><h2 id="guest-route-title">От знакомства с языком<br />к учёбе на немецком</h2><p>Выбери начальный уровень и настрой учебную цель. В аккаунте сохраняются твой прогресс, тексты и история практики.</p></div><div className="guest-levels"><ol aria-label="Уровни немецкого языка">{['A1', 'A2', 'B1', 'B2', 'C1'].map(level => <li key={level}>{level}</li>)}</ol><p>Сейчас доступны истории A1 и A2–B1. Материалы следующих уровней постепенно дополняются.</p></div></section>
      <section className="guest-start" aria-labelledby="guest-start-title"><span className="eyebrow" lang="de">DEIN WEG BEGINNT HIER</span><h2 id="guest-start-title">Первое Hallo — уже начало.</h2><p>Создай аккаунт, подтверди email и выбери свою первую практику.</p><Link href="/register" className="button primary">Создать аккаунт <ArrowRight size={19} /></Link></section>
    </main>
    <footer className="guest-footer"><span>Klar C1 · Шаг за шагом к Вене.</span><Link href="/login">Уже есть аккаунт? Войти <ArrowRight size={15} /></Link></footer>
  </div>;
}
