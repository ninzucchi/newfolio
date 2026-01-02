import { Section } from '@/components/ui/section/Section';
import { SectionHeader } from '@/components/ui/section/SectionHeader';
import { projects } from '@/lib/data';
import { ProjectItem } from '@/pages/about/projects/ProjectItem';
import { ProjectsGrid } from '@/pages/about/projects/ProjectsGrid';
import { useEffect } from 'react';

export function ProjectsSection() {
  // Handle hash-based scrolling
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove #
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    // Handle initial hash on mount
    handleHashChange();

    // Handle hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <Section>
      <SectionHeader>Projects</SectionHeader>
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
          />
        ))}
      </ProjectsGrid>
    </Section>
  );
}
