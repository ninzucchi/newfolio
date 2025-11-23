import { Outlet, useLocation } from '@tanstack/react-router';
import { useEffect } from 'react';
import { Nav } from '../../components/nav/Nav';
import { Footer } from '../../components/footer/Footer';
import css from './PageLayout.module.css';

export function RootLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className={css.root}>
      <Nav />
      <main className={css.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

