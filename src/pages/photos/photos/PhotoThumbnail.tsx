import { BaseImage } from '@/components/ui/BaseImage';
import { useImageLoaded } from '@/hooks/useImageLoaded';

export function PhotoThumbnail({
  src,
  alt,
  onClick,
}: {
  src: string;
  alt: string;
  onClick?: () => void;
}) {
  const { isLoaded, onLoad } = useImageLoaded();

  return (
    <button
      type="button"
      onClick={onClick}
      className={`bg-secondary aspect-3/2 w-full overflow-hidden transition-opacity duration-200 hover:opacity-90 ${!isLoaded ? 'animate-pulse' : ''}`}
    >
      <BaseImage
        src={src}
        alt={alt}
        className="cursor-zoom-in"
        isLoaded={isLoaded}
        onLoad={onLoad}
      />
    </button>
  );
}
