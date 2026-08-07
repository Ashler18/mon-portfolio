import type { RefObject } from 'react';
import { ArrowRight, Briefcase, ShoppingBag } from 'lucide-react';
import { businessVentures } from '../../data/business';
import { SectionHeader } from '../layout/SectionHeader';
import { LazyImage } from '../ui/LazyImage';

interface BusinessSectionProps {
  sectionRef: RefObject<HTMLElement | null>;
  onOpenLightbox: (image: string, gallery?: string[]) => void;
  setVideoRef: (index: number) => (el: HTMLVideoElement | null) => void;
  onVideoPlay: (index: number) => void;
}

export function BusinessSection({
  sectionRef,
  onOpenLightbox,
  setVideoRef,
  onVideoPlay,
}: BusinessSectionProps) {
  let videoIndex = 0;

  return (
    <section className="section-shell" ref={sectionRef} aria-labelledby="business-title">
      <div className="card-panel p-5 sm:p-8 lg:p-12">
        <SectionHeader
          id="business-title"
          title="Aventure Entrepreneuriale"
          icon={<Briefcase className="w-6 h-6 sm:w-7 sm:h-7" />}
          className="!mb-8 sm:!mb-10"
        />

        <div className="space-y-6 sm:space-y-8">
          {businessVentures.map((venture) => {
            const isOrange = venture.accent === 'orange';
            return (
              <article
                key={venture.id}
                className={`rounded-2xl p-5 sm:p-6 lg:p-8 border transition-all duration-300 ${
                  isOrange
                    ? 'bg-orange-50/80 border-orange-100/80 hover:shadow-md hover:border-orange-200'
                    : 'bg-gray-50/80 border-gray-100 hover:shadow-md hover:border-orange-100'
                }`}
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-5">
                  {venture.icon === 'shopping' ? (
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-orange-500 flex items-center justify-center shadow-md shadow-orange-500/20 shrink-0">
                      <ShoppingBag className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
                  ) : venture.logo ? (
                    <LazyImage
                      src={venture.logo}
                      alt={venture.title}
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-contain bg-white p-2.5 shadow-sm border border-gray-200 shrink-0 ${
                        venture.id === 'ccreate' ? 'object-cover p-0 border-white' : ''
                      }`}
                    />
                  ) : null}
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 truncate">
                      {venture.title}
                    </h3>
                    <p className="text-orange-600 font-semibold text-xs sm:text-sm">
                      {venture.role}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 mb-5 leading-relaxed text-sm sm:text-base">
                  {venture.description}
                </p>

                {venture.tags && venture.tags.length > 0 && (
                  <p className="text-sm text-gray-500 mb-5 leading-relaxed">
                    {venture.tags.join(' · ')}
                  </p>
                )}

                {venture.cta && (
                  <a
                    href={venture.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary !text-sm"
                  >
                    <ShoppingBag className="w-4 h-4" /> {venture.cta.label}{' '}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}

                {venture.images && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mt-1">
                    {venture.images.map((img, idx) => (
                      <LazyImage
                        key={img}
                        src={img}
                        alt={`Produit ${venture.title} ${idx + 1}`}
                        className="aspect-square object-cover rounded-xl cursor-pointer hover:scale-[1.03] hover:shadow-lg transition-all duration-300 border border-white shadow-sm"
                        onClick={() => onOpenLightbox(img)}
                      />
                    ))}
                  </div>
                )}

                {venture.media && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                    {venture.media.map((item) => {
                      if (item.type === 'video') {
                        const current = videoIndex;
                        videoIndex += 1;
                        return (
                          <video
                            key={item.src}
                            ref={setVideoRef(current)}
                            src={item.src}
                            className="w-full aspect-video object-contain bg-gray-900 rounded-xl shadow-sm border border-white"
                            controls
                            onPlay={() => onVideoPlay(current)}
                            preload="metadata"
                          />
                        );
                      }
                      return (
                        <LazyImage
                          key={item.src}
                          src={item.src}
                          alt={item.alt}
                          className="w-full aspect-video object-cover rounded-xl cursor-pointer hover:scale-[1.02] transition-all duration-300 shadow-sm border border-white"
                          onClick={() => onOpenLightbox(item.src)}
                        />
                      );
                    })}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
