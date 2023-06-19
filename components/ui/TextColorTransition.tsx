'use client';
import { elementViewportOverlap, useIsMobile } from '@/lib/clientUtils';
import { FC, memo, useEffect, useRef, useState } from 'react';

const TextColorTransition: FC<{ text: string; fromColor: string; toColor: string }> = ({ text, fromColor, toColor }) => {
  const [lockedAt, setLockedAt] = useState<number | null>(0);
  const [lastColorTime, setLastColorTime] = useState<number>(0);
  const lockedStickyRef = useRef<HTMLSpanElement>(null);
  const [allowColoring, setAllowColoring] = useState(false);

  const isMobileView = useIsMobile();

  useEffect(() => {
    // at what yPosition should we stick?
    const stickyAtYPos = 100;

    // browser, do not remember scroll positions for me
    history.scrollRestoration = 'manual';

    // a flag that is set later (yPos to lock the scroll at)
    // + lastTime we colored a span
    const handleScroll = () => {
      if (!lockedStickyRef.current) return;
      // if scroll is locked and the user scrolls down
      // and time enough between coloring characters
      if (!allowColoring && elementViewportOverlap(lockedStickyRef.current) > 0) {
        setAllowColoring(true);
      }
      if (allowColoring || (lockedAt && window.scrollY > lockedAt)) {
        // find the first uncolored span
        const spans = Array.from(lockedStickyRef.current.querySelectorAll('span'))
          .filter((x) => !x.classList.contains('colored'))
          .slice(0, 2);
        for (const span of spans) {
          // color it and remember when we did that
          if (span) {
            span.classList.add('colored');
            span.setAttribute('style', `color: ${toColor};`);
          }
        }
        setLastColorTime(Date.now());
        // if no more spans to color, release the scroll lock
        if (spans.length === 0) setLockedAt(null);
      }
      // if locked, then don't allow scroll down
      lockedAt && window.scrollY > lockedAt && window.scrollTo(0, lockedAt);
      // get the stickycolor elements
      // loop through them
      // if we have a lock already do nothing
      if (lockedAt) {
        return;
      }
      // check if the sticky should stick :)
      if (
        !isMobileView &&
        lockedStickyRef.current.getBoundingClientRect().top < stickyAtYPos &&
        !lockedStickyRef.current.classList.contains('locked')
      ) {
        // remember y pos to lock scroll at + locked sticky
        setLockedAt(window.scrollY);
        // add class signaling that we are locked
        lockedStickyRef.current.classList.add('locked');
      }
    };

    // listen to the scroll event of the window
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [allowColoring, isMobileView, lastColorTime, lockedAt, toColor]);

  return (
    <span style={{ color: fromColor }} ref={lockedStickyRef}>
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
    </span>
  );
};

const Memo = memo(TextColorTransition);
export { Memo as TextColorTransition };
