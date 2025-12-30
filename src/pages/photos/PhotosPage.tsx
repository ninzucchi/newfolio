import { useState } from 'react';
import { motion } from 'framer-motion';
import { PhotosGridContainer } from '../../components/ui/Grid';
import { Lightbox } from '../../components/ui/lightbox/Lightbox';
import { Photo } from './Photo';

const placeholderColors = [
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
];

export function PhotosPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Generate array of placeholder images for the grid
  const placeholderImages = Array.from({ length: 32 }, (_, i) => {
    const color = placeholderColors[i % placeholderColors.length];
    return {
      src: `/placeholder-${color}.svg`,
      alt: `Photo ${i + 1}`,
    };
  });

  const currentImage = openIndex !== null ? placeholderImages[openIndex] : null;

  const hasPrev = openIndex !== null && openIndex > 0;
  const hasNext = openIndex !== null && openIndex < placeholderImages.length - 1;

  const handlePrev = () => {
    if (openIndex === null || !hasPrev) return;
    setOpenIndex(openIndex - 1);
  };

  const handleNext = () => {
    if (openIndex === null || !hasNext) return;
    setOpenIndex(openIndex + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <PhotosGridContainer>
        {placeholderImages.map((image, index) => (
          <Photo key={index} src={image.src} alt={image.alt} onClick={() => setOpenIndex(index)} />
        ))}
      </PhotosGridContainer>

      <Lightbox
        isOpen={openIndex !== null}
        onClose={() => setOpenIndex(null)}
        onPrev={hasPrev ? handlePrev : undefined}
        onNext={hasNext ? handleNext : undefined}
      >
        {currentImage && (
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        )}
      </Lightbox>
    </motion.div>
  );
}
