'use client';
import { useEffect, useState } from 'react';
import { hasOverlay, loadOverlay, setContentOverlay } from '@/content/translate';
import { useI18n } from './client';

/**
 * Loads the course translations of the interface language (screens with lessons and words call it).
 * True once they are in place; Russian, the source language, needs nothing.
 * A failed download is not fatal: the course then shows the Russian translations.
 */
export function useCourseTranslations(): boolean {
  const { locale } = useI18n();
  const [ready, setReady] = useState(!hasOverlay(locale));
  useEffect(() => {
    if (!hasOverlay(locale)) return;
    let live = true;
    loadOverlay(locale).catch(() => null).then(overlay => { if (!live) return; setContentOverlay(overlay); setReady(true); });
    return () => { live = false; };
  }, [locale]);
  return ready;
}
