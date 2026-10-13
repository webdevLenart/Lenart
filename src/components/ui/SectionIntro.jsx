import './SectionIntro.css';

/**
 * Editorial section opener: numbered label, rule and heading.
 */
export default function SectionIntro({ index, label, headingId, children, aside, className = '' }) {
  return (
    <header className={`section-intro ${className}`}>
      <p className="section-intro__label" data-reveal>
        <span className="section-intro__index serif-accent">{index}</span>
        <span className="section-intro__rule" aria-hidden="true" />
        <span className="section-intro__text">{label}</span>
      </p>
      <div className="section-intro__body">
        <h2 id={headingId} className="section-intro__heading" data-reveal style={{ '--reveal-delay': '80ms' }}>
          {children}
        </h2>
        {aside ? (
          <div className="section-intro__aside" data-reveal style={{ '--reveal-delay': '160ms' }}>
            {aside}
          </div>
        ) : null}
      </div>
    </header>
  );
}
