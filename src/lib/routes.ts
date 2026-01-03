export const routes = {
  index: '/',
  photos: '/photos',
} as const;

export type RoutePath = (typeof routes)[keyof typeof routes];
