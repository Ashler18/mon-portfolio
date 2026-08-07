import { useState, type RefObject } from 'react';
import { Palette } from 'lucide-react';
import { PROJECT_FILTERS } from '../../constants/nav';
import { creativeWorks } from '../../data/creativeWorks';
import { projects, projectsUX } from '../../data/projects';
import type { ProjectFilter } from '../../types';
import { SectionHeader } from '../layout/SectionHeader';
import { ComingSoonCard } from '../projects/ComingSoonCard';
import { CreativeThumbCard } from '../projects/CreativeThumbCard';
import { DevProjectCard } from '../projects/DevProjectCard';
import { KredyFeaturedCard } from '../projects/KredyFeaturedCard';
import { UxCaseStudyCard } from '../projects/UxCaseStudyCard';
import { FilterChips } from '../ui/FilterChips';

interface ProjectsSectionProps {
  designRef: RefObject<HTMLElement | null>;
  projectsRef: RefObject<HTMLElement | null>;
  onOpenLightbox: (image: string, gallery?: string[]) => void;
}

export function ProjectsSection({
  designRef,
  projectsRef,
  onOpenLightbox,
}: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('Tout');
  const graphicWorks = creativeWorks.filter((w) => w.type !== 'design');
  const featured = projectsUX.find((p) => p.featured);
  const caseStudies = projectsUX.filter((p) => !p.featured && !p.comingSoon);
  const comingSoon = projectsUX.filter((p) => p.comingSoon);

  return (
    <section className="section-shell" ref={designRef} aria-labelledby="design-title">
      <SectionHeader
        id="design-title"
        title="Projets sélectionnés"
        subtitle="Études de cas UX/UI, créations visuelles et réalisations front-end"
        icon={<Palette className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.75} />}
      />

      <FilterChips
        filters={PROJECT_FILTERS}
        active={activeFilter}
        onChange={setActiveFilter}
      />

      {(activeFilter === 'Tout' || activeFilter === 'UX/UI') && (
        <div className="mb-12 sm:mb-14">
          {activeFilter === 'Tout' && (
            <h3 className="section-label">
              <span className="w-8 h-px bg-orange-300 inline-block" aria-hidden="true" />
              UX/UI Design
            </h3>
          )}

          <div className="flex flex-col gap-6 sm:gap-7">
            {featured && (
              <KredyFeaturedCard project={featured} onOpenLightbox={onOpenLightbox} />
            )}

            {caseStudies.map((project) => (
              <UxCaseStudyCard
                key={project.title}
                project={project}
                onOpenLightbox={onOpenLightbox}
              />
            ))}

            {comingSoon.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {comingSoon.map((project) => (
                  <ComingSoonCard key={project.title} project={project} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {(activeFilter === 'Tout' || activeFilter === 'Graphisme') && (
        <div className="mb-12 sm:mb-14">
          {activeFilter === 'Tout' && (
            <h3 className="section-label">
              <span className="w-8 h-px bg-orange-300 inline-block" aria-hidden="true" />
              Communication visuelle
            </h3>
          )}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {graphicWorks.map((work) => (
              <CreativeThumbCard
                key={work.title}
                work={work}
                onOpenLightbox={onOpenLightbox}
              />
            ))}
          </div>
        </div>
      )}

      {(activeFilter === 'Tout' || activeFilter === 'Développement') && (
        <div className="mb-4">
          {activeFilter === 'Tout' && (
            <h3 className="section-label">
              <span className="w-8 h-px bg-orange-300 inline-block" aria-hidden="true" />
              Front-end
            </h3>
          )}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
            ref={projectsRef as RefObject<HTMLDivElement | null>}
          >
            {projects.map((project) => (
              <DevProjectCard
                key={project.title}
                project={project}
                onOpenLightbox={onOpenLightbox}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
