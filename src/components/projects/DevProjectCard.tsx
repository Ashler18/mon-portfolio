import { ExternalLink, Github } from 'lucide-react';
import type { DevProject } from '../../types';
import { LazyImage } from '../ui/LazyImage';

interface DevProjectCardProps {
  project: DevProject;
  onOpenLightbox: (image: string, gallery?: string[]) => void;
}

export function DevProjectCard({ project, onOpenLightbox }: DevProjectCardProps) {
  const isKredy = project.title === 'Kredy';

  return (
    <article className="project-card group flex flex-col h-full">
      <div
        className="media-zoom project-card__media"
        onClick={() => onOpenLightbox(project.preview, project.gallery || [project.preview])}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onOpenLightbox(project.preview, project.gallery || [project.preview]);
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={`Agrandir ${project.title}`}
      >
        <LazyImage
          src={project.preview}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
        <div className="media-overlay">
          <div className="zoom-badge">
            <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <h3 className="text-[15px] sm:text-base font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors leading-snug">
          {project.title}
        </h3>
        <p className="text-orange-600 font-semibold text-xs mb-2">{project.period}</p>
        <p className="text-gray-600 text-xs sm:text-[13px] mb-3 leading-relaxed line-clamp-3 flex-1">
          {project.summary}
        </p>

        <div className="flex gap-4 mt-auto pt-3 border-t border-gray-100">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-link !text-xs py-2"
            >
              <Github className="w-3.5 h-3.5" strokeWidth={1.75} /> Code
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-link !text-xs py-2"
            >
              <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.75} />
              {isKredy ? 'Démo' : 'Voir'}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
