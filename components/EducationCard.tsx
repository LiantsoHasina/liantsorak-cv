'use client';

import React from 'react';
import styles from '@/styles/components/EducationCard.module.scss';
import { Education } from '@/data/cv-data';

interface EducationCardProps {
  education: Education;
}

export const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.degree}>{education.degree}</h3>
          <p className={styles.institution}>{education.institution}</p>
        </div>
        <span className={styles.year}>{education.graduationDate}</span>
      </div>
      <p className={styles.location}>{education.location}</p>
      {education.gpa && <p className={styles.gpa}>GPA: {education.gpa}</p>}
    </div>
  );
};
