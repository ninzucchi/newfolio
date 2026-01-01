import { motion } from 'framer-motion';
import { BioSection } from '@/pages/about/sections/BioSection';
import { ExperienceSection } from '@/pages/about/sections/ExperienceSection';
import { EducationSection } from '@/pages/about/sections/EducationSection';
import { ProjectsSection } from '@/pages/about/sections/ProjectsSection';

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
