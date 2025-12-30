import { PhotoThumbnail } from '../../components/ui/PhotoThumbnail';

function PhotoContainer({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="aspect-4/3 w-full overflow-hidden outline-1 -outline-offset-1"
      style={{ outlineColor: 'var(--color-border)' }}
    >
      {children}
    </div>
  );
}

export function Photo({ src, alt, onClick }: { src: string; alt: string; onClick: () => void }) {
  return (
    <PhotoContainer>
      <button type="button" onClick={onClick} className="h-full w-full cursor-pointer">
        <PhotoThumbnail src={src} alt={alt} className="h-full w-full" />
      </button>
    </PhotoContainer>
  );
}
