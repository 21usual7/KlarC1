import type { Metadata } from 'next';
import AuthPage from '@/components/auth-page';
import PasswordRecovery from '@/components/password-recovery';

export const metadata: Metadata = { title: 'Новый пароль — Klar C1', robots: { index: false }, referrer: 'no-referrer' };

export default function ResetPasswordPage() {
  return <AuthPage><PasswordRecovery reset /></AuthPage>;
}
