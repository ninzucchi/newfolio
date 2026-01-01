import { cn } from '@/lib/utils';

export function PhotosGrid({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('grid w-full gap-2', className)}
      style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(480px, 1fr))' }}
      {...props}
    />
  );
}
