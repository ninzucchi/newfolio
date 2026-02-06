import { cn } from '@/lib/utils';

export function PhotosGrid({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        '-mx-3 grid grid-cols-2 gap-1.5 sm:grid-cols-[repeat(auto-fill,minmax(280px,1fr))]',
        className
      )}
      {...props}
    />
  );
}
