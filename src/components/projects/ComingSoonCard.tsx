import { ExternalLink, Hourglass } from 'lucide-react';
import type { UxProject } from '../../types';

interface ComingSoonCardProps {
  project: UxProject;
}

export function ComingSoonCard({ project }: ComingSoonCardProps) {
  const prototype = project.links.figma;

  return (
    <article
      className="coming-soon-card group"
      aria-label={`${project.title} - étude de cas en préparation`}
    >
      <div className="flex items-start justify-between gap-3 mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 tracking-tight group-hover:text-orange-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-orange-600/90 font-medium text-xs mt-1">{project.period}</p>
        </div>
      </div>

      <div className="coming-soon-visual mb-4" aria-hidden="true">
        <Hourglass className="w-7 h-7 text-orange-500/80" strokeWidth={1.5} />
        <p className="text-sm font-semibold text-gray-800 mt-2">
          {prototype ? 'Étude de cas en préparation' : 'Refonte en cours'}
        </p>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed">{project.comingSoonNote}</p>

      {prototype && (
        <a
          href={prototype}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost-link mt-4"
          aria-label={`Ouvrir le prototype Figma de ${project.title}`}
        >
          <ExternalLink className="w-4 h-4" strokeWidth={1.75} />
          Explorer le prototype Figma
        </a>
      )}
    </article>
  );
}
