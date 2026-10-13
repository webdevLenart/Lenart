import { ArrowUpRight, Lock } from 'lucide-react';
import Button from '../ui/Button.jsx';

const base = import.meta.env.BASE_URL;

function srcSet({ src, widths }) {
  return widths.map((width) => `${base}${src}-${width}.webp ${width}w`).join(', ');
}

function largest({ src, widths }) {
  return `${base}${src}-${Math.max(...widths)}.webp`;
}

/**
 * Editorial case-study layout for a single project: a browser and phone
 * preview of the live site, followed by the story behind it.
 */
export default function ProjectShowcase({ project, index }) {
  const { desktop, mobile } = project.preview ?? {};
  const number = String(index + 1).padStart(2, '0');
  const headingId = `project-${project.slug}`;

  return (
    <article className="project" aria-labelledby={headingId}>
      {desktop ? (
        <figure className="project__stage" data-reveal>
          <div className="browser">
            <div className="browser__bar" aria-hidden="true">
              <span className="browser__dots">
                <span />
                <span />
                <span />
              </span>
              <span className="browser__url">
                <Lock size={12} strokeWidth={2.25} />
                {project.displayUrl}
              </span>
            </div>
            <div className="browser__viewport">
              <img
                src={largest(desktop)}
                srcSet={srcSet(desktop)}
                sizes="(min-width: 1280px) 1040px, 88vw"
                width={desktop.width}
                height={desktop.height}
                alt={desktop.alt}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {mobile ? (
            <div className="phone">
              <div className="phone__screen">
                <img
                  src={largest(mobile)}
                  srcSet={srcSet(mobile)}
                  sizes="(min-width: 960px) 220px, 30vw"
                  width={mobile.width}
                  height={mobile.height}
                  alt={mobile.alt}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          ) : null}

          {/* Pointer shortcut to the live site; keyboard and screen reader users get the "Visit Live Website" button */}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project__stage-link"
            tabIndex={-1}
            aria-hidden="true"
          >
            <span className="project__visit-pill">
              Visit site
              <ArrowUpRight size={16} />
            </span>
          </a>
        </figure>
      ) : null}

      <div className="project__info">
        <div className="project__intro" data-reveal>
          <p className="project__meta">
            <span className="project__number serif-accent">{number}</span>
            <span>{project.category}</span>
          </p>
          <h3 id={headingId} className="project__name">
            {project.name}
          </h3>
          <p className="project__description">{project.description}</p>
          <Button href={project.url} external icon={ArrowUpRight} className="project__cta">
            Visit Live Website
          </Button>
        </div>

        <div className="project__story" data-reveal style={{ '--reveal-delay': '100ms' }}>
          {project.details?.length ? (
            <dl className="project__details">
              {project.details.map((detail) => (
                <div key={detail.title} className="project__detail">
                  <dt>{detail.title}</dt>
                  <dd>{detail.text}</dd>
                </div>
              ))}
            </dl>
          ) : null}

          {project.highlights?.length ? (
            <ul className="project__highlights" aria-label="Highlights">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          ) : null}

          {project.tags?.length ? (
            <ul className="project__tags" aria-label="Tags">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </article>
  );
}
