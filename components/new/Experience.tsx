'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { cvData, Experience as ExperienceType } from '@/data/cv-data';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import styles from './Experience.module.scss';

export function Experience() {
  const { language } = useLanguage();
  const t = translations[language];
  const data = cvData[language];

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            {t.experience.title}
          </h2>
          <div className={styles.titleUnderline} />
          <p className={styles.subtitle}>
            {t.experience.subtitle}
          </p>
        </div>

        <div className={styles.experienceList}>
          {data.experiences.map((exp: ExperienceType, index: number) => (
            <div
              key={exp.id}
              className={styles.experienceCard}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={styles.experienceHeader}>
                <div className={styles.experienceInfo}>
                  <h3 className={styles.role}>
                    {exp.role}
                  </h3>
                  <div className={styles.companyRow}>
                    <Briefcase />
                    <span className={styles.company}>
                      {exp.company}
                    </span>
                  </div>
                  <div className={styles.locationRow}>
                    <MapPin />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <div className={styles.dateRange}>
                  <Calendar />
                  <span>
                    {exp.startDate} - {exp.current ? t.experience.present : exp.endDate}
                  </span>
                </div>
              </div>

              <ul className={styles.descriptionList}>
                {exp.description.map((desc, i) => (
                  <li
                    key={i}
                    className={styles.descriptionItem}
                  >
                    <span className={styles.bullet} />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.technologies}>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={styles.techTag}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
