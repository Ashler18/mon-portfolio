import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { isVideoSrc } from '../../utils/media';

interface LightboxProps {
  isOpen: boolean;
  currentImage: string;
  gallery: string[];
  index: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function Lightbox({
  isOpen,
  currentImage,
  gallery,
  index,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  if (!isOpen) return null;

  const hasMultiple = gallery.length > 1;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Visionneuse d'image agrandie"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-3 right-3 sm:top-5 sm:right-5 text-white/90 hover:text-orange-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-xl p-2.5 z-10 bg-black/40 backdrop-blur-sm min-w-[44px] min-h-[44px] flex items-center justify-center"
        aria-label="Fermer la visionneuse"
      >
        <X className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-2 sm:left-5 text-white/90 hover:text-orange-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-xl p-2 sm:p-3 bg-black/45 backdrop-blur-sm min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-black/60"
            aria-label="Image précédente"
          >
            <ChevronLeft className="w-7 h-7 sm:w-10 sm:h-10" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-2 sm:right-5 text-white/90 hover:text-orange-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-xl p-2 sm:p-3 bg-black/45 backdrop-blur-sm min-w-[44px] min-h-[44px] flex items-center justify-center hover:bg-black/60"
            aria-label="Image suivante"
          >
            <ChevronRight className="w-7 h-7 sm:w-10 sm:h-10" />
          </button>
        </>
      )}

      {isVideoSrc(currentImage) ? (
        <video
          src={currentImage}
          className="max-w-[95vw] sm:max-w-[90vw] max-h-[85vh] sm:max-h-[80vh] rounded-xl sm:rounded-2xl shadow-2xl animate-scaleIn"
          onClick={(e) => e.stopPropagation()}
          controls
          autoPlay
        >
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
      ) : (
        <img
          src={currentImage}
          alt="Agrandissement du projet sélectionné"
          className="max-w-[95vw] sm:max-w-[90vw] max-h-[85vh] sm:max-h-[80vh] object-contain rounded-xl sm:rounded-2xl shadow-2xl animate-scaleIn"
          onClick={(e) => e.stopPropagation()}
        />
      )}

      {hasMultiple && (
        <div
          className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 text-white text-sm sm:text-base bg-black/55 backdrop-blur-md px-4 sm:px-5 py-2 rounded-full font-medium tracking-wide"
          aria-live="polite"
        >
          {index + 1} / {gallery.length}
        </div>
      )}
    </div>
  );
}
