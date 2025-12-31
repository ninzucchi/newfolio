import { cn } from '../../lib/utils';

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
      <button type="button" onClick={onClick} className="h-full w-full cursor-pointer">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          draggable={false}
          className={cn(
            'h-auto w-full cursor-zoom-in rounded-none object-cover select-none',
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
      className="bg-bg-secondary aspect-3/2 w-full overflow-hidden"
      style={{ outlineColor: 'var(--color-border)' }}
    >
      {children}
    </div>
  );
}
