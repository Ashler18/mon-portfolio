const VIDEO_EXTENSIONS = ['.mp4', '.webm', '.mov'];

export function isVideoSrc(src: string): boolean {
  const lower = src.toLowerCase();
  return VIDEO_EXTENSIONS.some((ext) => lower.endsWith(ext));
}
