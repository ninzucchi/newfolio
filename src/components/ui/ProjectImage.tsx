import { useState } from 'react';
import { Lightbox } from './lightbox/Lightbox';
import { LightboxImage } from './lightbox/LightboxImage';
import { BaseImage } from './BaseImage';

export function ProjectImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)} className="w-full cursor-zoom-in">
        <BaseImage src={src} alt={alt} className={className} />
      </button>

      <Lightbox isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <LightboxImage src={src} alt={alt} />
      </Lightbox>
    </>
  );
}
