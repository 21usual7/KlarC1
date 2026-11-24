import type { Metadata } from 'next';
import { getDict } from '@/i18n/server';
import AuthPage from '@/components/auth-page';
import PasswordRecovery from '@/components/password-recovery';

export async function generateMetadata(): Promise<Metadata> { return { title: (await getDict()).meta.forgot, robots: { index: false } }; }

export default function ForgotPasswordPage() {
  return <AuthPage><PasswordRecovery /></AuthPage>;
}
