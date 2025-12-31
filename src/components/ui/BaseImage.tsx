import { cn } from '../../lib/utils';

export function BaseImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      draggable={false}
      className={cn(
        'h-auto w-full rounded-lg object-cover outline outline-border outline-offset-0 select-none',
        className
      )}
    />
  );
}

