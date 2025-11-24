import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated';
}

export function Card({ variant = 'default', className = '', children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'p-6 rounded-lg bg-background',
        variant === 'default' && 'border border-border',
        variant === 'elevated' && 'shadow-sm',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

