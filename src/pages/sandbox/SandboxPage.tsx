import { motion } from 'framer-motion';
import css from './Sandbox.module.css';

export function SandboxPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={css.page}
    >
      <h1 className={css.title}>Sandbox</h1>
      <div className={css.content}>
        <p>This is the sandbox page for JavaScript experiments. Content coming soon.</p>
      </div>
    </motion.div>
  );
}
