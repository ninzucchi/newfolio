import { cn } from '@/lib/utils';

export function GridCellFit({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('w-fit', className)} {...props} />;
}

export function GridCell({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex flex-col items-start gap-0.5', className)} {...props} />;
}

export function GridCellRight({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('items-end text-right', className)} {...props} />;
}
