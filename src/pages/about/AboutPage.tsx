import { motion } from 'framer-motion';
import { BioSection } from './BioSection';
import { ExperienceSection } from './ExperienceSection';
import { EducationSection } from './EducationSection';

export function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex w-full flex-col gap-16"
    >
      <BioSection />
      <ExperienceSection />
      <EducationSection />
    </motion.div>
  );
}
