import { ImageResponse } from 'next/og';

/** Brand colours, same as `--green` and `--c-f2f2dc` of the light theme in globals.css. */
export const BRAND_GREEN = '#315b45';
export const BRAND_CREAM = '#f2f2dc';

/**
 * Klar C1 app icon as a PNG: the Lucide «Leaf» from `.brand-mark` on the brand green.
 * - `rounded`: the leaf-cornered mark on a transparent background (manifest `purpose: any`, favicons).
 * - `full`: full-bleed square, leaf inside the central 60 % safe zone (`maskable`, Apple touch icon:
 *   iOS and Android apply their own mask).
 */
export function brandIcon(size: number, shape: 'rounded' | 'full') {
  const full = shape === 'full';
  const leaf = Math.round(size * (full ? 0.5 : 0.6));
  const r = Math.round(size * 0.3), r2 = Math.round(size * 0.09);
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: full ? BRAND_GREEN : 'transparent' }}>
        <div style={{ width: full ? '100%' : '92%', height: full ? '100%' : '92%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: BRAND_GREEN, borderRadius: full ? 0 : `${r}px ${r2}px ${r}px ${r2}px` }}>
          <svg width={leaf} height={leaf} viewBox="0 0 24 24" fill="none" stroke={BRAND_CREAM} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
          </svg>
        </div>
      </div>
    ),
    { width: size, height: size },
  );
}
