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

export const cvData = {
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
    // location: "Paris, France",
    // website: "https://example.com",
    // github: "https://github.com",
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
        "Concevoir, intégrer et maintien des interfaces complexes pour acceuillir et utiliser une scène 3D, ainsi que son back-office",
        "Développer des applications mobiles à des scale variés(sms dispatching, plateforme e-commerce, ...)",  
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
        "Développer des features frontend avec React, améliorant l'expérience utilisateur",
        "Collaborer avec les designers pour traduire les maquettes en composants réutilisables",    
        "Construction des interfaces responsives avec HTML, CSS et JavaScript",
        "Développer des composants réutilisables pour optimisé les maintenances futures",  
      ],
      technologies: ["JavaScript", "React", "Material UI"],
    },
    // {
    //   id: "exp-3",
    //   role: "Développeur Frontend",
    //   company: "Web Agency Pro",
    //   location: "Toulouse",
    //   startDate: "Janv. 2019",
    //   endDate: "Mai 2020",
    //   current: false,
    //   description: [
    //     "Construit des interfaces responsives avec HTML, CSS et JavaScript",
    //     "Développé des composants réutilisables en Vue.js",
    //     "Optimisé les performances frontend réduisant le temps de chargement de 50%",
    //   ],
    //   technologies: ["HTML/CSS", "JavaScript", "Vue.js", "Webpack", "SASS"],
    // },
  ] as Experience[],
  projects: [
    {
      id: "proj-1",
      title: "Plateforme de modelisation 3D",
      description: "Application web permettant à ses clients de planifier un design interieur et d'estimer son coût",
      highlights: [
        "Conception de l'interface et integration de l'espace 3D avec les menus",
        "Ajout des logiques et fonctionalités lié aux modèles 3D",
        "Maintiens des structures pour mieux acceuillir les fonctionalité à venir",
        "Gestion du back-office en symfony"
      ],
      technologies: ["TypeScript", "React", "Symfony"],
      link: "https://rion-r7.wooddevelop.fr",
    },
    {
      id: "proj-2",
      title: "Marketplace E-commerce",
      description: "Plateforme e-commerce mobile multi-vendeur avec système de paiement intégré.",
      highlights: [
        "Implementation des système de paiement local(Orange money et Mvola)",
        "Intégration des interfaces",
        "",
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
        "Mise en place du synchronisation, offline first",
        "Optimisation des requêtes et amélioration des chargements de page"
      ],
      technologies: ["React Native", "TypeScript", "Express.js", "Realm"],
      link: "https://www.promabio.com/"
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
      items: ["Node.js", "Express.js", "MongoDB", "Firebase", "MySQL" ],
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
      degree: "BACC - serie C",
      institution: "Lycée LRR",
      location: "Fianarantsoa",
      graduationDate: "2016",
      // gpa: "4.0/4.0",
    },
    // {
    //   id: "edu-2",
    //   degree: "Licence Informatique",
    //   institution: "Université Claude Bernard",
    //   location: "Lyon",
    //   graduationDate: "2016",
    // },
  ] as Education[],
  summary: "Développeur Fullstack TypeScript, formé en autodidacte, motivé par la création d’applications web modernes et performantes. Maîtrisant le MERN stack, j’allie sens du détail et efficacité pour offrir des expériences fluides. Curieux et impliqué, j’aime transformer les idées en solutions concrètes.",
};
