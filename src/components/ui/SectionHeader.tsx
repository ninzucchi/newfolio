import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';
import { Text } from './Text';

interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
}

export function SectionHeader({ title, subtitle, className = '', ...props }: SectionHeaderProps) {
  return (
    <div className={cn('mb-12', className)} {...props}>
      <Text.H2 className="mb-3 text-3xl font-semibold">{title}</Text.H2>
      {subtitle && <Text.P className="mb-0 text-lg text-muted-foreground">{subtitle}</Text.P>}
    </div>
  );
}
