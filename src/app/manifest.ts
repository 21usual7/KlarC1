import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: '/',
    name: 'Klar C1',
    short_name: 'Klar',
    description: 'Тренажёр немецкой лексики для учёбы в Вене: информатика, кибербезопасность, математика.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    lang: 'ru',
    dir: 'ltr',
    background_color: '#f7f8f3',
    theme_color: '#f7f8f3',
    categories: ['education'],
    icons: [
      { src: '/icon/192', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icon/512', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icon-maskable', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
