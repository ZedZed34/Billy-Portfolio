import { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, product management, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      category: 'fullstack',
      image: '/project1.png',
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team features.',
      technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
      category: 'frontend',
      image: '/project2.png',
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 3,
      title: 'REST API Service',
      description: 'A robust RESTful API service with authentication, rate limiting, and comprehensive documentation.',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Swagger'],
      category: 'backend',
      image: '/project3.png',
      liveLink: '#',
      githubLink: '#'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="bg-tertiary py-20">
      <div className="section-container">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white text-center">
          My Projects
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full transition-all ${
              filter === 'all' 
                ? 'bg-secondary text-primary' 
                : 'bg-primary text-white hover:bg-secondary hover:text-primary'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter('frontend')}
            className={`px-6 py-2 rounded-full transition-all ${
              filter === 'frontend' 
                ? 'bg-secondary text-primary' 
                : 'bg-primary text-white hover:bg-secondary hover:text-primary'
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => setFilter('backend')}
            className={`px-6 py-2 rounded-full transition-all ${
              filter === 'backend' 
                ? 'bg-secondary text-primary' 
                : 'bg-primary text-white hover:bg-secondary hover:text-primary'
            }`}
          >
            Backend
          </button>
          <button
            onClick={() => setFilter('fullstack')}
            className={`px-6 py-2 rounded-full transition-all ${
              filter === 'fullstack' 
                ? 'bg-secondary text-primary' 
                : 'bg-primary text-white hover:bg-secondary hover:text-primary'
            }`}
          >
            Full Stack
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-primary rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="h-48 bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500">Project Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-textSecondary mb-4">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-tertiary text-secondary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 bg-secondary text-primary rounded hover:bg-opacity-90 transition-opacity"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 border border-secondary text-secondary rounded hover:bg-secondary hover:text-primary transition-all"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;