/** Resolve a path under the CRA public folder (supports GitHub Pages homepage). */
export function asset(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${process.env.PUBLIC_URL}${normalized}`;
}
