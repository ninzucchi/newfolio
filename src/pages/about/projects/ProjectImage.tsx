import { BaseImage } from '@/components/ui/BaseImage';
import { Lightbox } from '@/components/ui/lightbox/Lightbox';
import { LightboxImage } from '@/components/ui/lightbox/LightboxImage';
import { useImageLoaded } from '@/hooks/useImageLoaded';
import { useState } from 'react';

export function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoaded, onLoad } = useImageLoaded();

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`bg-secondary w-full cursor-zoom-in rounded-lg ${!isLoaded ? 'aspect-4/3 animate-pulse' : ''}`}
      >
        <BaseImage
          src={src}
          alt={alt}
          className="outline-border-default h-full rounded-lg"
          isLoaded={isLoaded}
          onLoad={onLoad}
        />
      </button>

      <Lightbox isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <LightboxImage src={src} alt={alt} />
      </Lightbox>
    </>
  );
}
