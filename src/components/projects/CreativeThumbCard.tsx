import type { CreativeWork } from '../../types';
import { LazyImage } from '../ui/LazyImage';

interface CreativeThumbCardProps {
  work: CreativeWork;
  onOpenLightbox: (image: string, gallery?: string[]) => void;
}

export function CreativeThumbCard({ work, onOpenLightbox }: CreativeThumbCardProps) {
  return (
    <article
      className="card card-interactive group overflow-hidden cursor-zoom-in"
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
      <div className="relative overflow-hidden aspect-[4/3] sm:aspect-auto sm:h-36 md:h-40">
        <LazyImage
          src={work.image}
          alt={work.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="px-2 py-0.5 bg-orange-500 text-white text-[10px] sm:text-xs font-bold rounded-full">
            {work.category}
          </span>
        </div>
      </div>
      <div className="p-2.5 sm:p-3">
        <h3 className="text-[11px] sm:text-xs font-bold text-gray-900 group-hover:text-orange-600 transition-colors leading-snug line-clamp-2">
          {work.title}
        </h3>
      </div>
    </article>
  );
}
