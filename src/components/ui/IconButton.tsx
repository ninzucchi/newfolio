import { cn } from '@/lib/utils';

export function IconButton({
  children,
  onClick,
  className,
  'aria-label': ariaLabel,
  size = 'md',
  ...props
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  'aria-label': string;
  size?: 'md' | 'sm';
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={cn(
        // Layout
        'flex items-center justify-center rounded-full',
        size === 'md' ? 'h-10 w-10' : 'h-6 w-6',
        // Colors
        'bg-primary/50 backdrop-blur-sm',
        // Typography
        'text-fg-secondary hover:text-fg-primary',
        // Interactive states
        'cursor-pointer transition-all duration-200 hover:bg-black/70 active:scale-95',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
