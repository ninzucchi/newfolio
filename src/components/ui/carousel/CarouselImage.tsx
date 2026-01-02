import { BaseImage } from '@/components/ui/BaseImage';
import { useImageLoaded } from '@/hooks/useImageLoaded';
import { cn } from '@/lib/utils';

export function CarouselImage({
  src,
  alt,
  onClick,
  isDragging,
}: {
  src: string;
  alt: string;
  onClick: () => void;
  isDragging: boolean;
}) {
  const { isLoaded, onLoad } = useImageLoaded();

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'bg-secondary w-[95%] shrink-0 overflow-hidden rounded-md',
        isDragging ? 'cursor-grabbing' : 'cursor-grab',
        !isLoaded && 'aspect-4/3 animate-pulse'
      )}
    >
      <BaseImage
        src={src}
        alt={alt}
        className="outline-border-default h-full rounded-md"
        isLoaded={isLoaded}
        onLoad={onLoad}
      />
    </button>
  );
}
