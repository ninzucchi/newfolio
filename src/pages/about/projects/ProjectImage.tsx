import { BaseImage } from '@/components/ui/BaseImage';
import { Lightbox } from '@/components/ui/lightbox/Lightbox';
import { LightboxImage } from '@/components/ui/lightbox/LightboxImage';
import { useImageLoaded } from '@/hooks/useImageLoaded';
import { useProjectImageState } from '@/hooks/useProjectImageState';

export function ProjectImage({
  projectIndex,
  imageIndex,
  src,
  alt,
}: {
  projectIndex: number;
  imageIndex: number;
  src: string;
  alt: string;
}) {
  const [openIndex, setOpenIndex] = useProjectImageState(projectIndex, 1);
  const isOpen = openIndex === imageIndex;
  const { isLoaded, onLoad } = useImageLoaded();

  return (
    <>
      <button
        type="button"
        onClick={() => setOpenIndex(imageIndex)}
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

      <Lightbox isOpen={isOpen} onClose={() => setOpenIndex(null)}>
        <LightboxImage src={src} alt={alt} />
      </Lightbox>
    </>
  );
}
