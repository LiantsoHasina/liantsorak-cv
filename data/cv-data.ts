export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  highlights: string[];
}

export interface Skill {
  id: string;
  category: string;
  items: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  graduationDate: string;
  gpa?: string;
}

export interface Contact {
  email: string;
  phone?: string;
  location: string;
  website?: string;
  github?: string;
  linkedin?: string;
}

type CvContent = {
  personal: { [key: string]: string }
  contact: Contact
  experiences: Experience[]
  projects: Project[]
  skills: Skill[]
  education: Education[]
  summary: string
}

export type CvData = {
  eng: CvContent
  fr: CvContent
}

const fr = {
  personal: {
    name: "RAKOTOARIMAMPIANINA Liantsoa Hasina",
    title: "Développeur Fullstack TypeScript",
    bio: "Développeur passionné spécialisé dans la construction d'applications web modernes et scalables avec TypeScript, React et Node.js.",
    image: "",
  },
  contact: {
    linkedin: "https://www.linkedin.com/in/liantsoa-rak/",
    email: "liantsorak@gmail.com",
    phone: "+261 32 85 488 13",
  } as Contact,
  experiences: [
    {
      id: "exp-1",
      role: "Développeur Fullstack",
      company: "Fihary Soft",
      location: "Fianarantsoa",
      startDate: "Janv. 2023",
      endDate: "Présent",
      current: true,
      description: [
        "Assurer la qualité et la maintenabilité du code via des revues de code et l’application de bonnes pratiques",
        "Concevoir, intégrer et maintenir des interfaces complexes pour accueillir et utiliser une scène 3D, ainsi que son back-office",
        "Développer des applications mobiles à différentes échelles (SMS dispatching, plateforme e-commerce, ...)",
      ],
      technologies: ["TypeScript", "React", "Node.js", "Express.js", "Nextjs", "MongoDB", "MySQL", "Symfony"],
    },
    {
      id: "exp-2",
      role: "Développeur Front-end",
      company: "ARATO",
      location: "Fianarantsoa",
      startDate: "Septembre 2022",
      endDate: "Décembre 2022",
      current: false,
      description: [
        "Développer des fonctionnalités frontend avec React, améliorant l'expérience utilisateur",
        "Collaborer avec les designers pour traduire les maquettes en composants réutilisables",
        "Construire des interfaces responsives avec HTML, CSS et JavaScript",
        "Développer des composants réutilisables pour optimiser les maintenances futures",
      ],
      technologies: ["JavaScript", "React", "Material UI"],
    },
  ] as Experience[],
  projects: [
    {
      id: "proj-1",
      title: "Plateforme de modélisation 3D",
      description: "Application web permettant aux clients de planifier un design intérieur et d'estimer son coût.",
      highlights: [
        "Conception de l'interface et intégration de l'espace 3D avec les menus",
        "Ajout des logiques et fonctionnalités liées aux modèles 3D",
        "Maintien des structures pour mieux accueillir les fonctionnalités à venir",
        "Gestion du back-office avec Symfony",
      ],
      technologies: ["TypeScript", "React", "Symfony"],
      link: "https://www.cica-bois.fr/",
    },
    {
      id: "proj-2",
      title: "Marketplace E-commerce",
      description: "Plateforme e-commerce mobile multi-vendeur avec système de paiement intégré.",
      highlights: [
        "Implémentation des systèmes de paiement locaux (Orange Money et Mvola)",
        "Intégration des interfaces",
      ],
      technologies: ["TypeScript", "React Native", "MongoDB", "Express.js", "Firebase"],
      link: "https://www.azplus.mg/",
    },
    {
      id: "proj-3",
      title: "Application mobile de collecte de données terrain",
      description: "Développement d’une application mobile de collecte de données terrain avec fonctionnement hors-ligne et synchronisation automatique.",
      highlights: [
        "Conception et intégration des interfaces mobiles",
        "Mise en place de la synchronisation avec approche offline-first",
        "Optimisation des requêtes et amélioration des temps de chargement",
      ],
      technologies: ["React Native", "TypeScript", "Express.js", "Realm"],
      link: "https://www.promabio.com/",
    },
  ] as Project[],
  skills: [
    {
      id: "skills-frontend",
      category: "Frontend",
      items: ["TypeScript", "React", "Next.js", "HTML/CSS", "SASS/SCSS", "Tailwind CSS"],
    },
    {
      id: "skills-backend",
      category: "Backend",
      items: ["Node.js", "Express.js", "MongoDB", "Firebase", "MySQL"],
    },
    {
      id: "skills-tools",
      category: "Outils & Processus",
      items: ["GitLab", "GitHub", "Figma", "Jira", "Slack"],
    },
    {
      id: "skills-soft",
      category: "Compétences Transversales",
      items: ["Communication", "Résolution de problèmes", "Gestion de projet"],
    },
  ] as Skill[],
  education: [
    {
      id: "edu-1",
      degree: "BACC - série A",
      institution: "Lycée LRR",
      location: "Fianarantsoa",
      graduationDate: "2016",
    },
  ] as Education[],
  summary:
    "Développeur Fullstack TypeScript, formé en autodidacte, motivé par la création d’applications web modernes et performantes. Maîtrisant le MERN stack, j’allie sens du détail et efficacité pour offrir des expériences fluides. Curieux et impliqué, j’aime transformer les idées en solutions concrètes.",
};

const eng = {
  personal: {
    name: "RAKOTOARIMAMPIANINA Liantsoa Hasina",
    title: "Fullstack TypeScript Developer",
    bio: "Passionate developer specialized in building modern and scalable web applications using TypeScript, React, and Node.js.",
    image: "",
  },
  contact: {
    linkedin: "https://www.linkedin.com/in/liantsoa-rak/",
    email: "liantsorak@gmail.com",
    phone: "+261 32 85 488 13",
  } as Contact,
  experiences: [
    {
      id: "exp-1",
      role: "Fullstack Developer",
      company: "Fihary Soft",
      location: "Fianarantsoa",
      startDate: "Jan 2023",
      endDate: "Present",
      current: true,
      description: [
        "Ensure code quality and maintainability through code reviews and best practices",
        "Design, integrate, and maintain complex interfaces to host and interact with a 3D scene and its back-office",
        "Develop mobile applications at different scales (SMS dispatching, e-commerce platform, ...)",
      ],
      technologies: ["TypeScript", "React", "Node.js", "Express.js", "Nextjs", "MongoDB", "MySQL", "Symfony"],
    },
    {
      id: "exp-2",
      role: "Frontend Developer",
      company: "ARATO",
      location: "Fianarantsoa",
      startDate: "September 2022",
      endDate: "December 2022",
      current: false,
      description: [
        "Develop frontend features using React to improve user experience",
        "Collaborate with designers to translate mockups into reusable components",
        "Build responsive interfaces with HTML, CSS, and JavaScript",
        "Develop reusable components to optimize long-term maintenance",
      ],
      technologies: ["JavaScript", "React", "Material UI"],
    },
  ] as Experience[],
  projects: [
    {
      id: "proj-1",
      title: "3D Modeling Platform",
      description:
        "Web application allowing clients to plan interior designs and estimate their costs.",
      highlights: [
        "Interface design and integration of the 3D environment with navigation menus",
        "Implementation of logic and features related to 3D models",
        "Maintaining architecture to support future features",
        "Back-office management using Symfony",
      ],
      technologies: ["TypeScript", "React", "Symfony"],
      link: "https://rion-r7.wooddevelop.fr",
    },
    {
      id: "proj-2",
      title: "E-commerce Marketplace",
      description:
        "Multi-vendor mobile e-commerce platform with integrated payment systems.",
      highlights: [
        "Implementation of local payment systems (Orange Money and Mvola)",
        "Interface integration",
      ],
      technologies: ["TypeScript", "React Native", "MongoDB", "Express.js", "Firebase"],
      link: "https://www.azplus.mg/",
    },
    {
      id: "proj-3",
      title: "Field Data Collection Mobile App",
      description:
        "Mobile application for field data collection with offline support and automatic synchronization.",
      highlights: [
        "Design and integration of mobile interfaces",
        "Implementation of offline-first synchronization",
        "Query optimization and improved loading performance",
      ],
      technologies: ["React Native", "TypeScript", "Express.js", "Realm"],
      link: "https://www.promabio.com/",
    },
  ] as Project[],
  skills: [
    {
      id: "skills-frontend",
      category: "Frontend",
      items: ["TypeScript", "React", "Next.js", "HTML/CSS", "SASS/SCSS", "Tailwind CSS"],
    },
    {
      id: "skills-backend",
      category: "Backend",
      items: ["Node.js", "Express.js", "MongoDB", "Firebase", "MySQL"],
    },
    {
      id: "skills-tools",
      category: "Tools & Processes",
      items: ["GitLab", "GitHub", "Figma", "Jira", "Slack"],
    },
    {
      id: "skills-soft",
      category: "Soft Skills",
      items: ["Communication", "Problem Solving", "Project Management"],
    },
  ] as Skill[],
  education: [
    {
      id: "edu-1",
      degree: "Baccalaureate (Series A)",
      institution: "LRR High School",
      location: "Fianarantsoa",
      graduationDate: "2016",
    },
  ] as Education[],
  summary:
    "Self-taught Fullstack TypeScript developer focused on building modern and high-performance web applications. Experienced with the MERN stack, combining attention to detail with efficiency to deliver smooth user experiences. Curious and proactive, with a strong interest in turning ideas into practical solutions.",
};

export const cvData = {
  eng,
  fr,
} as CvData;

// export const cvData = {
//   personal: {
//     name: "RAKOTOARIMAMPIANINA Liantsoa Hasina",
//     title: "Développeur Fullstack TypeScript",
//     bio: "Développeur passionné spécialisé dans la construction d'applications web modernes et scalables avec TypeScript, React et Node.js.",
//     image: "",
//   },
//   contact: {
//     linkedin: "https://www.linkedin.com/in/liantsoa-rak/",
//     email: "liantsorak@gmail.com",
//     phone: "+261 32 85 488 13",
//   } as Contact,
//   experiences: [
//     {
//       id: "exp-1",
//       role: "Développeur Fullstack",
//       company: "Fihary Soft",
//       location: "Fianarantsoa",
//       startDate: "Janv. 2023",
//       endDate: "Présent",
//       current: true,
//       description: [
//         "Assurer la qualité et la maintenabilité du code via des revues de code et l’application de bonnes pratiques",
//         "Concevoir, intégrer et maintien des interfaces complexes pour acceuillir et utiliser une scène 3D, ainsi que son back-office",
//         "Développer des applications mobiles à des scale variés(sms dispatching, plateforme e-commerce, ...)",  
//       ],
//       technologies: ["TypeScript", "React", "Node.js", "Express.js", "Nextjs", "MongoDB", "MySQL", "Symfony"],
//     },
//     {
//       id: "exp-2",
//       role: "Développeur Front-end",
//       company: "ARATO",
//       location: "Fianarantsoa",
//       startDate: "Septembre 2022",
//       endDate: "Décembre 2022",
//       current: false,
//       description: [
//         "Développer des features frontend avec React, améliorant l'expérience utilisateur",
//         "Collaborer avec les designers pour traduire les maquettes en composants réutilisables",    
//         "Construction des interfaces responsives avec HTML, CSS et JavaScript",
//         "Développer des composants réutilisables pour optimisé les maintenances futures",  
//       ],
//       technologies: ["JavaScript", "React", "Material UI"],
//     }
//   ] as Experience[],
//   projects: [
//     {
//       id: "proj-1",
//       title: "Plateforme de modelisation 3D",
//       description: "Application web permettant à ses clients de planifier un design interieur et d'estimer son coût",
//       highlights: [
//         "Conception de l'interface et integration de l'espace 3D avec les menus",
//         "Ajout des logiques et fonctionalités lié aux modèles 3D",
//         "Maintiens des structures pour mieux acceuillir les fonctionalité à venir",
//         "Gestion du back-office en symfony"
//       ],
//       technologies: ["TypeScript", "React", "Symfony"],
//       link: "https://rion-r7.wooddevelop.fr",
//     },
//     {
//       id: "proj-2",
//       title: "Marketplace E-commerce",
//       description: "Plateforme e-commerce mobile multi-vendeur avec système de paiement intégré.",
//       highlights: [
//         "Implementation des système de paiement local(Orange money et Mvola)",
//         "Intégration des interfaces",
//         "",
//       ],
//       technologies: ["TypeScript", "React Native", "MongoDB", "Express.js", "Firebase"],
//       link: "https://www.azplus.mg/",
//     },
//     {
//       id: "proj-3",
//       title: "Application mobile de collecte de données terrain",
//       description: "Développement d’une application mobile de collecte de données terrain avec fonctionnement hors-ligne et synchronisation automatique.",
//       highlights: [
//         "Conception et intégration des interfaces mobiles",
//         "Mise en place du synchronisation, offline first",
//         "Optimisation des requêtes et amélioration des chargements de page"
//       ],
//       technologies: ["React Native", "TypeScript", "Express.js", "Realm"],
//       link: "https://www.promabio.com/"
//     },
//   ] as Project[],
//   skills: [
//     {
//       id: "skills-frontend",
//       category: "Frontend",
//       items: ["TypeScript", "React", "Next.js", "HTML/CSS", "SASS/SCSS", "Tailwind CSS"],
//     },
//     {
//       id: "skills-backend",
//       category: "Backend",
//       items: ["Node.js", "Express.js", "MongoDB", "Firebase", "MySQL" ],
//     },
//     {
//       id: "skills-tools",
//       category: "Outils & Processus",
//       items: ["GitLab", "GitHub", "Figma", "Jira", "Slack"],
//     },
//     {
//       id: "skills-soft",
//       category: "Compétences Transversales",
//       items: ["Communication", "Résolution de problèmes", "Gestion de projet"],
//     },
//   ] as Skill[],
//   education: [
//     {
//       id: "edu-1",
//       degree: "BACC - serie C",
//       institution: "Lycée LRR",
//       location: "Fianarantsoa",
//       graduationDate: "2016",      
//     },
//   ] as Education[],
//   summary: "Développeur Fullstack TypeScript, formé en autodidacte, motivé par la création d’applications web modernes et performantes. Maîtrisant le MERN stack, j’allie sens du détail et efficacité pour offrir des expériences fluides. Curieux et impliqué, j’aime transformer les idées en solutions concrètes.",
// };
