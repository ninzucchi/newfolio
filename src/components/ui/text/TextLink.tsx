import { cn } from '@/lib/utils';

export function TextLink({
  newTab = false,
  className,
  target,
  rel,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { newTab?: boolean }) {
  return (
    <a
      className={cn(
        'decoration-fg-tertiary hover:decoration-fg-primary underline decoration-1 underline-offset-[0.2em] transition-colors duration-200',
        className
      )}
      target={newTab ? '_blank' : target}
      rel={newTab ? 'noopener noreferrer' : rel}
      {...props}
    />
  );
}
