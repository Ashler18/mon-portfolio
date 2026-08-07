import { Sparkles } from 'lucide-react';
import type { CreativeWork } from '../../types';
import { LazyImage } from '../ui/LazyImage';

interface GalleryCardProps {
  work: CreativeWork;
  onOpenLightbox: (image: string, gallery?: string[]) => void;
}

export function GalleryCard({ work, onOpenLightbox }: GalleryCardProps) {
  return (
    <article
      className="card card-interactive group overflow-hidden cursor-pointer"
      onClick={() => onOpenLightbox(work.image, work.gallery || [work.image])}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpenLightbox(work.image, work.gallery || [work.image]);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Voir ${work.title}`}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <LazyImage
          src={work.image}
          alt={work.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/45 via-gray-900/5 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute top-3 right-3 transition-transform duration-300 group-hover:scale-105">
          <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm text-gray-900 text-[11px] font-bold rounded-full shadow-md">
            {work.category}
          </span>
        </div>

        {work.hasVideo && (
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1.5 bg-orange-500/95 backdrop-blur-sm text-white text-[11px] font-bold rounded-full shadow-md flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
              Vidéo
            </span>
          </div>
        )}

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="text-white text-center translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
            <Sparkles className="w-6 h-6 mx-auto mb-1.5" />
            <span className="text-sm font-bold tracking-wide">Voir plus</span>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 group-hover:text-orange-600 transition-colors duration-300 leading-snug">
          {work.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{work.description}</p>
      </div>
    </article>
  );
}
