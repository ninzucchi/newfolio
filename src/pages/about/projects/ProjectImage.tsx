import { BaseImage } from '@/components/ui/BaseImage';
import { Lightbox } from '@/components/ui/lightbox/Lightbox';
import { LightboxImage } from '@/components/ui/lightbox/LightboxImage';
import { useState } from 'react';

export function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)} className="flex cursor-zoom-in">
        <BaseImage src={src} alt={alt} className="outline-border-default rounded-lg" />
      </button>

      <Lightbox isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <LightboxImage src={src} alt={alt} />
      </Lightbox>
    </>
  );
}
