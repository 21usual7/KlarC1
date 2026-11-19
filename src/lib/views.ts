export const viewPaths = { home: '/', roadmap: '/roadmap', session: '/session', review: '/review', progress: '/progress', homework: '/homework', profile: '/profile', scoreboard: '/scoreboard' } as const;
export type View = keyof typeof viewPaths;
export const viewFromPath = (path: string): View | undefined => (Object.keys(viewPaths) as View[]).find(v => viewPaths[v] === path);
/** Text handed from a lesson to the separate /tutor page; read once when it opens. */
export const TUTOR_DRAFT_KEY = 'klar-tutor-draft';
