import { ArrowUp } from 'lucide-react';
import { navigation } from '../../data/navigation.js';
import { site } from '../../data/site.js';
import { GitHubIcon, InstagramIcon } from '../ui/BrandIcons.jsx';
import ExternalLink from '../ui/ExternalLink.jsx';
import Monogram from '../ui/Monogram.jsx';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <a href="#home" className="site-footer__wordmark" aria-label={`${site.name}, back to top`}>
              <Monogram size={44} />
              <span aria-hidden="true">{site.name}</span>
            </a>
            <p className="site-footer__roles">{site.roles.join(' · ')}</p>
          </div>

          <nav className="site-footer__column" aria-labelledby="footer-nav-title">
            <h2 id="footer-nav-title" className="site-footer__heading">
              Navigate
            </h2>
            <ul className="site-footer__links">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="site-footer__link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer__column">
            <h2 className="site-footer__heading">Follow</h2>
            <ul className="site-footer__links">
              <li>
                <ExternalLink href={site.social.github.url} className="site-footer__link">
                  <GitHubIcon size={16} />
                  GitHub
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href={site.social.instagram.url} className="site-footer__link">
                  <InstagramIcon size={16} />
                  Instagram
                </ExternalLink>
              </li>
            </ul>
          </div>
        </div>

        <p className="site-footer__closing serif-accent">Built with care, one detail at a time.</p>

        <div className="site-footer__bottom">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <a href="#home" className="site-footer__top-link">
            Back to top
            <ArrowUp size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
