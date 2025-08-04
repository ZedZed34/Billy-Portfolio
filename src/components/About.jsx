const About = () => {
  return (
    <section id="about" className="bg-primary py-20">
      <div className="section-container">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">
          About <span className="text-secondary">Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-textSecondary mb-4">
              [Your introduction will go here. We can add this later when you provide your details.]
            </p>
            <p className="text-textSecondary mb-4">
              [We can add your professional journey and aspirations here.]
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {/* We'll populate these with your actual skills later */}
              <div className="bg-tertiary p-4 rounded-lg text-center">
                <span className="text-secondary">Skill 1</span>
              </div>
              <div className="bg-tertiary p-4 rounded-lg text-center">
                <span className="text-secondary">Skill 2</span>
              </div>
              <div className="bg-tertiary p-4 rounded-lg text-center">
                <span className="text-secondary">Skill 3</span>
              </div>
              {/* Add more skills as needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;