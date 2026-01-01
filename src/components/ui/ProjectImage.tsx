import { useState } from 'react';
import { Lightbox } from '@/components/ui/lightbox/Lightbox';
import { LightboxImage } from '@/components/ui/lightbox/LightboxImage';
import { BaseImage } from '@/components/ui/BaseImage';

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
