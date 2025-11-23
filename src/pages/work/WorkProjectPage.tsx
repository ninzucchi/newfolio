import { motion } from 'framer-motion';
import { useParams } from '@tanstack/react-router';
import css from './WorkProjectPage.module.css';

export function WorkProjectPage() {
  const { slug } = useParams({ from: '/work/$slug' });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={css.page}
    >
      <h1 className={css.title}>{slug}</h1>
      <div className={css.content}>
        <p>Project detail page for {slug}. Content coming soon.</p>
      </div>
    </motion.div>
  );
}

