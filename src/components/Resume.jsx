import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/* ─── Animated pulsing dot + expanding line next to section headers ─── */
const SectionIndicator = () => (
  <span className="inline-flex items-center gap-2 mr-3 align-middle">
    <motion.span
      className="inline-block w-3 h-3 rounded-full bg-secondary"
      animate={{
        scale: [1, 1.5, 1],
        opacity: [1, 0.6, 1],
        boxShadow: [
          '0 0 0px #65001f',
          '0 0 12px #65001f',
          '0 0 0px #65001f',
        ],
      }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.span
      className="inline-block h-[2px] bg-secondary rounded-full"
      initial={{ width: 0 }}
      whileInView={{ width: 32 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
    />
  </span>
);

/* ─── Animated vertical timeline line with node dots ─── */
const TimelineConnector = ({ count }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div
      ref={ref}
      className="absolute left-0 top-0 bottom-0 flex flex-col items-center"
      style={{ width: 20 }}
    >
      {/* Vertical line */}
      <motion.div
        className="absolute top-2 bottom-2 w-[2px] bg-secondary rounded-full"
        style={{ originY: 0 }}
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      />
      {/* Node dots positioned at each card */}
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-secondary border-2 border-primary z-10"
          style={{ top: `${(i / (count - 1 || 1)) * 100}%`, transform: 'translate(-50%, -50%)', left: '50%' }}
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.3 + i * 0.3, ease: 'easeOut' }}
        >
          {/* Pulse ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-secondary"
            animate={{ scale: [1, 2.2], opacity: [0.6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4 }}
          />
        </motion.div>
      ))}
    </div>
  );
};

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

  /* 3D flip reveal for certification cards */
  const certFlipVariants = {
    hidden: { opacity: 0, rotateY: 90, transformPerspective: 800 },
    visible: {
      opacity: 1,
      rotateY: 0,
      transformPerspective: 800,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 14
      }
    }
  };

  const experience = [
    {
      id: 1,
      title: 'Electronic Engineer',
      company: 'Aung Thein Than Co., Ltd.',
      location: 'Yangon, Myanmar',
      duration: 'Jan 2020 - Feb 2023',
      responsibilities: [
        'Responsible in the repair of electrical machinery and control systems, and facilitated the restoration of instrumentation systems through adherence to work orders and cross-departmental collaboration.',
        'Conducted systematic analysis and tracing of PCB circuits and electrical components in alignment with scheduled timelines and ISO protocols.',
        'Prepared structured agendas to facilitate meetings between clients and supervisory personnel.',
        'Oversaw and coordinated the installation of generators for datacenter operations.',
        'Evaluated technical vetting sheets for potential issues and prepared solution-oriented documentation for review by senior engineers and supervisors.'
      ]
    },
    {
      id: 2,
      title: 'Electronic Engineer Intern',
      company: 'Myanmar World Distribution Co., Ltd.',
      location: 'Yangon, Myanmar',
      duration: 'Sept 2017 - Jan 2018',
      responsibilities: [
        'Provided technical assistance in computer hardware troubleshooting as part of a service team in collaboration with peers.',
        'Contributed to the CCTV installation process by supporting Network Operations Center (NOC) engineers.',
        'Supported network engineers in configuring core elements required for effective server maintenance.',
        'Engaged in collaborative fiber optics installation projects across districts with co-interns, while acquiring practical knowledge of fiber optics fusion splicer operations.',
        'Developed foundational understanding of data transmission principles through active participation in server control center monitoring activities.'
      ]
    }
  ];

  const education = [
    {
      id: 1,
      degree: 'Postgraduate Certificate in Information Technology',
      institution: 'University of Auckland',
      duration: '2023 - 2024',
      details: 'Relevant coursework: Programming for Industry, Data Algorithms, Web Development, Database Systems, Software Engineering, Agile Development and Project Management, Git, Svelte, React, Node.js, Express.js, MongoDB, MySQL, CI/CD'
    },
    {
      id: 2,
      degree: 'Bachelor of Engineering with Honours in Electronic Systems Engineering',
      institution: 'University of Bedfordshire',
      duration: '2016 - 2019',
      details: 'Relevant coursework: Circuit Design, Control Systems, Digital Signal Processing, Microcontrollers, Electromagnetics, Communication Systems'
    }
  ];

  const certifications = [
    { id: 1, name: 'Spring Framework', issuer: 'LearnQuest', date: 'July 2025' },
    { id: 2, name: 'Introduction to Software Engineering', issuer: 'IBM', date: 'July 2025' },
    { id: 3, name: 'Introduction to Agile Development and Scrum', issuer: 'IBM', date: 'July 2025' },
    { id: 4, name: 'Introduction to Cloud Computing', issuer: 'IBM', date: 'July 2025' },
    { id: 5, name: 'Introduction to DevOps', issuer: 'IBM', date: 'July 2025' }
  ];

  return (
    <motion.section 
      id="resume" 
      className="bg-primary py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 50, damping: 20 }}
      variants={containerVariants}
    >
      <div className="section-container">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 text-balance"
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
              className="text-2xl font-bold mb-6 text-white flex items-center"
              variants={itemVariants}
            >
              <SectionIndicator />
              Experience
            </motion.h3>
            {/* Timeline wrapper */}
            <div className="relative pl-8">
              <TimelineConnector count={experience.length} />
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
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div variants={sectionVariants}>
            {/* Education */}
            <motion.h3 
              className="text-2xl font-bold mb-6 text-white flex items-center"
              variants={itemVariants}
            >
              <SectionIndicator />
              Education
            </motion.h3>
            {/* Education timeline */}
            <div className="relative pl-8">
              <TimelineConnector count={education.length} />
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
            </div>

            {/* Certifications with 3D flip reveal */}
            <motion.h3 
              className="text-2xl font-bold mb-6 text-white flex items-center"
              variants={itemVariants}
            >
              <SectionIndicator />
              Certifications
            </motion.h3>
            <motion.div 
              className="space-y-4"
              variants={containerVariants}
              style={{ perspective: 800 }}
            >
              {certifications.map((cert) => (
                <motion.div 
                  key={cert.id} 
                  className="bg-tertiary p-4 rounded-lg"
                  variants={certFlipVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{ transformStyle: 'preserve-3d' }}
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