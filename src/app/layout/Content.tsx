import { useLocation } from '@tanstack/react-router';
import type { ReactNode } from 'react';
import { routes } from '@/lib/routes';

interface ContentProps {
  children: ReactNode;
}

export function Content({ children }: ContentProps) {
  const location = useLocation();
  const isPhotosPage = location.pathname === routes.photos;
  const maxWidth = !isPhotosPage && 'max-w-[640px]';

  return <main className={`flex-1 px-5 pt-0 pb-5 mx-auto w-full ${maxWidth}`}>{children}</main>;
}
