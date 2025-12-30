import type { ReactNode } from 'react';

interface ContentProps {
  children: ReactNode;
}

export function Content({ children }: ContentProps) {
  return <main className="mx-auto w-full max-w-[640px] flex-1 p-5">{children}</main>;
}
