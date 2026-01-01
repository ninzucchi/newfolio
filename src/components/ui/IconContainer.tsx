import { cn } from '@/lib/utils';

export function IconContainer({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        'flex justify-center items-center w-11 h-11 rounded-lg border bg-secondary border-border',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
