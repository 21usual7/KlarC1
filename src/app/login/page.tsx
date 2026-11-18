import type { Metadata } from 'next';
import AuthPage from '@/components/auth-page';
import Registration from '@/components/registration';
export const metadata: Metadata = { title: 'Вход — Klar C1', robots: { index: false, follow: false } };
export default function LoginPage() {
  return <AuthPage><Registration key="login" initialMode="login" standalone /></AuthPage>;
}
