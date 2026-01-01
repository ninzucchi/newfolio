import { Root } from '@/app/layout/Root';
import { AboutPage } from '@/pages/about/AboutPage';
import { PhotosPage } from '@/pages/photos/PhotosPage';
import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router';

const rootRoute = createRootRoute({
  component: Root,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: AboutPage,
});

const photosRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/photos',
  component: PhotosPage,
});

const routeTree = rootRoute.addChildren([indexRoute, photosRoute]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
