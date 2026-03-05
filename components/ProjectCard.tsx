'use client';

import React from 'react';
import styles from '@/styles/components/ProjectCard.module.scss';
import { CvData, Project } from '@/data/cv-data';

interface ProjectCardProps {
  project: Project;
  isLight: boolean
  lang: keyof CvData
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, isLight, lang }) => {
  return (
    <div className={`${styles.card} ${!isLight ? styles.dark : ""}`}>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>

      <ul className={styles.highlights}>
        {project.highlights.map((highlight, index) => (
          <li key={index}>{highlight}</li>
        ))}
      </ul>

      <div className={styles.technologies}>
        {project.technologies.map((tech) => (
          <span key={tech} className={styles.tag}>
            {tech}
          </span>
        ))}
      </div>

      <div className={styles.links}>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
            { lang === "fr" ? "Voir le site" : "Visit the website" } →
          </a>
        )}
        {/* {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
            Code source →
          </a>
        )} */}
      </div>
    </div>
  );
};
