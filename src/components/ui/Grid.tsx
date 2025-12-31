import { cn } from '../../lib/utils';

export function ExperienceGridContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('grid gap-x-4 gap-y-6 grid-cols-[auto_1fr_auto]', className)} {...props} />
  );
}

export function EducationGridContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('grid gap-x-4 gap-y-6 grid-cols-[1fr_auto]', className)} {...props} />;
}

export function ProjectsGridContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('grid gap-x-4 gap-y-6 grid-cols-[1fr_auto]', className)} {...props} />;
}

export function PhotosGridContainer({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('grid gap-2 w-full', className)}
      style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(480px, 1fr))' }}
      {...props}
    />
  );
}

export function GearGridContainer({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('grid gap-x-4 gap-y-6 grid-cols-[1fr_auto]', className)} {...props} />;
}

export function GridColumnIcon({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('w-fit', className)} {...props} />;
}

export function GridColumnMain({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex flex-col items-start gap-0.5', className)} {...props} />;
}

export function GridColumnDate({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex flex-col items-end text-right', className)} {...props} />;
}

export function GridColumnCategory({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex flex-col items-end text-right', className)} {...props} />;
}
