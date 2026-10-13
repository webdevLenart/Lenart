import { skillGroups } from '../../data/skills.js';
import SectionIntro from '../ui/SectionIntro.jsx';
import { skillIcons } from './skillIcons.js';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="section skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionIntro
          index="02"
          label="Skills"
          headingId="skills-title"
          aside={
            <p>
              A focused toolkit for building fast, accessible and well-crafted interfaces, and a
              growing interest in what AI makes possible.
            </p>
          }
        >
          What I work <span className="serif-accent">with.</span>
        </SectionIntro>

        <div className="skills__grid">
          {skillGroups.map((group, index) => {
            const GroupIcon = skillIcons[group.icon];
            return (
              <article
                key={group.id}
                className="skill-group"
                aria-labelledby={`skill-${group.id}`}
                data-reveal
                style={{ '--reveal-delay': `${index * 90}ms` }}
              >
                <div className="skill-group__head">
                  {GroupIcon ? (
                    <span className="skill-group__icon">
                      <GroupIcon size={20} strokeWidth={1.75} aria-hidden="true" />
                    </span>
                  ) : null}
                  <span className="skill-group__index serif-accent" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 id={`skill-${group.id}`} className="skill-group__title">
                  {group.title}
                </h3>
                <p className="skill-group__summary">{group.summary}</p>
                <ul className="skill-list">
                  {group.items.map((item) => {
                    const ItemIcon = item.icon ? skillIcons[item.icon] : null;
                    return (
                      <li key={item.name} className={`skill ${ItemIcon ? 'skill--tech' : ''}`}>
                        {ItemIcon ? (
                          <span className="skill__icon">
                            <ItemIcon size={17} strokeWidth={1.75} aria-hidden="true" />
                          </span>
                        ) : (
                          <span className="skill__dot" aria-hidden="true" />
                        )}
                        {item.name}
                      </li>
                    );
                  })}
                </ul>
              </article>
            );
          })}
        </div>

        <p className="skills__note" data-reveal>
          <span className="serif-accent">Always learning</span> — this list grows as I do.
        </p>
      </div>
    </section>
  );
}
