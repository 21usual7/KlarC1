import { brandIcon } from '@/lib/brand-icon';

// 512×512 maskable icon for the manifest (full bleed, leaf inside the safe zone).
// Not an `icon.tsx` image so that it does not become a <link rel="icon"> in the page head.
export const dynamic = 'force-static';

export function GET() {
  return brandIcon(512, 'full');
}
