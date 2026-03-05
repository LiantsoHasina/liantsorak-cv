'use client';

import React from 'react';
import styles from '@/styles/components/SectionHeader.module.scss';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  isLight: boolean
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, isLight }) => {
  return (
    <div className={`${styles.header} ${!isLight ? styles.dark : ""}`}>
      <h2 className={`${styles.title} `}>{title}</h2>
      {subtitle && <p className={`${styles.subtitle} `}>{subtitle}</p>}
      <div className={styles.divider}></div>
    </div>
  );
};
