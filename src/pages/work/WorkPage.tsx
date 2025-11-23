import { motion } from 'framer-motion';
import { Link } from '@tanstack/react-router';
import css from './WorkPage.module.css';

const projects = [
  { slug: 'substack', title: 'Substack', description: 'Project description coming soon.' },
  { slug: 'facebook', title: 'Facebook', description: 'Project description coming soon.' },
  { slug: 'ideo', title: 'IDEO', description: 'Project description coming soon.' },
];

export function WorkPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={css.page}
    >
      <h1 className={css.title}>Work</h1>
      <div className={css.projects}>
        {projects.map((project) => (
          <Link
            key={project.slug}
            to="/work/$slug"
            params={{ slug: project.slug }}
            className={css.projectCard}
          >
            <h2 className={css.projectTitle}>{project.title}</h2>
            <p className={css.projectDescription}>{project.description}</p>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

