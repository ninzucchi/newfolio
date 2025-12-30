import React from 'react';
import { cn } from '../../lib/utils';

export function IconContainer({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children: React.ReactNode }) {
  return (
    <div className={cn('flex h-10 w-10 items-center justify-center', className)} {...props}>
      {children}
    </div>
  );
}
