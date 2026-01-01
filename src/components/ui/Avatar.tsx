import * as AvatarPrimitive from '@radix-ui/react-avatar';
import * as React from 'react';

import { cn } from '@/lib/utils';

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      'bg-secondary outline-border-default relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
      className
    )}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <AvatarPrimitive.Image
      ref={ref}
      className={cn(
        'aspect-square h-full w-full transition-opacity duration-200',
        isLoaded ? 'opacity-100' : 'opacity-0',
        className
      )}
      loading="eager"
      onLoadingStatusChange={(status) => {
        if (status === 'loaded') {
          setIsLoaded(true);
        }
      }}
      {...props}
    />
  );
});
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

export { Avatar, AvatarImage };
