import { motion } from 'framer-motion';

const Resume = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };
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
    <motion.section 
      id="resume" 
      className="bg-primary py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        type: "spring",
        stiffness: 50,
        damping: 20
      }}
      variants={containerVariants}
    >
      <div className="section-container">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-white text-center mb-12"
          variants={sectionVariants}
        >
          My Background
        </motion.h2>

        <motion.div 
          className="grid lg:grid-cols-2 gap-12"
          variants={containerVariants}
        >
          {/* Experience Section */}
          <motion.div variants={sectionVariants}>
            <motion.h3 
              className="text-2xl font-bold mb-6 text-white"
              variants={itemVariants}
            >
              Experience
            </motion.h3>
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
            >
              {experience.map((job) => (
                <motion.div 
                  key={job.id} 
                  className="bg-tertiary p-6 rounded-lg"
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.h4 
                    className="text-xl font-bold text-white"
                    variants={itemVariants}
                  >
                    {job.title}
                  </motion.h4>
                  <motion.p 
                    className="text-white mb-2"
                    variants={itemVariants}
                  >
                    {job.company}
                  </motion.p>
                  <motion.p 
                    className="text-textSecondary text-sm mb-4"
                    variants={itemVariants}
                  >
                    {job.duration}
                  </motion.p>
                  <motion.ul 
                    className="list-disc list-inside text-textSecondary space-y-1"
                    variants={containerVariants}
                  >
                    {job.responsibilities.map((resp, index) => (
                      <motion.li 
                        key={index}
                        variants={itemVariants}
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        {resp}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div variants={sectionVariants}>
            {/* Education */}
            <motion.h3 
              className="text-2xl font-bold mb-6 text-white"
              variants={itemVariants}
            >
              Education
            </motion.h3>
            <motion.div 
              className="space-y-6 mb-12"
              variants={containerVariants}
            >
              {education.map((edu) => (
                <motion.div 
                  key={edu.id} 
                  className="bg-tertiary p-6 rounded-lg"
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.h4 
                    className="text-xl font-bold text-white"
                    variants={itemVariants}
                  >
                    {edu.degree}
                  </motion.h4>
                  <motion.p 
                    className="text-white mb-2"
                    variants={itemVariants}
                  >
                    {edu.institution}
                  </motion.p>
                  <motion.p 
                    className="text-textSecondary text-sm mb-2"
                    variants={itemVariants}
                  >
                    {edu.duration}
                  </motion.p>
                  <motion.p 
                    className="text-textSecondary"
                    variants={itemVariants}
                  >
                    {edu.details}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>

            {/* Certifications */}
            <motion.h3 
              className="text-2xl font-bold mb-6 text-white"
              variants={itemVariants}
            >
              Certifications
            </motion.h3>
            <motion.div 
              className="space-y-4"
              variants={containerVariants}
            >
              {certifications.map((cert) => (
                <motion.div 
                  key={cert.id} 
                  className="bg-tertiary p-4 rounded-lg"
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.h4 
                    className="text-lg font-bold text-white"
                    variants={itemVariants}
                  >
                    {cert.name}
                  </motion.h4>
                  <motion.p 
                    className="text-textSecondary"
                    variants={itemVariants}
                  >
                    {cert.issuer} • {cert.date}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Resume;