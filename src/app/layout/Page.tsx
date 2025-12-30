import type { ReactNode } from 'react';

interface PageProps {
  children: ReactNode;
}

export function Page({ children }: PageProps) {
  return <div className="flex min-h-screen flex-col">{children}</div>;
}
