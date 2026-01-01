import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

export function IconButton({
  icon: Icon,
  onClick,
  className,
  'aria-label': ariaLabel,
}: {
  icon: LucideIcon;
  onClick?: () => void;
  className?: string;
  'aria-label': string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={cn(
        // Layout
        'flex h-10 w-10 items-center justify-center rounded-full',
        // Colors
        'bg-black/50 backdrop-blur-sm',
        // Typography
        'text-fg-secondary hover:text-fg-primary',
        // Interactive states
        'cursor-pointer hover:bg-black/70 active:scale-95',
        // Animation
        'transition-all duration-200',
        className
      )}
    >
      <Icon size={20} />
    </button>
  );
}
