/**
 * Link that opens in a new tab with safe rel attributes and an
 * announcement for screen reader users.
 */
export default function ExternalLink({ href, children, ...props }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
      <span className="visually-hidden"> (opens in a new tab)</span>
    </a>
  );
}
