import { useMemo, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import type { UxProject } from '../../types';
import { CaseStudyBlocks } from '../ui/CaseStudyBlocks';
import { LazyImage } from '../ui/LazyImage';
import { ImageCarousel } from '../ui/ImageCarousel';

interface KredyFeaturedCardProps {
  project: UxProject;
  onOpenLightbox: (image: string, gallery?: string[]) => void;
}

type SurfaceTab = 'dashboard' | 'mobile' | 'landing';

export function KredyFeaturedCard({ project, onOpenLightbox }: KredyFeaturedCardProps) {
  const [surface, setSurface] = useState<SurfaceTab>('mobile');

  const surfaces = project.surfaces ?? [];
  const phones = project.phones ?? [];
  const gallery = project.gallery ?? [
    ...surfaces.map((s) => s.image),
    ...phones.map((p) => p.image),
  ];

  const dashboard = surfaces.find((s) => s.label === 'Dashboard') ?? surfaces[0];
  const landing = surfaces.find((s) => s.label === 'Landing page') ?? surfaces[1];

  const phoneSlides = useMemo(
    () =>
      phones.map((phone) => ({
        src: phone.image,
        alt: `${project.title} — ${phone.label}`,
        label: phone.label,
      })),
    [phones, project.title]
  );

  return (
    <article className="kredy-card group">
      <div className="kredy-card__glow" aria-hidden="true" />

      <div className="grid lg:grid-cols-12 gap-5 lg:gap-7 items-start">
        <div className="lg:col-span-5 flex flex-col relative z-[1]">
          <p className="kredy-card__eyebrow">{project.period}</p>
          <h3 className="kredy-card__title">{project.title}</h3>
          <p className="kredy-card__summary">{project.summary}</p>

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

        <div className="lg:col-span-7 relative z-[1]">
          <div className="kredy-stage">
            <div className="kredy-stage__tabs" role="tablist" aria-label="Surfaces Kredy">
              {(
                [
                  { key: 'mobile' as const, label: 'Mobile', show: phoneSlides.length > 0 },
                  { key: 'dashboard' as const, label: 'Dashboard', show: !!dashboard },
                  { key: 'landing' as const, label: 'Landing', show: !!landing },
                ] as const
              )
                .filter((t) => t.show)
                .map((tab) => (
                  <button
                    key={tab.key}
                    type="button"
                    role="tab"
                    aria-selected={surface === tab.key}
                    className={`kredy-stage__tab${surface === tab.key ? ' is-active' : ''}`}
                    onClick={() => setSurface(tab.key)}
                  >
                    {tab.label}
                  </button>
                ))}
            </div>

            <div className="kredy-stage__frame" key={surface}>
              {surface === 'mobile' && phoneSlides.length > 0 && (
                <ImageCarousel slides={phoneSlides} onOpenLightbox={onOpenLightbox} />
              )}

              {surface === 'dashboard' && dashboard && (
                <button
                  type="button"
                  className="kredy-stage__shot"
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

              {surface === 'landing' && landing && (
                <button
                  type="button"
                  className="kredy-stage__shot"
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
