'use client';
import { useEffect, useState } from 'react';

import { throttle } from 'lodash';
import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from 'tailwind.config';

export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

const findKeyByValue = (object: { [x: string]: unknown }, value: string) => Object.keys(object).find((key) => object[key] === value);

const getDeviceConfig = (width: number): Breakpoint => {
  let breakpoint: Breakpoint = 'md';
  const fullConfig = resolveConfig(tailwindConfig);
  if (!fullConfig.theme) return breakpoint;
  const screens = fullConfig.theme.screens;
  if (!screens || Array.isArray(screens)) return breakpoint;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  /* @ts-ignore */
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const bpSizes = Object.keys(screens).map((screenSize) => parseInt(screens[screenSize]));

  const bpShapes = bpSizes.map((size, index) => ({
    min: !index ? 0 : bpSizes[index - 1],
    max: size,
    key: findKeyByValue(screens, `${size}px`) as Breakpoint,
  }));

  let biggestBreakpointValue = 0;
  for (const shape of bpShapes) {
    const breakpointValue = shape.max;
    if (breakpointValue > biggestBreakpointValue && width >= breakpointValue) {
      biggestBreakpointValue = breakpointValue;
      breakpoint = shape.key;
    }
  }

  return breakpoint;
};

export const useTailwindBreakpoint = () => {
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = throttle(function () {
      setDimensions({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0,
      });
    }, 200);
    window.addEventListener('resize', handleResize, false);
    return () => window.removeEventListener('resize', handleResize, false);
  }, []);

  return getDeviceConfig(dimensions.width);
};

export const useIsMobile = () => {
  const breakpoint = useTailwindBreakpoint();

  const isMobileView = breakpoint === 'md' || breakpoint === 'sm';
  return isMobileView;
};

export function elementViewportOverlap(element: Element) {
  const rect = element.getBoundingClientRect();
  const viewport = { x: 0, y: 0, w: window.innerWidth, h: window.innerHeight };
  const elDimension = { x: rect.x, y: rect.y, w: rect.width, h: rect.height };

  const y_overlap = Math.max(0, Math.min(elDimension.y + elDimension.h, viewport.y + viewport.h) - Math.max(elDimension.y, viewport.y));
  return y_overlap;
}
