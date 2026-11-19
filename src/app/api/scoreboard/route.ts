import { cookies } from 'next/headers';
import { SESSION_COOKIE, sessionUser } from '@/lib/auth';
import { authFailure, authResponse } from '@/lib/auth-http';
import { d1Query } from '@/lib/d1';

export const runtime = 'nodejs';

export async function GET() {
  try {
    const user = await sessionUser((await cookies()).get(SESSION_COOKIE)?.value);
    if (!user) return authResponse({ error: 'Войди в аккаунт, чтобы увидеть рейтинг.' }, 401);
    const rows = await d1Query<{ rank: number; name: string; points: number; is_me: number; position: number }>(
      `WITH ranked AS (
         SELECT user_id, points, RANK() OVER (ORDER BY points DESC) AS rank,
           ROW_NUMBER() OVER (ORDER BY points DESC, user_id) AS position
         FROM scoreboard
       )
       SELECT rank, name, points, user_id = ? AS is_me, position
       FROM ranked JOIN users ON users.id = ranked.user_id
       WHERE position <= 50 OR user_id = ? ORDER BY position`, [user.id, user.id],
    );
    const entry = ({ rank, name, points, is_me }: (typeof rows)[number]) => ({ rank, name, points, isMe: !!is_me });
    const own = rows.find(row => row.is_me);
    return authResponse({ entries: rows.filter(row => row.position <= 50).map(entry), own: own ? entry(own) : null });
  } catch (error) { return authFailure(error); }
}
