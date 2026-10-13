import { useEffect, useRef, useState } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Loops through `count` items, holding each for `interval` ms (the first
 * one a little longer while the page loads in). Waits while `paused` is
 * true or the tab is hidden. When motion is reduced it stays on the last
 * item and never advances.
 */
export function useWordCycle(count, { interval = 2300, firstHold = 3200, paused = false } = {}) {
  const [reduceMotion] = useState(prefersReducedMotion);
  const [index, setIndex] = useState(() => (reduceMotion ? count - 1 : 0));
  const hasAdvanced = useRef(false);

  useEffect(() => {
    if (reduceMotion || paused || count < 2) return undefined;

    let timer;
    const advance = () => {
      if (document.hidden) {
        timer = window.setTimeout(advance, 400);
        return;
      }
      hasAdvanced.current = true;
      setIndex((current) => (current + 1) % count);
    };

    timer = window.setTimeout(advance, hasAdvanced.current ? interval : firstHold);
    return () => window.clearTimeout(timer);
  }, [index, count, interval, firstHold, paused, reduceMotion]);

  return { index, animated: !reduceMotion && count > 1 };
}
