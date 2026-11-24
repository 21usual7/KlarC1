import type { Locale } from './locales.ts';

/** Transactional emails in each interface language. `link` is the one-time link of the email. */
export const emails: Record<Locale, { verify: { subject: string; text: (link: string) => string }; reset: { subject: string; text: (link: string) => string } }> = {
  ru: {
    verify: { subject: 'Подтверди email для Jargeo', text: link => `Подтверди свой email, чтобы войти в Jargeo.\n\n${link}\n\nСсылка действует 24 часа и используется один раз. После открытия нажми «Подтвердить email». Если ты не создавал аккаунт, проигнорируй письмо.` },
    reset: { subject: 'Сброс пароля Jargeo', text: link => `Задай новый пароль для Jargeo.\n\n${link}\n\nСсылка действует 30 минут и используется один раз. Если ты не запрашивал сброс, проигнорируй письмо.` },
  },
  en: {
    verify: { subject: 'Confirm your email for Jargeo', text: link => `Confirm your email to sign in to Jargeo.\n\n${link}\n\nThe link is valid for 24 hours and works once. After opening it, press “Confirm email”. If you didn't create an account, ignore this email.` },
    reset: { subject: 'Reset your Jargeo password', text: link => `Set a new password for Jargeo.\n\n${link}\n\nThe link is valid for 30 minutes and works once. If you didn't ask for a reset, ignore this email.` },
  },
};
