import React from 'react';
import { cn } from '../../lib/utils';

export function IconLink({
  newTab = false,
  className,
  target,
  rel,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
  newTab?: boolean;
}) {
  return (
    <a
      className={cn('text-fg-secondary hover:text-fg-primary transition-colors', className)}
      target={newTab ? '_blank' : target}
      rel={newTab ? 'noopener noreferrer' : rel}
      {...props}
    >
      {children}
    </a>
  );
}
