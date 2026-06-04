import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // ── Scroll progress ────────────────────────────────────────────────────
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // ── Glassmorphism trigger ──────────────────────────────────────────────
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setScrolled(latest > 0.01);
  });

  // ── Track active section via Intersection Observer ─────────────────────
  useEffect(() => {
    const sectionIds = ['home', 'about', 'projects', 'resume', 'contact'];
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.35 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // ── Animation variants ────────────────────────────────────────────────
  const navVariants = {
    hidden: { y: -100 },
    visible: {
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const mobileItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(101, 0, 31, 0.75)' : '#65001f',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        boxShadow: scrolled
          ? '0 4px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.05)'
          : '0 4px 6px -1px rgba(0,0,0,0.1)',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
      }}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="flex items-center h-16">
        {/* Logo */}
        <Link to="home" spy={true} smooth={true} offset={-64} duration={500}>
          <motion.h1
            className="text-2xl font-bold text-white px-4 cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            Htet Lin Aung AKA Billy
          </motion.h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="flex-1 flex items-center justify-center">
          <motion.div
            className="hidden md:flex space-x-12"
            variants={itemVariants}
          >
            {navItems.map((item) => (
              <motion.div
                key={item.id}
                className="relative"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  className={`text-lg font-medium cursor-pointer transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  onSetActive={() => setActiveSection(item.id)}
                >
                  {item.label}
                </Link>

                {/* Animated underline */}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-[2px]"
                    style={{
                      background: 'linear-gradient(90deg, #ff4d6d, #65001f)',
                      borderRadius: '1px',
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden px-4 absolute right-2"
            whileTap={{ scale: 0.9 }}
          >
            <span className="sr-only">Open main menu</span>
            <motion.div
              animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {!isOpen ? (
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden border-t border-gray-700"
            style={{
              backgroundColor: 'rgba(101, 0, 31, 0.9)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
            }}
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {navItems.map((item) => (
              <motion.div
                key={item.id}
                variants={mobileItemVariants}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  className={`block px-4 py-2 text-base font-medium ${
                    activeSection === item.id
                      ? 'text-white bg-red-900/40'
                      : 'text-white hover:bg-red-900'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Scroll Progress Bar ────────────────────────────────────────── */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, #65001f, #dc143c, #ff4d6d)',
        }}
      />
    </motion.nav>
  );
};

export default Navbar;