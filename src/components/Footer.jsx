import { motion } from 'framer-motion';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };
  return (
    <footer className="bg-primary py-1">
      <div className="section-container">
        <div className="flex flex-col items-center">
          <motion.p
            className="text-textSecondary text-sm"
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
          >
            Copyright © {new Date().getFullYear()} Billy Htet
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;