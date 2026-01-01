import { PhotosGrid } from './photos/PhotosGrid';
import { PhotoThumbnail } from './photos/PhotoThumbnail';

export function PhotosSection({
  images,
  setOpenIndex,
}: {
  images: { thumbnail: string; full: string; alt: string }[];
  setOpenIndex: (index: number) => void;
}) {
  return (
    <PhotosGrid>
      {images.map((image, index) => (
        <PhotoThumbnail
          key={index}
          src={image.thumbnail}
          alt={image.alt}
          onClick={() => setOpenIndex(index)}
        />
      ))}
    </PhotosGrid>
  );
}
