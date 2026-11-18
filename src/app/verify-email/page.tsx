import type { Metadata } from 'next';
import AuthPage from '@/components/auth-page';
import Verification from './verification';
export const metadata: Metadata = { title: 'Подтверждение email — Klar C1', robots: { index: false, follow: false }, referrer: 'no-referrer' };
export default async function VerifyEmailPage({ searchParams }: { searchParams: Promise<{ token?: string | string[] }> }) {
  const { token } = await searchParams;
  const safeToken = typeof token === 'string' && token.length > 0 && token.length <= 512 ? token : null;
  return <AuthPage><Verification token={safeToken} /></AuthPage>;
}
