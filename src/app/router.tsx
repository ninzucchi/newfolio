import { createRouter, createRootRoute, createRoute } from '@tanstack/react-router';
import { RootLayout } from './layout/RootLayout';
import { AboutPage } from '../pages/about/AboutPage';
import { WorkPage } from '../pages/work/WorkPage';
import { WorkProjectPage } from '../pages/work/WorkProjectPage';
import { SandboxPage } from '../pages/sandbox/SandboxPage';

const rootRoute = createRootRoute({
  component: RootLayout,
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

const workRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/work',
  component: WorkPage,
});

const workProjectRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/work/$slug',
  component: WorkProjectPage,
});

const sandboxRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/sandbox',
  component: SandboxPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  workRoute,
  workProjectRoute,
  sandboxRoute,
]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

