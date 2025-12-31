import { useState } from 'react';
import { motion } from 'framer-motion';
import { GridColumnMain, PhotosGridContainer } from '../../components/ui/Grid';
import { Lightbox } from '../../components/ui/lightbox/Lightbox';
import { LightboxImage } from '@/components/ui/lightbox/LightboxImage';
import { PhotoThumbnail } from '@/pages/photos/PhotoThumbnail';
import { Text } from '@/components/ui/Text';
import { GearSection } from '@/pages/about/GearSection';
import { Avatar } from '@/components/ui/avatar';
import { CameraIcon } from 'lucide-react';

const photoFilenames: string[] = [
  'photo-01.jpg',
  'photo-02.jpg',
  'photo-03.jpg',
  'photo-04.jpg',
  'photo-05.jpg',
  'photo-06.jpg',
  'photo-07.jpg',
  'photo-08.jpg',
  'photo-09.jpg',
  'photo-10.jpg',
  'photo-11.jpg',
  'photo-12.jpg',
  'photo-13.jpg',
  'photo-14.jpg',
];

export function PhotosPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const images = photoFilenames.map((filename, i) => ({
    src: `/photos/${filename}`,
    alt: `Photo ${i + 1}`,
  }));

  const currentImage = openIndex !== null ? images[openIndex] : null;

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
      className="flex w-full flex-col gap-16 pt-20 pb-20"
    >
      <div className="mx-auto flex w-full max-w-[600px] flex-col gap-16">
        <div className="flex items-center gap-4">
          <Avatar className="bg-bg-secondary flex h-11 w-11 items-center justify-center">
            <CameraIcon size={20} />
          </Avatar>
          <GridColumnMain>
            <Text.B1>Photography</Text.B1>
            <Text.B4 className="text-fg-secondary">
              Photos from around the world courtesy Fuji XT-3
            </Text.B4>
          </GridColumnMain>
        </div>
        <GearSection />
      </div>
      <PhotosGridContainer>
        {images.map((image, index) => (
          <PhotoThumbnail
            key={index}
            src={image.src}
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
        {currentImage && <LightboxImage src={currentImage.src} alt={currentImage.alt} />}
      </Lightbox>
    </motion.div>
  );
}
