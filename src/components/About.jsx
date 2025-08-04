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
import restapiIcon from '../assets/icons/restapi.svg';
import postmanIcon from '../assets/icons/postman.svg';
import githubIcon from '../assets/icons/github.svg';
import gitIcon from '../assets/icons/git.svg';
import reactNativeIcon from '../assets/icons/reactnative.svg';
import htmlIcon from '../assets/icons/html.svg';
import cssIcon from '../assets/icons/css.svg';

const About = () => {
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
      name: 'RESTful API',
      icon: restapiIcon
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
    <section id="about" className="bg-primary py-20">
      <div className="section-container">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white text-center">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1">
            <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-secondary shadow-2xl mb-8">
              <img 
                src={profilePic2} 
                alt="Htet Lin Aung" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="text-center">
              <p className="text-textSecondary mb-4 text-lg">
                [Your introduction will go here. We can add this later when you provide your details.]
              </p>
              <p className="text-textSecondary mb-4 text-lg">
                [We can add your professional journey and aspirations here.]
              </p>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-6 text-secondary text-center">Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-tertiary p-6 rounded-lg flex flex-col items-center gap-3 hover:bg-secondary transition-all cursor-pointer group"
                >
                  <div className="group-hover:scale-110 transition-transform">
                    <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
                  </div>
                  <span className="text-white font-medium group-hover:text-primary">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;