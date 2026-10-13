import { useEffect, useState } from 'react';

const LEAVE_MS = 600;

/**
 * Shows `words[index]` and animates between words: the previous word lifts
 * away while the next one settles in and the underline redraws beneath it.
 */
export default function RotatingWord({ words, index }) {
  const [initialIndex] = useState(index);
  const [state, setState] = useState({ index, leaving: null });

  // Keep the outgoing word in the same render as the incoming one, so the
  // two cross-fade without a blank frame in between.
  if (state.index !== index) {
    setState({ index, leaving: state.index });
  }

  useEffect(() => {
    if (state.leaving === null) return undefined;
    const timer = window.setTimeout(() => setState((s) => ({ ...s, leaving: null })), LEAVE_MS);
    return () => window.clearTimeout(timer);
  }, [state.leaving]);

  const isIntro = index === initialIndex;

  return (
    <span className="rotator">
      {state.leaving !== null ? (
        <span key={`leaving-${state.leaving}`} className="rotator__word rotator__word--leaving serif-accent">
          {words[state.leaving]}.
        </span>
      ) : null}
      <span
        key={`current-${index}`}
        className={`rotator__word serif-accent${isIntro ? '' : ' rotator__word--entering'}`}
      >
        {words[index]}.
      </span>
      <svg
        key={`swash-${index}`}
        className={`hero__swash${isIntro ? ' hero__swash--intro' : ''}`}
        viewBox="0 0 400 24"
        preserveAspectRatio="none"
        focusable="false"
      >
        <path d="M5 17C90 8 214 4 395 12" pathLength="1" />
      </svg>
    </span>
  );
}
