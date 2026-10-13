import { ArrowUpRight } from 'lucide-react';
import { site } from '../../data/site.js';
import { GitHubIcon, InstagramIcon } from './BrandIcons.jsx';
import ExternalLink from './ExternalLink.jsx';
import './SocialLinks.css';

const links = [
  { ...site.social.github, cta: 'View My GitHub', Icon: GitHubIcon },
  { ...site.social.instagram, cta: 'Follow Me on Instagram', Icon: InstagramIcon },
];

/**
 * GitHub and Instagram links. `variant="rows"` shows the handle beneath each
 * label for roomier layouts; `variant="inline"` keeps them compact.
 */
export default function SocialLinks({ variant = 'inline', className = '' }) {
  return (
    <ul className={`social-links social-links--${variant} ${className}`}>
      {links.map(({ label, handle, url, cta, Icon }) => (
        <li key={label}>
          <ExternalLink href={url} className="social-link">
            <span className="social-link__icon">
              <Icon size={18} />
            </span>
            <span className="social-link__text">
              <span className="social-link__label">{cta}</span>
              {variant === 'rows' ? <span className="social-link__handle">@{handle}</span> : null}
            </span>
            <ArrowUpRight className="social-link__arrow" size={18} aria-hidden="true" />
          </ExternalLink>
        </li>
      ))}
    </ul>
  );
}
