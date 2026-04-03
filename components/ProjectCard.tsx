// OLD DESIGN - COMMENTED OUT
// 'use client';
// 
// import React, { CSSProperties, useEffect } from 'react';
// import styles from '@/styles/components/ProjectCard.module.scss';
// import { CvData, Project } from '@/data/cv-data';
// 
// interface ProjectCardProps {
//   project: Project;
//   isLight: boolean
//   lang: keyof CvData
// }
// 
// export const ProjectCard: React.FC<ProjectCardProps> = ({ project, isLight, lang }) => {
//   useEffect(() => {
//     console.log("THIS", project)
//   }, [project])
//   return (
//     <div className={`${styles.card} ${!isLight ? styles.dark : ""}`}>
//       {project.image && (
//         <div
//           className={styles.backgroundImage}
//           style={{ backgroundImage: `url(${project.image})` } as CSSProperties}
//         />
//       )}
// 
//       <div className={styles.overlay} />
// 
//       <div className={styles.content}>
//         <h3 className={styles.title}>{project.title}</h3>
//         <p className={styles.description}>{project.description}</p>
// 
//         <ul className={styles.highlights}>
//           {project.highlights.map((highlight, index) => (
//             <li key={index}>{highlight}</li>
//           ))}
//         </ul>
// 
//         <div className={styles.technologies}>
//           {project.technologies.map((tech) => (
//             <span key={tech} className={styles.tag}>
//               {tech}
//             </span>
//           ))}
//         </div>
//       </div>
// 
//       {project.link && (
//         <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
//           { lang === "fr" ? "Voir le site" : "Visit the website" } →
//         </a>
//       )}
//     </div>
//   );
// };
