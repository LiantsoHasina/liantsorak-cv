'use client';

import React, { useMemo } from 'react';
import styles from '@/styles/components/Sidebar.module.scss';
import { Contact, CvData } from '@/data/cv-data';
import Header from './Header';

interface SidebarProps {
  name: string;
  title: string;
  bio: string;
  contact: Contact;
  language: keyof CvData
  colllapse: boolean
  to: (val: string) => void
}

export const Sidebar: React.FC<SidebarProps> = ({ name, title, bio, contact, to, colllapse, language }) => {
  
  const isFrench = useMemo(() => language === "fr", [language])
  
  return (
    <aside className={`${styles.sidebar} ${colllapse ? styles.collapsed : ""}`}>
      <div className={styles.header}>
        <div className={styles.avatar}></div>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.title}>{title}</p>
      </div>

      {/* <p className={styles.bio}>{bio}</p> */}

      <Header toRef={(val) => to(val)} lang={language as "eng" | "fr"} />

      <nav className={styles.contact}>
        <h3 className={styles.contactTitle}>Contact</h3>
        <ul className={styles.contactList}>
          {contact.linkedin && (
            <li>
              <span className={styles.label}>LinkedIn</span>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                {
                  isFrench ? "Voir mon profil" :
                  "Visit my profile"
                }
              </a>
            </li>
          )}
          <li>
            <span className={styles.label}>Email</span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </li>
          {contact.phone && (
            <li>
              <span className={styles.label}>{ isFrench ? "Téléphone" : "Phone" }</span>
              <a href={`tel:${contact.phone}`}>{contact.phone}</a>
            </li>
          )}
          {/* <li>
            <span className={styles.label}>Localisation</span>
            <span>{contact.location}</span>
          </li> */}
          {/* {contact.website && (
            <li>
              <span className={styles.label}>{ isFrench ? "Site Web" : "Website" }</span>
              <a href={contact.website} target="_blank" rel="noopener noreferrer">
                Visiter
              </a>
            </li>
          )} */}
          {contact.github && (
            <li>
              <span className={styles.label}>GitHub</span>
              <a href={contact.github} target="_blank" rel="noopener noreferrer">
                Profil
              </a>
            </li>
          )}          
        </ul>
      </nav>
    </aside>
  );
};
