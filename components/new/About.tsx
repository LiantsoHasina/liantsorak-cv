'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { cvData } from '@/data/cv-data';
import styles from './About.module.scss';

export function About() {
  const { language } = useLanguage();
  const t = translations[language];
  const data = cvData[language];

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            {t.about.title}
          </h2>
          <div className={styles.titleUnderline} />
        </div>

        <div className={styles.card}>
          <p className={styles.summary}>
            {data.summary}
          </p>
        </div>
      </div>
    </section>
  );
}
