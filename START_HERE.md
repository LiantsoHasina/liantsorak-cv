# 🎯 START HERE - Portfolio CV

**Welcome! Follow these 3 simple steps to get your portfolio live.**

---

## ⚡ 30-Second Overview

You now have a **professional, modern portfolio CV** built with:
- ✨ React 19 + TypeScript
- 🎨 SCSS with TypeScript blue theme (#3178c6)
- 📱 Fully responsive (mobile, tablet, desktop)
- 🌍 100% French content
- 📚 Complete documentation

---

## 🚀 Step 1: Run Locally (2 minutes)

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open browser: http://localhost:3000
```

**Congratulations!** Your portfolio is running locally. 🎉

---

## ✏️ Step 2: Add Your Information (5 minutes)

Open: `data/cv-data.ts`

Replace the example data with YOUR information:

```typescript
personal: {
  name: "YOUR NAME",           // ← Change this
  title: "YOUR TITLE",         // ← And this
  bio: "YOUR BIO",             // ← And this
}

contact: {
  email: "YOUR EMAIL",         // ← Update all contact info
  phone: "+33 6 XX XX XX XX",
  location: "YOUR CITY",
  website: "YOUR WEBSITE",
  github: "YOUR GITHUB",
  linkedin: "YOUR LINKEDIN",
}

// Add your experiences, projects, skills, education below...
```

**That's it!** Your portfolio updates automatically (HMR). 
Refresh your browser at http://localhost:3000 to see changes.

---

## 🌐 Step 3: Deploy to Production (5 minutes)

### Option A: Vercel (Recommended - 2 clicks)

```bash
# 1. Make sure everything is committed
git add .
git commit -m "My portfolio CV"

# 2. Push to GitHub
git remote add origin <your-github-repo-url>
git push -u origin main

# 3. Go to https://vercel.com
# 4. Click "New Project"
# 5. Connect your GitHub repo
# 6. Click Deploy

# Done! Your portfolio is live! 🎊
```

Your URL: `https://your-project-name.vercel.app`

### Option B: Netlify (Also Easy)

```bash
# Do the GitHub steps above, then:
# 1. Go to https://netlify.com
# 2. Click "New site from Git"
# 3. Select your GitHub repo
# 4. Deploy!

# Done! Your portfolio is live! 🎊
```

Your URL: `https://your-project-name.netlify.app`

---

## 🎨 Quick Customizations (Optional)

### Change Colors
Edit: `styles/theme.scss` (line 2)

```scss
$color-primary: #3178c6;  // Change this hex color
```

Examples:
- `#10b981` = Green
- `#f59e0b` = Amber  
- `#0ea5e9` = Cyan
- `#8b5cf6` = Purple

### Add Your Photo
1. Save photo as: `public/avatar.jpg`
2. Edit: `components/Sidebar.tsx`
3. Uncomment the image section

### Change Section Titles
Edit: `app/page.tsx` - Look for `<SectionHeader title="..."`

---

## 📚 Documentation Map

| Need | Read | Time |
|------|------|------|
| Quick start | [QUICK_START.md](./QUICK_START.md) | 5 min |
| Full overview | [README_PORTFOLIO.md](./README_PORTFOLIO.md) | 10 min |
| How to customize | [PERSONNALISATION.md](./PERSONNALISATION.md) | 15 min |
| How it works | [ARCHITECTURE.md](./ARCHITECTURE.md) | 20 min |
| How to deploy | [DEPLOYMENT.md](./DEPLOYMENT.md) | 10 min |
| Component details | [COMPONENTS_REFERENCE.md](./COMPONENTS_REFERENCE.md) | 15 min |

---

## ✅ Checklist

Before sharing your portfolio:

- [ ] Infos updated in `data/cv-data.ts`
- [ ] Photo added (optional)
- [ ] Colors customized (optional)
- [ ] `pnpm build` works without errors
- [ ] Responsive tested on mobile (F12)
- [ ] Deployed to Vercel or Netlify
- [ ] Link tested in browser
- [ ] Shared with friends! 🎉

---

## 🆘 Troubleshooting

### "pnpm: command not found"
```bash
npm install -g pnpm
```

### "npm ERR! ERESOLVE unable to resolve dependency"
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Styles look wrong
- Clear browser cache: Ctrl+Shift+Delete
- Restart dev server: Stop + `pnpm dev`

### Port 3000 already in use
```bash
pnpm dev -- -p 3001  # Uses port 3001 instead
```

### Build fails
```bash
# Full clean
rm -rf .next node_modules
pnpm install
pnpm build
```

---

## 💡 Pro Tips

1. **Test on mobile early** - Use DevTools (F12) device mode
2. **Push to GitHub often** - Backup your work
3. **Use Vercel for easy deployments** - Automatic on every push
4. **Customize data first** - Before changing design
5. **Check Lighthouse** - DevTools → Lighthouse (before deploy)

---

## 🎓 Next Level Features (Optional)

### Add Dark Mode
See: [ARCHITECTURE.md](./ARCHITECTURE.md) - "Améliorations possibles"

### Add Contact Form
Integrate with: Formspree, EmailJS, etc.

### Add Blog Section
Create new component + data in cv-data.ts

### Add Analytics
Already included! See: `app/layout.tsx`

---

## 📞 Need Help?

1. Read the documentation files (full guides available)
2. Check the code comments (well-documented)
3. Look at example data in `data/cv-data.ts`
4. Review component source code (simple & clear)

---

## 🎯 Timeline

| Time | What | How |
|------|------|-----|
| 5 min | ✅ Running locally | `pnpm install && pnpm dev` |
| 10 min | ✅ Adding your info | Edit `data/cv-data.ts` |
| 15 min | ✅ Customizing design | Edit `styles/theme.scss` |
| 20 min | ✅ Testing responsive | F12 → Device mode |
| 25 min | ✅ On GitHub | `git push` |
| 30 min | ✅ Live on internet! | Vercel/Netlify deployed |

**Total: 30 minutes to a live, professional portfolio!**

---

## 🎉 You're All Set!

Your portfolio is:
- ✨ Modern and professional
- 📱 Responsive on all devices
- ♿ Accessible for everyone
- 🌍 Fully in French
- 📚 Completely documented
- 🚀 Ready to deploy

---

## 🚀 Ready? Let's Go!

```bash
pnpm install
pnpm dev
# → http://localhost:3000
```

Then edit `data/cv-data.ts` with your information!

---

**Questions? Read the full documentation:**

1. [QUICK_START.md](./QUICK_START.md) - 5 minute guide
2. [PERSONNALISATION.md](./PERSONNALISATION.md) - How to customize
3. [DEPLOYMENT.md](./DEPLOYMENT.md) - How to go live

---

**Happy building! 🚀**

Your portfolio is about to impress! ✨
