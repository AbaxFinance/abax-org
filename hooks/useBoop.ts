import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { SpringConfig, SpringValue, useSpring } from '@react-spring/web';
import { useCallback, useEffect, useState } from 'react';

export function useBoop({
  x = 0 as number | string,
  y = 0 as number | string,
  rotation = 0,
  scale = 1,
  timing = 150,
  springConfig = {
    tension: 300,
    friction: 10,
  } as SpringConfig,
  repeat = true,
}): [
  (
    | Record<string, never>
    | {
        transform: SpringValue<string>;
      }
  ),
  () => void,
  boolean,
] {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isBooped, setIsBooped] = useState(false);
  const [preventAnimation, setPreventAnimation] = useState(false);
  const style = useSpring({
    transform: isBooped
      ? `translate(${typeof x === 'string' ? x : `${x}px`}, ${typeof y === 'string' ? y : `${y}px`})
           rotate(${rotation}deg)
           scale(${scale})`
      : `translate(0${typeof x === 'string' ? x.split(/([0-9]+)/).pop() : 'px'}, 0${typeof y === 'string' ? y.split(/([0-9]+)/).pop() : 'px'})
           rotate(0deg)
           scale(1)`,
    config: springConfig,
  });
  useEffect(() => {
    if (!isBooped) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      if (repeat) setIsBooped(false);
    }, timing);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBooped, repeat, timing]);

  const trigger = useCallback(() => {
    if (!preventAnimation) setIsBooped(true);
    if (!repeat) setPreventAnimation(true);
  }, [preventAnimation, repeat]);

  const appliedStyle = prefersReducedMotion ? {} : style;

  return [appliedStyle, trigger, isBooped];
}
