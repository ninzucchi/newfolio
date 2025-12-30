import React from 'react';
import { cn } from '../../lib/utils';

export function GridContainerThree({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('grid grid-cols-[auto_2fr_3fr] gap-x-4 gap-y-4', className)} {...props} />
  );
}

export function GridContainerTwo({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('grid grid-cols-[2fr_3fr] gap-x-4 gap-y-4', className)} {...props} />;
}

export function GridColumnIcon({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('w-fit', className)} {...props} />;
}

export function GridColumnTitle({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex flex-col gap-1', className)} {...props} />;
}

export function GridColumnDate({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex flex-col text-right', className)} {...props} />;
}
