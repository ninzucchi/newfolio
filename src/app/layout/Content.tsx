import type { ReactNode } from 'react';

interface ContentProps {
  children: ReactNode;
}

export function Content({ children }: ContentProps) {
  return <main className="flex-1 w-full max-w-[1000px] mx-auto py-8 px-6">{children}</main>;
}
