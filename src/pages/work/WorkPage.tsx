import { Page } from '@/components/ui/Page';
import { ActivitySection } from '@/pages/work/activity/ActivitySection';
import { BioSection } from '@/pages/work/bio/BioSection';
import { EducationSection } from '@/pages/work/education/EducationSection';
import { ExperienceSection } from '@/pages/work/experience/ExperienceSection';
import { ProjectsSection } from '@/pages/work/projects/ProjectsSection';
import { SkillsSection } from '@/pages/work/skills/SkillsSection';

export function WorkPage() {
  return (
    <Page className="gap-8">
      <BioSection />
      <ExperienceSection />
      <EducationSection defaultOpen={false} />
      <ActivitySection defaultOpen={false} />
      <SkillsSection defaultOpen={false} />
      <ProjectsSection />
    </Page>
  );
}
