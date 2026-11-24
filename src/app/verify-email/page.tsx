import type { Metadata } from 'next';
import { getDict } from '@/i18n/server';
import AuthPage from '@/components/auth-page';
import Verification from './verification';
export async function generateMetadata(): Promise<Metadata> { return { title: (await getDict()).meta.verify, robots: { index: false, follow: false }, referrer: 'no-referrer' }; }
export default async function VerifyEmailPage({ searchParams }: { searchParams: Promise<{ token?: string | string[] }> }) {
  const { token } = await searchParams;
  const safeToken = typeof token === 'string' && token.length > 0 && token.length <= 512 ? token : null;
  return <AuthPage><Verification token={safeToken} /></AuthPage>;
}
