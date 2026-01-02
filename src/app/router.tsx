import { Root } from '@/app/layout/Root';
import { AboutPage } from '@/pages/about/AboutPage';
import { PhotosPage } from '@/pages/photos/PhotosPage';
import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router';

const rootRoute = createRootRoute({
  component: Root,
});

type IndexSearch = { p?: number; i?: number };

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: AboutPage,
  validateSearch: (search: Record<string, unknown>): IndexSearch => ({
    p: typeof search.p === 'number' ? search.p : undefined,
    i: typeof search.i === 'number' ? search.i : undefined,
  }),
});

type PhotosSearch = { i?: number };

const photosRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/photos',
  component: PhotosPage,
  validateSearch: (search: Record<string, unknown>): PhotosSearch => ({
    i: typeof search.i === 'number' ? search.i : undefined,
  }),
});

const routeTree = rootRoute.addChildren([indexRoute, photosRoute]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
