'use client';
import { cn } from '@/lib/utils';
import { FC, ReactNode, memo, useEffect, useRef, useState } from 'react';

const TextWithColorChangeOnViewportOverlap: FC<{ text?: string; children?: ReactNode; fromColor: string; toColor: string; className?: string }> = ({
  text,
  fromColor,
  toColor,
  children,
  className,
}) => {
  const [hasOverlapped, setHasOverlapped] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const breakpoint = (window.innerHeight * 4) / 5;
      if (containerRef.current.getBoundingClientRect().top < breakpoint) setHasOverlapped(true);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn('transition-colors duration-700', className, fromColor)}
      style={{ color: hasOverlapped ? toColor : fromColor }}>
      {text}
      {children}
    </div>
  );
};

const Memo = memo(TextWithColorChangeOnViewportOverlap);
export { Memo as TextWithColorChangeOnViewportOverlap };
