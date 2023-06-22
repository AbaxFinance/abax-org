'use client';
import { Bead, BeadProps, beadWidthBySize } from '@/components/ui/Bead';
import { TextWithColorChangeOnViewportOverlap } from '@/components/ui/TextWithColorChangeOnViewportOverlap';
import { useBoop } from '@/hooks/useBoop';
import { StrictUnion } from '@/lib/tsUtils';
import { cn } from '@/lib/utils';
import { animated } from '@react-spring/web';
import dynamic from 'next/dynamic';
import { FC, ReactNode, memo, useEffect, useRef, useState } from 'react';

export function getBeadsWidth(containerWidthInBeeds: number, beadSizeVariant?: BeadProps['size']) {
  const widthInRem = containerWidthInBeeds * beadWidthBySize[beadSizeVariant ?? 'default'] * 0.25 + (containerWidthInBeeds - 1) * 2;
  return widthInRem;
}

const Beads: FC<
  StrictUnion<
    ({ numberOfBeeds: number } | { fullRow: true }) & {
      beadSizeVariant?: BeadProps['size'];
      beadVariant?: BeadProps['variant'];
    }
  >
> = (props) => {
  const beeds = Array(props.fullRow ? 30 : props.numberOfBeeds)
    .fill(null)
    .map((_, i) => <Bead size={props.beadSizeVariant} variant={props.beadVariant} key={i} />);

  return beeds;
};

export const BeadsFlexContainer: FC<{ children: ReactNode; className?: string }> = ({ children, className }) => (
  <div className={cn('ml-4 flex w-full flex-nowrap gap-8', className)}>{children}</div>
);

const BeadsTextContainer: FC<{ text: string | ReactNode; containerWidthInBeeds: number | null; beadSizeVariant?: BeadProps['size'] }> = ({
  text,
  containerWidthInBeeds,
  beadSizeVariant,
}) => (
  <div
    key="custom"
    style={{
      width: containerWidthInBeeds ? `${getBeadsWidth(containerWidthInBeeds, beadSizeVariant)}rem` : 'inherit',
      flexShrink: containerWidthInBeeds ? 0 : 1,
    }}>
    {text}
  </div>
);

export const BeadsSlideInContainer: FC<{
  text: string | ReactNode;
  numberOfBeadsToSlide: number;
  containerWidthInBeeds: number | null;
  beadSizeVariant?: BeadProps['size'];
  animateVertically?: boolean;
}> = ({ text, beadSizeVariant, containerWidthInBeeds, numberOfBeadsToSlide, animateVertically = false }) => {
  const [animationStyles, trigger, hasFinishedSlide] = useBoop({
    x: `-${getBeadsWidth(numberOfBeadsToSlide, 'lg') + 2}rem`,
    repeat: false,
    springConfig: { tension: 250, friction: 25 },
  });
  const [hasOverlapped, setHasOverlapped] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const breakpoint = (window.innerHeight * 3) / 5;

      if (animateVertically) {
        if (containerRef.current.getBoundingClientRect().top < breakpoint) setHasOverlapped(true);
        return;
      }
      if (containerRef.current.getBoundingClientRect().top < breakpoint) trigger();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animateVertically, trigger]);

  return (
    <animated.div
      ref={containerRef}
      className={cn(`flex`, { 'gap-8': animateVertically }, { 'gap-4': !animateVertically })}
      onMouseEnter={!animateVertically ? trigger : undefined}
      style={animationStyles}>
      <Beads beadSizeVariant={beadSizeVariant} beadVariant={hasFinishedSlide || hasOverlapped ? 'default' : 'ghost'} numberOfBeeds={1} />
      <BeadsTextContainer
        beadSizeVariant={beadSizeVariant}
        containerWidthInBeeds={containerWidthInBeeds}
        text={
          <TextWithColorChangeOnViewportOverlap fromColor="#9D9D9D" toColor="white" className={cn('h-full')}>
            {text}
          </TextWithColorChangeOnViewportOverlap>
        }
      />
    </animated.div>
  );
};

const Memo = memo(Beads);
const Memo2 = memo(BeadsTextContainer);
export { Memo as Beads, Memo2 as BeadsTextContainer };
