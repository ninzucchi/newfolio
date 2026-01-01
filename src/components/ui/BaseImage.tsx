import { cn } from '@/lib/utils';

export function BaseImage({
  src,
  alt,
  className,
  isLoaded,
  onLoad,
}: {
  src: string;
  alt: string;
  className?: string;
  isLoaded?: boolean;
  onLoad?: () => void;
}) {
  return (
    <img
      src={src}
      alt={alt}
      draggable={false}
      onLoad={onLoad}
      className={cn(
        'h-auto w-full object-cover transition-opacity duration-200 select-none',
        isLoaded === undefined ? 'opacity-100' : isLoaded ? 'opacity-100' : 'opacity-0',
        className
      )}
      loading="lazy"
    />
  );
}
