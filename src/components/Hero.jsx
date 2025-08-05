import profilePic from '../assets/profiles/profile.jpeg';
import githubIcon from '../assets/icons/github-social.svg';
import linkedinIcon from '../assets/icons/linkedin-social.svg';
import instagramIcon from '../assets/icons/instagram-social.svg';

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
              Software Engineer
            </h2>
            <p className="text-xl text-textSecondary mb-8">
              A passionate and profound Junior Software Engineer with high-caliber and eagerness to attain new knowledge, conveying all the solutions and experiences with modern technologies and appealing ideas into elegant, efficient, and user-friendly applications.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a 
                href="https://github.com/ZedZed34" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 hover:scale-110 transition-transform"
                aria-label="GitHub Profile"
              >
                <img src={githubIcon} alt="GitHub" className="w-full h-full" />
              </a>
              
              <a 
                href="https://linkedin.com/in/htet-lin-aung-5159491a0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 hover:scale-110 transition-transform"
                aria-label="LinkedIn Profile"
              >
                <img src={linkedinIcon} alt="LinkedIn" className="w-full h-full" />
              </a>
              
              <a 
                href="https://www.instagram.com/billyhtet.hla" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 hover:scale-110 transition-transform"
                aria-label="Instagram Profile"
              >
                <img src={instagramIcon} alt="Instagram" className="w-full h-full" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;