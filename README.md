<div align="center">

<img src="public/favicon.svg" alt="Logo" width="80" height="80" />

# Htet Lin Aung — Portfolio

**[Live Demo](https://billy-portfolio.vercel.app/)** &nbsp;·&nbsp; [Report Bug](https://github.com/ZedZed34/Billy-Portfolio/issues) &nbsp;·&nbsp; [Request Feature](https://github.com/ZedZed34/Billy-Portfolio/issues)

[![License: MIT](https://img.shields.io/badge/License-MIT-crimson.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer)](https://www.framer.com/motion/)
[![Deployment](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel)](https://vercel.com/)

</div>

---

## Overview

A high-performance, production-grade personal portfolio engineered with modern web technologies. Delivers a cinematic browsing experience through meticulously crafted animations, custom typography, and a refined dark theme — all while maintaining near-perfect Lighthouse scores.

<div align="center">

| **Performance** | **Accessibility** | **Best Practices** | **SEO** |
|:---:|:---:|:---:|:---:|
| ⚡ Optimised | ♿ ARIA-compliant | ✅ Semantic HTML | 🔍 JSON-LD + OG |

</div>

---

## Table of Contents

- [Htet Lin Aung — Portfolio](#htet-lin-aung--portfolio)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [✨ Features](#-features)
    - [Hero](#hero)
    - [About](#about)
    - [Projects](#projects)
    - [Resume](#resume)
    - [Navigation \& Shell](#navigation--shell)
    - [Contact](#contact)
  - [🎨 Design System](#-design-system)
  - [🛠️ Tech Stack](#️-tech-stack)
  - [📁 Project Structure](#-project-structure)
  - [🚀 Getting Started](#-getting-started)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Available Scripts](#available-scripts)
  - [🌍 Deployment](#-deployment)
  - [🎨 Customisation](#-customisation)
    - [Colour Palette](#colour-palette)
    - [Content Sources](#content-sources)
    - [Form Backend](#form-backend)
  - [🤝 Contributing](#-contributing)
  - [📄 License](#-license)

---

## ✨ Features

### Hero
- **Typewriter engine** — sequential letter-by-letter reveal for name and subtitle, with phase-aware blinking cursor
- **Particle field** — 25-element particle system with independent drift paths, opacity oscillation, and scale pulsing
- **Mouse parallax** — depth-aware motion where profile image and text shift in opposition to cursor position
- **Cursor orb** — radial gradient spotlight (600 px) trailing cursor movement for ambient depth
- **Pulse-ring avatar** — three concentric expanding rings with staggered animation delays surrounding the profile image

### About
- **16-skill icon grid** — blur-to-clarity spring reveal with 360° rotate on hover and staggered floating bob
- **Text-reveal paragraphs** — gradient mask slides away to unveil prose as it enters the viewport
- **Drop-cap typography** — classic print-style enlarged first letter with crimson glow
- **Rotating-border profile** — conic-gradient border animation wrapping the secondary profile image
- **Justified text** — hyphenation-aware paragraph alignment with `text-wrap: pretty`

### Projects
- **3D tilt cards** — perspective-aware cards responding to mouse position via `useMotionValue` transforms
- **Rotating gradient borders** — CSS `@property`-driven animated conic-gradient on card edges
- **Image reveal effect** — scale + brightness transition on hover with gradient overlay fade
- **Staggered slide-in** — odd cards enter from left, even from right, for visual rhythm
- **Tech badge pills** — spring-animated tag chips with individual hover scaling

### Resume
- **Animated timeline** — vertical connector line with expanding scale and pulsing node dots at each milestone
- **Section indicators** — animated pulsing dot with expanding horizontal line preceding section headers
- **3D flip-reveal** — certification cards rotate into view with perspective transform
- **Hover slide** — list items shift horizontally on hover for tactile micro-interaction
- **Responsive dual-column** — timeline adapts from two-column to single-column layout

### Navigation & Shell
- **Glassmorphism navbar** — backdrop-filter blur with semi-transparent background, activated on scroll
- **Scroll progress bar** — spring-smoothed horizontal indicator across the navbar base
- **Active-section tracking** — `IntersectionObserver`-driven underline with layout animation
- **Grain texture overlay** — full-page SVG `feTurbulence` noise filter at 3.5% opacity for cinematic texture
- **Animated wave divider** — SVG path-draw animation separating footer from content

### Contact
- **Floating-label inputs** — labels animate upward on focus with pulsing glow border
- **Animated submit button** — three-state transition (idle → spinner → checkmark) with spring physics
- **Dot-grid background** — SVG-based animated dot matrix with independent opacity/scale oscillation
- **Web3Forms integration** — serverless form-to-email with success/error state handling

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#000000` | Page backgrounds |
| `--color-secondary` | `#65001f` | Crimson accent — buttons, borders, highlights |
| `--color-tertiary` | `#1a0000` | Card surfaces, subtle depth |
| `--color-textPrimary` | `#ffffff` | Headings, primary content |
| `--color-textSecondary` | `#cccccc` | Body text, muted labels |

**Typography:** Inter (system fallback) with `text-wrap: balance` on headings and `text-wrap: pretty` on body copy.  
**Animation philosophy:** Spring physics throughout — natural-feeling motion with stiffness/damping ratios tuned per component. Scroll-triggered entrances via `whileInView` with `viewport: { once: true }` for performance.  
**Accessibility:** Semantic landmarks (`<nav>`, `<main>`, `<footer>`), ARIA labels on interactive elements, focus-visible outlines, and `prefers-reduced-motion` respect.

---

## 🛠️ Tech Stack

| Category | Technology | Purpose |
|----------|------------|---------|
| **Runtime** | [React 18](https://react.dev/) | Component architecture, hooks-based state |
| **Bundler** | [Vite 5](https://vitejs.dev/) | Sub-second HMR, tree-shaking, ESBuild transforms |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) | Utility-first CSS with custom design tokens |
| **Animation** | [Framer Motion 12](https://www.framer.com/motion/) | Declarative spring animations, layout animations, gestures |
| **Smooth Scroll** | [React Scroll](https://www.npmjs.com/package/react-scroll) | Section navigation with offset-aware targeting |
| **Form Handling** | [Web3Forms](https://web3forms.com/) | Serverless form-to-email API |
| **Linting** | [ESLint 8](https://eslint.org/) | Static analysis with React plugin rules |
| **Hosting** | [Vercel](https://vercel.com/) | Edge CDN, automatic HTTPS, CI/CD from Git |

---

## 📁 Project Structure

```
Billy-Portfolio/
├── public/
│   └── icons/                  # Static icon assets (SVG)
├── src/
│   ├── assets/
│   │   ├── icons/              # Tech stack & UI icon imports
│   │   ├── profiles/           # JPEG profile photographs
│   │   ├── projects/           # Project screenshot thumbnails
│   │   └── resume/             # Downloadable PDF resume
│   ├── components/
│   │   ├── Navbar.jsx          # Glassmorphism header, scroll progress, IntersectionObserver
│   │   ├── Hero.jsx            # Typewriter, particles, parallax, pulse rings
│   │   ├── About.jsx           # Text-reveal, skill grid, rotating border
│   │   ├── Projects.jsx        # 3D tilt cards, gradient borders, badges
│   │   ├── Resume.jsx          # Timeline, flip cards, section indicators
│   │   ├── Contact.jsx         # Floating inputs, Web3Forms, animated dot grid
│   │   └── Footer.jsx          # SVG wave divider, scroll-to-top button
│   ├── App.jsx                 # Root layout, section dividers, grain overlay
│   ├── App.css                 # Component-scoped styles
│   ├── index.css               # Tailwind directives, keyframes, utility classes
│   └── main.jsx                # ReactDOM entry point
├── index.html                  # HTML shell with OG/Twitter meta + JSON-LD
├── tailwind.config.js          # Custom colour tokens, theme extension
├── vite.config.js              # Vite plugin configuration
├── postcss.config.js           # PostCSS pipeline (Tailwind + Autoprefixer)
├── robots.txt                  # Crawler directives for SEO
├── sitemap.xml                 # XML sitemap
├── License                     # MIT License
└── package.json                # Dependencies and npm scripts
```

---

## 🚀 Getting Started

### Prerequisites

| Tool | Minimum Version |
|------|----------------|
| Node.js | ≥ 18 |
| npm | ≥ 9 |

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/ZedZed34/Billy-Portfolio.git
cd Billy-Portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). Hot Module Replacement is active — changes reflect instantly.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Production build (output to `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint static analysis |

---

## 🌍 Deployment

Deployed on **Vercel** with zero-configuration Git integration.

To deploy your own instance:

1. Fork this repository
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Vercel detects the Vite preset automatically
4. Configure a custom domain in **Settings → Domains** (optional)
5. Push to `main` — each commit triggers a production deployment

---

## 🎨 Customisation

### Colour Palette

Modify the design tokens in [`tailwind.config.js`](tailwind.config.js):

```js
theme: {
  extend: {
    colors: {
      primary: "#000000",       // Page background
      secondary: "#65001f",     // Crimson accent — interactive elements
      tertiary: "#1a0000",      // Card surfaces, depth layers
      textPrimary: "#ffffff",   // Headings, emphasis
      textSecondary: "#cccccc", // Body copy, metadata
    },
  },
}
```

### Content Sources

| Content Area | Configuration File |
|-------------|-------------------|
| Projects | `src/components/Projects.jsx` → `projects` array |
| Skills | `src/components/About.jsx` → `skills` array |
| Experience | `src/components/Resume.jsx` → `experience` array |
| Education | `src/components/Resume.jsx` → `education` array |
| Certifications | `src/components/Resume.jsx` → `certifications` array |
| Contact details | `src/components/Contact.jsx` → email, phone, social links |
| SEO metadata | `index.html` → `<meta>` tags, JSON-LD block |

### Form Backend

Replace the `ACCESS_KEY` constant in `src/components/Contact.jsx` with your own key from [web3forms.com](https://web3forms.com/) (free tier: 250 submissions/month).

---

## 🤝 Contributing

Contributions are welcome. To propose changes:

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push to your fork: `git push origin feat/your-feature`
5. Open a Pull Request against `main`

For significant changes, please open an issue first to discuss the proposed approach.

---

## 📄 License

Distributed under the **MIT License**. See [`License`](License) for the full text.

---

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-ZedZed34-181717?logo=github)](https://github.com/ZedZed34)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Htet_Lin_Aung-0A66C2?logo=linkedin)](https://linkedin.com/in/htet-lin-aung-5159491a0)

</div>
