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
        'object-cover w-full h-auto rounded-lg select-none outline-border outline-1 -outline-offset-1',
        className
      )}
    />
  );
}
