import { defaultEasing, longDuration } from '@/lib/animation';
import { motion } from 'framer-motion';

export function Page({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: longDuration, ease: defaultEasing }}
      className="flex w-full flex-col gap-16 pt-4 sm:pt-12"
    >
      {children}
    </motion.div>
  );
}
