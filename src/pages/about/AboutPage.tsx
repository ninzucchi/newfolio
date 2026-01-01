import { Page } from '@/components/ui/Page';
import { BioSection } from '@/pages/about/bio/BioSection';
import { EducationSection } from '@/pages/about/education/EducationSection';
import { ExperienceSection } from '@/pages/about/experience/ExperienceSection';
import { ProjectsSection } from '@/pages/about/projects/ProjectsSection';

export function AboutPage() {
  return (
    <Page>
      <BioSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
    </Page>
  );
}
