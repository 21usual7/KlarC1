import { createHmac, timingSafeEqual } from 'node:crypto';
import { isIP, SocketAddress } from 'node:net';

export function normalizeIp(value: string | undefined): string | null {
  const ip = value?.trim();
  if (!ip || !isIP(ip)) return null;
  if (ip.toLowerCase().startsWith('::ffff:') && isIP(ip.slice(7)) === 4) return ip.slice(7);
  return SocketAddress.parse(isIP(ip) === 6 ? `[${ip}]:0` : `${ip}:0`)?.address || null;
}

/** Only explicitly trusted socket peers may supply a forwarding chain. Walk from the server backwards. */
export function connectionIp(peer: string | undefined, forwarded: string | undefined, trustedPeers = '') {
  let ip = normalizeIp(peer);
  const trusted = new Set(trustedPeers.split(',').map(normalizeIp).filter(Boolean));
  const chain = (forwarded || '').split(',');
  while (ip && trusted.has(ip) && chain.length) {
    ip = normalizeIp(chain.pop());
  }
  return ip;
}

export function signClientIp(ip: string, secret: string) {
  return createHmac('sha256', secret).update(ip).digest('hex');
}

export function verifiedClientIp(headers: Headers, secret = process.env.KLAR_INTERNAL_IP_SECRET) {
  // On Vercel scripts/server.mjs does not run; the platform overwrites x-real-ip with the client address,
  // and VERCEL=1 is set by the platform itself, so a client cannot opt into this branch.
  if (process.env.VERCEL === '1') return normalizeIp(headers.get('x-real-ip') || undefined);
  const ip = normalizeIp(headers.get('x-klar-client-ip') || undefined);
  const signature = headers.get('x-klar-client-ip-signature') || '';
  if (!secret || !ip || !/^[a-f0-9]{64}$/.test(signature)) return null;
  const expected = Buffer.from(signClientIp(ip, secret), 'hex');
  return timingSafeEqual(expected, Buffer.from(signature, 'hex')) ? ip : null;
}
