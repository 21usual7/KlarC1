import type { Metadata } from 'next';
import { getDict } from '@/i18n/server';
import AuthPage from '@/components/auth-page';
import PasswordRecovery from '@/components/password-recovery';

export async function generateMetadata(): Promise<Metadata> { return { title: (await getDict()).meta.reset, robots: { index: false }, referrer: 'no-referrer' }; }

export default function ResetPasswordPage() {
  return <AuthPage><PasswordRecovery reset /></AuthPage>;
}
