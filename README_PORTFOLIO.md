# Portfolio CV - Développeur Fullstack TypeScript

Une portfolio CV moderne et responsive créée avec React, TypeScript et SCSS, mettant en avant les compétences d'un développeur fullstack spécialisé en TypeScript.

## 🎨 Caractéristiques

- **Design moderne** : Sidebar fixed avec contenu principal scrollable
- **Thème TypeScript** : Palette de couleurs inspirée par TypeScript (#3178c6)
- **Responsive** : Adapté pour mobile, tablette et desktop
- **Sans gradients** : Utilisation de couleurs solides pour un design épuré
- **Composants réutilisables** : Architecture modulaire et maintenable
- **SCSS modulaire** : Variables, mixins et composants SCSS scoped
- **Accessible** : Sémantique HTML, contraste des couleurs, navigation au clavier
- **Optimisé à l'impression** : Mise en page adaptée pour l'impression PDF

## 📁 Structure du Projet

```
├── app/
│   ├── layout.tsx          # Layout racine avec métadonnées
│   ├── page.tsx            # Page portfolio principale
│   └── globals.css         # Styles globaux
├── components/
│   ├── Sidebar.tsx         # Barre latérale avec infos personnelles
│   ├── SectionHeader.tsx   # En-tête de section réutilisable
│   ├── ExperienceCard.tsx  # Carte d'expérience professionnelle
│   ├── ProjectCard.tsx     # Carte de projet
│   ├── SkillsSection.tsx   # Section compétences en grille
│   └── EducationCard.tsx   # Carte de formation
├── data/
│   └── cv-data.ts         # Données du CV (contenu séparé de la vue)
├── styles/
│   ├── theme.scss         # Variables et mixins SCSS
│   ├── Portfolio.module.scss
│   └── components/
│       ├── Sidebar.module.scss
│       ├── ExperienceCard.module.scss
│       ├── ProjectCard.module.scss
│       ├── SkillsSection.module.scss
│       ├── EducationCard.module.scss
│       └── SectionHeader.module.scss
└── package.json
```

## 🎯 Sections

### À propos
Présentation rapide et bio du développeur

### Expérience Professionnelle
- Rôle et entreprise
- Dates et localisation
- Description des responsabilités
- Technologies utilisées
- Badge "En cours" pour le poste actuel

### Projets
- Titre et description
- Highlights clés
- Technologies utilisées
- Liens vers le projet et le code source

### Compétences
- Organisées par catégories (Frontend, Backend, Outils, etc.)
- Affichage en grille responsive
- Effets hover pour l'interactivité

### Formation
- Diplôme et institution
- Localisation et date de graduation
- GPA (si applicable)

## 🎨 Palette de Couleurs

- **Primaire**: #3178c6 (TypeScript Blue)
- **Primaire Clair**: #4a90e2
- **Primaire Foncé**: #1d4a8a
- **Primaire Subtil**: #e8f0f8
- **Texte Principal**: #1a1a1a
- **Texte Secondaire**: #666666
- **Texte Tertiaire**: #999999
- **Background**: #ffffff
- **Background Secondaire**: #f8f9fa
- **Border**: #e0e0e0

## ✏️ Personnalisation

### Modifier le contenu
Éditez le fichier `data/cv-data.ts` pour mettre à jour:
- Informations personnelles
- Expériences professionnelles
- Projets
- Compétences
- Formation

### Modifier le design
Les fichiers SCSS utilisent des variables centralisées dans `styles/theme.scss`:
- Couleurs
- Espacements
- Typographie
- Breakpoints responsive

## 🚀 Installation

```bash
# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm dev

# Build pour la production
pnpm build

# Démarrer le serveur production
pnpm start
```

## 📱 Points de rupture (Breakpoints)

- Mobile: < 480px
- Tablette: < 768px
- Desktop: < 1024px
- Large: < 1280px

## 🔤 Typographie

- **Font Sans**: Geist (système par défaut)
- **Font Mono**: Geist Mono
- **Hiérarchie**: h1, h2, h3 avec poids et tailles cohérents
- **Interligne**: 1.4-1.6 pour la lisibilité

## ♿ Accessibilité

- Sémantique HTML correcte
- Contraste WCAG AA
- Navigation au clavier
- Focus visible sur les liens
- Texte alt pour les images (placeholder avatar)
- Labels appropriées pour les contacts

## 🖨️ Impression

Le portfolio est optimisé pour l'impression PDF:
- Couleurs adaptées
- Pas de scrollbars
- Dédoublement de contenu évité
- Page-break appropriés

## 🛠️ Technologies

- **React 19.2**
- **TypeScript 5.7**
- **Next.js 16**
- **SCSS/SASS**
- **CSS Modules**

## 📄 Licence

MIT - Libre d'utilisation et de modification

---

**Créé avec attention au détail pour une première impression professionnelle maximale.**
