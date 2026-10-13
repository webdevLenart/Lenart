import { ArrowUpRight } from 'lucide-react';
import { site } from '../../data/site.js';
import { GitHubIcon } from '../ui/BrandIcons.jsx';
import ExternalLink from '../ui/ExternalLink.jsx';
import SectionIntro from '../ui/SectionIntro.jsx';
import './About.css';

const principles = [
  {
    title: 'Thoughtful design',
    text: 'Every layout starts with what people need to see, read and do.',
  },
  {
    title: 'Responsive development',
    text: 'Interfaces that feel natural on phones, tablets and large screens alike.',
  },
  {
    title: 'Clean code',
    text: 'Readable, reusable components that are easy to maintain and extend.',
  },
  {
    title: 'Usability',
    text: 'Clear navigation, accessible controls and no unnecessary friction.',
  },
  {
    title: 'Continuous learning',
    text: 'New tools and new ideas, with AI as a growing part of the toolkit.',
  },
];

export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container">
        <SectionIntro index="01" label="About" headingId="about-title">
          A little <span className="serif-accent">about</span> me.
        </SectionIntro>

        <div className="about__grid">
          <div className="about__story">
            <p className="about__lead" data-reveal>
              I’m Lenart, a developer interested in building digital experiences that look
              thoughtful, work smoothly, and make technology feel simple. From responsive websites
              to modern front-end interfaces and AI-powered ideas, I enjoy turning concepts into
              useful products.
            </p>
            <p className="about__text" data-reveal style={{ '--reveal-delay': '80ms' }}>
              I care about the details people notice and the ones they don’t: layouts that adapt
              to every screen, interfaces that are easy to use, and code that stays clean as a
              project grows. I’m also exploring how AI can make digital products more helpful, and
              I’m always learning something new along the way.
            </p>
            <ExternalLink
              href={site.social.github.url}
              className="about__github text-link"
              data-reveal
              style={{ '--reveal-delay': '140ms' }}
            >
              <GitHubIcon size={18} />
              View My GitHub
              <ArrowUpRight size={16} data-arrow aria-hidden="true" />
            </ExternalLink>
          </div>

          <div className="about__principles" data-reveal style={{ '--reveal-delay': '120ms' }}>
            <h3 className="about__principles-title">What I care about</h3>
            <ol className="principles">
              {principles.map((principle, index) => (
                <li key={principle.title} className="principle">
                  <span className="principle__index serif-accent" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h4 className="principle__title">{principle.title}</h4>
                    <p className="principle__text">{principle.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
