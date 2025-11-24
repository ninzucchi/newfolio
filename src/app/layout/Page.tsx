import type { ReactNode } from 'react';

interface PageProps {
  children: ReactNode;
}

export function Page({ children }: PageProps) {
  return <div className="flex flex-col min-h-screen">{children}</div>;
}
