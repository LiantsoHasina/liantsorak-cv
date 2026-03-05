'use client';

import React, { use, useEffect, useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { SectionHeader } from '@/components/SectionHeader';
import { ExperienceCard } from '@/components/ExperienceCard';
import { ProjectCard } from '@/components/ProjectCard';
import { SkillsSection } from '@/components/SkillsSection';
import { EducationCard } from '@/components/EducationCard';
import { cvData } from '@/data/cv-data';
import styles from '@/styles/Portfolio.module.scss';
import { usePathname, useRouter } from 'next/navigation';
import Header from '@/components/Header';

export default function Portfolio() {
  const { push } = useRouter()

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 50)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => {    
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className={styles.portfolio}>     
      <div className={`${styles.toTop} ${visible ? styles.visible : ''}`} onClick={scrollTop} />
      <Sidebar
        name={cvData.personal.name}
        title={cvData.personal.title}
        bio={cvData.personal.bio}
        contact={cvData.contact}
        to={(val) => push(val)}
      />

      <main className={styles.main}>
        {/* Summary Section */}        
        <section className={styles.section}>
          <SectionHeader title="À propos" />
          <p className={styles.summary}>{cvData.summary}</p>
        </section>

        {/* Experience Section */}
        <section id='xp' className={styles.section}>
          <SectionHeader title="Expérience" subtitle="Parcours professionnel" />
          <div className={styles.content}>
            {cvData.experiences.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id='projet' className={styles.section}>
          {/* <SectionHeader title="Projets" subtitle="Travaux récents et réalisations" /> */}
          <SectionHeader title="Projets" subtitle="Top réalisations" />
          <div className={styles.projectsGrid}>
            {cvData.projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id='skills' className={styles.section}>
          <SectionHeader title="Compétences" subtitle="Technologies et savoir-faire" />
          <SkillsSection skills={cvData.skills} />
        </section>

        {/* Education Section */}
        <section id='formation' className={styles.section}>
          <SectionHeader title="Formation" subtitle="Études et certifications" />
          <div className={styles.education}>
            {cvData.education.map((edu) => (
              <EducationCard key={edu.id} education={edu} />
            ))}
          </div>
        </section>

        {/* Footer */}
        {/* <footer className={styles.footer}>
          <p>© {new Date().getFullYear()} {cvData.personal.name}. Tous droits réservés.</p>
          <p className={styles.footerNote}>Créé avec React, TypeScript et SCSS</p>
        </footer> */}
      </main>
    </div>
  );
}
