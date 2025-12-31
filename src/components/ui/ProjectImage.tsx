import { useState } from 'react';
import { cn } from '../../lib/utils';
import { Lightbox } from './lightbox/Lightbox';
import { LightboxImage } from '@/components/ui/lightbox/LightboxImage';

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
        <img
          src={src}
          alt={alt}
          draggable={false}
          className={cn(
            'outline-border h-auto w-full rounded-lg object-cover outline outline-offset-0 select-none',
            className
          )}
        />
      </button>

      <Lightbox isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <LightboxImage src={src} alt={alt} />
      </Lightbox>
    </>
  );
}
