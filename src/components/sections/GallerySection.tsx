import type { RefObject } from 'react';
import { Images } from 'lucide-react';
import { creativeWorks } from '../../data/creativeWorks';
import { GalleryCard } from '../projects/GalleryCard';

interface GallerySectionProps {
  sectionRef: RefObject<HTMLElement | null>;
  onOpenLightbox: (image: string, gallery?: string[]) => void;
}

export function GallerySection({ sectionRef, onOpenLightbox }: GallerySectionProps) {
  // Avoid repeating UX case studies already featured in Mes Projets
  const galleryWorks = creativeWorks.filter((w) => w.type !== 'design');

  return (
    <section className="section-shell" ref={sectionRef} aria-labelledby="gallery-title">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
        <div className="section-icon self-start">
          <Images className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.75} />
        </div>
        <div>
          <h2 id="gallery-title" className="section-title">
            Créations & Réalisations
          </h2>
          <p className="section-subtitle">Design print, branding et sélection visuelle</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
        {galleryWorks.map((work) => (
          <GalleryCard key={work.title} work={work} onOpenLightbox={onOpenLightbox} />
        ))}
      </div>
    </section>
  );
}
