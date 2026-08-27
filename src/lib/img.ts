/**
 * Build an Unsplash delivery URL from a bare photo id.
 * Host is allow-listed in next.config.ts; images render via next/image (unoptimized).
 */
export function unsplash(id: string, width = 1200, quality = 80): string {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=${quality}`;
}
