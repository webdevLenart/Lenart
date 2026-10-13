import { useEffect, useState } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Steps through `count` items once, holding each for `interval` ms, and
 * stops on the last one. Pauses while the tab is hidden so the sequence
 * isn't missed, and starts on the final item when motion is reduced.
 */
export function useWordCycle(count, { interval = 2300, firstHold = 3200 } = {}) {
  const [index, setIndex] = useState(() => (prefersReducedMotion() ? count - 1 : 0));

  useEffect(() => {
    if (index >= count - 1) return undefined;

    let timer;
    const advance = () => {
      if (document.hidden) {
        timer = window.setTimeout(advance, 400);
        return;
      }
      setIndex((current) => Math.min(current + 1, count - 1));
    };

    timer = window.setTimeout(advance, index === 0 ? firstHold : interval);
    return () => window.clearTimeout(timer);
  }, [index, count, interval, firstHold]);

  return index;
}
