import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

function Button({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> & {
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(
        // Layout
        'inline-flex shrink-0 items-center justify-center',
        // Size
        'h-9 gap-2 px-4 py-2',
        // Typography
        'text-sm font-medium whitespace-nowrap',
        // Colors
        'bg-bg-secondary text-fg-primary hover:bg-bg-tertiary',
        // Border
        'border-border rounded-md border',
        // Focus states
        'focus-visible:ring-ring outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        // Interactive states
        'cursor-pointer transition-all duration-250 ease-in-out active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50',
        // SVG children
        '[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
        className
      )}
      {...props}
    />
  );
}

export { Button };
