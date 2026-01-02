import { Spinner } from '@/components/ui/Spinner';
import { useImageLoaded } from '@/hooks/useImageLoaded';
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
  const { isLoaded, onLoad } = useImageLoaded();

  return (
    <div className="relative flex items-center justify-center">
      {!isLoaded && (
        <div className="absolute">
          <Spinner />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={onLoad}
        className={cn(
          'max-h-dvh max-w-dvw object-contain transition-opacity duration-200',
          isLoaded ? 'opacity-100' : 'opacity-0',
          className
        )}
      />
    </div>
  );
}
