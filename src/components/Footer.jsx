import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: false, margin: '0px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary py-1 relative" ref={footerRef}>
      {/* Animated Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none" style={{ transform: 'translateY(-99%)' }}>
        <motion.svg
          className="relative block w-full"
          style={{ height: 50 }}
          viewBox="0 0 1200 50"
          preserveAspectRatio="none"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.path
            d="M0,25 C150,45 350,0 600,25 C850,50 1050,5 1200,25 L1200,50 L0,50 Z"
            fill="#000000"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
          {/* Secondary color accent wave */}
          <motion.path
            d="M0,30 C200,50 400,10 600,30 C800,50 1000,10 1200,30"
            fill="none"
            stroke="#65001f"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: 'easeInOut', delay: 0.3 }}
          />
        </motion.svg>
      </div>

      <div className="section-container">
        <div className="flex flex-col items-center">
          <motion.p
            className="text-textSecondary text-sm"
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
          >
            Copyright © {new Date().getFullYear()} Billy Htet
          </motion.p>
        </div>
      </div>

      {/* Scroll-to-top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg z-50 cursor-pointer"
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        whileHover={{ scale: 1.15, boxShadow: '0 0 20px rgba(101,0,31,0.5)' }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        {/* Upward arrow */}
        <motion.svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path d="M18 15l-6-6-6 6" />
        </motion.svg>
      </motion.button>
    </footer>
  );
};

export default Footer;