'use client';
import { cn } from '@/lib/utils';
import { FC, memo, useEffect, useRef, useState } from 'react';

const TextWithColorChangeOnViewportOverlap: FC<{ text: string; fromColor: string; toColor: string }> = ({ text, fromColor, toColor }) => {
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
      className={cn('max-w-2xl transition-colors duration-500', fromColor)}
      style={{ color: hasOverlapped ? toColor : fromColor }}>
      {text}
    </div>
  );
};

const Memo = memo(TextWithColorChangeOnViewportOverlap);
export { Memo as TextWithColorChangeOnViewportOverlap };
