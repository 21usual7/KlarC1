'use client';

import { useEffect, useState } from 'react';
import { Medal, Settings2 } from 'lucide-react';
import { useI18n } from '@/i18n/client';
import { serverText } from '@/i18n/runtime';

type Entry = { rank: number; name: string; points: number; isMe: boolean };
type Ranking = { entries: Entry[]; own: Entry | null };

export default function ScoreboardScreen({ revision, onProfile }: { revision: number; onProfile: () => void }) {
  const [ranking, setRanking] = useState<Ranking | null>(null);
  const { t, intl } = useI18n(); const sb = t.scoreboard;
  const [error, setError] = useState('');
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    fetch('/api/scoreboard', { signal: controller.signal })
      .then(async response => {
        const result = await response.json();
        if (!response.ok) throw new Error(serverText(result.error, sb.loadFailed));
        setError('');
        setRanking(result);
      })
      .catch(reason => { if (!controller.signal.aborted) setError(reason.message || sb.loadFailed); });
    return () => controller.abort();
  }, [revision, attempt]);

  return <>
    <header className="page-heading">
      <h1>{sb.title}</h1>
      <p>{sb.text}</p>
    </header>
    {error && <div className="notice" role="alert"><p>{error}</p><button className="text-button" onClick={() => { setError(''); setAttempt(value => value + 1); }}>{t.common.retryLoad}</button></div>}
    {!ranking && !error && <p role="status">{sb.loading}</p>}
    {ranking && <>
      <div className="account-hero scoreboard-hero">
        <span className="account-avatar"><Medal size={30} aria-hidden="true" /></span>
        <div>
          <h2>{ranking.own ? sb.place(ranking.own.rank) : sb.participation}</h2>
          <p>{ranking.own ? sb.points(ranking.own.points.toLocaleString(intl)) : sb.enable}</p>
        </div>
        <button className="button secondary" onClick={onProfile}><Settings2 size={18} />{sb.settings}</button>
      </div>
      {ranking.entries.length ? <div className="scoreboard-table"><table>
        <caption>{sb.caption}</caption>
        <thead><tr><th scope="col">{sb.rank}</th><th scope="col">{sb.member}</th><th scope="col">{sb.pointsHead}</th></tr></thead>
        <tbody>{ranking.entries.map((entry, index) => <tr key={index} className={entry.isMe ? 'scoreboard-me' : undefined}>
          <td>{entry.rank}</td><th scope="row">{entry.name}{entry.isMe && <small>{sb.you}</small>}</th><td>{entry.points.toLocaleString(intl)}</td>
        </tr>)}</tbody>
      </table></div> : <p className="notice">{sb.empty}</p>}
    </>}
  </>;
}
