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
  <div className="flex justify-center py-4">
    <motion.div
      className="h-[2px] w-full max-w-4xl mx-8 rounded-full"
      style={{
        background: 'linear-gradient(90deg, transparent 0%, #65001f 30%, #65001f 70%, transparent 100%)',
        originX: 0.5,
      }}
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
      <Navbar />
      <main>
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
