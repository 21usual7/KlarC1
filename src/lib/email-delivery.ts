export type EmailDelivery = 'sent' | 'not_configured' | 'failed';

export function emailConfigured() {
  return !!(process.env.RESEND_API_KEY && process.env.EMAIL_FROM);
}

export function emailLink(path: string) {
  const url = new URL(process.env.APP_ORIGIN || 'http://localhost:3000');
  const localhost = ['localhost', '127.0.0.1'].includes(url.hostname);
  if (url.username || url.password || !(url.protocol === 'https:' || localhost && url.protocol === 'http:')) {
    throw new Error('Invalid application origin');
  }
  return new URL(path, url.origin).href;
}

export async function deliverEmail(email: string, subject: string, text: string, key: string): Promise<EmailDelivery> {
  if (!emailConfigured()) return 'not_configured';
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      signal: AbortSignal.timeout(15000),
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
        'Idempotency-Key': key,
      },
      body: JSON.stringify({ from: process.env.EMAIL_FROM, to: [email], subject, text }),
    });
    if (!response.ok) return 'failed';
    const data = await response.json();
    return typeof data.id === 'string' ? 'sent' : 'failed';
  } catch {
    return 'failed';
  }
}
