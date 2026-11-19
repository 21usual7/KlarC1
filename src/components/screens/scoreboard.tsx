'use client';

import { useEffect, useState } from 'react';
import { Medal, Settings2 } from 'lucide-react';

type Entry = { rank: number; name: string; points: number; isMe: boolean };
type Ranking = { entries: Entry[]; own: Entry | null };

export default function ScoreboardScreen({ revision, onProfile }: { revision: number; onProfile: () => void }) {
  const [ranking, setRanking] = useState<Ranking | null>(null);
  const [error, setError] = useState('');
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    fetch('/api/scoreboard', { signal: controller.signal })
      .then(async response => {
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || 'Не удалось загрузить рейтинг.');
        setError('');
        setRanking(result);
      })
      .catch(reason => { if (!controller.signal.aborted) setError(reason.message || 'Не удалось загрузить рейтинг.'); });
    return () => controller.abort();
  }, [revision, attempt]);

  return <>
    <header className="page-heading">
      <h1>Рейтинг</h1>
      <p>10 очков за каждый завершённый урок и 30 за каждый сданный тест модуля.</p>
    </header>
    {error && <div className="notice" role="alert"><p>{error}</p><button className="text-button" onClick={() => { setError(''); setAttempt(value => value + 1); }}>Повторить загрузку</button></div>}
    {!ranking && !error && <p role="status">Загружаем рейтинг…</p>}
    {ranking && <>
      <div className="account-hero scoreboard-hero">
        <span className="account-avatar"><Medal size={30} aria-hidden="true" /></span>
        <div>
          <h2>{ranking.own ? `Твоё место — ${ranking.own.rank}` : 'Участие в рейтинге'}</h2>
          <p>{ranking.own ? `${ranking.own.points.toLocaleString('ru-RU')} очк.` : 'Включи участие в профиле, чтобы показать своё имя и очки.'}</p>
        </div>
        <button className="button secondary" onClick={onProfile}><Settings2 size={18} />Настройки профиля</button>
      </div>
      {ranking.entries.length ? <div className="scoreboard-table"><table>
        <caption>Первые 50 участников</caption>
        <thead><tr><th scope="col">Место</th><th scope="col">Участник</th><th scope="col">Очки</th></tr></thead>
        <tbody>{ranking.entries.map((entry, index) => <tr key={index} className={entry.isMe ? 'scoreboard-me' : undefined}>
          <td>{entry.rank}</td><th scope="row">{entry.name}{entry.isMe && <small> · ты</small>}</th><td>{entry.points.toLocaleString('ru-RU')}</td>
        </tr>)}</tbody>
      </table></div> : <p className="notice">В рейтинге пока нет участников.</p>}
    </>}
  </>;
}
