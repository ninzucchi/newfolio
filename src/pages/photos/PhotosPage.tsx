import React from 'react';
import { motion } from 'framer-motion';
import { Text } from '../../components/ui/Text';

export function PhotosPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <Text.H1>Photos</Text.H1>
      <Text.B3>Under construction</Text.B3>
    </motion.div>
  );
}
