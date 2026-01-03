import { SectionCollapsible } from '@/components/ui/section/SectionCollapsible';
import { projects } from '@/lib/data';
import { ProjectItem } from '@/pages/about/projects/ProjectItem';
import { ProjectsGrid } from '@/pages/about/projects/ProjectsGrid';

export function ProjectsSection({ defaultOpen }: { defaultOpen?: boolean }) {
  return (
    <SectionCollapsible title="Projects" defaultOpen={defaultOpen}>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            projectIndex={index}
            slug={project.slug}
            title={project.title}
            description={project.description}
            year={project.year}
            images={project.images}
            url={project.url}
          />
        ))}
      </ProjectsGrid>
    </SectionCollapsible>
  );
}
