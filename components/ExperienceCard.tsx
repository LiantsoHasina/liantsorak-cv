'use client';

import React from 'react';
import styles from '@/styles/components/ExperienceCard.module.scss';
import { Experience } from '@/data/cv-data';

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <h3 className={styles.role}>{experience.role}</h3>
          <p className={styles.company}>{experience.company}</p>
        </div>
        <div className={styles.dateSection}>
          <span className={styles.date}>
            {experience.startDate} – {experience.current ? 'Présent' : experience.endDate}
          </span>
          {experience.current && <span className={styles.badge}>En cours</span>}
        </div>
      </div>

      <p className={styles.location}>{experience.location}</p>

      <ul className={styles.description}>
        {experience.description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div className={styles.technologies}>
        {experience.technologies.map((tech) => (
          <span key={tech} className={styles.tag}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
