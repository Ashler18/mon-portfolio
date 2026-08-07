import { ExternalLink, Github } from 'lucide-react';
import type { UxProject } from '../../types';
import { CaseStudyBlocks } from '../ui/CaseStudyBlocks';
import { ImageCarousel } from '../ui/ImageCarousel';

interface UxCaseStudyCardProps {
  project: UxProject;
  onOpenLightbox: (image: string, gallery?: string[]) => void;
}

/** Étude de cas UX/UI dont les livrables tiennent sur une seule surface. */
export function UxCaseStudyCard({ project, onOpenLightbox }: UxCaseStudyCardProps) {
  const slides = (project.phones ?? []).map((phone) => ({
    src: phone.image,
    alt: `${project.title} - ${phone.label}`,
    label: phone.label,
  }));

  return (
    <article className="featured-card group">
      <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        <div className="lg:col-span-5 flex flex-col">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-2">
            {project.title}
          </h3>
          <p className="text-orange-600 font-semibold text-xs sm:text-sm mb-4">
            {project.period}
          </p>
          <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed mb-5">
            {project.summary}
          </p>

          <CaseStudyBlocks caseStudy={project.caseStudy} />

          <div className="flex flex-wrap gap-2.5 mt-6">
            {project.links.figma && (
              <a
                href={project.links.figma}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <ExternalLink className="w-4 h-4" strokeWidth={1.75} />
                Explorer le prototype Figma
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Github className="w-4 h-4" strokeWidth={1.75} />
                Voir le dépôt GitHub
              </a>
            )}
          </div>
        </div>

        {slides.length > 0 && (
          <div className="lg:col-span-7">
            <ImageCarousel slides={slides} onOpenLightbox={onOpenLightbox} />
          </div>
        )}
      </div>
    </article>
  );
}
