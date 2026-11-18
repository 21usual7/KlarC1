import { cookies } from 'next/headers';
import { notFound, redirect } from 'next/navigation';
import KlarApp from '@/components/klar-app';
import { viewFromPath } from '@/lib/views';
import GuestHome from '@/components/guest-home';
import { SESSION_COOKIE, sessionUser } from '@/lib/auth';

export default async function Page({ params }: { params: Promise<{ view?: string[] }> }) {
  const segments = (await params).view ?? [];
  const view = viewFromPath('/' + segments.join('/'));
  if (!view) notFound();
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  const user = token ? await sessionUser(token) : null;
  if (user) return <KlarApp initialView={view} />;
  return view === 'home' ? <GuestHome /> : redirect('/login');
}
