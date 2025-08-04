const ProjectCard = ({ title, description, technologies, imageUrl, liveUrl, githubUrl }) => {
  return (
    <div className="bg-tertiary rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
      <div className="h-48 bg-gray-800">
        {/* We'll add the project image here later */}
        <div className="h-full flex items-center justify-center text-textSecondary">
          [Project Image]
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-textSecondary mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-secondary bg-opacity-20 text-secondary rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white transition-colors duration-300"
            >
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white transition-colors duration-300"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  // We'll populate this with your actual projects later
  const projects = [
    {
      title: "Project 1",
      description: "Project description will go here.",
      technologies: ["Tech 1", "Tech 2", "Tech 3"],
      imageUrl: "",
      liveUrl: "#",
      githubUrl: "#"
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="bg-primary py-20">
      <div className="section-container">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">
          My <span className="text-secondary">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;