/**
 * "LI" monogram drawn with simple geometric strokes, shared by the header,
 * footer and favicon so the mark is identical everywhere.
 */
export default function Monogram({ size = 36, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 40 40"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="40" height="40" rx="12" fill="var(--charcoal)" />
      <path d="M13 11v18h9" fill="none" stroke="var(--ivory)" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M27 11v18" fill="none" stroke="var(--sand)" strokeWidth="3.2" strokeLinecap="round" />
    </svg>
  );
}
