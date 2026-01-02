import { Section } from '@/components/ui/section/Section';
import { SectionHeader } from '@/components/ui/section/SectionHeader';
import { projects } from '@/lib/data';
import { ProjectItem } from '@/pages/about/projects/ProjectItem';
import { ProjectsGrid } from '@/pages/about/projects/ProjectsGrid';

export function ProjectsSection() {
  return (
    <Section>
      <SectionHeader>Projects</SectionHeader>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            projectIndex={index}
            title={project.title}
            description={project.description}
            year={project.year}
            images={project.images}
          />
        ))}
      </ProjectsGrid>
    </Section>
  );
}
