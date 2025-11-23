import type { HTMLAttributes } from 'react';
import css from './SectionHeader.module.css';

interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
}

export function SectionHeader({
  title,
  subtitle,
  className = '',
  ...props
}: SectionHeaderProps) {
  return (
    <div className={`${css.sectionHeader} ${className}`} {...props}>
      <h2 className={css.title}>{title}</h2>
      {subtitle && <p className={css.subtitle}>{subtitle}</p>}
    </div>
  );
}

