# Guide de Personnalisation du Portfolio

Ce guide vous aide à personnaliser le portfolio avec vos propres informations.

## 📝 Étape 1 : Mettre à jour les données

### Fichier: `data/cv-data.ts`

Ce fichier contient TOUTES vos informations. Modifiez-le pour ajouter vos détails:

#### Informations Personnelles
```typescript
personal: {
  name: "Votre Nom",
  title: "Votre Titre Professionnel",
  bio: "Votre biographie courte",
  image: "", // URL de votre photo (optionnel)
}
```

#### Informations de Contact
```typescript
contact: {
  email: "votre@email.com",
  phone: "+33 6 12 34 56 78",
  location: "Votre Ville, Pays",
  website: "https://votresite.com",
  github: "https://github.com/votreprofil",
  linkedin: "https://linkedin.com/in/votreprofil",
}
```

#### Expérience Professionnelle
Ajoutez/modifiez dans le tableau `experiences`:
```typescript
{
  id: "exp-unique",
  role: "Titre du Poste",
  company: "Nom de l'Entreprise",
  location: "Ville",
  startDate: "Janv. 2022",
  endDate: "Présent",
  current: true, // true si vous y travaillez encore
  description: [
    "Point 1 de vos réalisations",
    "Point 2 de vos réalisations",
  ],
  technologies: ["React", "TypeScript", "Node.js"],
}
```

#### Projets
Modifiez le tableau `projects`:
```typescript
{
  id: "proj-unique",
  title: "Nom du Projet",
  description: "Description courte",
  highlights: [
    "Réalisation 1",
    "Réalisation 2",
  ],
  technologies: ["React", "TypeScript"],
  link: "https://example.com", // optionnel
  github: "https://github.com/exemple", // optionnel
}
```

#### Compétences
Modifiez le tableau `skills`:
```typescript
{
  id: "skills-catégorie",
  category: "Frontend",
  items: ["React", "TypeScript", "Tailwind CSS"],
}
```

#### Formation
Modifiez le tableau `education`:
```typescript
{
  id: "edu-unique",
  degree: "Master Informatique",
  institution: "Université Exemple",
  location: "Ville",
  graduationDate: "2022",
  gpa: "4.0/4.0", // optionnel
}
```

#### Résumé
```typescript
summary: "Votre résumé professionnel en 2-3 phrases",
```

## 🎨 Étape 2 : Personnaliser les Couleurs

### Fichier: `styles/theme.scss`

Les couleurs sont centralisées au début du fichier:

```scss
// TypeScript Theme - Color Palette
$color-primary: #3178c6; // Changez cette couleur primaire
$color-primary-light: #4a90e2;
$color-primary-dark: #1d4a8a;
$color-primary-subtle: #e8f0f8;

// Neutral Colors
$color-text-primary: #1a1a1a;
$color-text-secondary: #666666;
$color-text-tertiary: #999999;
$color-background: #fff;
$color-background-secondary: #f8f9fa;
$color-border: #e0e0e0;
```

**Exemple**: Pour utiliser une couleur teal au lieu du bleu TypeScript:
```scss
$color-primary: #14b8a6; // Teal
$color-primary-light: #2dd4bf;
$color-primary-dark: #0d9488;
```

## 🔤 Étape 3 : Personnaliser la Typographie

### Fichier: `styles/theme.scss`

Les polices de caractères sont définies dans la section Typography:

```scss
$font-family-sans: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
$font-family-mono: 'Geist Mono', 'Courier New', monospace;
```

**Pour utiliser une autre police Google Fonts**:

1. Modifiez `app/layout.tsx`:
```typescript
import { Inter, JetBrains_Mono } from 'next/font/google'

const _inter = Inter({ subsets: ["latin"] });
const _mono = JetBrains_Mono({ subsets: ["latin"] });
```

2. Mettez à jour `styles/theme.scss`:
```scss
$font-family-sans: 'Inter', sans-serif;
$font-family-mono: 'JetBrains Mono', monospace;
```

## 📱 Étape 4 : Ajouter une Photo de Profil

1. Placez votre image dans `/public/avatar.jpg`
2. Modifiez `data/cv-data.ts`:
```typescript
personal: {
  // ...
  image: "/avatar.jpg",
}
```

3. Modifiez `components/Sidebar.tsx` pour utiliser l'image:
```typescript
<div className={styles.avatar}>
  {cvData.personal.image && (
    <img src={cvData.personal.image} alt="Avatar" />
  )}
</div>
```

## 🌐 Étape 5 : Changer les Sections

Pour modifier l'ordre des sections ou en ajouter de nouvelles, modifiez `app/page.tsx`:

```typescript
<section className={styles.section}>
  <SectionHeader title="Titre de Section" />
  {/* Contenu de la section */}
</section>
```

## 📐 Étape 6 : Ajuster l'Espacement et les Tailles

Toutes les valeurs d'espacement sont dans `styles/theme.scss`:

```scss
$spacing-xs: 0.5rem;    // 8px
$spacing-sm: 0.75rem;   // 12px
$spacing-md: 1rem;      // 16px
$spacing-lg: 1.5rem;    // 24px
$spacing-xl: 2rem;      // 32px
```

## ✏️ Localisation en Français

Le portfolio est déjà en français. Voici les textes clés à modifier:

- `app/layout.tsx`: Métadonnées du site
- `app/page.tsx`: Titres des sections
- `styles/components/`: Pas besoin de modifications

## 🚀 Test et Déploiement

```bash
# Test en local
pnpm dev

# Visiter http://localhost:3000

# Build pour la production
pnpm build

# Déployer (voir DEPLOYMENT.md)
```

## 💡 Conseils

1. **Gardez le design épuré**: Les espacements existants sont bien calculés
2. **Testez sur mobile**: Utilisez les DevTools pour vérifier la responsive
3. **Vérifiez les liens**: Assurez-vous que tous les liens externes fonctionnent
4. **Lisibilité**: Ne changez pas drastiquement les couleurs pour garder le contraste
5. **Sauvegardes**: Sauvegardez votre travail avant de faire de gros changements

## 🆘 Besoin d'Aide?

- SCSS: Consultez la structure de `theme.scss` pour les variables disponibles
- React: Chaque composant est simple et bien commenté
- TypeScript: Les interfaces dans `data/cv-data.ts` définissent la structure des données

Bonne chance pour la personnalisation! 🎉
