import { Content } from '@/app/layout/Content';
import { Nav } from '@/components/ui/Nav';
import { Outlet, useLocation } from '@tanstack/react-router';
import { useEffect } from 'react';

export function Root() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <Content>
        <Outlet />
      </Content>
    </div>
  );
}
