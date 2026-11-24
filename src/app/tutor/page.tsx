import type { Metadata } from 'next';
import { getDict } from '@/i18n/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Tutor from '@/components/screens/tutor';
import { SESSION_COOKIE, sessionUser } from '@/lib/auth';
export async function generateMetadata(): Promise<Metadata> { return { title: (await getDict()).meta.tutor }; }
export default async function TutorPage() {
  if (!await sessionUser((await cookies()).get(SESSION_COOKIE)?.value)) redirect('/login');
  return <Tutor />;
}
