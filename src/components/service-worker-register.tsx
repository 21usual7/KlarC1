'use client';
import { useEffect } from 'react';

/**
 * Registers /sw.js (offline fallback + cache of hashed static files) in production only:
 * in `next dev` a service worker would interfere with HMR.
 */
export default function ServiceWorkerRegister() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production' || !('serviceWorker' in navigator)) return;
    const register = () => {
      // updateViaCache: 'none' — the browser never takes sw.js from the HTTP cache, so a new deploy is picked up.
      navigator.serviceWorker.register('/sw.js', { scope: '/', updateViaCache: 'none' }).catch(() => {});
    };
    if (document.readyState === 'complete') register();
    else {
      window.addEventListener('load', register, { once: true });
      return () => window.removeEventListener('load', register);
    }
  }, []);
  return null;
}
