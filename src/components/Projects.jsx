import { motion } from 'framer-motion';
import { useState } from 'react';
import caloriesCalculatorImg from "../assets/projects/calories-calculator.jpg"
import adoptMeImg from '../assets/projects/adopt-me.jpg';
import carparkAPIImg from '../assets/projects/carpark-api.jpg';
import financialAPIImg from '../assets/projects/financial-api.jpg';

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

  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

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
      <div className="section-container">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold mb-8 text-white text-center"
          variants={projectVariants}
        >
          My Projects
        </motion.h2>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              className="bg-primary rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              variants={projectVariants}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <motion.div 
                className="h-48 bg-gray-700 flex items-center justify-center overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
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
              </motion.div>
              <div className="p-6">
                <motion.h3 
                  className="text-xl font-bold mb-2 text-white"
                  variants={projectVariants}
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  className="text-textSecondary mb-4"
                  variants={projectVariants}
                >
                  {project.description}
                </motion.p>
                
                {/* Technologies */}
                <motion.div 
                  className="flex flex-wrap gap-2 mb-4"
                  variants={containerVariants}
                >
                  {project.technologies.map((tech, index) => (
                    <motion.span 
                      key={index}
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;