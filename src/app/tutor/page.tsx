import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Tutor from '@/components/screens/tutor';
import { SESSION_COOKIE, sessionUser } from '@/lib/auth';
export const metadata: Metadata = { title: 'AI-тьютор — Klar C1' };
export default async function TutorPage() {
  if (!await sessionUser((await cookies()).get(SESSION_COOKIE)?.value)) redirect('/login');
  return <Tutor />;
}
