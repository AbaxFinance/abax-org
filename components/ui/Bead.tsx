import { useBoop } from '@/hooks/useBoop';
import { getRandomNumberFromTo } from '@/lib/mathUtils';
import { cn } from '@/lib/utils';
import { SpringConfig, animated, config, useSpring } from '@react-spring/web';
import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef, HTMLAttributes, memo, useCallback, useEffect, useState } from 'react';

const beadVariants = cva('shrink-0 items-center rounded-full gradient-border-4 transition-colors', {
  variants: {
    variant: {
      default: 'border-gradient-tr-light-yellow-black',
      ghost: 'border-gradient-tr-light-grey-black',
    },
    size: {
      default: 'h-48 w-24',
      lg: 'h-72 w-36',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export const beadWidthBySize: Record<NonNullable<VariantProps<BeadVariants>['size']>, number> = {
  default: 24,
  lg: 36,
};
export const beadSpringConfigBySize: Record<NonNullable<VariantProps<BeadVariants>['size']>, SpringConfig> = {
  default: { tension: 250, friction: 8 },
  lg: { tension: 100, friction: 40 },
};

export type BeadVariants = typeof beadVariants;

export interface BeadProps extends HTMLAttributes<HTMLDivElement>, VariantProps<BeadVariants> {}

const Bead = forwardRef<HTMLDivElement, BeadProps>(({ variant, size, className, ...restProps }, ref) => {
  const [style, trigger] = useBoop({ x: -10, springConfig: size ? beadSpringConfigBySize[size] : beadSpringConfigBySize['default'] });

  return (
    <animated.div
      onMouseEnter={trigger}
      className={cn(beadVariants({ variant, size, className }))}
      ref={ref}
      style={{ borderLeft: 'none', ...style }}
      {...restProps}
    />
  );
});

Bead.displayName = 'Bead';
const Memo = memo(Bead);
export { Memo as Bead };
