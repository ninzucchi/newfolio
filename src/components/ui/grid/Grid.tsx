import { cn } from '@/lib/utils';

export function Grid({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('grid gap-x-4 gap-y-6', className)} {...props} />;
}
