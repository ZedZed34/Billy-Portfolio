import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume' 
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

const SectionDivider = () => (
  <div className="section-divider" aria-hidden="true">
    <motion.div
      className="section-divider__line"
      style={{ originX: 0.5 }}
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    />
  </div>
)

function App() {
  return (
    <div className="bg-primary min-h-screen">
      <a href="#main-content" className="skip-link">Skip to content</a>
      {/* Grain texture overlay */}
      <div className="grain-overlay" aria-hidden="true" />
      <Navbar />
      <main id="main-content">
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Resume />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
