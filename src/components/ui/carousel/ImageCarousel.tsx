import { CarouselImage } from '@/components/ui/carousel/CarouselImage';
import { CarouselNavButton } from '@/components/ui/carousel/CarouselNavButton';
import { useCarouselScroll } from '@/components/ui/carousel/useCarouselScroll';
import { Lightbox } from '@/components/ui/lightbox/Lightbox';
import { LightboxImage } from '@/components/ui/lightbox/LightboxImage';
import { useDragScroll } from '@/hooks/useDragScroll';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export function ImageCarousel({
  images,
  alt,
  className,
}: {
  images: string[];
  alt: string;
  className?: string;
}) {
  const { scrollRef, canScrollLeft, canScrollRight, scrollToDirection } = useCarouselScroll();
  const dragScroll = useDragScroll(scrollRef);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const currentImage = openIndex !== null ? images[openIndex] : null;
  const hasPrev = openIndex !== null && openIndex > 0;
  const hasNext = openIndex !== null && openIndex < images.length - 1;

  const handleLightboxPrev = () => {
    if (openIndex === null || !hasPrev) return;
    setOpenIndex(openIndex - 1);
  };

  const handleLightboxNext = () => {
    if (openIndex === null || !hasNext) return;
    setOpenIndex(openIndex + 1);
  };

  return (
    <>
      <div className={cn('relative -mx-5 sm:mx-0', className)}>
        <CarouselNavButton
          direction="left"
          visible={canScrollLeft}
          onClick={() => scrollToDirection('left')}
        />
        <CarouselNavButton
          direction="right"
          visible={canScrollRight}
          onClick={() => scrollToDirection('right')}
        />
        <div className="overflow-hidden">
          <div
            ref={scrollRef}
            {...dragScroll.props}
            className={cn(
              'flex gap-3 overflow-x-auto select-none px-5 sm:px-0 no-scrollbar',
              dragScroll.isDragging ? 'cursor-grabbing' : 'cursor-grab'
            )}
          >
            {images.map((src, index) => (
              <CarouselImage
                key={index}
                src={src}
                alt={`${alt} - Image ${index + 1}`}
                onClick={() => setOpenIndex(index)}
                isDragging={dragScroll.isDragging}
              />
            ))}
          </div>
        </div>
      </div>

      <Lightbox
        isOpen={openIndex !== null}
        onClose={() => setOpenIndex(null)}
        onPrev={hasPrev ? handleLightboxPrev : undefined}
        onNext={hasNext ? handleLightboxNext : undefined}
      >
        {currentImage && <LightboxImage src={currentImage} alt={alt} />}
      </Lightbox>
    </>
  );
}
