import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '../../lib/utils';

function Tabs({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn('flex flex-col gap-2', className)}
      {...props}
    />
  );
}

function TabsList({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        // Layout
        'inline-flex shrink-0 items-center justify-center',
        // Size
        'h-9 gap-2 px-1 py-1',
        // Colors
        'bg-bg-secondary',
        // Outline
        'rounded-md outline-1 -outline-offset-1',
        // Interactive states
        'transition-all duration-250 ease-in-out',
        className
      )}
      {...props}
    />
  );
}

function TabsTrigger({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        // Layout
        'inline-flex shrink-0 items-center justify-center',
        // Size
        'h-full gap-2 px-4 py-2',
        // Typography
        'text-sm font-medium whitespace-nowrap',
        // Colors
        'text-fg-secondary data-[state=active]:bg-bg-tertiary data-[state=active]:text-fg-primary',
        // Border
        'rounded-sm',
        // Focus states
        'focus-visible:ring-ring outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        // Interactive states
        'cursor-pointer transition-all duration-250 ease-in-out select-none disabled:pointer-events-none disabled:opacity-50',
        // SVG children
        '[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
        className
      )}
      {...props}
    />
  );
}

function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn('flex-1 outline-none', className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
