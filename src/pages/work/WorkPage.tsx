import { motion } from 'framer-motion';
import { Link } from '@tanstack/react-router';
import { Text } from '../../components/ui/Text';

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
      className="w-full"
    >
      <Text.H1 className="mb-12">Work</Text.H1>
      <div className="grid gap-8">
        {projects.map((project) => (
          <Link
            key={project.slug}
            to="/work/$slug"
            params={{ slug: project.slug }}
            className="block p-6 border border-border rounded transition-all hover:border-foreground hover:-translate-y-0.5"
          >
            <Text.H2 className="mb-3 text-xl">{project.title}</Text.H2>
            <Text.P className="mb-0 text-muted-foreground">{project.description}</Text.P>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
