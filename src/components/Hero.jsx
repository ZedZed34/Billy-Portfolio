import { motion } from 'framer-motion';
import profilePic from '../assets/profiles/profile.jpeg';
import githubIcon from '../assets/icons/github-social.svg';
import linkedinIcon from '../assets/icons/linkedin-social.svg';
import instagramIcon from '../assets/icons/instagram-social.svg';
import lineIcon from '../assets/icons/line-social.svg';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const profileVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const socialVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };
  return (
    <motion.section
      id="home"
      className="min-h-screen flex items-center bg-primary"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Profile Picture - Left Side */}
          <motion.div
            className="flex justify-center md:justify-start"
            variants={itemVariants}
          >
            <motion.div
              className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-secondary shadow-2xl"
              variants={profileVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.img
                src={profilePic}
                alt="Htet Lin Aung"
                className="w-full h-full object-cover object-center"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
              />
            </motion.div>
          </motion.div>

          {/* Introduction - Right Side */}
          <motion.div
            className="text-center md:text-left"
            variants={itemVariants}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
              variants={itemVariants}
            >
              Hi, I'm               <motion.span
                className="text-secondary"
                style={{ color: '#65081f' }}  // Dark red color
              >
                Billy
              </motion.span>
            </motion.h1>
            <motion.h2
              className="text-2xl sm:text-3xl font-bold text-textSecondary mb-4"
              variants={itemVariants}
            >
              Software Engineer
            </motion.h2>
            <motion.p
              className="text-xl text-textSecondary mb-8"
              variants={itemVariants}
            >
              A passionate and profound Software Engineer with high-caliber and eagerness to attain new knowledge, conveying all the solutions and experiences with modern technologies and appealing ideas into elegant, efficient, and user-friendly applications.
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 justify-center md:justify-start"
              variants={itemVariants}
            >
              <motion.a
                href="https://github.com/ZedZed34"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12"
                variants={socialVariants}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="GitHub Profile"
              >
                <img src={githubIcon} alt="GitHub" className="w-full h-full" />
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/htet-lin-aung-5159491a0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12"
                variants={socialVariants}
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="LinkedIn Profile"
              >
                <img src={linkedinIcon} alt="LinkedIn" className="w-full h-full" />
              </motion.a>

              <motion.a
                href="https://www.instagram.com/billyhtet.hla"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12"
                variants={socialVariants}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Instagram Profile"
              >
                <img src={instagramIcon} alt="Instagram" className="w-full h-full" />
              </motion.a>

              <motion.a
                href="https://line.me/ti/p/I8tP8Q7-Ym"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12"
                variants={socialVariants}
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="LINE"
              >
                <img src={lineIcon} alt="LINE" className="w-full h-full" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;