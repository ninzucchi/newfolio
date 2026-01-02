import { IconButton } from '@/components/ui/IconButton';
import { defaultDuration, defaultEasing } from '@/lib/animation';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

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
          transition={{ duration: defaultDuration, ease: defaultEasing }}
          className={
            isLeft
              ? 'absolute top-1/2 left-0 hidden -translate-x-[calc(100%+12px)] -translate-y-1/2 sm:block'
              : 'absolute top-1/2 right-0 hidden translate-x-[calc(100%+12px)] -translate-y-1/2 sm:block'
          }
        >
          <IconButton aria-label={isLeft ? 'Previous images' : 'Next images'} onClick={onClick}>
            {isLeft ? <ChevronLeftIcon size={20} /> : <ChevronRightIcon size={20} />}
          </IconButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
