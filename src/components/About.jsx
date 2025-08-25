import { motion } from 'framer-motion';
import profilePic2 from '../assets/profiles/profile2.jpeg';
// Importing all icons
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

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const profileVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };
  const skills = [
    {
      name: 'React',
      icon: reactIcon
    },
    {
      name: 'Node.js',
      icon: nodejsIcon
    },
    {
      name: 'Java',
      icon: javaIcon
    },
    {
      name: 'Spring',
      icon: springIcon
    },
    {
      name: 'Python',
      icon: pythonIcon
    },
    {
      name: 'Django',
      icon: djangoIcon
    },
    {
      name: 'Svelte',
      icon: svelteIcon
    },
    {
      name: 'Express.js',
      icon: expressjsIcon
    },
    {
      name: 'MySQL',
      icon: mysqlIcon
    },
    {
      name: 'PostgreSQL',
      icon: postgresqlIcon
    },

    {
      name: 'Postman',
      icon: postmanIcon
    },
    {
      name: 'GitHub',
      icon: githubIcon
    },
    {
      name: 'Git',
      icon: gitIcon
    },
    {
      name: 'React Native',
      icon: reactNativeIcon
    },
    {
      name: 'HTML',
      icon: htmlIcon
    },
    {
      name: 'CSS',
      icon: cssIcon
    }
  ];

  return (
    <motion.section 
      id="about" 
      className="bg-primary py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="section-container">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold mb-8 text-white text-center"
          variants={itemVariants}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <motion.div 
            className="flex-1"
            variants={itemVariants}
          >
            <motion.div 
              className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-secondary shadow-2xl mb-8"
              variants={profileVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img 
                src={profilePic2} 
                alt="Htet Lin Aung" 
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
            <motion.div 
              className="text-center"
              variants={itemVariants}
            >
              <motion.p 
                className="text-textSecondary mb-4 text-lg"
                variants={itemVariants}
              >
                Hi, I am <span className="font-semibold">Billy</span>, a <span className="font-semibold">Software Engineer</span> with special expertise in <span className="font-semibold">Svelte</span>, <span className="font-semibold">React</span>, <span className="font-semibold">Node.js</span>, <span className="font-semibold">Django</span>, <span className="font-semibold">Spring</span>, <span className="font-semibold">Express.js</span> and <span className="font-semibold">RESTful API</span> alongside <span className="font-semibold">RDBMS</span> technologies like <span className="font-semibold">SQLite</span>, <span className="font-semibold">MySQL</span>, <span className="font-semibold">PostgreSQL</span>, and <span className="font-semibold">MongoDB</span> as <span className="font-semibold">NoSQL</span>, as well as possess the knowledge of <span className="font-semibold">Agile Development</span>, <span className="font-semibold">Waterfall Model</span>, and <span className="font-semibold">Scrum</span>. I can also illustrate the <span className="font-semibold">UI/UX design</span>, and <span className="font-semibold">Wireframes</span> with <span className="font-semibold">Figma</span> at competent level. I am the character that I always wanted to hone up my skills when it comes to exploring modern technologies and so on, leveraging my skills is always the greatest strength for me. I am always keen to deliver seamless solutions to all sectors of businesses.
              </motion.p>
              <motion.p 
                className="text-textSecondary mb-4 text-lg"
                variants={itemVariants}
              >
                Before I have become a Software Engineer, I was an Electronic Engineer for 3 years and 2 months in Myanmar. I was responsible for taking on tasks such as repairing control systems, tracing PCB circuits as engineering practices, coordination of generator installations for data-center environments, as well as designing and developing IoT components and configurations with Arduino Microcontrollers. During my tenure as an electronic engineer, I boosted up my debugging discipline, documentation habits, and team collaboration with cross-functional teams.              </motion.p>
              <motion.p 
                className="text-textSecondary mb-4 text-lg"
                variants={itemVariants}
              >
                Once after mesmerized by the mystery of Computers, I took Postgraduate Certificate in Information Technology as an enhancement to my career to tackle jobs in tech industries. I built multi-functional projects such as Carpark Management API with Django framework with Python, a financial tracking API with featured MVC with Spring framework, Calories Calculator based on TDEE/BMR for fat loss or weight gain goals with functional features including generating workout plans with bodyweight goals developed with React.js, and A Full-Stack responsive Blogging Web Application with Svelte framework alongside JWT authentication, with concrete demonstrations of Frontend/Backend technology and competent knowledge of DevOps.              </motion.p>
              
            </motion.div>
          </motion.div>
          <motion.div 
            className="flex-1"
            variants={itemVariants}
          >
            <motion.h3 
              className="text-2xl font-bold mb-6 text-secondary text-center"
              variants={itemVariants}
            >
              Skills
            </motion.h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  className="bg-tertiary p-6 rounded-lg flex flex-col items-center gap-3 hover:bg-secondary transition-all cursor-pointer group"
                  variants={skillVariants}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                >
                  <motion.div 
                    className="group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
                  </motion.div>
                  <span className="text-white font-medium group-hover:text-primary">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;