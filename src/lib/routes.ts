export const routes = {
  index: '/',
  about: '/about',
  photos: '/photos',
} as const;

export type RoutePath = (typeof routes)[keyof typeof routes];
