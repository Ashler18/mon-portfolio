import { ExternalLink, Github } from 'lucide-react';
import type { UxProject } from '../../types';
import { LazyImage } from '../ui/LazyImage';
import { CaseStudyBlocks } from '../ui/CaseStudyBlocks';

interface KredyFeaturedCardProps {
  project: UxProject;
  onOpenLightbox: (image: string, gallery?: string[]) => void;
}

export function KredyFeaturedCard({ project, onOpenLightbox }: KredyFeaturedCardProps) {
  const surfaces = project.surfaces ?? [];
  const gallery = project.gallery ?? surfaces.map((s) => s.image);
  const [dashboard, mobile, landing] = surfaces;

  return (
    <article className="featured-card group">
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="badge-featured">Projet phare</span>
      </div>

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
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <ExternalLink className="w-4 h-4" strokeWidth={1.75} />
                Voir la démo
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

        <div className="lg:col-span-7">
          <div className="kredy-mosaic">
            {dashboard && (
              <button
                type="button"
                className="kredy-mosaic__main media-zoom"
                onClick={() => onOpenLightbox(dashboard.image, gallery)}
                aria-label={`Agrandir ${dashboard.label}`}
              >
                <LazyImage
                  src={dashboard.image}
                  alt={`${project.title} — ${dashboard.label}`}
                  className="w-full h-full object-cover object-top"
                />
                <span className="surface-label">{dashboard.label}</span>
              </button>
            )}
            <div className="kredy-mosaic__side">
              {mobile && (
                <button
                  type="button"
                  className="kredy-mosaic__tile kredy-mosaic__tile--mobile media-zoom"
                  onClick={() => onOpenLightbox(mobile.image, gallery)}
                  aria-label={`Agrandir ${mobile.label}`}
                >
                  <LazyImage
                    src={mobile.image}
                    alt={`${project.title} — ${mobile.label}`}
                    className="w-full h-full object-cover object-top"
                  />
                  <span className="surface-label">{mobile.label}</span>
                </button>
              )}
              {landing && (
                <button
                  type="button"
                  className="kredy-mosaic__tile media-zoom"
                  onClick={() => onOpenLightbox(landing.image, gallery)}
                  aria-label={`Agrandir ${landing.label}`}
                >
                  <LazyImage
                    src={landing.image}
                    alt={`${project.title} — ${landing.label}`}
                    className="w-full h-full object-cover object-top"
                  />
                  <span className="surface-label">{landing.label}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
