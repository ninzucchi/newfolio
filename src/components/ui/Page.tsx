import { motion } from 'framer-motion';

export function Page({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex w-full flex-col gap-16 pt-4 sm:pt-20"
    >
      {children}
    </motion.div>
  );
}
