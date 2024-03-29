'use client';
import { elementViewportOverlap, useWindowDimensions } from '@/lib/clientUtils';
import { FC, memo, useEffect, useRef, useState } from 'react';

const TextColorTransition: FC<{ text: string; fromColor: string; toColor: string; className?: string }> = ({
  text,
  fromColor,
  toColor,
  className,
}) => {
  const spanContainer = useRef<HTMLDivElement>(null);
  const [coloringState, setColoringState] = useState<'init' | 'started' | 'stop' | 'finish'>('init');
  const [allowColoring, setAllowColoring] = useState(false);
  const dimensions = useWindowDimensions();
  const [intervalId, setIntervalId] = useState<number | undefined>();

  useEffect(() => {
    const handleScroll = () => {
      function colorSpans(container: Element, numberOfSpansToColor = 2) {
        const spans = Array.from(container.querySelectorAll('span'))
          .filter((x) => x)
          .filter((x) => !x.classList.contains('colored'))
          .slice(0, numberOfSpansToColor);
        for (const span of spans) {
          span.classList.add('colored');
          span.setAttribute('style', `color: ${toColor};`);
        }
        if (spans.length === 0) {
          setColoringState('stop');
        }
      }
      if (!spanContainer.current) return;
      if (!allowColoring && elementViewportOverlap(dimensions, spanContainer.current) > 65) {
        setAllowColoring(true);
      }
      if (allowColoring && coloringState === 'init') {
        setColoringState('started');
        const newIntervalId = window.setInterval(() => colorSpans(spanContainer.current!), 10);
        setIntervalId(newIntervalId);
      }
    };

    // listen to the scroll event of the window
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [allowColoring, coloringState, dimensions, intervalId, toColor]);

  useEffect(() => {
    if (coloringState === 'stop') window.clearInterval(intervalId);
  }, [coloringState, intervalId]);

  return (
    <div className={className} style={{ color: fromColor }} ref={spanContainer}>
      {/* // divide text inside .stickyColor elements
  // into one span per character */}
      {text
        .trim()
        .split('')
        .map((c, i) => (
          <span className="transition-colors duration-100" key={`${c}_${i}`}>
            {c}
          </span>
        ))}
    </div>
  );
};

const Memo = memo(TextColorTransition);
export { Memo as TextColorTransition };
