import { ArrowUpRight, Mail, Send } from 'lucide-react';
import { site } from '../../data/site.js';
import Button from '../ui/Button.jsx';
import SocialLinks from '../ui/SocialLinks.jsx';
import '../ui/SectionIntro.css';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact__panel">
          <span className="contact__sun" aria-hidden="true" />

          <div className="contact__main">
            <p className="section-intro__label" data-reveal>
              <span className="section-intro__index serif-accent">04</span>
              <span className="section-intro__rule" aria-hidden="true" />
              <span className="section-intro__text">Contact</span>
            </p>

            <h2 id="contact-title" className="contact__title" data-reveal style={{ '--reveal-delay': '80ms' }}>
              <span className="contact__title-line">Have something</span>{' '}
              <span className="contact__title-line serif-accent">in mind?</span>
            </h2>

            <p className="contact__text" data-reveal style={{ '--reveal-delay': '140ms' }}>
              Have an idea for a website, a digital experience, or an AI-powered project? Let’s talk
              about it and see what we can create.
            </p>

            <div className="contact__actions" data-reveal style={{ '--reveal-delay': '200ms' }}>
              <Button href={site.social.instagram.messageUrl} external icon={Send}>
                Let’s Talk
              </Button>
              {site.email ? (
                <Button href={`mailto:${site.email}`} variant="secondary" iconLeading={Mail}>
                  {site.email}
                </Button>
              ) : null}
            </div>

            <p className="contact__hint" data-reveal style={{ '--reveal-delay': '240ms' }}>
              Opens a direct message on Instagram, the quickest way to reach me.
            </p>
          </div>

          <aside className="contact__aside" aria-labelledby="contact-elsewhere" data-reveal style={{ '--reveal-delay': '160ms' }}>
            <h3 id="contact-elsewhere" className="contact__aside-title">
              Find me online
              <ArrowUpRight size={16} aria-hidden="true" />
            </h3>
            <SocialLinks variant="rows" />
          </aside>
        </div>
      </div>
    </section>
  );
}
