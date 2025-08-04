import profilePic2 from '../assets/profile2.jpeg';

const About = () => {
  return (
    <section id="about" className="bg-primary py-20">
      <div className="section-container">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <div className="mb-8 w-64 h-64 mx-auto md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-secondary shadow-2xl">
              <img 
                src={profilePic2} 
                alt="Htet Lin Aung" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div>
              <p className="text-textSecondary mb-4 text-lg">
                [Your introduction will go here. We can add this later when you provide your details.]
              </p>
              <p className="text-textSecondary mb-4 text-lg">
                [We can add your professional journey and aspirations here.]
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 text-secondary">Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="bg-tertiary p-4 rounded-lg text-center hover:bg-secondary hover:text-primary transition-all cursor-pointer">
                <span className="text-white font-medium">React</span>
              </div>
              <div className="bg-tertiary p-4 rounded-lg text-center hover:bg-secondary hover:text-primary transition-all cursor-pointer">
                <span className="text-white font-medium">Node.js</span>
              </div>
              <div className="bg-tertiary p-4 rounded-lg text-center hover:bg-secondary hover:text-primary transition-all cursor-pointer">
                <span className="text-white font-medium">JavaScript</span>
              </div>
              <div className="bg-tertiary p-4 rounded-lg text-center hover:bg-secondary hover:text-primary transition-all cursor-pointer">
                <span className="text-white font-medium">TypeScript</span>
              </div>
              <div className="bg-tertiary p-4 rounded-lg text-center hover:bg-secondary hover:text-primary transition-all cursor-pointer">
                <span className="text-white font-medium">MongoDB</span>
              </div>
              <div className="bg-tertiary p-4 rounded-lg text-center hover:bg-secondary hover:text-primary transition-all cursor-pointer">
                <span className="text-white font-medium">Express.js</span>
              </div>
              <div className="bg-tertiary p-4 rounded-lg text-center hover:bg-secondary hover:text-primary transition-all cursor-pointer">
                <span className="text-white font-medium">Python</span>
              </div>
              <div className="bg-tertiary p-4 rounded-lg text-center hover:bg-secondary hover:text-primary transition-all cursor-pointer">
                <span className="text-white font-medium">Git</span>
              </div>
              <div className="bg-tertiary p-4 rounded-lg text-center hover:bg-secondary hover:text-primary transition-all cursor-pointer">
                <span className="text-white font-medium">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;