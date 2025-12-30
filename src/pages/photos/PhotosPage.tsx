import { motion } from 'framer-motion';
import { PhotosGridContainer } from '../../components/ui/Grid';
import { Photo } from './Photo';

export function PhotosPage() {
  // Generate array of placeholder images for the grid
  const placeholderImages = Array.from({ length: 32 }, (_, i) => ({
    src: '/placeholder.svg',
    alt: `Photo ${i + 1}`,
  }));

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
          <Photo key={index} src={image.src} alt={image.alt} />
        ))}
      </PhotosGridContainer>
    </motion.div>
  );
}
