import type { Metadata } from 'next';
import AuthPage from '@/components/auth-page';
import PasswordRecovery from '@/components/password-recovery';

export const metadata: Metadata = { title: 'Сброс пароля — Klar C1', robots: { index: false } };

export default function ForgotPasswordPage() {
  return <AuthPage><PasswordRecovery /></AuthPage>;
}
