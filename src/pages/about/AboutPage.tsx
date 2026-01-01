import { BioSection } from '@/pages/about/sections/BioSection';
import { EducationSection } from '@/pages/about/sections/EducationSection';
import { ExperienceSection } from '@/pages/about/sections/ExperienceSection';
import { ProjectsSection } from '@/pages/about/sections/ProjectsSection';
import { motion } from 'framer-motion';

export function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-16 pt-20 pb-20 w-full"
    >
      <BioSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
    </motion.div>
  );
}
