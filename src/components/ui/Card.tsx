import type { HTMLAttributes } from 'react';
import css from './Card.module.css';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated';
}

export function Card({ variant = 'default', className = '', children, ...props }: CardProps) {
  return (
    <div className={`${css.card} ${css[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
}

