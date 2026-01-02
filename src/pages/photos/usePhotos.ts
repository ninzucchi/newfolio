import { getCloudinaryUrl } from '@/lib/cloudinary';
import { photoIds } from '@/lib/photo-ids';
import { useNavigate, useSearch } from '@tanstack/react-router';
import { useCallback } from 'react';

export function usePhotos() {
  const { p } = useSearch({ from: '/photos' });
  const navigate = useNavigate({ from: '/photos' });

  const openIndex = p !== undefined && p >= 0 && p < photoIds.length ? p : null;

  const setOpenIndex = useCallback(
    (index: number | null) => {
      navigate({
        search: index === null ? {} : { p: index },
        replace: true,
      });
    },
    [navigate]
  );

  const images = photoIds.map((id, i) => ({
    thumbnail: getCloudinaryUrl(id, { width: 1200, aspectRatio: '3:2', crop: 'fill' }),
    full: getCloudinaryUrl(id, { width: 2400 }),
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
