import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

export function MediaIconButton({
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
        'flex justify-center items-center w-10 h-10 rounded-full',
        'backdrop-blur-sm bg-black/50',
        'text-fg-secondary hover:text-fg-primary',
        'hover:bg-black/70 active:scale-95',
        'transition-all duration-200',
        'cursor-pointer',
        className
      )}
    >
      <Icon size={20} />
    </button>
  );
}
