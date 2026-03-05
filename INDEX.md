# 📋 Index - Portfolio CV Fullstack TypeScript

**Une portfolio CV moderne, stylisé et responsive en français créée avec React 19, TypeScript et SCSS.**

## 📖 Documentation (Lisez dans cet ordre)

| Document | Durée | Objectif |
|----------|-------|----------|
| **[QUICK_START.md](./QUICK_START.md)** | 5 min | 🚀 Démarrer immédiatement - installer, personnaliser et déployer |
| **[README_PORTFOLIO.md](./README_PORTFOLIO.md)** | 10 min | 📖 Vue d'ensemble complète du portfolio |
| **[PERSONNALISATION.md](./PERSONNALISATION.md)** | 15 min | ✏️ Guide détaillé pour personnaliser contenu et design |
| **[ARCHITECTURE.md](./ARCHITECTURE.md)** | 20 min | 🏗️ Comprendre la structure technique et l'organisation |
| **[DEPLOYMENT.md](./DEPLOYMENT.md)** | 10 min | 🚀 Guide complet pour déployer en production |

## 🎯 Guides Rapides par Besoin

### 🔥 Je veux juste le lancer
```bash
pnpm install && pnpm dev
# → Ouvrir http://localhost:3000
```
→ Voir [QUICK_START.md](./QUICK_START.md)

### ✏️ Je veux ajouter mes infos
1. Modifier `data/cv-data.ts` avec vos infos
2. Sauvegarder et le site se met à jour automatiquement (HMR)
→ Voir [PERSONNALISATION.md](./PERSONNALISATION.md)

### 🎨 Je veux changer les couleurs
Modifier `styles/theme.scss` (première variable `$color-primary`)
→ Voir [PERSONNALISATION.md](./PERSONNALISATION.md) section "Couleurs"

### 🌐 Je veux mettre en ligne
1. Pousser sur GitHub
2. Deployer sur Vercel ou Netlify (gratuit)
→ Voir [DEPLOYMENT.md](./DEPLOYMENT.md)

### 🔍 Je comprends pas l'architecture
→ Voir [ARCHITECTURE.md](./ARCHITECTURE.md)

## 📂 Structure des Fichiers

```
portfolio-cv/
├── 📄 Documentation (lisez ici!)
│   ├── QUICK_START.md              ← START HERE! ⭐
│   ├── README_PORTFOLIO.md
│   ├── PERSONNALISATION.md
│   ├── ARCHITECTURE.md
│   ├── DEPLOYMENT.md
│   └── INDEX.md                    ← Vous êtes ici
│
├── 🎨 Styles SCSS
│   └── styles/
│       ├── theme.scss              ← Couleurs, fonts, variables
│       ├── Portfolio.module.scss    ← Layout principal
│       ├── utils.scss              ← Utilities réutilisables
│       └── components/             ← SCSS par composant
│           ├── Sidebar.module.scss
│           ├── ExperienceCard.module.scss
│           ├── ProjectCard.module.scss
│           ├── SkillsSection.module.scss
│           ├── EducationCard.module.scss
│           └── SectionHeader.module.scss
│
├── 📝 Données CV
│   └── data/
│       └── cv-data.ts              ← Votre contenu ici! ✏️
│
├── 🧩 Composants React
│   └── components/
│       ├── Sidebar.tsx              ← Infos personnelles
│       ├── SectionHeader.tsx        ← En-têtes de section
│       ├── ExperienceCard.tsx       ← Cartes expérience
│       ├── ProjectCard.tsx          ← Cartes projets
│       ├── SkillsSection.tsx        ← Section compétences
│       ├── EducationCard.tsx        ← Cartes formation
│       └── ui/                      ← Composants shadcn/ui (non utilisés)
│
├── 📄 Pages
│   └── app/
│       ├── layout.tsx               ← Layout racine
│       ├── page.tsx                 ← Page portfolio
│       └── globals.css              ← Styles globaux
│
├── ⚙️ Configuration
│   ├── package.json
│   ├── tsconfig.json
│   ├── next.config.mjs
│   └── tailwind.config.ts           ← (non utilisé mais inclus)
│
└── 📦 node_modules/
    └── (dépendances - créé après pnpm install)
```

## 🎨 Design System

### Palette de Couleurs
- **Primaire**: #3178c6 (TypeScript Blue)
- **Neutres**: #1a1a1a, #666666, #999999, #ffffff, #f8f9fa
- **Sémantiques**: #10b981 (success), #f59e0b (warning), #ef4444 (error)

### Typographie
- **Sans-serif**: Geist (Google Fonts)
- **Monospace**: Geist Mono (Google Fonts)
- **Tailles**: XS (12px) → 3XL (32px)

### Espacement (8px scale)
- xs: 8px, sm: 12px, md: 16px, lg: 24px, xl: 32px, 2xl: 40px, 3xl: 48px

### Breakpoints
- Mobile: ≤ 480px
- Tablet: ≤ 768px
- Desktop: ≥ 768px
- Wide: ≥ 1280px

## 🛠️ Stack Technologique

```
Frontend: React 19.2 + TypeScript 5.7
Framework: Next.js 16 (App Router)
Styling: SCSS + CSS Modules
Fonts: Geist (Google Fonts)
Build: Turbopack (Next.js 16)
Package Manager: pnpm
```

## 🚀 Commandes Essentielles

```bash
# Installation
pnpm install

# Développement local
pnpm dev                    # http://localhost:3000

# Production
pnpm build                  # Compiler le projet
pnpm start                  # Lancer le serveur

# Linting
pnpm lint                   # Vérifier le code
```

## 📊 Sections du Portfolio

1. **À propos** - Bio courte
2. **Expérience** - Parcours professionnel
3. **Projets** - Réalisations clés
4. **Compétences** - Par catégorie
5. **Formation** - Diplômes et études
6. **Footer** - Infos et crédits

## ♿ Accessibilité

✅ Sémantique HTML
✅ Contraste WCAG AA
✅ Focus visible
✅ Navigation clavier
✅ Responsive mobile

## 📱 Responsive Design

- ✅ Mobile-first approach
- ✅ Breakpoints définis
- ✅ Sidebar adaptatif
- ✅ Imprimable en PDF

## 🔐 Caractéristiques

- ✨ Design moderne avec thème TypeScript
- 🎨 Couleurs solides (pas de gradients)
- 📱 Complètement responsive
- ♿ Accessible (WCAG AA)
- 🔤 100% en français
- 📊 Composants réutilisables
- 🚀 Optimisé pour la performance
- 🖨️ Prêt pour export PDF

## 📝 Données

Toutes les données se trouvent dans `data/cv-data.ts`:

```typescript
{
  personal,      // Nom, titre, bio
  contact,       // Email, téléphone, liens
  experiences,   // Expérience professionnelle
  projects,      // Projets réalisés
  skills,        // Compétences
  education,     // Formation
  summary        // Résumé pro
}
```

**Format structuré avec TypeScript interfaces pour la sécurité.**

## 🎯 Flux de Travail Recommandé

1. 📖 Lire [QUICK_START.md](./QUICK_START.md) (5 min)
2. 🚀 Installer et tester localement
3. ✏️ Personnaliser `data/cv-data.ts`
4. 🎨 Adapter `styles/theme.scss` si désiré
5. 🧪 Tester sur mobile (DevTools)
6. 🌐 Déployer sur Vercel/Netlify
7. 🎉 Partager votre portfolio!

## 🆘 Support & Troubleshooting

| Problème | Solution |
|----------|----------|
| Build échoue | `pnpm install && pnpm build` |
| Styles ne s'appliquent pas | Vérifier imports et chemins relatifs |
| SCSS ne compile pas | Vérifier que `sass` est installé |
| HMR ne fonctionne pas | Redémarrer `pnpm dev` |
| Responsive bug | DevTools mobile mode (F12) |

## 📚 Ressources Externes

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [SCSS Documentation](https://sass-lang.com/documentation)
- [Google Fonts](https://fonts.google.com)
- [CSS Modules](https://github.com/css-modules/css-modules)

## 📈 Prochaines Étapes

### Niveau 1 - Basique
- [ ] Installer et tester localement
- [ ] Mettre à jour infos personnelles
- [ ] Déployer sur Vercel

### Niveau 2 - Intermédiaire
- [ ] Personnaliser couleurs et fonts
- [ ] Ajouter votre photo
- [ ] Configurer domaine custom

### Niveau 3 - Avancé
- [ ] Ajouter un mode dark
- [ ] Implémenter des animations
- [ ] Ajouter des tests
- [ ] Intégrer analytics

## 💡 Tips & Best Practices

1. **Sauvegardez d'abord** votre data en copie locale
2. **Testez souvent** - `pnpm dev` et F5
3. **Pas de secrets** en dur - utiliser .env
4. **Responsive first** - Tester sur mobile
5. **Lighthouse check** - Vérifier performance avant deploy
6. **Version control** - Git init early

## 📞 FAQ

**Q: Comment ajouter une nouvelle section?**
A: Copier le pattern d'une section existante dans `app/page.tsx`

**Q: Comment ajouter des animations?**
A: Utiliser `transition` CSS dans les `.scss` files

**Q: Comment ajouter une photo?**
A: Mettre l'image dans `/public/` et modifier `data/cv-data.ts`

**Q: Le portfolio est gratuit?**
A: Oui! Code gratuit + déploiement gratuit sur Vercel/Netlify

**Q: Je peux l'utiliser pour mon entreprise?**
A: Oui! C'est un template gratuit à adapter

## 📋 Checklist Finale

Avant de partager votre portfolio:

- [ ] ✅ Infos complètes dans `data/cv-data.ts`
- [ ] ✅ Design personnalisé (`styles/theme.scss`)
- [ ] ✅ Responsive testé sur mobile
- [ ] ✅ Liens externes valides
- [ ] ✅ Pas d'erreurs en console
- [ ] ✅ Lighthouse score > 90
- [ ] ✅ Déployé sur domaine public
- [ ] ✅ PDF export fonctionne

---

## 🎉 Prêt à Commencer?

**Commencez par**: [QUICK_START.md](./QUICK_START.md)

Temps estimé: 5-10 minutes pour être en ligne! 🚀

---

**Portfolio créé avec ❤️ en React, TypeScript et SCSS**

Version: 1.0
Dernière mise à jour: 2024
