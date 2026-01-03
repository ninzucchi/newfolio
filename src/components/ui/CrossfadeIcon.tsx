import { defaultDuration, defaultEasing } from '@/lib/animation';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export function CrossfadeIcon({
  visible,
  className,
  children,
}: {
  visible: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      animate={visible ? iconAnimation.visible : iconAnimation.hidden}
      transition={iconAnimation.transition}
      className={cn('absolute inset-0 flex items-center justify-center', className)}
    >
      {children}
    </motion.div>
  );
}

const iconAnimation = {
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
  },
  hidden: {
    opacity: 0,
    scale: 0.8,
    filter: 'blur(4px)',
  },
  transition: {
    duration: defaultDuration,
    ease: defaultEasing,
  },
};
