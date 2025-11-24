import { Outlet, useLocation } from '@tanstack/react-router';
import { useEffect } from 'react';
import { Nav } from '../../components/nav/Nav';
import { Footer } from '../../components/footer/Footer';
import { Page } from './Page';
import { Content } from './Content';

export function Root() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Page>
      <Nav />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </Page>
  );
}
