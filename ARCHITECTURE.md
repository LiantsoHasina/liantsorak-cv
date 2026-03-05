# Architecture du Portfolio CV

## Vue d'ensemble

Le portfolio est construit selon une architecture **composant-driven** avec une **séparation données/présentation**.

```
┌─────────────────────────────────────────────┐
│           Page Principale (page.tsx)        │
│  (Orchestration des sections et composants) │
└────────────────┬────────────────────────────┘
                 │
        ┌────────┼────────┐
        │        │        │
    ┌───▼──┐ ┌──▼───┐ ┌──▼───────┐
    │Layout│ │Data  │ │Components│
    │      │ │      │ │          │
    └──────┘ └──────┘ └──────────┘
        │        │          │
     CV Sections CV Data   UI Components
```

## 📂 Structure des Fichiers

### `data/cv-data.ts`
**Responsabilité**: Stockage de TOUTES les données du CV
- Interfaces TypeScript pour la sécurité de type
- Données en français
- Structure immuable facile à maintenir
- Aucune logique métier

**Contient**:
```typescript
- personal (nom, titre, bio)
- contact (email, téléphone, localisation, liens)
- experiences[] (expérience professionnelle)
- projects[] (projets)
- skills[] (compétences par catégorie)
- education[] (formation)
- summary (résumé professionnel)
```

### Composants (`components/`)

#### `Sidebar.tsx`
- Affiche les infos personnelles et contact
- Fixed sur desktop, inline sur mobile
- Reçoit des props simples (name, title, bio, contact)
- Pas de dépendance au state global

#### `SectionHeader.tsx`
- En-tête réutilisable avec titre et divider
- Utilisé dans toutes les sections
- Customisable via props (title, subtitle)

#### `ExperienceCard.tsx`
- Affiche une expérience professionnelle
- Montre le rôle, l'entreprise, les dates
- Listes les réalisations avec puces
- Tags technologiques

#### `ProjectCard.tsx`
- Carte de projet avec highlights
- Liens vers le projet et le code
- Technos utilisées
- Design similaire aux experience cards

#### `SkillsSection.tsx`
- Affichage des compétences par catégorie
- Grille responsive 2 colonnes
- Hover effects pour l'interactivité

#### `EducationCard.tsx`
- Diplôme, institution, date
- Format simple et lisible

### Styles (`styles/`)

#### `theme.scss`
**Point central de personnalisation**:
- Variables de couleurs (primaire, neutres, sémantiques)
- Variables de typographie (polices, tailles, poids)
- Variables d'espacement (8px scale)
- Mixins réutilisables (@include flex-center, @card, etc.)
- Breakpoints responsive

**Mixins principaux**:
```scss
@mixin flex-center        // Flexbox centré
@mixin flex-between       // Flexbox space-between
@mixin flex-column        // Flexbox colonne
@mixin card              // Style de carte
@mixin button-base       // Base bouton
@mixin focus-ring        // Ring d'accessibilité
@mixin responsive-padding // Padding adaptatif
```

#### `Portfolio.module.scss`
- Layout principal sidebar + main
- Sections spacing
- Footer styling
- Print styles

#### Modules composants
Chaque composant a son propre `.module.scss` pour éviter les conflits CSS:
- `Sidebar.module.scss`
- `ExperienceCard.module.scss`
- `ProjectCard.module.scss`
- `SkillsSection.module.scss`
- `EducationCard.module.scss`
- `SectionHeader.module.scss`

**Avantages CSS Modules**:
- Namespacing automatique
- Pas de conflits de noms
- Tree-shakeable
- Performance optimale

#### `utils.scss`
- Utility classes réutilisables
- Helpers pour layout, texte, spacing, couleurs
- Accessibilité (.sr-only)
- Responsive (.hide-mobile, .hide-desktop)

### Pages (`app/`)

#### `layout.tsx`
- Layout racine
- Métadonnées SEO
- Imports de polices Google
- Configuration langue (lang="fr")

#### `page.tsx`
- Page portfolio principale
- Orchestration des sections
- Import des données de `data/cv-data.ts`
- Import des composants

### Styles Globaux

#### `app/globals.css`
- Reset CSS
- Custom scrollbar styling
- Variables Tailwind (hérités mais pas utilisés dans le portfolio)
- Variables CSS globales

## 🎨 Flux de Rendu

```
1. app/layout.tsx
   ├─ app/globals.css (styles globaux)
   ├─ Polices Google (Geist)
   └─ Métadonnées

2. app/page.tsx
   ├─ Import data/cv-data.ts
   └─ Rendu section par section:
      ├─ Sidebar (composant fixe)
      └─ Main content (composant scrollable)
         ├─ SectionHeader + contenu
         ├─ ExperienceCard[] (boucle)
         ├─ ProjectCard[] (boucle)
         ├─ SkillsSection
         ├─ EducationCard[] (boucle)
         └─ Footer

3. Styles appliqués via modules SCSS
   ├─ theme.scss (variables)
   ├─ Portfolio.module.scss (layout)
   └─ components/*.module.scss (composants)
```

## 📊 Hiérarchie des Couleurs

```
Primary Color (#3178c6)
├─ Sidebar background
├─ Links hover
├─ Section dividers
├─ Skill tags hover
├─ Badges
└─ Focus rings

Neutral Colors
├─ Text Primary (#1a1a1a) → Headings
├─ Text Secondary (#666666) → Body text
├─ Text Tertiary (#999999) → Metadata
├─ Background (#ffffff) → Page background
└─ Background Secondary (#f8f9fa) → Cards

Semantic Colors
├─ Success (#10b981) → Project highlights
├─ Warning (#f59e0b) → Warnings (non utilisé)
└─ Error (#ef4444) → Errors (non utilisé)
```

## ♿ Accessibilité

### Implémentations
- ✅ Sémantique HTML (`<main>`, `<nav>`, `<footer>`, `<section>`)
- ✅ Contraste WCAG AA (4.5:1 pour du texte)
- ✅ Focus visible sur tous les éléments interactifs
- ✅ ARIA roles et labels
- ✅ Navigation au clavier complète
- ✅ Texte descriptif sur les liens

### Améliorations possibles
- Ajouter un bouton "back to top"
- Ajouter des landmarks ARIA supplémentaires
- Implémenter un mode dark
- Ajouter des descriptions d'images

## 📱 Responsivité

### Breakpoints
- **Mobile**: ≤ 480px (single column)
- **Tablet**: ≤ 768px (Sidebar devient inline)
- **Desktop**: ≥ 768px (Sidebar fixed)

### Adjustements par taille
```scss
480px   → Sidebar fullwidth, padding réduit
768px   → Layout classique 2 colonnes
1024px  → Même layout
1280px  → Padding plus large pour espace blanc
```

## 🔄 Flux de Données

```
data/cv-data.ts (source unique)
    │
    ├─→ app/page.tsx (destructuration)
    │   ├─→ cvData.personal → Sidebar
    │   ├─→ cvData.contact → Sidebar
    │   ├─→ cvData.experiences → ExperienceCard[]
    │   ├─→ cvData.projects → ProjectCard[]
    │   ├─→ cvData.skills → SkillsSection
    │   └─→ cvData.education → EducationCard[]
    │
    └─→ Props unidirectionnels
        (parent → child, jamais l'inverse)
```

## 🚀 Performance

### Optimisations
- ✅ CSS Modules (bundle size réduit)
- ✅ SCSS compilé en CSS optimisé
- ✅ Images non-optimisées (simple avatar)
- ✅ Pas de JS externe (sauf React/Next.js)
- ✅ Polices locales de Google Fonts

### Scores attendus
- Lighthouse Performance: 90+
- Accessibility: 100
- Best Practices: 95+

## 🖨️ Impression

### Features
- ✅ Styles print CSS spécifiques
- ✅ Couleurs optimisées pour impression
- ✅ Page-breaks intelligents
- ✅ Pas de scrollbars
- ✅ Fonts lisibles en PDF

### Utilisation
```
Navigateur → Ctrl+P → Imprimer en PDF → Portfolio.pdf
```

## 🔧 Technologie Stack

```
Runtime
├─ Node.js (v18+)
└─ npm/pnpm package manager

Framework
├─ Next.js 16
├─ React 19.2
└─ TypeScript 5.7

Styling
├─ SCSS/SASS 1.77
├─ CSS Modules
└─ PostCSS

Build Tool
├─ Turbopack (via Next.js 16)
└─ Webpack (fallback)

Development
├─ ESLint
└─ TypeScript Compiler
```

## 📈 Évolutivité

### Facile à étendre
- ✅ Ajouter des sections (copier pattern section)
- ✅ Ajouter des compétences (modifier cv-data.ts)
- ✅ Changer les couleurs (1 fichier theme.scss)
- ✅ Ajouter des projets (modifier cv-data.ts)

### Points de personnalisation
1. **Data first**: Modifiez `cv-data.ts` d'abord
2. **Layout second**: Ajustez `styles/theme.scss` pour le design
3. **Components third**: Créez un nouveau composant si nécessaire

## 🧪 Testing (optionnel)

Pour ajouter du testing:

```bash
pnpm add -D vitest @testing-library/react
```

Structure test:
```
__tests__/
├─ components/
│  ├─ Sidebar.test.tsx
│  ├─ ExperienceCard.test.tsx
│  └─ ...
└─ ...
```

## 📚 Conventions de Code

### Naming
- Composants: PascalCase (`ExperienceCard.tsx`)
- Fichiers style: `ComponentName.module.scss`
- Data: camelCase (`cvData`)
- SCSS variables: `$kebab-case`
- SCSS mixins: `@mixin kebab-case`

### Organisation SCSS
1. Variables (top du fichier)
2. Mixins (avant utilisation)
3. Styles (ordonnés du conteneur aux enfants)
4. Media queries (à la fin ou `@include`)

### Typescript
- Interfaces explicites pour tous les types
- Types génériques évités sauf nécessaire
- Props interface pour chaque composant

---

**Ce portfolio est conçu pour être maintenable, extensible et facile à personnaliser.**
