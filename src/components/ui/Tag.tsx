import type { HTMLAttributes } from 'react';
import css from './Tag.module.css';

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary';
}

export function Tag({ variant = 'default', className = '', children, ...props }: TagProps) {
  return (
    <span className={`${css.tag} ${css[variant]} ${className}`} {...props}>
      {children}
    </span>
  );
}

