'use client';
import { Bead, BeadProps, beadWidthBySize } from '@/components/ui/Bead';
import { useBoop } from '@/hooks/useBoop';
import { StrictUnion } from '@/lib/tsUtils';
import { FC, memo, ReactNode, SVGProps, useRef } from 'react';
import { animated } from '@react-spring/web';
import Link from 'next/link';
import { cn } from '@/lib/utils';

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

export const BeadsFlexContainer: FC<{ children: ReactNode }> = ({ children }) => (
  <div className={'ml-4 flex w-full flex-nowrap gap-8'}> {children}</div>
);

const BeadsTextContainer: FC<{ text: string | ReactNode; containerWidthInBeeds: number; beadSizeVariant?: BeadProps['size'] }> = ({
  text,
  containerWidthInBeeds,
  beadSizeVariant,
}) => (
  <div
    key="custom"
    style={{
      width: `${getBeadsWidth(containerWidthInBeeds, beadSizeVariant)}rem`,
      flexShrink: 0,
    }}>
    {text}
  </div>
);

export const BeadsSlideInContainer: FC<{
  text: string | ReactNode;
  numberOfBeadsToSlide: number;
  containerWidthInBeeds: number;
  beadSizeVariant?: BeadProps['size'];
}> = ({ text, beadSizeVariant, containerWidthInBeeds, numberOfBeadsToSlide }) => {
  const [animationStyles, trigger, hasFinished] = useBoop({
    x: `-${getBeadsWidth(numberOfBeadsToSlide, 'lg') + 2}rem`,
    repeat: false,
    springConfig: { tension: 300, friction: 25 },
  });
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <animated.div className={`flex gap-8`} onMouseEnter={trigger} style={animationStyles}>
      <Beads beadSizeVariant={beadSizeVariant} beadVariant={hasFinished ? 'default' : 'ghost'} numberOfBeeds={1} />
      <BeadsTextContainer
        beadSizeVariant={beadSizeVariant}
        containerWidthInBeeds={containerWidthInBeeds}
        text={<div className={cn('h-full text-[#9D9D9D] transition-colors duration-700', { 'text-white': hasFinished })}>{text}</div>}
      />
    </animated.div>
  );
};

const Memo = memo(Beads);
const Memo2 = memo(BeadsTextContainer);
export { Memo as Beads };
export { Memo2 as BeadsTextContainer };
