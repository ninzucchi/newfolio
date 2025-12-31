import { Section } from '../../components/ui/Section';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { ProjectsGridContainer } from '../../components/ui/Grid';
import { projects } from '../../lib/data';
import { ProjectItem } from './ProjectItem';

export function ProjectsSection() {
  return (
    <Section>
      <SectionHeader>Projects</SectionHeader>
      <ProjectsGridContainer>
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            title={project.title}
            description={project.description}
            year={project.year}
            images={project.images}
          />
        ))}
      </ProjectsGridContainer>
    </Section>
  );
}
