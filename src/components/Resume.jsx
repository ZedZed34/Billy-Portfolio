const Resume = () => {
  const experience = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Tech Company Name',
      duration: '2023 - Present',
      responsibilities: [
        'Developed and maintained full-stack web applications using React and Node.js',
        'Collaborated with cross-functional teams to deliver high-quality software solutions',
        'Implemented RESTful APIs and integrated third-party services',
        'Participated in code reviews and contributed to technical documentation'
      ]
    },
    {
      id: 2,
      title: 'Junior Developer',
      company: 'Previous Company',
      duration: '2022 - 2023',
      responsibilities: [
        'Assisted in developing frontend components using React and TypeScript',
        'Worked on bug fixes and feature enhancements',
        'Participated in Agile development processes',
        'Learned and applied best practices in software development'
      ]
    }
  ];

  const education = [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University Name',
      duration: '2018 - 2022',
      details: 'Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems'
    }
  ];

  const certifications = [
    {
      id: 1,
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2023'
    },
    {
      id: 2,
      name: 'React Developer Certification',
      issuer: 'Meta',
      date: '2023'
    }
  ];

  const handleDownload = () => {
    // Create a link to download the resume
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add your resume PDF to the public folder
    link.download = 'Htet_Lin_Aung_Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="bg-primary py-20">
      <div className="section-container">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Resume
          </h2>
          <button
            onClick={handleDownload}
            className="px-6 py-3 bg-secondary text-primary rounded-lg hover:bg-opacity-90 transition-opacity flex items-center gap-2"
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
              />
            </svg>
            Download Resume
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-secondary">Experience</h3>
            <div className="space-y-6">
              {experience.map((job) => (
                <div key={job.id} className="bg-tertiary p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-white">{job.title}</h4>
                  <p className="text-secondary mb-2">{job.company}</p>
                  <p className="text-textSecondary text-sm mb-4">{job.duration}</p>
                  <ul className="list-disc list-inside text-textSecondary space-y-1">
                    {job.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            {/* Education */}
            <h3 className="text-2xl font-bold mb-6 text-secondary">Education</h3>
            <div className="space-y-6 mb-12">
              {education.map((edu) => (
                <div key={edu.id} className="bg-tertiary p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                  <p className="text-secondary mb-2">{edu.institution}</p>
                  <p className="text-textSecondary text-sm mb-2">{edu.duration}</p>
                  <p className="text-textSecondary">{edu.details}</p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <h3 className="text-2xl font-bold mb-6 text-secondary">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div key={cert.id} className="bg-tertiary p-4 rounded-lg">
                  <h4 className="text-lg font-bold text-white">{cert.name}</h4>
                  <p className="text-textSecondary">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-12 bg-tertiary p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-secondary">Technical Skills</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold text-white mb-3">Frontend</h4>
              <p className="text-textSecondary">React, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, Redux, Next.js</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3">Backend</h4>
              <p className="text-textSecondary">Node.js, Express.js, Python, Django, RESTful APIs, GraphQL, PostgreSQL, MongoDB</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3">Tools & Others</h4>
              <p className="text-textSecondary">Git, Docker, AWS, CI/CD, Jest, Webpack, Agile/Scrum, Linux</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;