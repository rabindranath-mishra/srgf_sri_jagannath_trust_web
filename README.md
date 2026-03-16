# SRGF Sri Jagannath Trust Website

> *"Rooted in Odia heritage, open to all."*

A modern, community-focused web platform for the **SRGF Sri Jagannath Trust** — a cultural and spiritual organization founded by Odia residents of Shriram Greenfield apartments in Bengaluru, Karnataka.

## 🎯 Mission

To celebrate Odia and Jagannath culture while creating an inclusive platform that brings together all residents of Shriram Greenfield through spirituality, cultural exchange, service, and joyful participation.

## ✨ Features

- **📱 Mobile-First Responsive Design** - Optimized for all devices
- **🎨 Cultural Aesthetics** - Clean design with traditional color palette (saffron, maroon, gold)
- **🏛️ Multi-Section Landing Page** - Hero, About, Events, Gallery, Get Involved, Contact
- **♿ Accessible** - Semantic HTML and ARIA labels for inclusivity
- **⚡ High Performance** - Built with React 19 and Vite for fast load times
- **🎯 Data-Driven Architecture** - Centralized content management

## 🛠️ Technology Stack

### Core Technologies
- **[React 19](https://react.dev/)** - Modern UI library with latest features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Vite](https://vitejs.dev/)** - Next-generation build tool
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first styling with custom theme

### Key Libraries
- **[Lucide React](https://lucide.dev/)** - Beautiful, consistent icons
- **[clsx](https://github.com/lukeed/clsx)** & **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Intelligent class name management

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ 
- **npm** or **yarn** or **pnpm**

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd srgf_sri_jagannath_trust_web

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173/srgf_sri_jagannath_trust_web/`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production (TypeScript check + Vite build) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 📂 Project Structure

```
srgf_sri_jagannath_trust_web/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── SectionHeader.tsx
│   │   └── ...
│   ├── sections/         # Page sections (Hero, About, Events, etc.)
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Events.tsx
│   │   └── ...
│   ├── data/            # Centralized content store
│   │   └── content.ts   # Single source of truth for all content
│   ├── assets/          # Images, icons, static files
│   ├── utils/           # Utility functions
│   │   └── cn.ts        # Class name utility
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles & custom theme
├── public/              # Static assets
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies
```

## 🎨 Design System

### Color Palette

The project uses a custom cultural color palette defined in `src/index.css`:

| Color | Hex Code | Usage |
|-------|----------|-------|
| Saffron | `#f4a261` | Primary brand color |
| Saffron Dark | `#e76f51` | Darker variant |
| Maroon | `#800000` | Primary accent |
| Vermilion | `#e34234` | Secondary accent |
| Gold | `#d4af37` | Highlights |
| Amber | `#ffbf00` | Warm highlights |
| Ivory | `#fffff0` | Light backgrounds |
| Off-White | `#faf9f6` | Main background |
| Slate Dark | `#334155` | Primary text |

### Usage in Components

```tsx
// ✅ Use semantic Tailwind classes
<div className="bg-saffron text-off-white">
  <h1 className="text-maroon">Welcome</h1>
</div>

// ✅ Use cn() utility for conditional classes
import { cn } from "./utils/cn";

<button className={cn(
  "bg-saffron hover:bg-saffron-dark",
  isActive && "border-maroon"
)}>
  Click Me
</button>
```

## 📝 Development Guidelines

### 1. **Data-Driven Content (MANDATORY)**

All textual content, navigation items, events, and metadata **MUST** be stored in `src/data/content.ts`.

```tsx
// ❌ BAD - Hardcoded content
<h1>SRGF Sri Jagannath Trust</h1>

// ✅ GOOD - Data-driven
import { TRUST_NAME } from "../data/content";
<h1>{TRUST_NAME}</h1>
```

### 2. **Component Organization**

- **Large page sections** → `src/sections/` (e.g., `Hero.tsx`, `About.tsx`)
- **Reusable UI elements** → `src/components/` (e.g., `Navbar.tsx`, `SectionHeader.tsx`)
- One component per file with clear, descriptive PascalCase names

### 3. **Styling Conventions**

- Use **Tailwind CSS 4** utility classes
- Use the **custom color palette** (semantic names like `bg-saffron`, not hex codes)
- Use `cn()` utility from `src/utils/cn.ts` for conditional classes
- Avoid inline styles unless absolutely necessary

### 4. **TypeScript Standards**

- Strict typing enabled
- Define interfaces/types for complex data structures
- Prefer type safety over `any`

### 5. **Accessibility**

- Use semantic HTML (`<section>`, `<nav>`, `<header>`, `<main>`)
- Provide `aria-label` where necessary
- Ensure high contrast for readability
- Test with keyboard navigation

## 🌐 Deployment

The project is configured with a base URL of `/srgf_sri_jagannath_trust_web/` (see `vite.config.ts`).

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### Deploy to GitHub Pages

```bash
npm run deploy
```

*(Ensure you have `gh-pages` configured in your scripts)*

## 🤝 Contributing

We welcome contributions from the community! Please follow these guidelines:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Follow the coding standards** outlined above
4. **Test your changes** thoroughly
5. **Commit with clear messages** (`git commit -m 'Add amazing feature'`)
6. **Push to your branch** (`git push origin feature/amazing-feature`)
7. **Open a Pull Request**

### Code Quality Checklist

- [ ] All content stored in `src/data/content.ts`
- [ ] TypeScript types defined for new data structures
- [ ] Components follow the project structure
- [ ] Tailwind classes used (no hardcoded styles)
- [ ] Responsive design tested on mobile, tablet, desktop
- [ ] Accessibility standards met
- [ ] ESLint passes (`npm run lint`)
- [ ] Build succeeds (`npm run build`)

## 📄 License

This project is maintained by the SRGF Sri Jagannath Trust community.

## 📧 Contact

For questions or suggestions, please reach out through the Contact section on the website.

---

**Built with ❤️ by the SRGF community** | [View Live Site](#) | [Report Issue](../../issues)
