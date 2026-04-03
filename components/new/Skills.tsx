'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { cvData, Skill as SkillType } from '@/data/cv-data';
import { Code, Server, Wrench, Users } from 'lucide-react';
import styles from './Skills.module.scss';

const categoryIcons: Record<string, React.ReactNode> = {
  Frontend: <Code />,
  Backend: <Server />,
  'Tools & Processes': <Wrench />,
  'Outils & Processus': <Wrench />,
  'Soft Skills': <Users />,
  'Compétences Transversales': <Users />,
};

export function Skills() {
  const { language } = useLanguage();
  const t = translations[language];
  const data = cvData[language];

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            {t.skills.title}
          </h2>
          <div className={styles.titleUnderline} />
          <p className={styles.subtitle}>
            {t.skills.subtitle}
          </p>
        </div>

        <div className={styles.skillsGrid}>
          {data.skills.map((skillGroup: SkillType, index: number) => (
            <div
              key={skillGroup.id}
              className={styles.skillCard}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={styles.skillHeader}>
                <div className={styles.iconContainer}>
                  {categoryIcons[skillGroup.category] || <Code />}
                </div>
                <h3 className={styles.categoryTitle}>
                  {skillGroup.category}
                </h3>
              </div>

              <div className={styles.skillsList}>
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className={styles.skillTag}
                  >
                    {skill}
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
