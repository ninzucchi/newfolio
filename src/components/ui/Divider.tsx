import { cn } from '@/lib/utils';

export function Divider({ className, ...props }: React.HTMLAttributes<HTMLHRElement>) {
  return (
    <hr
      className={cn(
        'bg-border h-px w-full flex-1 border-0 transition-colors duration-200',
        className
      )}
      {...props}
    />
  );
}
