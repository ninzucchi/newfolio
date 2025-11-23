import type { ButtonHTMLAttributes } from 'react';
import css from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={`${css.button} ${css[variant]} ${css[size]} ${className}`} {...props}>
      {children}
    </button>
  );
}
