import { brandIcon } from '@/lib/brand-icon';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

// iOS rounds the corners itself, so the icon is a full-bleed square.
export default function AppleIcon() {
  return brandIcon(size.width, 'full');
}
