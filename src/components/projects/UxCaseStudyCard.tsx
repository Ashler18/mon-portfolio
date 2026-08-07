import { ExternalLink, Github } from 'lucide-react';
import type { UxProject } from '../../types';
import { LazyImage } from '../ui/LazyImage';
import { CaseStudyBlocks } from '../ui/CaseStudyBlocks';

interface UxCaseStudyCardProps {
  project: UxProject;
  onOpenLightbox: (image: string, gallery?: string[]) => void;
}

/** Étude de cas UX/UI dont les livrables tiennent sur une seule surface. */
export function UxCaseStudyCard({ project, onOpenLightbox }: UxCaseStudyCardProps) {
  const preview = project.preview;
  const gallery = project.gallery ?? (preview ? [preview] : []);

  return (
    <article className="featured-card group">
      <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        <div className="lg:col-span-5 flex flex-col">
          {project.links.figma && (
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="badge-soft">Prototype interactif</span>
            </div>
          )}

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

        {preview && (
          <div className="lg:col-span-7">
            <button
              type="button"
              className="ux-case-media media-zoom"
              onClick={() => onOpenLightbox(preview, gallery)}
              aria-label={`Agrandir les écrans de ${project.title}`}
            >
              <LazyImage
                src={preview}
                alt={`${project.title} — écrans de l'application mobile`}
                className="w-full h-full object-cover object-center"
              />
              <span className="surface-label">Application mobile</span>
            </button>
            {gallery.length > 1 && (
              <p className="text-gray-500 text-xs mt-2.5 text-center">
                {gallery.length} visuels — cliquez pour parcourir les écrans
              </p>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
