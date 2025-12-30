import { useState } from 'react';
import { cn } from '../../lib/utils';
import { Lightbox } from './lightbox/Lightbox';

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
      <button type="button" onClick={() => setIsOpen(true)} className="w-full cursor-pointer">
        <img
          src={src}
          alt={alt}
          className={cn(
            'outline-border h-auto w-full rounded-lg object-cover outline outline-offset-0 select-none',
            className
          )}
        />
      </button>

      <Lightbox isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <img src={src} alt={alt} className="max-h-[90vh] max-w-[90vw] object-contain" />
      </Lightbox>
    </>
  );
}
