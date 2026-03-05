'use client';

import React from 'react';
import styles from '@/styles/components/SkillsSection.module.scss';
import { Skill } from '@/data/cv-data';

interface SkillsSectionProps {
  skills: Skill[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <div className={styles.container}>
      {skills.map((skillGroup) => (
        <div key={skillGroup.id} className={styles.skillGroup}>
          <h3 className={styles.category}>{skillGroup.category}</h3>
          <div className={styles.items}>
            {skillGroup.items.map((item) => (
              <span key={item} className={styles.skill}>
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
