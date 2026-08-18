import { motion } from 'framer-motion';
import caloriesCalculatorImg from '../assets/projects/calories-calculator.jpg';
import adoptMeImg from '../assets/projects/adopt-me.jpg';
import carparkAPIImg from '../assets/projects/carpark-api.jpg';
import financialAPIImg from '../assets/projects/financial-api.jpg';
import reviveImg from '../assets/projects/ReVive.jpg';

const projects = [
  {
    id: 1,
    title: 'Calories Calculator',
    description: 'A web application to track and manage calorie intake with a user-friendly interface.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Vercel'],
    image: caloriesCalculatorImg,
    githubLink: 'https://github.com/ZedZed34/Calories-Counter.git',
  },
  {
    id: 2,
    title: 'Adopt Me',
    description: 'Pet Adoption Full-Stack web application, developed with SvelteKit as Frontend, and Node.js and Express.js as Backend.',
    technologies: ['Svelte', 'SvelteKit', 'Node.js', 'Express.js', 'SQLite', 'JWT', 'CORS'],
    image: adoptMeImg,
    githubLink: 'https://github.com/ZedZed34/Adopt-me.git',
  },
  {
    id: 3,
    title: 'Carparking Management',
    description: 'Playing with Django-RESTful API service with filtering features of car parking slots with carparks dataset.',
    technologies: ['Python', 'Django', 'Django REST Framework', 'SQLite', 'Pandas', 'NumPy'],
    image: carparkAPIImg,
    githubLink: 'https://github.com/ZedZed34/Carparking-Management-API.git',
  },
  {
    id: 4,
    title: 'Spend Tracker',
    description: 'A financial tracking API with Spring framework comprising user account creation, H2 database integration, and transaction management.',
    technologies: ['Java', 'Spring Boot', 'H2', 'JPA', 'Spring Security', 'MVC', 'Spring Data Validation', 'Spring Web', 'PostgreSQL'],
    image: financialAPIImg,
    githubLink: 'https://github.com/ZedZed34/Financial-Tracking-API.git',
  },
  {
    id: 5,
    title: 'ReVive',
    description: 'A full-stack peer-to-peer platform for donating, discovering, requesting, and arranging pickup of reusable electronics within local communities.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Framer Motion'],
    image: reviveImg,
    githubLink: 'https://github.com/vibe-code-tours/team-15-app.git',
  },
];

const Projects = () => (
  <section id="projects" className="bg-tertiary">
    <div className="section-container">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <span className="section-kicker">Selected work</span>
        <h2 className="section-title">Projects built to solve real problems.</h2>
        <p className="section-intro">
          A selection of full-stack applications and APIs spanning health,
          community, mobility, and personal finance.
        </p>
      </motion.header>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-primary transition duration-300 hover:-translate-y-1 hover:border-secondary hover:shadow-2xl hover:shadow-black/30"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.24) }}
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-tertiary">
              <img
                src={project.image}
                alt={`Preview of the ${project.title} project`}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"
                aria-hidden="true"
              />
              <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-primary/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-pretty text-sm leading-6 text-textSecondary sm:text-base">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-tertiary px-3 py-1 text-xs font-medium text-textSecondary"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-[44px] cursor-pointer items-center justify-between rounded-xl border border-secondary px-4 py-2.5 text-sm font-semibold text-white transition duration-200 hover:bg-secondary"
                aria-label={`View ${project.title} source code on GitHub`}
              >
                View source
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                  <path d="M7 17 17 7M8 7h9v9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
