export const routes = {
  index: '/',
  about: '/about',
  work: '/work',
  workProject: (slug: string) => `/work/${slug}`,
  sandbox: '/sandbox',
} as const;

export type RoutePath = typeof routes[keyof typeof routes];

