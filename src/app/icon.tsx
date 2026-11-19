import { brandIcon } from '@/lib/brand-icon';

// Served at /icon/192 and /icon/512 (also used by the web app manifest).
export function generateImageMetadata() {
  return [192, 512].map(px => ({ id: String(px), size: { width: px, height: px }, contentType: 'image/png' }));
}

export default async function Icon({ id }: { id: Promise<string | number> }) {
  const px = Number(await id) === 512 ? 512 : 192;
  return brandIcon(px, 'rounded');
}
