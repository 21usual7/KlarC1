'use client';
import { displayWord, wordIcons, type Word } from '@/content';
import photoCredits from '../../../public/words/credits.json';
import GlossText from './gloss-text';
import { SpeakButton } from './speak';

/** Free-licensed photos from scripts/fetch-images.mjs: public/words/<wordId>.webp, credits keyed by word id. */
type PhotoCredit = { title: string; author: string; license: string; licenseUrl: string; sourceUrl: string };
const photos: Record<string, PhotoCredit | undefined> = photoCredits;

/** Everything about one word: form, meaning, how it is built and used. */
export default function WordCard({ word, compact = false }: { word: Word; compact?: boolean }) {
  const Icon = word.icon ? wordIcons[word.icon] : undefined;
  const tone = word.pluralOnly ? 'pl' : word.article || word.pos;
  const photo = photos[word.id];
  return <div className={`word-card ${compact ? 'compact' : ''}`}>
    {photo
      ? <div className={`word-picture word-photo tone-${tone}`}><img src={`/words/${word.id}.webp`} alt={word.ru} width={640} height={480} loading="lazy" decoding="async" /></div>
      : Icon && <div className={`word-picture tone-${tone}`} aria-hidden="true"><Icon size={compact ? 28 : 56} strokeWidth={1.6} /></div>}
    {photo && !compact && <p className="photo-credit">Фото: <a href={photo.sourceUrl} target="_blank" rel="noopener noreferrer">{photo.author}</a>, {photo.licenseUrl ? <a href={photo.licenseUrl} target="_blank" rel="noopener noreferrer">{photo.license}</a> : photo.license}</p>}
    <div className="word-card-head">
      <h2 lang="de" className={word.article ? `article-${word.pluralOnly ? 'pl' : word.article}` : ''}>{displayWord(word)}</h2>
      <SpeakButton text={displayWord(word)} withSlow />
    </div>
    <p className="word-ru">{word.ru}</p>
    <dl className="word-facts">
      {word.plural && <><dt>Мн. число</dt><dd lang="de">die {word.plural}</dd></>}
      {word.parts && <><dt>Состав</dt><dd lang="de">{word.parts.join(' + ')}</dd></>}
      {word.forms && <><dt>Формы</dt><dd lang="de">{word.forms}</dd></>}
      {word.collocation && <><dt>Сочетание</dt><dd><span lang="de">{word.collocation.de}</span> — {word.collocation.ru}</dd></>}
      {word.note && <><dt>Заметка</dt><dd>{word.note}</dd></>}
    </dl>
    <div className="word-example"><p lang="de"><GlossText text={word.example.de} /> <SpeakButton text={word.example.de} label="Послушать пример" withSlow /></p><p className="muted">{word.example.ru}</p></div>
  </div>;
}
