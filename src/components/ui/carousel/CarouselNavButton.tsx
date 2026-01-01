import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MediaIconButton } from '@/components/ui/MediaIconButton';

export function CarouselNavButton({
  direction,
  visible,
  onClick,
}: {
  direction: 'left' | 'right';
  visible: boolean;
  onClick: () => void;
}) {
  const isLeft = direction === 'left';

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key={`${direction}-arrow`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className={
            isLeft
              ? 'absolute top-1/2 left-0 -translate-x-[calc(100%+12px)] -translate-y-1/2'
              : 'absolute top-1/2 right-0 translate-x-[calc(100%+12px)] -translate-y-1/2'
          }
        >
          <MediaIconButton
            icon={isLeft ? ChevronLeft : ChevronRight}
            aria-label={isLeft ? 'Previous images' : 'Next images'}
            onClick={onClick}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
