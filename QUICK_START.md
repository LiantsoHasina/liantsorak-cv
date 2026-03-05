# 🚀 Quick Start - Portfolio CV en 5 minutes

## 1️⃣ Installation

```bash
# Installer les dépendances
pnpm install

# Lancer le serveur local
pnpm dev

# Ouvrir http://localhost:3000 dans votre navigateur
```

## 2️⃣ Personnaliser les Infos (5 min)

Ouvrir `data/cv-data.ts` et modifier:

```typescript
// Votre nom et titre
personal: {
  name: "Votre Nom",
  title: "Votre Titre",
  bio: "Votre courte bio",
}

// Vos coordonnées
contact: {
  email: "vous@email.com",
  phone: "+33 6 XX XX XX XX",
  location: "Votre Ville",
  website: "https://votre-site.com",
  github: "https://github.com/votreprofil",
  linkedin: "https://linkedin.com/in/votreprofil",
}

// Ajouter vos expériences
experiences: [
  {
    role: "Votre Poste",
    company: "Votre Entreprise",
    // ... plus de détails
  }
]

// Ajouter vos projets
projects: [
  {
    title: "Nom du Projet",
    description: "Description courte",
    // ... plus de détails
  }
]

// Ajouter vos compétences
skills: [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "CSS"],
  }
]

// Et plus...
```

## 3️⃣ Personnaliser les Couleurs (2 min)

Ouvrir `styles/theme.scss` et changer la couleur primaire:

```scss
// Ligne 2 - changez cette couleur
$color-primary: #3178c6; // Bleu TypeScript

// Exemples:
// #10b981 = Teal
// #f59e0b = Amber
// #8b5cf6 = Purple
// #0ea5e9 = Cyan
```

## 4️⃣ Ajouter une Photo

1. Sauvegarder votre photo dans `/public/avatar.jpg`
2. Ouvrir `data/cv-data.ts`
3. Modifier:
```typescript
personal: {
  image: "/avatar.jpg",
}
```
4. Ouvrir `components/Sidebar.tsx` et décommenter le code image

## 5️⃣ Déployer (Gratuit)

### Option A: Vercel (Recommandé - 2 clics)

```bash
# 1. Pousser sur GitHub
git init
git add .
git commit -m "Portfolio CV"
git remote add origin <votre-repo-github>
git push -u origin main

# 2. Aller sur https://vercel.com
# 3. Connecter votre GitHub
# 4. Importer le projet
# 5. Deploy!
# C'est en ligne! ✨
```

### Option B: Netlify

```bash
# 1. Pousser sur GitHub (même qu'au-dessus)
# 2. Aller sur https://netlify.com
# 3. New site from Git
# 4. Sélectionner votre repo
# 5. C'est déployé!
```

## 📱 Tester Responsive

```bash
# Le serveur tourne sur http://localhost:3000

# Ouvrir DevTools (F12)
# Cliquer sur le device icon (mobile)
# Tester sur mobile, tablet, desktop
```

## 🎨 Changer le Design

### Fonts
Ouvrir `styles/theme.scss` et modifier:
```scss
$font-family-sans: 'Votre Font';
```

### Espacement
```scss
$spacing-md: 1rem;  // Augmentez pour plus d'espace
```

### Taille des textes
```scss
$font-size-lg: 1.125rem;  // Augmentez pour plus gros
```

## 📋 Checklist Avant Partage

- [ ] ✅ Infos personnelles à jour
- [ ] ✅ Projets ajoutés
- [ ] ✅ Compétences à jour
- [ ] ✅ Tous les liens fonctionnent
- [ ] ✅ Design personnalisé
- [ ] ✅ Responsive testé
- [ ] ✅ Déployé en ligne
- [ ] ✅ URL partageable

## 🆘 Problèmes Courants

### Le serveur ne lance pas
```bash
# Supprimer node_modules et réinstaller
rm -rf node_modules
pnpm install
pnpm dev
```

### Les styles SCSS ne compilent pas
```bash
# Vérifiez que sass est installé
pnpm list sass

# Si non, installer
pnpm add -D sass
```

### Import paths en erreur
Vérifier les imports commencent par `@/`:
```typescript
// ✅ Correct
import { cvData } from '@/data/cv-data';

// ❌ Faux
import { cvData } from '../data/cv-data';
```

## 📚 Documentation

- `README_PORTFOLIO.md` - Vue d'ensemble complète
- `PERSONNALISATION.md` - Guide détaillé de personnalisation
- `ARCHITECTURE.md` - Architecture technique
- `DEPLOYMENT.md` - Guide de déploiement avancé

## 🎯 Prochaines Étapes

1. **Personnalisez** les infos dans `data/cv-data.ts`
2. **Testez** localement avec `pnpm dev`
3. **Déployez** sur Vercel ou Netlify
4. **Partagez** votre portfolio! 🎉

---

**Vous êtes prêt! Bonne chance avec votre portfolio! 🚀**

Questions? Consultez la documentation complète dans les fichiers MD.
