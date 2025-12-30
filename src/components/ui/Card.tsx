import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

export function Card({
  variant = 'default',
  className = '',
  children,
  ...props
}: HTMLAttributes<HTMLDivElement> & { variant?: 'default' | 'elevated' }) {
  return (
    <div
      className={cn(
        'bg-background rounded-lg p-6',
        variant === 'default' && 'border-border border',
        variant === 'elevated' && 'shadow-sm',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
