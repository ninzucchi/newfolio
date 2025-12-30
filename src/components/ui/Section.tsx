import { cn } from '../../lib/utils';

export function Section({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement> & { children: React.ReactNode }) {
  return (
    <section className={cn('flex flex-col gap-6', className)} {...props}>
      {children}
    </section>
  );
}
