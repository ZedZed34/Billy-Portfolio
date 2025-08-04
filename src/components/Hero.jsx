import { Link } from 'react-scroll';
import profilePic from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-primary">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Profile Picture - Left Side */}
          <div className="flex justify-center md:justify-start">
            <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-secondary shadow-2xl">
              <img 
                src={profilePic} 
                alt="Htet Lin Aung" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Introduction - Right Side */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-secondary">Billy</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold text-textSecondary mb-4">
              Software Developer
            </h2>
            <p className="text-xl text-textSecondary mb-8">
              A passionate developer crafting digital experiences with modern technologies.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="btn-primary"
              >
                View My Work
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="px-6 py-3 text-sm font-medium text-secondary border-2 border-secondary rounded-lg hover:bg-secondary hover:bg-opacity-10 transition-all duration-300"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;