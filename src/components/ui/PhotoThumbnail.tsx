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
      className={cn('border-border h-auto w-full rounded-none border object-cover', className)}
    />
  );
}

