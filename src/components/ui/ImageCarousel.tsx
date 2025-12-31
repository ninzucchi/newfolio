import { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import { useDragScroll } from '../../hooks/useDragScroll';
import { Lightbox } from './lightbox/Lightbox';
import { LightboxImage } from './lightbox/LightboxImage';
import { MediaIconButton } from './MediaIconButton';

export function ImageCarousel({
  images,
  alt,
  className,
}: {
  images: string[];
  alt: string;
  className?: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const dragScroll = useDragScroll(scrollRef);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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

  const updateScrollState = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setCanScrollLeft(scrollLeft > 1);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    updateScrollState();
    container.addEventListener('scroll', updateScrollState);
    window.addEventListener('resize', updateScrollState);

    return () => {
      container.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  const scrollToDirection = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;

    const children = Array.from(container.children) as HTMLElement[];
    const containerRect = container.getBoundingClientRect();
    const scrollLeft = container.scrollLeft;

    if (direction === 'right') {
      // Find the first item that's not fully visible on the right
      for (const child of children) {
        const childRight = child.offsetLeft + child.offsetWidth - scrollLeft;
        if (childRight > containerRect.width + 1) {
          container.scrollTo({ left: child.offsetLeft, behavior: 'smooth' });
          break;
        }
      }
    } else {
      // Find the last item that's not fully visible on the left
      for (let i = children.length - 1; i >= 0; i--) {
        const child = children[i];
        const childLeft = child.offsetLeft - scrollLeft;
        if (childLeft < -1) {
          // Scroll so this item's right edge aligns with container's right edge
          const targetScroll = child.offsetLeft + child.offsetWidth - containerRect.width;
          container.scrollTo({ left: Math.max(0, targetScroll), behavior: 'smooth' });
          break;
        }
      }
    }
  };

  return (
    <>
      <div className={cn('relative', className)}>
        <AnimatePresence>
          {canScrollLeft && (
            <motion.div
              key="left-arrow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="absolute left-0 top-1/2 -translate-x-[calc(100%+12px)] -translate-y-1/2 z-10"
            >
              <MediaIconButton
                icon={ChevronLeft}
                aria-label="Previous images"
                onClick={() => scrollToDirection('left')}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {canScrollRight && (
            <motion.div
              key="right-arrow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 top-1/2 translate-x-[calc(100%+12px)] -translate-y-1/2 z-10"
            >
              <MediaIconButton
                icon={ChevronRight}
                aria-label="Next images"
                onClick={() => scrollToDirection('right')}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="overflow-hidden rounded-lg">
          <div
            ref={scrollRef}
            {...dragScroll.props}
            className={cn(
              'flex gap-3 overflow-x-auto scrollbar-none select-none',
              dragScroll.isDragging ? 'cursor-grabbing' : 'cursor-grab'
            )}
          >
            {images.map((src, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setOpenIndex(index)}
                className={cn(
                  'w-[80%] flex-shrink-0',
                  dragScroll.isDragging ? 'cursor-grabbing' : 'cursor-grab'
                )}
              >
                <img
                  src={src}
                  alt={`${alt} - Image ${index + 1}`}
                  draggable={false}
                  className="h-auto w-full rounded-lg object-cover outline outline-border outline-offset-0 select-none"
                />
              </button>
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

