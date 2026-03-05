'use client';

import React from 'react';
import styles from '@/styles/components/ProjectCard.module.scss';
import { Project } from '@/data/cv-data';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={styles.card}>
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
            Voir le site →
          </a>
        )}
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
            Code source →
          </a>
        )}
      </div>
    </div>
  );
};
