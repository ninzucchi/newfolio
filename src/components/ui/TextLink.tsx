import React from 'react';
import { cn } from '../../lib/utils';

export function TextLink({
  newTab = false,
  className,
  target,
  rel,
  style,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { newTab?: boolean }) {
  return (
    <a
      className={cn(
        'decoration-fg-tertiary [text-decoration-thickness:1px] [text-underline-offset:0.2em]',
        className
      )}
      style={
        {
          WebkitTextDecorationThickness: '0.5px',
          ...style,
        } as React.CSSProperties
      }
      target={newTab ? '_blank' : target}
      rel={newTab ? 'noopener noreferrer' : rel}
      {...props}
    />
  );
}
