import { ArrowUpRight } from 'lucide-react';
import { projects } from '../../data/projects.js';
import { site } from '../../data/site.js';
import ExternalLink from '../ui/ExternalLink.jsx';
import SectionIntro from '../ui/SectionIntro.jsx';
import ProjectShowcase from './ProjectShowcase.jsx';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="section projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionIntro
          index="03"
          label="Projects"
          headingId="projects-title"
          aside={
            <p>
              {projects.length === 1
                ? 'One project, presented in full. New work will join it here as it launches.'
                : 'Selected projects, each presented with the thinking behind it.'}
            </p>
          }
        >
          Featured <span className="serif-accent">work.</span>
        </SectionIntro>

        <div className="projects__list">
          {projects.map((project, index) => (
            <ProjectShowcase key={project.slug} project={project} index={index} />
          ))}
        </div>

        <div className="projects__more" data-reveal>
          <p>More projects are on the way. Until then, you can follow what I’m building on GitHub.</p>
          <ExternalLink href={site.social.github.url} className="text-link">
            View My GitHub
            <ArrowUpRight size={16} data-arrow aria-hidden="true" />
          </ExternalLink>
        </div>
      </div>
    </section>
  );
}
