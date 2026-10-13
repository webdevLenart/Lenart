import { ArrowUpRight } from 'lucide-react';
import { site } from '../../data/site.js';
import { GitHubIcon } from '../ui/BrandIcons.jsx';
import ExternalLink from '../ui/ExternalLink.jsx';
import SectionIntro from '../ui/SectionIntro.jsx';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container">
        <SectionIntro index="01" label="About" headingId="about-title">
          A little <span className="serif-accent">about</span> me.
        </SectionIntro>

        <div className="about__grid">
          <p className="about__lead" data-reveal>
            I’m Lenart, a developer interested in building digital experiences that look
            thoughtful, work smoothly, and make technology feel simple. From responsive websites to
            modern front-end interfaces and AI-powered ideas, I enjoy turning concepts into useful
            products.
          </p>

          <div className="about__aside" data-reveal style={{ '--reveal-delay': '100ms' }}>
            <p className="about__text">
              I care about the details people notice and the ones they don’t: layouts that adapt
              to every screen, interfaces that are easy to use, and code that stays clean as a
              project grows. I’m also exploring how AI can make digital products more helpful, and
              I’m always learning something new along the way.
            </p>
            <ExternalLink href={site.social.github.url} className="about__github text-link">
              <GitHubIcon size={18} />
              View My GitHub
              <ArrowUpRight size={16} data-arrow aria-hidden="true" />
            </ExternalLink>
          </div>
        </div>
      </div>
    </section>
  );
}
