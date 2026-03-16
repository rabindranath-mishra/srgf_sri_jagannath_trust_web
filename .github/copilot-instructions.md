# GitHub Copilot Instructions for SRGF Sri Jagannath Trust Website

## Project Overview

You are working on the **SRGF Sri Jagannath Trust** website - a production-quality, community-focused web platform for a cultural and spiritual trust founded by Odia residents of Shriram Greenfield apartments in Bengaluru, Karnataka.

**Core Positioning:** Founded by the Odia community, inspired by Lord Jagannath, and dedicated to serving and uniting all residents of Shriram Greenfield (SRGF).

**Project Tagline:** "Rooted in Odia heritage, open to all."

**Mission:** To celebrate Odia and Jagannath culture while creating an inclusive platform that brings together all residents of Shriram Greenfield through spirituality, cultural exchange, service, and joyful participation.

## Technology Stack

### Core Technologies
- **Framework:** React 19 with TypeScript (strict mode)
- **Build Tool:** Vite
- **Styling:** Tailwind CSS 4 (with custom theme)
- **Icons:** Lucide React
- **Utilities:** `clsx` and `tailwind-merge` for conditional class management

### Project Configuration
- **Base URL:** `/srgf_sri_jagannath_trust_web/` (configured in `vite.config.ts`)
- **TypeScript:** Strict typing enabled
- **ESLint:** Configured with React-specific rules
- **Node Type Definitions:** Available via `@types/node`

## Architecture & Code Organization

### Directory Structure
```
src/
├── components/       # Reusable UI components (Navbar, SectionHeader, etc.)
├── sections/        # Page sections (Hero, About, Events, Gallery, etc.)
├── data/           # Content data (content.ts - single source of truth)
├── assets/         # Images, icons, and static files
├── utils/          # Utility functions (cn.ts for classname management)
├── App.tsx         # Main application component
├── main.tsx        # Application entry point
└── index.css       # Global styles and Tailwind theme
```

### Critical Architectural Rules

#### 1. Data-Driven Content (MANDATORY)
**All textual content, lists, navigation items, events, and metadata MUST be stored in `src/data/content.ts`.**

- ❌ **Never hardcode content directly in components**
- ✅ **Always import from `content.ts`**
- Update `content.ts` first when adding new features that require text/data
- Define TypeScript interfaces/types for complex data structures in `content.ts`

**Example:**
```typescript
// ❌ BAD - Hardcoded content
<h1>SRGF Sri Jagannath Trust</h1>

// ✅ GOOD - Data-driven
import { TRUST_NAME } from "../data/content";
<h1>{TRUST_NAME}</h1>
```

#### 2. Component Organization
- **Large page sections** → `src/sections/` (e.g., `Hero.tsx`, `About.tsx`, `Events.tsx`)
- **Reusable UI elements** → `src/components/` (e.g., `Navbar.tsx`, `SectionHeader.tsx`)
- **One component per file** with clear, descriptive names
- Use PascalCase for component files

#### 3. Styling Convention
- **Primary approach:** Tailwind CSS 4 utility classes
- Use the custom color palette defined in `src/index.css` via `@theme`
- Use `cn()` utility from `src/utils/cn.ts` for conditional classes
- Avoid inline styles unless absolutely necessary

### Custom Color Palette

Use these semantic color names (defined in `src/index.css`):

```css
--color-saffron: #f4a261        /* Primary brand color */
--color-saffron-dark: #e76f51   /* Darker saffron variant */
--color-maroon: #800000         /* Primary accent */
--color-vermilion: #e34234      /* Vermilion accent */
--color-gold: #d4af37           /* Gold highlights */
--color-amber: #ffbf00          /* Amber highlights */
--color-ivory: #fffff0          /* Off-white backgrounds */
--color-off-white: #faf9f6      /* Main background */
--color-slate-dark: #334155     /* Primary text color */
```

**Usage in Tailwind:**
```tsx
// Use semantic color names, not hex codes
<div className="bg-saffron text-maroon border-gold">
<button className="bg-maroon hover:bg-vermilion">
```

## Design Guidelines

### Visual Aesthetics
- **Style:** Devotional but modern, community-centered, elegant and warm
- **Design Philosophy:** Clean cultural design, not cluttered
- **Layout:** Spacious, premium, and intentional
- **Typography:** Warm but refined (Inter font family)
- **Shadows & Borders:** Elegant, subtle elevation
- **Patterns:** Lightweight cultural motifs (subtle overlays)

### Design Patterns
- **Cards:** Rounded (`rounded-2xl` or `rounded-xl`) with elegant shadows
- **Gradients:** Soft, subtle gradients for backgrounds
- **Hover States:** Subtle transitions, avoid aggressive animations
- **Spacing:** Generous padding and margins
- **Cultural Elements:** Subtle pattern overlays with low opacity

### Responsive Design (CRITICAL)
- **Mobile-First Approach:** Always design for mobile first
- Test components on mobile, tablet, and desktop views
- Use Tailwind responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`
- Ensure touch-friendly tap targets on mobile (min 44x44px)
- Stack cards vertically on mobile, grid layouts on desktop

**Common Responsive Patterns:**
```tsx
// Stack on mobile, side-by-side on desktop
<div className="flex flex-col md:flex-row gap-4">

// 1 column mobile, 2 on tablet, 3 on desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Smaller text on mobile
<h1 className="text-3xl md:text-5xl lg:text-7xl">
```

## Component Development Standards

### TypeScript Requirements
- Use **strict typing** for all components
- Define interfaces for component props
- Define types for data structures in `content.ts`
- Avoid `any` type; use `unknown` if type is truly dynamic
- Use proper return types for functions

**Example:**
```typescript
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeader = ({ title, subtitle, className }: SectionHeaderProps) => {
  // Implementation
};
```

### Accessibility (a11y) Requirements
- **Semantic HTML:** Use proper elements (`<section>`, `<header>`, `<main>`, `<nav>`, `<footer>`)
- **ARIA Labels:** Provide `aria-label` for icon-only buttons and decorative elements
- **Alt Text:** All images must have descriptive `alt` attributes
- **Contrast:** Ensure text meets WCAG AA standards (test with browser tools)
- **Keyboard Navigation:** All interactive elements must be keyboard accessible
- **Focus States:** Visible focus indicators for all interactive elements

**Example:**
```tsx
// ✅ GOOD - Semantic HTML with accessibility
<section id="about" aria-label="About the Trust">
  <img src={logo} alt="SRGF Sri Jagannath Trust Logo" />
  <button aria-label="Open navigation menu">
    <Menu className="w-6 h-6" />
  </button>
</section>
```

### Performance Guidelines
- **Bundle Size:** Keep dependencies minimal; avoid unnecessary libraries
- **Image Optimization:** Use appropriate image formats and sizes
- **Code Splitting:** Use React.lazy() for large components if needed
- **Memoization:** Use React.memo(), useMemo(), useCallback() judiciously

### Code Quality Standards
- **Consistent Spacing:** Follow existing formatting patterns
- **Naming Conventions:**
  - Components: PascalCase (`Hero.tsx`)
  - Functions/variables: camelCase (`handleClick`)
  - Constants: UPPER_SNAKE_CASE (`TRUST_NAME`)
  - CSS classes: kebab-case (Tailwind standard)
- **Comments:** Only comment code that needs clarification; code should be self-documenting
- **Dead Code:** Remove unused imports, variables, and functions
- **Atomic Changes:** Make surgical, focused updates

## Development Workflow

### Content-First Approach
1. **Update `src/data/content.ts` first** when adding new features
2. Import and use the data in components
3. Verify the component displays correctly
4. Test responsiveness across breakpoints

### Making Changes
1. **Research:** Understand the existing pattern by checking similar components
2. **Strategy:** Plan your approach; identify which files need changes
3. **Execution:** Make precise, surgical changes
4. **Verification:** Test responsiveness and layout integrity

### Layout Integrity Checklist
After any styling change, verify:
- ✅ Mobile layout (320px - 768px)
- ✅ Tablet layout (768px - 1024px)
- ✅ Desktop layout (1024px+)
- ✅ No overlapping sections
- ✅ Proper spacing between elements
- ✅ Text readability and contrast

## Image Management

### Asset Organization
- **Local Assets:** Store in `src/assets/` directory
- **Imports:** Import images in `content.ts` or component files
- **Placeholders:** Mark temporary images with comments

**Example:**
```typescript
// src/data/content.ts
import jagannathImg from "../assets/jagannath-temple.jpg";
// TODO: Replace with licensed community image

export const GALLERY_IMAGES = [
  { url: jagannathImg, title: "Jagannath Temple Visual" }
];
```

### Image Best Practices
- Use descriptive filenames (e.g., `jagannath-temple.jpg` not `img1.jpg`)
- Provide meaningful alt text for all images
- Optimize images before adding to repo (compress large files)
- Use appropriate formats: JPG for photos, SVG for icons/logos

## Navigation & Layout Patterns

### Fixed Navigation
- Announcement bar: Fixed at top (`top-0`)
- Navbar: Fixed below announcement bar (`top-8`)
- Use `z-index` appropriately (`z-50` for navbar, `z-60` for announcement)

### Section Spacing
- Adequate top padding to account for fixed header
- Bottom padding to prevent section overlaps
- Use consistent vertical rhythm (e.g., `py-24` for sections)

### Smooth Scrolling
- Configured in `src/index.css`: `scroll-padding-top: var(--header-height)`
- Navbar links use hash navigation (`#home`, `#about`, etc.)

## Common Patterns & Utilities

### Class Name Management
Use the `cn()` utility for conditional classes:

```typescript
import { cn } from "../utils/cn";

<div className={cn(
  "base-classes",
  condition && "conditional-classes",
  scrolled ? "scrolled-state" : "default-state"
)} />
```

### Custom Animations
Available in `index.css`:
- `animate-fade-in-up`: Fade in with upward motion
- Custom keyframes defined in `@theme`

### Glass Card Pattern
```tsx
<div className="glass-card rounded-2xl p-6">
  {/* Semi-transparent card with backdrop blur */}
</div>
```

## Content Guidelines

### Tone & Voice
- **Respectful** and **uplifting**
- **Inclusive** and **community-focused**
- **Warm** but not overly casual
- **Professional** but not corporate

### Copy Best Practices
- Clear, concise messaging
- Short, readable paragraphs
- Strong, descriptive headings
- Avoid generic filler text
- No "Lorem Ipsum" placeholders

### Cultural Sensitivity
- Respectful treatment of religious imagery and concepts
- Emphasize inclusivity while honoring Odia heritage
- Use "Founded by Odia community, welcoming all residents" positioning
- Avoid overly promotional or excessively religious language

## Testing & Verification

### Before Committing Code
- [ ] Code runs without errors (`npm run dev`)
- [ ] TypeScript compiles without errors (`npm run build`)
- [ ] ESLint passes (`npm run lint`)
- [ ] Mobile responsiveness verified (DevTools responsive mode)
- [ ] All images have alt text
- [ ] No console errors or warnings
- [ ] Navigation links work correctly
- [ ] Content is imported from `content.ts` (not hardcoded)

## Git Commit Guidelines

### Commit Message Format
- Clear, descriptive commit messages
- Use present tense ("Fix navbar overlap" not "Fixed navbar overlap")
- Include context and reasoning when helpful
- Always include the Co-authored-by trailer:

```
Fix mobile layout overlapping issues

- Adjusted navbar positioning below announcement bar
- Added proper padding to hero section
- Prevented About section overlap

Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>
```

## Common Tasks & Examples

### Adding a New Section
1. Create component in `src/sections/NewSection.tsx`
2. Add content to `src/data/content.ts`
3. Import and use in `src/App.tsx`
4. Add navigation link to `NAVIGATION` array in `content.ts`

### Adding a New Component
1. Create file in `src/components/ComponentName.tsx`
2. Define TypeScript interface for props
3. Import and use in relevant section
4. Ensure responsive design

### Updating Content
1. Locate content in `src/data/content.ts`
2. Update the relevant constant/array
3. Verify changes appear correctly
4. No component changes needed (data-driven!)

## Location & Contact Information

**Address:**
Shriram Greenfield, Budigere Cross, Bengaluru, Karnataka 560049

**Context:**
- Community in Budigere Cross / off Whitefield corridor
- Accessible from KR Puram, Whitefield, and the airport

**Contact Placeholders:**
- Email: contact@srgfjagannath.org (placeholder)
- Phone: TBD
- WhatsApp: TBD

## Prohibited Practices

❌ **Do NOT:**
- Hardcode content in components (use `content.ts`)
- Use inline styles (use Tailwind classes)
- Add heavy dependencies without justification
- Create cluttered, poster-style designs
- Use generic Lorem Ipsum text
- Commit code with console errors
- Skip responsive testing
- Ignore accessibility requirements
- Use non-semantic HTML
- Leave dead code or unused imports

✅ **DO:**
- Store all content in `src/data/content.ts`
- Use Tailwind CSS with semantic color names
- Keep components focused and reusable
- Test on multiple screen sizes
- Follow TypeScript strict mode
- Write clean, readable code
- Use semantic HTML elements
- Provide alt text for images
- Make atomic, focused commits

## Quick Reference

### File Structure Quick Guide
- Content data → `src/data/content.ts`
- Page sections → `src/sections/`
- Reusable components → `src/components/`
- Images → `src/assets/`
- Utilities → `src/utils/`
- Styling → Tailwind in `src/index.css`

### Key Files
- `src/data/content.ts` - Single source of truth for all content
- `src/index.css` - Custom Tailwind theme and global styles
- `vite.config.ts` - Build configuration (base URL set)
- `src/App.tsx` - Main application structure
- `src/components/Navbar.tsx` - Navigation component
- `src/sections/Hero.tsx` - Landing section

### Development Commands
```bash
npm run dev      # Start development server
npm run build    # Build for production (TypeScript + Vite)
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

---

**Remember:** This is a community trust website representing cultural heritage and inclusivity. Every change should reflect warmth, professionalism, and respect for both tradition and modern web standards.
