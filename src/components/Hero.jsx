import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-primary">
      <div className="section-container">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-secondary">Billy</span>
          </h1>
          <p className="text-xl sm:text-2xl text-textSecondary mb-8">
            A passionate developer crafting digital experiences
          </p>
          <div className="flex gap-4">
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
    </section>
  );
};

export default Hero;