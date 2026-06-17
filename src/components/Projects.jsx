import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import caloriesCalculatorImg from "../assets/projects/calories-calculator.jpg"
import adoptMeImg from '../assets/projects/adopt-me.jpg';
import carparkAPIImg from '../assets/projects/carpark-api.jpg';
import financialAPIImg from '../assets/projects/financial-api.jpg';

/* ───────────────────────────────────────────────
   Reusable TiltCard wrapper – 3D perspective tilt
   ─────────────────────────────────────────────── */
const TiltCard = ({ children, className = '' }) => {
  const ref = useRef(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useTransform(y, [0, 1], [8, -8]);
  const rotateY = useTransform(x, [0, 1], [-8, 8]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set(px);
    y.set(py);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 800,
        transformStyle: 'preserve-3d',
        rotateX,
        rotateY,
      }}
      className={className}
      transition={{ type: 'spring', stiffness: 150, damping: 20 }}
    >
      {children}
    </motion.div>
  );
};

/* ───────────────────────────
   Animated‑border card style
   ─────────────────────────── */
const gradientBorderStyle = {
  position: 'relative',
  padding: '2px',
  borderRadius: '0.5rem',
  background:
    'linear-gradient(var(--angle, 0deg), #65001f, #a3003a, #65001f)',
  animation: 'rotateGradient 4s linear infinite',
};

const innerCardStyle = {
  borderRadius: 'calc(0.5rem - 2px)',
  overflow: 'hidden',
  height: '100%',
};

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  /* Staggered entry: returns variants based on card index.
     Odd (0‑indexed) cards enter from left, even from right. */
  const getProjectVariants = (index) => ({
    hidden: {
      x: index % 2 === 0 ? -120 : 120,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 16,
      },
    },
  });

  const techBadgeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  const projects = [
    {
      id: 1,
      title: 'Calories Calculator',
      description: 'A web application to track and manage calorie intake with a user-friendly interface.',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'Vercel'],
      image: caloriesCalculatorImg,
      githubLink: 'https://github.com/ZedZed34/Calories-Counter.git'
    },
    {
      id: 2,
      title: 'Adopt Me',
      description: 'Pet Adoption Full-Stack web application, developed with SvelteKit as Frontend, and Node.js and Express.js as Backend.',
      technologies: ['Svelte', 'SvelteKit', 'Node.js', 'Express.js', 'SQLite', 'JWT', 'CORS'],
      image: adoptMeImg,
      githubLink: 'https://github.com/ZedZed34/Adopt-me.git'
    },
    {
      id: 3,
      title: 'Carparking Management',
      description: 'Playing with Django-RESTful API service with filtering features of car parking slots with carparks dataset.',
      technologies: ['Python', 'Django', 'Django REST Framework', 'SQLite', 'Pandas', 'NumPy'],
      image: carparkAPIImg,
      githubLink: 'https://github.com/ZedZed34/Carparking-Management-API.git'
    },
    {
      id: 4,
      title: 'Spend Tracker',
      description: 'A financial tracking API with Spring framework comprising user account creation, H2 database integration, and transaction management.',
      technologies: ['Java', 'Spring Boot', 'H2', 'JPA', 'Spring Security', 'MVC', 'Spring Data Validation', 'Spring Web', 'PostgreSQL'],
      image: financialAPIImg,
      githubLink: 'https://github.com/ZedZed34/Financial-Tracking-API.git'
    }
  ];

  return (
    <motion.section 
      id="projects" 
      className="bg-tertiary py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        type: "spring",
        stiffness: 50,
        damping: 20
      }}
      variants={containerVariants}
    >
      {/* CSS keyframes for the rotating gradient border */}
      <style>{`
        @property --angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes rotateGradient {
          0%   { --angle: 0deg; }
          100% { --angle: 360deg; }
        }
        .project-image-wrapper img {
          transition: transform 0.5s cubic-bezier(.25,.46,.45,.94),
                      filter 0.5s cubic-bezier(.25,.46,.45,.94);
        }
        .project-image-wrapper:hover img {
          transform: scale(1.12);
          filter: brightness(1.15) contrast(1.1);
        }
        .project-image-wrapper::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(26, 0, 0, 0.7) 0%,
            transparent 60%
          );
          opacity: 0.6;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }
        .project-image-wrapper:hover::after {
          opacity: 0;
        }
      `}</style>

      <div className="section-container">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold mb-8 text-white text-center text-balance"
          variants={getProjectVariants(0)}
        >
          My Projects
        </motion.h2>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={getProjectVariants(index)}
            >
              <TiltCard>
                {/* Animated gradient border wrapper */}
                <div style={gradientBorderStyle}>
                  <div
                    className="bg-primary shadow-lg hover:shadow-2xl transition-shadow"
                    style={innerCardStyle}
                  >
                    {/* Image with reveal effect */}
                    <div
                      className="project-image-wrapper h-48 bg-gray-700 flex items-center justify-center overflow-hidden relative"
                    >
                      {project.image ? (
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-gray-500">Project Image</span>
                      )}
                    </div>

                    <div className="p-6">
                      <motion.h3 
                        className="text-xl font-bold mb-2 text-white"
                        variants={getProjectVariants(index)}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p 
                        className="text-textSecondary mb-4"
                        variants={getProjectVariants(index)}
                      >
                        {project.description}
                      </motion.p>
                      
                      {/* Technologies */}
                      <motion.div 
                        className="flex flex-wrap gap-2 mb-4"
                        variants={containerVariants}
                      >
                        {project.technologies.map((tech, techIdx) => (
                          <motion.span 
                            key={techIdx}
                            className="px-3 py-1 bg-tertiary text-secondary text-sm rounded-full"
                            variants={techBadgeVariants}
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </motion.div>

                      {/* Links */}
                      <motion.div 
                        className="flex gap-4"
                        variants={containerVariants}
                      >
                        <motion.a 
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full text-center py-2 border border-secondary text-secondary rounded hover:bg-secondary hover:text-primary transition-all"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          GitHub
                        </motion.a>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;