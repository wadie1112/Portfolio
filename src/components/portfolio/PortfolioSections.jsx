import {
  certifications,
  education,
  experience,
  internships,
  profile,
  projects,
  roadmap,
  skillGroups,
} from "../../data/portfolioData";
import { ui } from "../../data/uiText";
import { pick, useLanguage } from "../../hooks/useLanguage";

export function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {description && <p>{description}</p>}
    </div>
  );
}

function TechTags({ technologies }) {
  return (
    <div className="tech-tags">
      {technologies.map((technology) => <span key={technology}>{technology}</span>)}
    </div>
  );
}

export function About() {
  const language = useLanguage();
  const copy = ui[language].about;
  return (
    <section className="section about-grid" id="about">
      <div>
        <span className="eyebrow">{copy.eyebrow}</span>
        <h2>{copy.titleTop}<br />{copy.titleBottom}</h2>
      </div>
      <div className="about-copy">
        <p className="lead">{copy.lead}</p>
        <p>{copy.body}</p>
        <div className="principles">
          {copy.principles.map((principle, index) => (
            <span key={principle}><strong>0{index + 1}</strong> {principle}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  const language = useLanguage();
  const copy = ui[language].experience;
  return (
    <section className="section" id="experience">
      <SectionHeading
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />
      {experience.map((item) => (
        <article className="feature-card" key={item.id}>
          <div className="feature-meta">
            <span className="live-badge">{copy.current}</span>
            <span>{pick(item.period, language)} · {pick(item.location, language)}</span>
          </div>
          <div className="feature-content">
            <div>
              <p className="company">{item.company}</p>
              <h3>{pick(item.role, language)}</h3>
              <p>{pick(item.summary, language)}</p>
            </div>
            <ul>
              {pick(item.responsibilities, language).map((responsibility) => (
                <li key={responsibility}>{responsibility}</li>
              ))}
            </ul>
          </div>
          <TechTags technologies={item.technologies} />
        </article>
      ))}
    </section>
  );
}

export function Internships() {
  const language = useLanguage();
  const copy = ui[language].internships;
  return (
    <section className="section" id="internships">
      <SectionHeading
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />
      <div className="record-list">
        {internships.map((item, index) => (
          <details
            className="record-card"
            key={item.id}
            open={index === internships.length - 1}
          >
            <summary>
              <span className="record-index">0{index + 1}</span>
              <span>
                <strong>{pick(item.role, language)}</strong>
                <small>{item.company}</small>
              </span>
              <span className="record-period">{pick(item.period, language)}</span>
              <span className="expand-icon">+</span>
            </summary>
            <div className="record-detail">
              <div>
                <small>{copy.context}</small>
                <p>{pick(item.context, language)}</p>
              </div>
              <div>
                <small>{copy.location}</small>
                <p>{pick(item.location, language)}</p>
              </div>
              <div className="record-detail-wide">
                <small>{copy.contribution}</small>
                <p>{pick(item.contribution, language)}</p>
              </div>
              <TechTags technologies={item.technologies} />
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

export function Projects() {
  const language = useLanguage();
  const copy = ui[language].projects;
  return (
    <section className="section" id="projects">
      <SectionHeading
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />
      <div className="project-grid">
        {projects.map((project) => (
          <article
            className={project.featured ? "project-card featured" : "project-card"}
            key={project.id}
          >
            <div className="project-topline">
              <span>{pick(project.type, language)}</span>
              <span>{project.domain} · {project.year}</span>
            </div>
            <h3>{pick(project.name, language)}</h3>
            <p className="project-overview">{pick(project.description, language)}</p>
            <div className="project-visual" aria-hidden="true">
              <div className="project-visual__head">
                <span />
                <span />
                <span />
              </div>
              <div className="project-visual__bars">
                {Array.from({ length: 8 }).map((_, index) => (
                  <i key={`${project.id}-bar-${index}`} style={{ height: `${28 + ((index * 13) % 52)}%` }} />
                ))}
              </div>
              <div className="project-visual__line" />
            </div>
            <div className="project-details">
              <small>{copy.highlights}</small>
              <ul>
                {pick(project.highlights, language).map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
            <TechTags technologies={project.technologies} />
          </article>
        ))}
      </div>
    </section>
  );
}

export function QueryResults({ results }) {
  const language = useLanguage();
  const copy = ui[language].query;
  if (!results) return null;
  const count = results.matches.length;
  return (
    <section className="section results-section" id="query-results" tabIndex="-1">
      <div className="results-header">
        <div>
          <span className="eyebrow">{copy.results}</span>
          <h2>{count} {count === 1 ? copy.record : copy.records}</h2>
        </div>
        <p>
          {copy.entities[results.entity]} · {results.technology === "All technologies"
            ? copy.allTechnologies
            : results.technology}
        </p>
      </div>
      {count ? (
        <div className="result-grid">
          {results.matches.map((item) => (
            <article className="result-card" key={item.id}>
              <span>{copy.entities[item.entity]}</span>
              <h3>{pick(item.label, language)}</h3>
              {item.company && <p>{item.company}</p>}
              <TechTags technologies={item.technologies} />
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <strong>{copy.emptyTitle}</strong>
          <p>{copy.emptyBody}</p>
        </div>
      )}
    </section>
  );
}

export function Skills() {
  const language = useLanguage();
  const copy = ui[language].skills;
  return (
    <section className="section" id="skills">
      <SectionHeading
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-group" key={group.id}>
            <span>{pick(group.category, language)}</span>
            <p>{pick(group.detail, language)}</p>
            <TechTags technologies={group.skills} />
          </article>
        ))}
      </div>
    </section>
  );
}

export function Roadmap() {
  const language = useLanguage();
  const copy = ui[language].roadmap;
  return (
    <section className="section" id="roadmap">
      <SectionHeading
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />
      <div className="roadmap">
        {roadmap.map((stage, index) => (
          <article key={stage.id}>
            <div className="roadmap-marker"><span>0{index + 1}</span></div>
            <div>
              <p className="status-label">{pick(stage.status, language)}</p>
              <h3>{pick(stage.title, language)}</h3>
              <p>{pick(stage.description, language)}</p>
              <TechTags technologies={stage.items} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Credentials() {
  const language = useLanguage();
  const copy = ui[language].credentials;
  return (
    <div className="credentials-grid">
      <section className="section credential-section" id="certifications">
        <span className="eyebrow">{copy.certEyebrow}</span>
        <h2>{copy.certTitle}</h2>
        <div className="certification-list">
          {certifications.earned.map((certification) => (
            <div className="certification-card" key={certification.id}>
              <strong>{certification.name}</strong>
              <span>{pick(certification.status, language)}</span>
            </div>
          ))}
          {certifications.inProgress.map((certification) => (
            <div className="certification-card" key={certification.id}>
              <strong>{certification.name}</strong>
              <span>{pick(certification.status, language)}</span>
            </div>
          ))}
        </div>
        {certifications.inProgress.length === 0 && (
          <div className="empty-state">
            <strong>{copy.noneTitle}</strong>
            <p>{copy.noneBody}</p>
          </div>
        )}
      </section>
      <section className="section credential-section" id="education">
        <span className="eyebrow">{copy.eduEyebrow}</span>
        <h2>{pick(education.credential, language)}</h2>
        <p className="degree">{education.school}</p>
        <p>
          {copy.specialization}: {pick(education.specialization, language)}
          <br />
          {copy.graduated} {education.graduation}
        </p>
        <TechTags technologies={education.focus} />
      </section>
    </div>
  );
}

export function Contact() {
  const language = useLanguage();
  const copy = ui[language].contact;
  return (
    <section className="section contact-section" id="contact">
      <span className="eyebrow">{copy.eyebrow}</span>
      <h2>{copy.titleTop}<br />{copy.titleBottom}</h2>
      <p>{copy.body}</p>
      <div className="contact-actions">
        <a className="primary-button" href={`mailto:${profile.email}`}>{copy.cta}</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
      </div>
      <div className="contact-footer">
        <span>{profile.email}</span>
        <span>{profile.phone}</span>
        <span>{pick(profile.location, language)}</span>
      </div>
    </section>
  );
}
