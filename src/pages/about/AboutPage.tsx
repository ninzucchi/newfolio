import { Page } from '@/components/ui/Page';
import { ActivitySection } from '@/pages/about/activity/ActivitySection';
import { BioSection } from '@/pages/about/bio/BioSection';
import { EducationSection } from '@/pages/about/education/EducationSection';
import { ExperienceSection } from '@/pages/about/experience/ExperienceSection';
import { ProjectsSection } from '@/pages/about/projects/ProjectsSection';
import { SkillsSection } from '@/pages/about/skills/SkillsSection';

export function AboutPage() {
  return (
    <Page>
      <BioSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <ActivitySection />
      <SkillsSection />
    </Page>
  );
}
