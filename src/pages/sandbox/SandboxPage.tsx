import { motion } from 'framer-motion';
import { Text } from '../../components/ui/Text';

export function SandboxPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <Text.H1 className="mb-8">Sandbox</Text.H1>
      <div className="max-w-[800px]">
        <Text.P>This is the sandbox page for JavaScript experiments. Content coming soon.</Text.P>
      </div>
    </motion.div>
  );
}
