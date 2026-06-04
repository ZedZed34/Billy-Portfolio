import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/profiles/profile.jpeg';
import githubIcon from '../assets/icons/github-social.svg';
import linkedinIcon from '../assets/icons/linkedin-social.svg';
import instagramIcon from '../assets/icons/instagram-social.svg';
import lineIcon from '../assets/icons/line-social.svg';

// ── Particle generator (stable across renders) ──────────────────────────────
const generateParticles = (count) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2, // 2-6px
    opacity: Math.random() * 0.3 + 0.1, // 0.1-0.4
    duration: Math.random() * 8 + 12, // 12-20s
    delay: Math.random() * 5,
    driftX: (Math.random() - 0.5) * 60, // horizontal drift range
    driftY: (Math.random() - 0.5) * 40, // vertical drift range
  }));

const Hero = () => {
  // ── Particles (memoised so array is stable) ──────────────────────────────
  const particles = useMemo(() => generateParticles(25), []);

  // ── Typewriter state ─────────────────────────────────────────────────────
  const nameText = 'Billy';
  const subtitleText = 'Software Engineer';
  const [displayedName, setDisplayedName] = useState('');
  const [displayedSubtitle, setDisplayedSubtitle] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [phase, setPhase] = useState('name'); // 'name' | 'pause' | 'subtitle' | 'done'

  useEffect(() => {
    let timeout;
    if (phase === 'name') {
      if (displayedName.length < nameText.length) {
        timeout = setTimeout(() => {
          setDisplayedName(nameText.slice(0, displayedName.length + 1));
        }, 120);
      } else {
        setPhase('pause');
      }
    } else if (phase === 'pause') {
      timeout = setTimeout(() => setPhase('subtitle'), 600);
    } else if (phase === 'subtitle') {
      if (displayedSubtitle.length < subtitleText.length) {
        timeout = setTimeout(() => {
          setDisplayedSubtitle(subtitleText.slice(0, displayedSubtitle.length + 1));
        }, 80);
      } else {
        setPhase('done');
      }
    }
    return () => clearTimeout(timeout);
  }, [displayedName, displayedSubtitle, phase]);

  // Blinking cursor
  useEffect(() => {
    const interval = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  // ── Existing variants ────────────────────────────────────────────────────
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const profileVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const socialVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15,
      },
    },
  };

  // ── Pulse ring configs ───────────────────────────────────────────────────
  const pulseRings = [
    { delay: 0, duration: 3 },
    { delay: 1, duration: 3 },
    { delay: 2, duration: 3 },
  ];

  return (
    <motion.section
      id="home"
      className="min-h-screen flex items-center bg-primary relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* ── Floating Particles Background ──────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              backgroundColor: '#65001f',
              opacity: p.opacity,
            }}
            animate={{
              x: [0, p.driftX, -p.driftX * 0.6, p.driftX * 0.3, 0],
              y: [0, p.driftY, -p.driftY * 0.5, p.driftY * 0.7, 0],
              opacity: [p.opacity, p.opacity * 1.8, p.opacity * 0.5, p.opacity * 1.4, p.opacity],
              scale: [1, 1.3, 0.8, 1.1, 1],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* ── Main Content ───────────────────────────────────────────────── */}
      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Profile Picture - Left Side */}
          <motion.div
            className="flex justify-center md:justify-start"
            variants={itemVariants}
          >
            {/* Floating wrapper */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              {/* Pulse Rings */}
              {pulseRings.map((ring, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: '2px solid #65001f',
                  }}
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={{
                    scale: [1, 1.35, 1.6],
                    opacity: [0.6, 0.25, 0],
                  }}
                  transition={{
                    duration: ring.duration,
                    delay: ring.delay,
                    repeat: Infinity,
                    ease: 'easeOut',
                  }}
                />
              ))}

              {/* Glow layer behind image */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  boxShadow: '0 0 40px 8px rgba(101,0,31,0.45), 0 0 80px 16px rgba(101,0,31,0.2)',
                }}
                animate={{
                  boxShadow: [
                    '0 0 40px 8px rgba(101,0,31,0.45), 0 0 80px 16px rgba(101,0,31,0.2)',
                    '0 0 60px 16px rgba(101,0,31,0.6), 0 0 100px 24px rgba(101,0,31,0.3)',
                    '0 0 40px 8px rgba(101,0,31,0.45), 0 0 80px 16px rgba(101,0,31,0.2)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Profile image container */}
              <motion.div
                className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-secondary shadow-2xl relative z-10"
                variants={profileVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <motion.img
                  src={profilePic}
                  alt="Htet Lin Aung"
                  className="w-full h-full object-cover object-center"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5 }}
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Introduction - Right Side */}
          <motion.div
            className="text-center md:text-left"
            variants={itemVariants}
          >
            {/* Typewriter heading */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
              variants={itemVariants}
            >
              Hi, I&apos;m{' '}
              <span className="text-secondary" style={{ color: '#65081f' }}>
                {displayedName}
                {(phase === 'name' || phase === 'pause') && (
                  <span
                    className="inline-block w-[3px] h-[1em] ml-1 align-middle"
                    style={{
                      backgroundColor: '#65081f',
                      opacity: showCursor ? 1 : 0,
                      transition: 'opacity 0.1s',
                    }}
                  />
                )}
              </span>
            </motion.h1>

            {/* Typewriter subtitle */}
            <motion.h2
              className="text-2xl sm:text-3xl font-bold text-textSecondary mb-4 min-h-[2.5rem]"
              variants={itemVariants}
            >
              {displayedSubtitle}
              {(phase === 'subtitle' || phase === 'done') && (
                <span
                  className="inline-block w-[3px] h-[0.9em] ml-1 align-middle"
                  style={{
                    backgroundColor: '#cccccc',
                    opacity: showCursor ? 1 : 0,
                    transition: 'opacity 0.1s',
                  }}
                />
              )}
            </motion.h2>

            <motion.p
              className="text-xl text-textSecondary mb-8"
              variants={itemVariants}
            >
              A passionate and profound Software Engineer with high-caliber and
              eagerness to attain new knowledge, conveying all the solutions and
              experiences with modern technologies and appealing ideas into
              elegant, efficient, and user-friendly applications.
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 justify-center md:justify-start"
              variants={itemVariants}
            >
              <motion.a
                href="https://github.com/ZedZed34"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12"
                variants={socialVariants}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="GitHub Profile"
              >
                <img src={githubIcon} alt="GitHub" className="w-full h-full" />
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/htet-lin-aung-5159491a0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12"
                variants={socialVariants}
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="LinkedIn Profile"
              >
                <img src={linkedinIcon} alt="LinkedIn" className="w-full h-full" />
              </motion.a>

              <motion.a
                href="https://www.instagram.com/billyhtet.hla"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12"
                variants={socialVariants}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Instagram Profile"
              >
                <img src={instagramIcon} alt="Instagram" className="w-full h-full" />
              </motion.a>

              <motion.a
                href="https://line.me/ti/p/I8tP8Q7-Ym"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12"
                variants={socialVariants}
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="LINE"
              >
                <img src={lineIcon} alt="LINE" className="w-full h-full" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;