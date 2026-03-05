# Guide de Déploiement - Portfolio CV

## 🚀 Déployer sur Vercel (Recommandé)

Vercel est la plateforme idéale pour Next.js et c'est gratuit.

### Étape 1: Préparer le code

```bash
# Assurez-vous que tout est commité
git add .
git commit -m "Portfolio CV déployé"
```

### Étape 2: Pousser sur GitHub

```bash
# Si pas encore de repo
git init
git remote add origin https://github.com/votreusername/portfolio-cv.git
git branch -M main
git push -u origin main
```

### Étape 3: Déployer sur Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez "New Project"
3. Sélectionnez votre repo GitHub
4. Vercel détecte automatiquement Next.js
5. Cliquez "Deploy"
6. Attendez ~2-3 minutes
7. Votre portfolio est en ligne! 🎉

### URL du portfolio
```
https://portfolio-cv.vercel.app
```

## 🌐 Domaine Personnalisé (optionnel)

### Ajouter un domaine custom

1. Allez sur les **Settings** du projet Vercel
2. Onglet **Domains**
3. Cliquez "Add"
4. Entrez votre domaine (ex: `portfolio.com`)
5. Suivez les instructions pour les DNS
6. C'est prêt! Votre domaine custom fonctionne

## 📦 Autres Options de Déploiement

### Netlify

```bash
# 1. Build le projet
pnpm build

# 2. Créer un netlify.toml
```

Fichier `netlify.toml`:
```toml
[build]
  command = "pnpm build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

```bash
# 3. Pousser sur GitHub
git push

# 4. Connecter sur netlify.com → New site from Git
# 5. C'est déployé!
```

### GitHub Pages (non recommandé pour Next.js)

GitHub Pages n'est pas optimal pour Next.js car il nécessite une export statique.

### Self-hosted (VPS)

Si vous avez un serveur (AWS EC2, Linode, etc.):

```bash
# Sur le serveur
git clone <votre-repo>
cd portfolio-cv
pnpm install
pnpm build

# Lancer avec PM2 (process manager)
npm install -g pm2
pm2 start "pnpm start" --name portfolio

# Nginx reverse proxy
# Configurez nginx pour proxy vers localhost:3000
```

## 🔄 Déploiement Continu (CI/CD)

### Avec Vercel (automatique)

- À chaque push sur `main` → Vercel déploie automatiquement
- À chaque pull request → Vercel crée une preview URL
- C'est inclus dans le plan gratuit!

### Avec GitHub Actions

Créer `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'pnpm'
      
      - run: pnpm install
      - run: pnpm build
      - run: vercel --prod
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
          VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}
          VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
```

## 📊 Monitoring

### Vercel Analytics

1. Allez sur le dashboard Vercel
2. Onglet **Analytics**
3. Consultez les visits, performances, etc.
4. Gratuit avec un petit nombre de visits

### Sentry (optionnel - pour les erreurs)

```bash
pnpm add @sentry/nextjs
```

## 🔒 Sécurité

### Checklist avant déploiement

- ✅ Pas de secrets/API keys en dur dans le code
- ✅ Pas de fichiers `.env.local` committé
- ✅ Tous les liens externes sont HTTPS
- ✅ Pas de logs sensibles en production
- ✅ Build réussit sans warnings
- ✅ Testez sur mobile avant déploiement

### Variables d'Environnement (si utilisé)

1. Sur Vercel → **Settings** → **Environment Variables**
2. Ajoutez vos variables
3. Automatiquement injectées au build

Exemple:
```
NEXT_PUBLIC_SITE_URL=https://portfolio.com
API_KEY=secret_key_123
```

## 🎯 Optimisations Post-Déploiement

### Lighthouse Audit

```bash
# Localement
pnpm build
pnpm start

# Ouvrir http://localhost:3000
# Chrome DevTools → Lighthouse → Générer rapport
```

### WebPageTest

Visitez [webpagetest.org](https://www.webpagetest.org/) pour des rapports détaillés de performance.

### Core Web Vitals

Vercel vous montre automatiquement:
- **LCP** (Largest Contentful Paint)
- **FID** (First Input Delay)
- **CLS** (Cumulative Layout Shift)

## 🆘 Troubleshooting

### Build échoue

```bash
# Vérifiez les erreurs localement
pnpm build

# Solutions courantes:
# 1. Dépendances manquantes: pnpm install
# 2. Erreurs TypeScript: pnpm run type-check
# 3. Fichiers manquants: vérifiez les imports
```

### Portfolio affiche mal

- ✅ Vérifiez les styles SCSS en DevTools
- ✅ Testez sans cache: Ctrl+Shift+R
- ✅ Vérifiez les imports relatifs/absolus
- ✅ Console browser pour les erreurs JS

### Performance lente

- Analysez avec Lighthouse
- Vérifiez les images (taille optimale)
- Contrôlez les polices Google
- Vérifiez les animations/transitions

## 📈 Mise à Jour Continue

### Workflow de développement

```bash
# 1. Créer une branche
git checkout -b feature/add-projects

# 2. Faire vos changements
# Modifiez data/cv-data.ts, etc.

# 3. Tester localement
pnpm dev

# 4. Committer
git commit -m "Ajouté nouveaux projets"

# 5. Pousser
git push origin feature/add-projects

# 6. Pull Request sur GitHub
# 7. Vercel déploie une preview
# 8. Reviewez et mergez
# 9. Vercel déploie automatiquement en production!
```

## 💡 Tips & Tricks

### Créer une preview spécifique

```bash
# Créer une branche avec une spécifique
git checkout -b preview/new-design

# Pousser
git push origin preview/new-design

# Vercel crée une preview URL automatiquement
# Partagez-la avec d'autres!
```

### Révert un déploiement

```bash
# Voir l'historique
git log --oneline

# Revenir à un commit précédent
git revert <commit-hash>

# Pousser
git push

# Vercel redéploie automatiquement
```

### Analytics personnalisés

Pour tracker les views sans compromis de privacy:

```bash
# Utiliser Vercel Analytics (gratuit)
# Déjà inclus dans app/layout.tsx!
```

## 🎓 Ressources

- [Documentation Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Deploy Next.js](https://docs.netlify.com/integrations/frameworks/next-js)
- [GitHub Pages & Next.js](https://nextjs.org/docs/pages/deployment)

## ✅ Checklist Final

Avant de partager votre portfolio:

- [ ] Portfolio déployé sur une URL publique
- [ ] Domaine custom configuré (optionnel)
- [ ] Toutes les infos personnelles à jour
- [ ] Tous les liens fonctionnent
- [ ] Responsive testé sur mobile
- [ ] Pas d'erreurs en console
- [ ] Lighthouse score > 90
- [ ] PDF export fonctionne (Ctrl+P)

---

**Bravo! Votre portfolio CV est en ligne et prêt à impressionner!** 🚀
