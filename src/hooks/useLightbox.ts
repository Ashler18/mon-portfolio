import { useCallback, useEffect, useState } from 'react';

export function useLightbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [gallery, setGallery] = useState<string[]>([]);
  const [index, setIndex] = useState(0);

  const open = useCallback((image: string, nextGallery: string[] = []) => {
    const items = nextGallery.length > 0 ? nextGallery : [image];
    const startIndex = Math.max(0, items.indexOf(image));
    setGallery(items);
    setIndex(startIndex === -1 ? 0 : startIndex);
    setCurrentImage(image);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setCurrentImage('');
    setGallery([]);
    setIndex(0);
  }, []);

  const next = useCallback(() => {
    setIndex((prev) => {
      const newIndex = (prev + 1) % gallery.length;
      setCurrentImage(gallery[newIndex]);
      return newIndex;
    });
  }, [gallery]);

  const prev = useCallback(() => {
    setIndex((prev) => {
      const newIndex = (prev - 1 + gallery.length) % gallery.length;
      setCurrentImage(gallery[newIndex]);
      return newIndex;
    });
  }, [gallery]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight' && gallery.length > 1) next();
      if (e.key === 'ArrowLeft' && gallery.length > 1) prev();
    };

    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, gallery.length, close, next, prev]);

  return {
    isOpen,
    currentImage,
    gallery,
    index,
    open,
    close,
    next,
    prev,
  };
}
