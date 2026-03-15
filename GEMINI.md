# SRGF Sri Jagannath Trust - Workspace Mandates

This document outlines the foundational principles, technical standards, and architectural guidelines for the SRGF Sri Jagannath Trust website project.

## Project Vision & Positioning
- **Core Positioning:** Founded by the Odia community, inspired by Lord Jagannath, and dedicated to serving and uniting all residents of Shriram Greenfield (SRGF).
- **Tone:** Devotional but modern, community-centered, elegant, warm, and inclusive.
- **Goal:** A production-quality, mobile-first, responsive multi-section landing site.

## Technical Stack
- **Framework:** React 19 (TypeScript)
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Utilities:** `clsx`, `tailwind-merge` for class management.

## Architectural Standards
- **Data-Driven UI:** All textual content, lists (navigation, events, cards), and metadata **MUST** be stored in `src/data/content.ts`. Do not hardcode content directly into components.
- **Section-Based Structure:** Large page sections should reside in `src/sections/` (e.g., `Hero.tsx`, `About.tsx`).
- **Reusable Components:** Shared UI elements (headers, buttons, cards) should reside in `src/components/`.
- **Styling Convention:** Prefer Tailwind 4 utility classes. Use the custom color palette defined in `tailwind.config.ts` (or the CSS variables in `index.css`).

## Visual & Design Guidelines
- **Color Palette:**
  - `saffron` (#f4a261 equivalent or deeper orange)
  - `maroon` (#800000 or deep vermilion)
  - `gold` / `amber` highlights
  - `ivory` / `off-white` backgrounds
  - `dark slate` for primary text
- **Aesthetic:** Clean cultural design, not cluttered. Soft gradients, subtle motifs, rounded cards with elegant shadows.
- **Responsiveness:** Ensure all components are tested for mobile, tablet, and desktop views.

## Component & Code Quality
- **TypeScript:** Use strict typing. Define interfaces/types for all data structures in `src/data/content.ts` if they grow complex.
- **Accessibility (a11y):** Use semantic HTML (e.g., `<section>`, `<header>`, `<main>`, `<nav>`). Provide `aria-label` where necessary and ensure high contrast.
- **Performance:** Keep the bundle lean. Avoid adding unnecessary heavy dependencies.
- **Clean Code:** Follow the "Research -> Strategy -> Execution" lifecycle. Maintain consistent spacing and naming conventions.

## Image Management
- **Local Assets:** Prefer using images from `src/assets/`.
- **Placeholders:** If an image is missing, use high-quality placeholders but mark them with `// TODO: Replace with licensed community image`.

## Development Workflow
1. **Content First:** If adding a new feature that requires text/data, update `src/data/content.ts` first.
2. **Atomic Changes:** Make surgical updates to specific components or sections.
3. **Verification:** Always verify responsiveness and layout integrity after any styling change.
