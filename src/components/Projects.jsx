import { motion } from 'framer-motion';
import { useState } from 'react';

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
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, product management, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      image: '/project1.png',
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team features.',
      technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
      image: '/project2.png',
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 3,
      title: 'REST API Service',
      description: 'A robust RESTful API service with authentication, rate limiting, and comprehensive documentation.',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Swagger'],
      image: '/project3.png',
      liveLink: '#',
      githubLink: '#'
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
                className="h-48 bg-gray-700 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span className="text-gray-500">Project Image</span>
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
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 bg-secondary text-primary rounded hover:bg-opacity-90 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Demo
                  </motion.a>
                  <motion.a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 border border-secondary text-secondary rounded hover:bg-secondary hover:text-primary transition-all"
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