import type { Metadata } from 'next';
import { getDict } from '@/i18n/server';
import AuthPage from '@/components/auth-page';
import Registration from '@/components/registration';
export async function generateMetadata(): Promise<Metadata> { return { title: (await getDict()).meta.register, robots: { index: false, follow: false } }; }
export default function RegisterPage() {
  return <AuthPage><Registration key="register" initialMode="register" standalone /></AuthPage>;
}
