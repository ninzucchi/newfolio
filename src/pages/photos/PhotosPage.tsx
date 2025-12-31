import { useState } from 'react';
import { motion } from 'framer-motion';
import { GridColumnMain, PhotosGridContainer } from '../../components/ui/Grid';
import { Lightbox } from '../../components/ui/lightbox/Lightbox';
import { LightboxImage } from '@/components/ui/lightbox/LightboxImage';
import { PhotoThumbnail } from '@/pages/photos/PhotoThumbnail';
import { Text } from '@/components/ui/Text';
import { GearSection } from '@/pages/about/GearSection';
import { getCloudinaryUrl } from '@/lib/cloudinary';
import { photoIds } from '@/lib/photo-ids';

export function PhotosPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const images = photoIds.map((id, i) => ({
    thumbnail: getCloudinaryUrl(id, { width: 1200, aspectRatio: '3:2', quality: 'auto' }),
    full: getCloudinaryUrl(id, { width: 2400, quality: 'auto' }),
    alt: `Photo ${i + 1}`,
  }));

  const currentImage = openIndex !== null ? images[openIndex] : null;
  const currentFullSrc = currentImage?.full ?? null;

  const hasPrev = openIndex !== null && openIndex > 0;
  const hasNext = openIndex !== null && openIndex < images.length - 1;

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
      className="flex flex-col gap-16 pt-20 pb-20 w-full"
    >
      <div className="mx-auto flex w-full max-w-[600px] flex-col gap-16">
        <div className="flex gap-4 justify-center">
          <GridColumnMain className="items-center">
            <Text.B1>Photos</Text.B1>
            <Text.B4 className="text-fg-secondary">
              {`${images.length - 1} shots captured on my Fuji XT-5`}
            </Text.B4>
          </GridColumnMain>
        </div>
        <GearSection />
      </div>
      <PhotosGridContainer>
        {images.map((image, index) => (
          <PhotoThumbnail
            key={index}
            src={image.thumbnail}
            alt={image.alt}
            onClick={() => setOpenIndex(index)}
          />
        ))}
      </PhotosGridContainer>

      <Lightbox
        isOpen={openIndex !== null}
        onClose={() => setOpenIndex(null)}
        onPrev={hasPrev ? handlePrev : undefined}
        onNext={hasNext ? handleNext : undefined}
      >
        {currentImage && currentFullSrc && (
          <LightboxImage src={currentFullSrc} alt={currentImage.alt} />
        )}
      </Lightbox>
    </motion.div>
  );
}
