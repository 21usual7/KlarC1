export const viewPaths = { home: '/', roadmap: '/roadmap', session: '/session', review: '/review', tutor: '/tutor', progress: '/progress', homework: '/homework', profile: '/profile', scoreboard: '/scoreboard' } as const;
export type View = keyof typeof viewPaths;
export const viewFromPath = (path: string): View | undefined => (Object.keys(viewPaths) as View[]).find(v => viewPaths[v] === path);
