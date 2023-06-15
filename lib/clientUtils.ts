'use client';
export function elementViewportOverlap(element: Element) {
  const rect = element.getBoundingClientRect();
  const viewport = { x: 0, y: 0, w: window.innerWidth, h: window.innerHeight };
  const dimension = { x: rect.x, y: rect.y, w: rect.width, h: rect.height };

  const y_overlap = Math.max(0, Math.min(dimension.y + dimension.h, viewport.y + viewport.h) - Math.max(dimension.y, viewport.y));
  return y_overlap;
}
