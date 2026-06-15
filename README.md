# 🌐 Htet Lin Aung — Portfolio

A sleek, modern personal portfolio website built with **React**, **Tailwind CSS**, and **Framer Motion**. Features smooth scroll-based animations, a dark theme with crimson accents, and a fully responsive layout.

🔗 **Live Demo:** [billy-portfolio.vercel.app](https://billy-portfolio.vercel.app/)

---

## ✨ Features

- **Animated Hero Section** — Letter-by-letter typing effect, drifting particle background, pulsing profile photo with glow rings, and social link icons
- **About Section** — Biography with a 16-skill icon grid featuring blur-reveal entrance animations and 360° rotate on hover
- **Projects Showcase** — 3D mouse-tracking tilt cards with rotating gradient borders, image hover effects, and tech-badge pills
- **Resume Section** — Animated timeline connectors for Experience & Education, plus 3D flip-reveal Certification cards
- **Contact Form** — Integrated with [Web3Forms](https://web3forms.com/) for email delivery; animated floating-label inputs, dot-grid background, and download-resume link
- **Glassmorphism Navbar** — Frosted-glass header with scroll progress bar, active-section tracking via IntersectionObserver, and animated underline
- **Smooth Scrolling** — Section-to-section navigation via `react-scroll`
- **Framer Motion Animations** — Scroll-triggered entrance animations, staggered reveals, and micro-interactions in every component
- **Responsive Design** — Mobile-first layout with an animated hamburger menu for smaller screens
- **Scroll-to-Top Button** — Appears contextually with a bouncing chevron and glow effect
- **SEO Optimised** — Open Graph / Twitter meta tags, structured data (JSON-LD), sitemap, and robots.txt
- **Custom Colour Palette** — Dark primary (`#000000`) with deep burgundy accent (`#65001f`) defined in Tailwind config

---

## 🛠️ Tech Stack

| Category        | Technology                                                    |
| --------------- | ------------------------------------------------------------- |
| **Framework**   | [React 18](https://react.dev/)                                |
| **Build Tool**  | [Vite 5](https://vitejs.dev/)                                 |
| **Styling**     | [Tailwind CSS 3](https://tailwindcss.com/)                    |
| **Animations**  | [Framer Motion 12](https://www.framer.com/motion/)            |
| **Scrolling**   | [React Scroll](https://www.npmjs.com/package/react-scroll)    |
| **Linting**     | [ESLint](https://eslint.org/) with React plugins              |
| **Deployment**  | [Vercel](https://vercel.com/)                                 |

---

## 📁 Project Structure

```
Billy-Portfolio/
├── public/
│   └── icons/              # Favicon and icon assets
├── src/
│   ├── assets/
│   │   ├── icons/           # Tech stack & UI icons
│   │   ├── profiles/        # Profile photos
│   │   ├── projects/        # Project screenshots
│   │   └── resume/          # Downloadable resume PDF
│   ├── components/
│   │   ├── Navbar.jsx       # Glassmorphism nav with scroll progress bar
│   │   ├── Hero.jsx         # Animated hero with typing effect & particles
│   │   ├── About.jsx        # Bio, skill icon grid, and tech stack
│   │   ├── Projects.jsx     # 3D tilt project cards with gradient borders
│   │   ├── Resume.jsx       # Experience, education & certifications timeline
│   │   ├── Contact.jsx      # Contact form (Web3Forms) & social links
│   │   └── Footer.jsx       # Footer with links and copyright
│   ├── App.jsx              # Root component with section dividers
│   ├── App.css              # Component-level styles
│   ├── index.css            # Global styles & Tailwind directives
│   └── main.jsx             # React DOM entry point
├── index.html               # HTML shell with SEO meta tags
├── tailwind.config.js       # Custom colour palette configuration
├── vite.config.js           # Vite build configuration
├── postcss.config.js        # PostCSS / Tailwind pipeline
├── robots.txt               # Crawler directives
├── sitemap.xml              # XML sitemap for search engines
├── License                  # MIT License
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/ZedZed34/Billy-Portfolio.git
cd Billy-Portfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
npm run preview   # Preview the production build locally
```

### Linting

```bash
npm run lint
```

---

## 🎨 Customisation

### Colours

Edit the custom colour palette in [`tailwind.config.js`](tailwind.config.js):

```js
colors: {
  primary: "#000000",       // Background
  secondary: "#65001f",     // Crimson accent
  tertiary: "#1a0000",      // Dark red tint
  textPrimary: "#ffffff",   // Main text
  textSecondary: "#cccccc", // Muted text
}
```

### Content

- **Projects** — Update the `projects` array in [`src/components/Projects.jsx`](src/components/Projects.jsx)
- **Skills & About** — Edit [`src/components/About.jsx`](src/components/About.jsx)
- **Experience & Education** — Edit [`src/components/Resume.jsx`](src/components/Resume.jsx)
- **Contact / Social Links** — Edit [`src/components/Contact.jsx`](src/components/Contact.jsx)
- **SEO Meta Tags** — Edit [`index.html`](index.html)

---

## 🌍 Deployment

This project is deployed on **Vercel**. To deploy your own fork:

1. Push your repository to GitHub
2. Import the project in [Vercel](https://vercel.com/new)
3. Vercel auto-detects Vite — no additional configuration required
4. Your site will be live at `https://<your-project>.vercel.app`

---

## 📄 License

This project is licensed under the **MIT License** — see the [License](License) file for details.
