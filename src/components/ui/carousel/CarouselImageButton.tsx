import { cn } from '../../../lib/utils';
import { BaseImage } from '../BaseImage';

export function CarouselImageButton({
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
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn('w-[80%] shrink-0', isDragging ? 'cursor-grabbing' : 'cursor-grab')}
    >
      <BaseImage src={src} alt={alt} />
    </button>
  );
}
