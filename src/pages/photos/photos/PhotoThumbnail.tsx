import { BaseImage } from '@/components/ui/BaseImage';

export function PhotoThumbnail({
  src,
  alt,
  onClick,
}: {
  src: string;
  alt: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-secondary aspect-3/2 w-full overflow-hidden transition-opacity duration-200 hover:opacity-90"
    >
      <BaseImage src={src} alt={alt} className="cursor-zoom-in" />
    </button>
  );
}
