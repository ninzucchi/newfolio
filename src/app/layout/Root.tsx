import { Outlet, useLocation } from '@tanstack/react-router';
import { useEffect } from 'react';
import { Header } from '../../components/nav/Header';
import { Page } from './Page';
import { Content } from './Content';

export function Root() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Page>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </Page>
  );
}
