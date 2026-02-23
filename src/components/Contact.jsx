import { motion } from 'framer-motion';
import { useState } from 'react';
import cvFile from '../assets/resume/HLA_Resume.pdf';

const Contact = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const formControlVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
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
  // IMPORTANT: API actual access key from https://web3forms.com/
  const ACCESS_KEY = "3a3798cf-c5a2-4a3a-8083-b17e3c754a90";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Getting Email API Token
    if (ACCESS_KEY === "ACCESS_KEY") {
      alert("Please get your free access key from https://web3forms.com/ and replace ACCESS_KEY in the code!");
      return;
    }

    setStatus('sending');

    try {
      // Using Web3Forms - simpler alternative to EmailJS
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          replyto: formData.email,
          from_name: formData.name,
          to_name: "Htet Lin Aung",
        }),
      });

      const result = await response.json();

      if (result.success) {
        console.log("Form submitted successfully");
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        console.error("Form submission failed:", result);
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <motion.section
      id="contact"
      className="bg-primary pb-4 pt-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="section-container">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-8 text-center"
          variants={itemVariants}
        >
          Get In <motion.span
            className="text-white"
            animate={{
              opacity: [1, 0.7, 1],
              transition: { duration: 2, repeat: Infinity }
            }}
          >
            Touch
          </motion.span>
        </motion.h2>
        <motion.div
          className="max-w-2xl mx-auto"
          variants={containerVariants}
        >
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            variants={containerVariants}
          >
            <motion.div variants={formControlVariants}>
              <motion.label
                htmlFor="name"
                className="block text-sm font-medium mb-2"
                variants={itemVariants}
              >
                Name
              </motion.label>
              <motion.input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-tertiary rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </motion.div>
            <motion.div variants={formControlVariants}>
              <motion.label
                htmlFor="email"
                className="block text-sm font-medium mb-2"
                variants={itemVariants}
              >
                Email
              </motion.label>
              <motion.input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-tertiary rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </motion.div>
            <motion.div variants={formControlVariants}>
              <motion.label
                htmlFor="subject"
                className="block text-sm font-medium mb-2"
                variants={itemVariants}
              >
                Subject
              </motion.label>
          <motion.input
             type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-tertiary rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  </motion.input>
        </motion.div>
        <motion.div variants={formControlVariants}>
          <motion.label
            htmlFor="message"
            className="block text-sm font-medium mb-2"
            variants={itemVariants}
          >
            Message
          </motion.label>
          <motion.textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-4 py-2 bg-tertiary rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            whileFocus={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </motion.div>
        <motion.button
          type="submit"
          disabled={status === 'sending'}
          className="w-full bg-secondary text-white py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-300"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </motion.button>
        {status === 'success' && (
          <motion.p
            className="text-green-500 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            Message sent successfully!
          </motion.p>
        )}
        {status === 'error' && (
          <motion.p
            className="text-red-500 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            Failed to send message. Please try again.
          </motion.p>
        )}
      </motion.form>

      <motion.div
        className="mt-6 text-center"
        variants={containerVariants}
      >
        <motion.p
          className="text-white mb-1"
          variants={itemVariants}
        >
          Email: <motion.a
            href="mailto:htetlinaungpc@gmail.com"
            className="text-secondary hover:underline"
            whileHover={{ scale: 1.05 }}
          >
            htetlinaungpc@gmail.com
          </motion.a>
        </motion.p>
        <motion.p
          className="text-white mb-2"
          variants={itemVariants}
        >
          WhatsApp: <motion.a
            href="https://wa.me/6584024132"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:underline"
            whileHover={{ scale: 1.05 }}
          >
            +6584024132
          </motion.a>
        </motion.p>
        <motion.p
          className="text-white mb-3"
          variants={itemVariants}
        >
          LINE ID: <motion.a
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover"
            whileHover={{ scale: 1.05 }}
          >
            1446895
          </motion.a>
        </motion.p>
        <motion.a
          href={cvFile}
          download="Htet_Lin_Aung_Resume.pdf" //Resume download filename
          className="text-secondary hover:text-opacity-80 transition-colors duration-200 underline text-lg mb-3 inline-block"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download Resume
        </motion.a>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-8 mt-3"
          variants={containerVariants}
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
            <img src="/icons/github-social.svg" alt="GitHub" className="w-full h-full" />
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
            <img src="/icons/linkedin-social.svg" alt="LinkedIn" className="w-full h-full" />
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
            <img src="/icons/instagram-social.svg" alt="Instagram" className="w-full h-full" />
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
            <img src="/icons/line-social.svg" alt="LINE" className="w-full h-full" />
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
      </div >
    </motion.section >
  );
};

export default Contact;