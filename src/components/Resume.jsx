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
      degree: 'Postgraduate Certificate in Information Technology',
      institution: 'The University of Auckland',
      duration: '2023 - 2024',
      details: 'Relevant coursework: Programming for Industry, Data Algorithms, Web Development, Database Systems, Software Engineering, Agile Development and Project Management, Git, Svelte, React, Node.js, Express.js, MongoDB, MySQL, CI/CD,'
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

  return (
    <section id="resume" className="bg-primary py-20">
      <div className="section-container">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          My Background
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Experience</h3>
            <div className="space-y-6">
              {experience.map((job) => (
                <div key={job.id} className="bg-tertiary p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-white">{job.title}</h4>
                  <p className="text-white mb-2">{job.company}</p>
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
            <h3 className="text-2xl font-bold mb-6 text-white">Education</h3>
            <div className="space-y-6 mb-12">
              {education.map((edu) => (
                <div key={edu.id} className="bg-tertiary p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                  <p className="text-white mb-2">{edu.institution}</p>
                  <p className="text-textSecondary text-sm mb-2">{edu.duration}</p>
                  <p className="text-textSecondary">{edu.details}</p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <h3 className="text-2xl font-bold mb-6 text-white">Certifications</h3>
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
      </div>
    </section>
  );
};

export default Resume;