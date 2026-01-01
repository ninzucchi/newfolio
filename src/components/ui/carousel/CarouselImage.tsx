import { BaseImage } from '@/components/ui/BaseImage';
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
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn('w-[80%] shrink-0 rounded-lg', isDragging ? 'cursor-grabbing' : 'cursor-grab')}
    >
      <BaseImage src={src} alt={alt} className="outline-border-default rounded-lg" />
    </button>
  );
}
