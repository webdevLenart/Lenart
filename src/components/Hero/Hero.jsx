import { ArrowDown, ArrowRight } from 'lucide-react';
import Button from '../ui/Button.jsx';
import HeroArtwork from './HeroArtwork.jsx';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow hero__eyebrow hero-enter" style={{ '--enter-delay': '60ms' }}>
            <span className="hero__eyebrow-mark" aria-hidden="true" />
            Hello, I’m Lenart Ismaili
          </p>

          <h1 id="hero-title" className="hero__title">
            <span className="hero__line hero-enter" style={{ '--enter-delay': '140ms' }}>
              Building for the web.
            </span>{' '}
            <span className="hero__line hero-enter" style={{ '--enter-delay': '240ms' }}>
              <span className="hero__nowrap">Creating for</span>{' '}
              <span className="hero__accent">
                <span className="serif-accent">people.</span>
                <svg className="hero__swash" viewBox="0 0 220 24" preserveAspectRatio="none" aria-hidden="true" focusable="false">
                  <path d="M3 17C48 8 118 4 217 12" />
                </svg>
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
          <HeroArtwork />
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
