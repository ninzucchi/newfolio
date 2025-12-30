import { useState } from 'react';
import { PhotoThumbnail } from '../../components/ui/PhotoThumbnail';
import { Lightbox } from '../../components/ui/lightbox/Lightbox';

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

export function Photo({ src, alt }: { src: string; alt: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <PhotoContainer>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="h-full w-full cursor-pointer"
        >
          <PhotoThumbnail src={src} alt={alt} className="h-full w-full" />
        </button>
      </PhotoContainer>

      <Lightbox isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <img src={src} alt={alt} className="max-h-[90vh] max-w-[90vw] object-contain" />
      </Lightbox>
    </>
  );
}
