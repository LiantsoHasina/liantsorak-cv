'use client';

import React, { use, useEffect, useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { SectionHeader } from '@/components/SectionHeader';
import { ExperienceCard } from '@/components/ExperienceCard';
import { ProjectCard } from '@/components/ProjectCard';
import { SkillsSection } from '@/components/SkillsSection';
import { EducationCard } from '@/components/EducationCard';
import { CvData, cvData } from '@/data/cv-data';
import styles from '@/styles/Portfolio.module.scss';
import { usePathname, useRouter } from 'next/navigation';
import Header from '@/components/Header';
import { Toggle } from '@/components/ui/toggle';
import { Education, Experience, Project } from '@/data/cv-data';

export default function Portfolio() {
  const { push } = useRouter()
  const [isLight, setIsLight] = useState(true)
  const [visible, setVisible] = useState(false)
  const [language, setLanguage] = useState<keyof CvData>("fr")

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
    <div className={`${styles.portfolio} ${!isLight ? styles.dark : ''}`}>     
      <div className={`${styles.toTop} ${visible ? styles.visible : ''}`} onClick={scrollTop} />
      <Sidebar
        name={cvData[language].personal.name}
        title={cvData[language].personal.title}
        bio={cvData[language].personal.bio}
        contact={cvData[language].contact}
        language={language}
        to={(val) => push(val)}
      />

      <main className={styles.main}>
        {/* Summary Section */}        
        <div className={styles.options}>
          <Toggle variant={"outline"} onClick={() => setIsLight(!isLight)}>
            <div className={`${styles.mode} ${isLight ? styles.light : styles.dark}`} />
          </Toggle>
          <div className={`${styles.lang} ${!isLight ? styles.dark : ""}`} 
            onClick={() => setLanguage(prev => prev === "fr" ? "eng" : "fr")}
          >
            { language === "fr" ? "eng" : "fr" }
          </div>
        </div>
        <section className={styles.section}>
          <SectionHeader title={language === "fr" ? "À propos": "About" } isLight={isLight} />
          <p className={`${styles.summary} ${!isLight ? styles.dark : ""}`}>{cvData[language].summary}</p>
        </section>

        {/* Experience Section */}
        <section id='xp' className={styles.section}>
          <SectionHeader title={language === "fr" ? "Expérience": "Experience" } subtitle={`${language === "fr" ? "Parcours professionnel" : "Professional experience"}`} isLight={isLight} />
          <div className={styles.content}>
            {(cvData[language].experiences as Experience[]).map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id='projet' className={styles.section}>
          {/* <SectionHeader title="Projets" subtitle="Travaux récents et réalisations" /> */}
          <SectionHeader title={language === "fr" ? "Projets": "Projects" }
            subtitle={`${language === "fr" ? "Top réalisations" : "Top projects"}`} 
            isLight={isLight} 
          />
          <div className={styles.projectsGrid}>
            {(cvData[language].projects as Project[]).map((project) => (
              <ProjectCard key={project.id} project={project} isLight={isLight} lang={language} />
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id='skills' className={styles.section}>
          <SectionHeader 
            title={language === "fr" ? "Compétences": "Skills" } 
            subtitle={`${language === "fr" ? "Technologies et savoir-faire" : "Technologies & Skills"}`}
            isLight={isLight} 
          />
          <SkillsSection skills={cvData[language].skills} isLight={isLight} />
        </section>

        {/* Education Section */}
        <section id='formation' className={styles.section}>
          <SectionHeader 
            title={language === "fr" ? "Formation": "Education" } 
            subtitle={`${language === "fr" ? "Études et certifications" : "Education & Certifications"}`} 
            isLight={isLight} 
          />
          <div className={styles.education}>
            {(cvData[language].education as Education[]).map((edu) => (
              <EducationCard key={edu.id} education={edu} />
            ))}
          </div>
        </section>

        {/* Footer */}
        {/* <footer className={styles.footer}>
          <p>© {new Date().getFullYear()} {cvData[language].personal.name}. Tous droits réservés.</p>
          <p className={styles.footerNote}>Créé avec React, TypeScript et SCSS</p>
        </footer> */}
      </main>
    </div>
  );
}
