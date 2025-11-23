import { motion } from 'framer-motion';
import css from './AboutPage.module.css';

export function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={css.page}
    >
      <h1 className={css.title}>About</h1>
      <div className={css.content}>
        <p>This is the about page. Content coming soon.</p>
      </div>
    </motion.div>
  );
}
