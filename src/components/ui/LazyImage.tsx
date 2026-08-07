import type { ImgHTMLAttributes } from 'react';

type LazyImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  priority?: boolean;
};

export function LazyImage({
  priority = false,
  alt = '',
  loading,
  decoding = 'async',
  ...props
}: LazyImageProps) {
  return (
    <img
      alt={alt}
      loading={loading ?? (priority ? 'eager' : 'lazy')}
      decoding={decoding}
      {...props}
    />
  );
}
