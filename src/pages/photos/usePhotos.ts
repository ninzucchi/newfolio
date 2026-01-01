import { getCloudinaryUrl } from '@/lib/cloudinary';
import { photoIds } from '@/lib/photo-ids';
import { useState } from 'react';

export function usePhotos() {
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

  return {
    images,
    openIndex,
    setOpenIndex,
    currentImage,
    currentFullSrc,
    hasPrev,
    hasNext,
    handlePrev,
    handleNext,
  };
}
