import { motion } from 'framer-motion';
import profilePic2 from '../assets/profiles/profile2.jpeg';
import reactIcon from '../assets/icons/react.svg';
import nodejsIcon from '../assets/icons/nodejs.svg';
import javaIcon from '../assets/icons/java.svg';
import springIcon from '../assets/icons/spring.svg';
import pythonIcon from '../assets/icons/python.svg';
import djangoIcon from '../assets/icons/django.svg';
import svelteIcon from '../assets/icons/svelte.svg';
import expressjsIcon from '../assets/icons/expressjs.svg';
import mysqlIcon from '../assets/icons/mysql.svg';
import postgresqlIcon from '../assets/icons/postgresql.svg';
import postmanIcon from '../assets/icons/postman.svg';
import githubIcon from '../assets/icons/github.svg';
import gitIcon from '../assets/icons/git.svg';
import reactNativeIcon from '../assets/icons/reactnative.svg';
import htmlIcon from '../assets/icons/html.svg';
import cssIcon from '../assets/icons/css.svg';

const skills = [
  { name: 'React', icon: reactIcon },
  { name: 'Node.js', icon: nodejsIcon },
  { name: 'Java', icon: javaIcon },
  { name: 'Spring', icon: springIcon },
  { name: 'Python', icon: pythonIcon },
  { name: 'Django', icon: djangoIcon },
  { name: 'Svelte', icon: svelteIcon },
  { name: 'Express.js', icon: expressjsIcon },
  { name: 'MySQL', icon: mysqlIcon },
  { name: 'PostgreSQL', icon: postgresqlIcon },
  { name: 'Postman', icon: postmanIcon },
  { name: 'GitHub', icon: githubIcon },
  { name: 'Git', icon: gitIcon },
  { name: 'React Native', icon: reactNativeIcon },
  { name: 'HTML', icon: htmlIcon },
  { name: 'CSS', icon: cssIcon },
];

const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const About = () => (
  <motion.section
    id="about"
    className="bg-primary"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-80px' }}
    transition={{ staggerChildren: 0.08 }}
  >
    <div className="section-container">
      <motion.header variants={reveal} transition={{ duration: 0.5 }}>
        <span className="section-kicker">Get to know me</span>
        <h2 className="section-title">Engineering with curiosity and care.</h2>
        <p className="section-intro">
          A multidisciplinary engineer combining software, electronics, and
          product thinking to create dependable digital experiences.
        </p>
      </motion.header>

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-10">
        <motion.div
          className="surface-card overflow-hidden"
          variants={reveal}
          transition={{ duration: 0.5 }}
        >
          <div className="aspect-[4/3] overflow-hidden lg:aspect-auto lg:h-full lg:min-h-[34rem]">
            <img
              src={profilePic2}
              alt="Htet Lin Aung"
              className="h-full w-full object-cover object-center transition duration-500 hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.article
          className="surface-card flex flex-col justify-center p-6 sm:p-8 lg:p-10"
          variants={reveal}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <p className="text-lg font-semibold leading-8 text-white sm:text-xl">
            I&apos;m Billy, a Software Engineer focused on full-stack products,
            robust APIs, and thoughtful user experiences.
          </p>
          <div className="mt-6 space-y-5 text-pretty text-base leading-8 text-textSecondary">
            <p>
              My core toolkit includes Svelte, React, Node.js, Django, Spring,
              Express.js, RESTful APIs, and relational databases such as MySQL
              and PostgreSQL, alongside MongoDB. I also work with Agile, Scrum,
              UI/UX design, wireframes, and Figma.
            </p>
            <p>
              Before moving into software, I spent more than three years as an
              Electronic Engineer in Myanmar. Repairing control systems, tracing
              PCB circuits, coordinating generator installations for data
              centres, and developing Arduino-based IoT components shaped my
              debugging discipline and cross-functional collaboration.
            </p>
            <p>
              A Postgraduate Certificate in Information Technology from the
              University of Auckland helped me translate that foundation into
              software: from Django and Spring APIs to React and Svelte
              applications with authentication, responsive interfaces, and
              practical DevOps workflows.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 border-t border-white/10 pt-6 sm:grid-cols-3">
            <div>
              <p className="text-2xl font-bold text-white">3+ years</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-textSecondary">Engineering</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">Full stack</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-textSecondary">Product delivery</p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-2xl font-bold text-white">Always learning</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-textSecondary">Modern tools</p>
            </div>
          </div>
        </motion.article>
      </div>

      <motion.div
        className="mt-16"
        variants={reveal}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="mb-7 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <div>
            <span className="section-kicker text-left">Technical toolkit</span>
            <h3 className="text-2xl font-bold text-white sm:text-3xl">Skills I work with</h3>
          </div>
          <p className="max-w-lg text-center text-sm leading-6 text-textSecondary sm:text-right">
            Technologies used across frontend, backend, mobile, databases, API
            development, and collaborative delivery.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group flex min-h-32 flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-tertiary p-4 text-center transition duration-200 hover:-translate-y-1 hover:border-secondary hover:shadow-xl hover:shadow-black/30"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: Math.min(index * 0.025, 0.25) }}
            >
              <img
                src={skill.icon}
                alt=""
                className="h-10 w-10 transition duration-200 group-hover:scale-110"
                loading="lazy"
              />
              <span className="text-sm font-semibold text-white">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </motion.section>
);

export default About;
