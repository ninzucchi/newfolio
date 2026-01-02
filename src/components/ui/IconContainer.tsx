import { cn } from '@/lib/utils';

export function IconContainer({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        'bg-secondary border-border flex h-11 w-11 items-center justify-center rounded-md border',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
