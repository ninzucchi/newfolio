import { BioSection } from '@/pages/about/bio/BioSection';
import { EducationSection } from '@/pages/about/education/EducationSection';
import { ExperienceSection } from '@/pages/about/experience/ExperienceSection';
import { ProjectsSection } from '@/pages/about/projects/ProjectsSection';
import { motion } from 'framer-motion';

export function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex w-full flex-col gap-16 pt-20 pb-20"
    >
      <BioSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
    </motion.div>
  );
}
