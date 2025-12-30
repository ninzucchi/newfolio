import { createRouter, createRootRoute, createRoute } from '@tanstack/react-router';
import { Root } from './layout/Root';
import { AboutPage } from '../pages/about/AboutPage';
import { PhotosPage } from '../pages/photos/PhotosPage';

const rootRoute = createRootRoute({
  component: Root,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: AboutPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const photosRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/photos',
  component: PhotosPage,
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute, photosRoute]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
