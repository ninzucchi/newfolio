import type { ReactNode } from 'react';

interface ContentProps {
  children: ReactNode;
}

export function Content({ children }: ContentProps) {
  return <main className="mx-auto w-full max-w-[640px] flex-1 px-5 pt-0 pb-5">{children}</main>;
}
