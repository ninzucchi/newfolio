import { cn } from '@/lib/utils';

export function PhotoThumbnail({
  src,
  alt,
  className,
  onClick,
}: {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <PhotoContainer>
      <button type="button" onClick={onClick} className="w-full h-full cursor-pointer">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          draggable={false}
          className={cn(
            'object-cover w-full h-auto rounded-none select-none cursor-zoom-in',
            className
          )}
        />
      </button>
    </PhotoContainer>
  );
}

function PhotoContainer({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="overflow-hidden w-full transition-opacity duration-200 bg-secondary aspect-3/2 hover:opacity-90"
      style={{ outlineColor: 'var(--color-border)' }}
    >
      {children}
    </div>
  );
}
