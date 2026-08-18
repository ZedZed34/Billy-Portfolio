import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from 'framer-motion';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setScrolled(latest > 0.01);
  });

  useEffect(() => {
    const observers = navItems.map(({ id }) => {
      const section = document.getElementById(id);
      if (!section) return null;

      const observer = new IntersectionObserver(
        ([entry]) => entry.isIntersecting && setActiveSection(id),
        { rootMargin: '-25% 0px -60% 0px' },
      );
      observer.observe(section);
      return observer;
    });

    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  const navLinkClass = (id, mobile = false) =>
    `${mobile ? 'flex min-h-[48px] items-center rounded-xl px-4' : 'relative px-3 py-2'} cursor-pointer text-sm font-semibold transition-colors duration-200 ${
      activeSection === id ? 'text-white' : 'text-textSecondary hover:text-white'
    }`;

  return (
    <motion.nav
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4"
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      aria-label="Primary navigation"
    >
      <div
        className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-white/10 px-4 transition duration-300 sm:px-5"
        style={{
          backgroundColor: scrolled ? 'rgba(101, 0, 31, 0.88)' : 'rgba(101, 0, 31, 0.96)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          boxShadow: scrolled
            ? '0 18px 50px rgba(0, 0, 0, 0.35)'
            : '0 10px 30px rgba(0, 0, 0, 0.2)',
        }}
      >
        <div className="flex h-16 items-center justify-between gap-6">
          <Link
            to="home"
            smooth
            offset={-96}
            duration={500}
            className="flex cursor-pointer items-center gap-3 rounded-xl"
            aria-label="Billy Htet, back to home"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-sm font-bold text-white sm:text-base">Billy Htet</span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                spy
                smooth
                offset={-96}
                duration={500}
                className={navLinkClass(item.id)}
                aria-current={activeSection === item.id ? 'page' : undefined}
                onSetActive={() => setActiveSection(item.id)}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-white"
                    transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-white/15 text-white transition hover:bg-white/10 md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? 'Close main menu' : 'Open main menu'}
          >
            {isOpen ? (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-navigation"
              className="border-t border-white/10 py-3 md:hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="grid gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.id}
                    spy
                    smooth
                    offset={-96}
                    duration={500}
                    className={`${navLinkClass(item.id, true)} ${activeSection === item.id ? 'bg-white/10' : 'hover:bg-white/5'}`}
                    aria-current={activeSection === item.id ? 'page' : undefined}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-white"
          style={{ scaleX }}
          aria-hidden="true"
        />
      </div>
    </motion.nav>
  );
};

export default Navbar;
