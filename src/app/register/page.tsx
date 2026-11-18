import type { Metadata } from 'next';
import AuthPage from '@/components/auth-page';
import Registration from '@/components/registration';
export const metadata: Metadata = { title: 'Регистрация — Klar C1', robots: { index: false, follow: false } };
export default function RegisterPage() {
  return <AuthPage><Registration key="register" initialMode="register" standalone /></AuthPage>;
}
