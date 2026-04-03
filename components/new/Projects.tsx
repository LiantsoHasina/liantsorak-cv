'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { cvData, Project as ProjectType } from '@/data/cv-data';
import { ExternalLink } from 'lucide-react';
import styles from './Projects.module.scss';

export function Projects() {
  const { language } = useLanguage();
  const t = translations[language];
  const data = cvData[language];

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            {t.projects.title}
          </h2>
          <div className={styles.titleUnderline} />
          <p className={styles.subtitle}>
            {t.projects.subtitle}
          </p>
        </div>

        <div className={styles.projectGrid}>
          {data.projects.map((project: ProjectType, index: number) => (
            <div
              key={project.id}
              className={styles.projectCard}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={styles.projectHeader}>
                <h3 className={styles.projectTitle}>
                  {project.title}
                </h3>
              </div>

              <p className={styles.projectDescription}>
                {project.description}
              </p>

              {project.highlights && project.highlights.length > 0 && (
                <div className={styles.highlightsSection}>
                  <h4 className={styles.highlightsTitle}>
                    {t.projects.highlights}
                  </h4>
                  <ul className={styles.highlightsList}>
                    {project.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className={styles.highlightItem}
                      >
                        <span className={styles.highlightBullet} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className={styles.technologies}>
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={styles.techTag}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className={styles.projectActions}>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    <ExternalLink />
                    {t.projects.viewProject}
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.githubLink}
                  >
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
