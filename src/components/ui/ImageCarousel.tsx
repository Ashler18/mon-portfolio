import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { LazyImage } from './LazyImage';

export interface CarouselSlide {
  src: string;
  alt: string;
  label?: string;
}

interface ImageCarouselProps {
  slides: CarouselSlide[];
  onOpenLightbox?: (image: string, gallery: string[]) => void;
  className?: string;
}

export function ImageCarousel({ slides, onOpenLightbox, className = '' }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const gallery = slides.map((s) => s.src);

  const goTo = useCallback(
    (next: number) => {
      const len = slides.length;
      if (len === 0) return;
      setIndex(((next % len) + len) % len);
    },
    [slides.length]
  );

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const child = el.children[index] as HTMLElement | undefined;
    if (!child) return;
    child.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [index]);

  if (slides.length === 0) return null;

  return (
    <div className={`phone-carousel ${className}`}>
      <div className="phone-carousel__viewport" ref={trackRef}>
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            className={`phone-carousel__slide${i === index ? ' is-active' : ''}`}
            onClick={() => {
              if (onOpenLightbox) onOpenLightbox(slide.src, gallery);
              else goTo(i);
            }}
            aria-label={slide.label ? `Agrandir ${slide.label}` : `Agrandir l'écran ${i + 1}`}
            aria-current={i === index ? 'true' : undefined}
          >
            <LazyImage
              src={slide.src}
              alt={slide.alt}
              className="phone-carousel__img"
            />
            {slide.label && <span className="surface-label">{slide.label}</span>}
          </button>
        ))}
      </div>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            className="phone-carousel__nav phone-carousel__nav--prev"
            onClick={() => goTo(index - 1)}
            aria-label="Écran précédent"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={1.75} />
          </button>
          <button
            type="button"
            className="phone-carousel__nav phone-carousel__nav--next"
            onClick={() => goTo(index + 1)}
            aria-label="Écran suivant"
          >
            <ChevronRight className="w-5 h-5" strokeWidth={1.75} />
          </button>

          <div className="phone-carousel__dots" role="tablist" aria-label="Écrans">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={slide.label || `Écran ${i + 1}`}
                className={`phone-carousel__dot${i === index ? ' is-active' : ''}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
