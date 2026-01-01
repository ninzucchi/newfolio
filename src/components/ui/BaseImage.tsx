import { cn } from '@/lib/utils';

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
      className={cn('h-auto w-full object-cover select-none', className)}
      loading="lazy"
    />
  );
}
