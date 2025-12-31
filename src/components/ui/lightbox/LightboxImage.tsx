import { cn } from '@/lib/utils';

export function LightboxImage({
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
      className={cn('max-h-[90vh] max-w-[90vw] object-contain', className)}
    />
  );
}
