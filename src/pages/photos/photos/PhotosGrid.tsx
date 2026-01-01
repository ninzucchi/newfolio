import { cn } from '@/lib/utils';

export function PhotosGrid({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        '-mx-3 grid grid-cols-1 gap-2 sm:grid-cols-[repeat(auto-fill,minmax(480px,1fr))]',
        className
      )}
      {...props}
    />
  );
}
