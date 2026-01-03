import { defaultEasing, longDuration } from '@/lib/animation';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export function Page({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: longDuration, ease: defaultEasing }}
      className={cn('flex w-full flex-col gap-16 pt-4 sm:pt-12', className)}
    >
      {children}
    </motion.div>
  );
}
