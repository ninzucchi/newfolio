import { motion } from 'framer-motion';
import { useParams } from '@tanstack/react-router';
import { Text } from '../../components/ui/Text';

export function WorkProjectPage() {
  const { slug } = useParams({ from: '/work/$slug' });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <Text.H1 className="mb-8 capitalize">{slug}</Text.H1>
      <div className="max-w-[800px]">
        <Text.P>Project detail page for {slug}. Content coming soon.</Text.P>
      </div>
    </motion.div>
  );
}

