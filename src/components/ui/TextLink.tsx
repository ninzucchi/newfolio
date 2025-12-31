import { cn } from '../../lib/utils';

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
        'decoration-fg-tertiary condary decoration-1 underline-offset-[0.2em]',
        className
      )}
      target={newTab ? '_blank' : target}
      rel={newTab ? 'noopener noreferrer' : rel}
      {...props}
    />
  );
}
