import { useCallback, useRef } from 'react';

export function useSingleVideoPlayback() {
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  const setVideoRef = useCallback((index: number) => {
    return (el: HTMLVideoElement | null) => {
      videoRefs.current[index] = el;
    };
  }, []);

  const handlePlay = useCallback((index: number) => {
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index && !video.paused) {
        video.pause();
      }
    });
  }, []);

  return { setVideoRef, handlePlay };
}
