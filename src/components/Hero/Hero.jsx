import { ArrowDown, ArrowRight } from 'lucide-react';
import { site } from '../../data/site.js';
import { useWordCycle } from '../../hooks/useWordCycle.js';
import Button from '../ui/Button.jsx';
import HeroArtwork from './HeroArtwork.jsx';
import RotatingWord from './RotatingWord.jsx';
import './Hero.css';

const audiences = site.heroAudiences;
const lastAudience = audiences[audiences.length - 1];
const audienceSentence = `${audiences.slice(0, -1).join(', ')} and ${lastAudience}`;

export default function Hero() {
  const audienceIndex = useWordCycle(audiences.length);

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow hero__eyebrow hero-enter" style={{ '--enter-delay': '60ms' }}>
            <span className="hero__eyebrow-mark" aria-hidden="true" />
            Hello, I’m Lenart Ismaili
          </p>

          <h1 id="hero-title" className="hero__title">
            {/* One stable sentence for screen readers and search engines */}
            <span className="visually-hidden">
              Building for the web. Creating for {audienceSentence}.
            </span>
            <span aria-hidden="true">
              <span className="hero__line hero-enter" style={{ '--enter-delay': '140ms' }}>
                Building for the web.
              </span>
              <span className="hero__line hero-enter" style={{ '--enter-delay': '240ms' }}>
                Creating for
              </span>
              <span className="hero__line hero-enter" style={{ '--enter-delay': '320ms' }}>
                <RotatingWord words={audiences} index={audienceIndex} />
              </span>
            </span>
          </h1>

          <p className="hero__intro hero-enter" style={{ '--enter-delay': '340ms' }}>
            I’m a Web Developer, Front-End Developer, and AI Developer passionate about building
            thoughtful digital experiences with clean code, intuitive design, and modern technology.
          </p>

          <div className="hero__actions hero-enter" style={{ '--enter-delay': '440ms' }}>
            <Button href="#projects" icon={ArrowRight}>
              Explore My Work
            </Button>
            <Button href="#contact" variant="secondary">
              Let’s Connect
            </Button>
          </div>
        </div>

        <div className="hero__visual hero-enter" style={{ '--enter-delay': '260ms' }}>
          <HeroArtwork audience={audiences[audienceIndex]} />
        </div>

        <div className="hero__footer hero-enter" style={{ '--enter-delay': '560ms' }}>
          <p className="hero__disciplines">Web Development · Front-End · AI</p>
          <a href="#about" className="hero__scroll">
            <span>Scroll to explore</span>
            <ArrowDown size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
