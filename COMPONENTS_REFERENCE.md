# 🧩 Components Reference Guide

## Component Hierarchy

```
<html lang="fr">
  ├── <RootLayout>
  │   └── <Portfolio>
  │       ├── <Sidebar>          (Fixed/Responsive)
  │       └── <main>
  │           ├── <section> About
  │           │   └── <SectionHeader> + <p>
  │           ├── <section> Experience
  │           │   ├── <SectionHeader>
  │           │   └── <ExperienceCard>[]
  │           ├── <section> Projects
  │           │   ├── <SectionHeader>
  │           │   └── <ProjectCard>[]
  │           ├── <section> Skills
  │           │   ├── <SectionHeader>
  │           │   └── <SkillsSection>
  │           ├── <section> Education
  │           │   ├── <SectionHeader>
  │           │   └── <EducationCard>[]
  │           └── <footer>
```

---

## Component Details

### 1. Sidebar Component

**File**: `components/Sidebar.tsx`
**Styles**: `styles/components/Sidebar.module.scss`

#### Props
```typescript
interface SidebarProps {
  name: string;
  title: string;
  bio: string;
  contact: Contact;
}
```

#### Features
- 🎨 TypeScript blue background
- 👤 Avatar placeholder (120x120px)
- 📋 Personal info section
- 📞 Contact information with links
- 📱 Responsive (fixed desktop → inline mobile)
- ♿ Accessible links with proper focus states

#### Structure
```
Sidebar
├── Header
│   ├── Avatar (circle)
│   ├── Name (h1)
│   └── Title (p)
├── Bio (paragraph)
└── Contact Section
    ├── Title (h3)
    └── Contact List (ul)
        ├── Email link
        ├── Phone link
        ├── Location text
        ├── Website link (if exists)
        ├── GitHub link (if exists)
        └── LinkedIn link (if exists)
```

#### Styling
- Fixed width: 300px (desktop)
- Full width on mobile
- Height: 100vh (scrollable on mobile)
- Padding: 2.5rem 1rem (responsive)
- Background: #3178c6 (TypeScript blue)
- Text: white, various opacity levels
- Scrollbar: custom styled

---

### 2. SectionHeader Component

**File**: `components/SectionHeader.tsx`
**Styles**: `styles/components/SectionHeader.module.scss`

#### Props
```typescript
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}
```

#### Features
- 📖 Large, bold title
- 📝 Optional subtitle
- ▬▬ Colored divider line
- ⚡ Consistent styling across sections
- 🎨 Flexible and reusable

#### Structure
```
SectionHeader
├── Title (h2)
├── Subtitle (p, optional)
└── Divider (div)
```

#### Styling
- Title: 32px, bold, primary color
- Subtitle: 16px, secondary color
- Divider: 3px height, primary color, 60px wide
- Margin-bottom: 2rem

---

### 3. ExperienceCard Component

**File**: `components/ExperienceCard.tsx`
**Styles**: `styles/components/ExperienceCard.module.scss`

#### Props
```typescript
interface ExperienceCardProps {
  experience: Experience;
}
```

#### Experience Data Structure
```typescript
{
  id: string;
  role: string;                    // "Développeur Senior"
  company: string;                 // "TechCorp Solutions"
  location: string;                // "Paris"
  startDate: string;               // "Janv. 2022"
  endDate: string;                 // "Présent"
  current: boolean;                // true/false
  description: string[];           // Bullet points
  technologies: string[];          // Tech tags
}
```

#### Features
- 💼 Job title and company name
- 📅 Date range with "En cours" badge
- 📍 Location info
- 📝 Bulleted description
- 🏷️ Technology tags
- ✨ Hover effects

#### Structure
```
ExperienceCard
├── Header
│   ├── Title Section
│   │   ├── Role (h3)
│   │   └── Company (p)
│   └── Date Section
│       ├── Date Range (span)
│       └── "En cours" Badge (span, if current)
├── Location (p)
├── Description (ul)
│   └── Description Items (li)[]
└── Technologies (div)
    └── Tech Tags (span)[]
```

#### Styling
- Card: padding 1.5rem, border 1px, border-radius 0.75rem
- Hover: border changes to primary, shadow appears
- Tags: background secondary, hover to primary
- Divider bullets: ▸ (primary color)

---

### 4. ProjectCard Component

**File**: `components/ProjectCard.tsx`
**Styles**: `styles/components/ProjectCard.module.scss`

#### Props
```typescript
interface ProjectCardProps {
  project: Project;
}
```

#### Project Data Structure
```typescript
{
  id: string;
  title: string;                   // "Platform Name"
  description: string;             // Short description
  technologies: string[];          // Tech stack
  link?: string;                   // Live demo URL
  github?: string;                 // GitHub URL
  highlights: string[];            // Key achievements
}
```

#### Features
- 🎯 Project title
- 📝 Concise description
- ⭐ Key highlights with checkmarks
- 🏷️ Technology tags
- 🔗 Links to project and code
- 📊 Grid layout (2 columns)

#### Structure
```
ProjectCard
├── Title (h3)
├── Description (p)
├── Highlights (ul)
│   └── Highlight Items (li)[]
├── Technologies (div)
│   └── Tech Tags (span)[]
└── Links (div)
    ├── Project Link (a)
    └── GitHub Link (a)
```

#### Styling
- Card: similar to ExperienceCard
- Highlights: checkmarks (✓ in success color)
- Links: blue, with arrow indicators
- Grid: auto-fit minmax(450px, 1fr)

---

### 5. SkillsSection Component

**File**: `components/SkillsSection.tsx`
**Styles**: `styles/components/SkillsSection.module.scss`

#### Props
```typescript
interface SkillsSectionProps {
  skills: Skill[];
}
```

#### Skill Data Structure
```typescript
{
  id: string;
  category: string;                // "Frontend"
  items: string[];                 // ["React", "TypeScript", ...]
}
```

#### Features
- 📊 Grid layout (2 columns responsive)
- 🏷️ Skill tags with hover effects
- 📁 Organized by category
- ⚡ Interactive hover animations
- 📱 Single column on mobile

#### Structure
```
SkillsSection
└── Skill Groups (div[])
    ├── Category Title (h3)
    └── Items Container (div)
        └── Skill Tags (span)[]
```

#### Styling
- Grid: grid-template-columns: repeat(2, 1fr)
- Category: underline with primary color
- Tags: hover lifts up (transform: translateY(-2px))
- Tags on hover: background primary, white text

---

### 6. EducationCard Component

**File**: `components/EducationCard.tsx`
**Styles**: `styles/components/EducationCard.module.scss`

#### Props
```typescript
interface EducationCardProps {
  education: Education;
}
```

#### Education Data Structure
```typescript
{
  id: string;
  degree: string;                  // "Master Informatique"
  institution: string;             // "Université Name"
  location: string;                // "Paris"
  graduationDate: string;          // "2022"
  gpa?: string;                    // "4.0/4.0" (optional)
}
```

#### Features
- 🎓 Degree and institution
- 📍 Location and date
- 📊 Optional GPA display
- 🎨 Clean, minimal design
- ✨ Subtle hover effects

#### Structure
```
EducationCard
├── Header (flex)
│   ├── Info Section
│   │   ├── Degree (h3)
│   │   └── Institution (p)
│   └── Year (span)
├── Location (p)
└── GPA (p, if exists)
```

#### Styling
- Similar to ExperienceCard but simpler
- No description list
- Year aligned to the right on desktop

---

## Component Props Summary

| Component | Required Props | Optional Props | Data Type |
|-----------|---------------|----------------|-----------|
| Sidebar | name, title, bio, contact | none | string, Contact |
| SectionHeader | title | subtitle | string |
| ExperienceCard | experience | none | Experience |
| ProjectCard | project | none | Project |
| SkillsSection | skills | none | Skill[] |
| EducationCard | education | none | Education |

---

## Reusable Patterns

### Pattern 1: Card with Hover Effect
```scss
.card {
  @include card;  // Base card styles
  
  &:hover {
    border-color: $color-primary;
    box-shadow: 0 4px 12px rgba($color-primary, 0.1);
  }
}
```

### Pattern 2: Flexible Header
```scss
.header {
  @include flex-between;
  flex-wrap: wrap;
  gap: $spacing-lg;
  
  @media (max-width: $breakpoint-tablet) {
    flex-direction: column;
  }
}
```

### Pattern 3: Tag/Badge Styling
```scss
.tag {
  display: inline-block;
  padding: $spacing-xs $spacing-md;
  border-radius: $border-radius-md;
  font-size: $font-size-xs;
  border: 1px solid $color-border;
  transition: all $transition-normal;
  
  &:hover {
    background: $color-primary-subtle;
    border-color: $color-primary;
    color: $color-primary;
  }
}
```

### Pattern 4: List with Bullets
```scss
.description {
  list-style: none;
  
  li {
    padding-left: $spacing-lg;
    position: relative;
    
    &::before {
      content: '▸';  // or '✓', '-', etc.
      position: absolute;
      left: 0;
      color: $color-primary;
    }
  }
}
```

---

## Accessibility Features by Component

### Sidebar
- ✅ Semantic nav element
- ✅ Link focus states
- ✅ Proper color contrast
- ✅ Phone link: `tel:` protocol
- ✅ Email link: `mailto:` protocol

### ExperienceCard
- ✅ Heading hierarchy (h3)
- ✅ Semantic list (ul/li)
- ✅ Readable line height (1.75)
- ✅ Sufficient text size

### ProjectCard
- ✅ Link underlines on hover
- ✅ Focus ring for keyboard nav
- ✅ Semantic list
- ✅ Skip potential

### SkillsSection
- ✅ Heading hierarchy
- ✅ Logical tab order
- ✅ Color not only indicator

### EducationCard
- ✅ Heading hierarchy
- ✅ Logical content order
- ✅ Sufficient contrast

---

## Responsive Behavior

### Desktop (≥ 768px)
- Sidebar: Fixed 300px left
- Main: margin-left 300px
- Projects: 2-column grid
- Skills: 2-column grid

### Tablet (480px - 768px)
- Sidebar: 100% width, inline
- Main: full width
- Projects: 1-column
- Skills: 2-column (1 column on small)

### Mobile (< 480px)
- Sidebar: 100% width, inline
- Main: full width, padding reduced
- All sections: single column
- Font sizes: reduced for small screens

---

## Performance Considerations

### CSS Modules Benefits
✅ No naming conflicts
✅ Automatic vendor prefixing
✅ Tree-shakeable styles
✅ Smaller bundle size

### SCSS Benefits
✅ Variables for DRY code
✅ Mixins for reusable patterns
✅ Nesting for organization
✅ Compiled to optimized CSS

### Zero JavaScript Overhead
✅ No state management libraries
✅ No animation libraries
✅ Pure CSS transitions
✅ Native browser rendering

---

## Customization Guide

### Change Component Colors
Edit `styles/theme.scss` variables, then the component will automatically use the new colors.

### Add New Component
1. Create `components/MyComponent.tsx`
2. Create `styles/components/MyComponent.module.scss`
3. Import in `app/page.tsx`
4. Add data to `data/cv-data.ts`

### Modify Component Styling
Edit the corresponding `.module.scss` file. The SCSS module namespacing prevents conflicts.

### Extend Components Props
Update the interface in the component file and the data structure in `cv-data.ts`.

---

## Export & Reusability

All components are exported as named exports:

```typescript
export const Sidebar: React.FC<SidebarProps> = ...
export const SectionHeader: React.FC<SectionHeaderProps> = ...
export const ExperienceCard: React.FC<ExperienceCardProps> = ...
export const ProjectCard: React.FC<ProjectCardProps> = ...
export const SkillsSection: React.FC<SkillsSectionProps> = ...
export const EducationCard: React.FC<EducationCardProps> = ...
```

You can import and reuse them in other projects!

---

**This component system is designed to be:**
- 🎯 Simple and focused
- ♻️ Reusable and modular
- 🎨 Stylish and modern
- ♿ Accessible by default
- 📱 Responsive out-of-the-box
- 🚀 Fast and performant

