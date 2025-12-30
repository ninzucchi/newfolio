import { cn } from '../../lib/utils';

export function PhotoThumbnail({
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
        'h-auto w-full cursor-zoom-in rounded-none object-cover select-none',
        className
      )}
    />
  );
}
