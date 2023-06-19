'use client';
import { useBoop } from '@/hooks/useBoop';
import { useIsMobile } from '@/lib/clientUtils';
import { cn } from '@/lib/utils';
import { SpringConfig, animated } from '@react-spring/web';
import { VariantProps, cva } from 'class-variance-authority';
import { HTMLAttributes, forwardRef, memo } from 'react';

const beadVariants = cva('shrink-0 items-center rounded-full gradient-border-4 transition-colors', {
  variants: {
    variant: {
      default: 'border-gradient-tr-light-yellow-black',
      ghost: 'border-gradient-tr-light-grey-black',
    },
    size: {
      sm: 'h-32 w-16',
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
  sm: 16,
  default: 24,
  lg: 36,
};
export const beadSpringConfigBySize: Record<NonNullable<VariantProps<BeadVariants>['size']>, SpringConfig> = {
  sm: { tension: 250, friction: 8 },
  default: { tension: 250, friction: 8 },
  lg: { tension: 120, friction: 35 },
};

export type BeadVariants = typeof beadVariants;

export interface BeadProps extends HTMLAttributes<HTMLDivElement>, VariantProps<BeadVariants> {}

const Bead = forwardRef<HTMLDivElement, BeadProps>(({ variant, size, className, ...restProps }, ref) => {
  const [style, trigger] = useBoop({ x: -10, springConfig: size ? beadSpringConfigBySize[size] : beadSpringConfigBySize['default'] });
  const isMobileView = useIsMobile();

  return (
    <animated.div
      onMouseEnter={isMobileView ? undefined : trigger}
      onClick={isMobileView ? undefined : trigger}
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
