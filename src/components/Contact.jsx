import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo } from 'react';
import cvFile from '../assets/resume/HLA_Resume.pdf';

/* ─── Animated background dot grid ─── */
const AnimatedDotGrid = () => {
  const dots = useMemo(() => {
    const arr = [];
    for (let row = 0; row < 12; row++) {
      for (let col = 0; col < 16; col++) {
        arr.push({ id: `${row}-${col}`, x: col * 60 + 30, y: row * 50 + 25 });
      }
    }
    return arr;
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <svg className="w-full h-full" style={{ minHeight: '100%' }}>
        {dots.map((dot) => (
          <motion.circle
            key={dot.id}
            cx={`${(dot.x / 960) * 100}%`}
            cy={`${(dot.y / 600) * 100}%`}
            r="1.5"
            fill="#65001f"
            initial={{ opacity: 0.08 }}
            animate={{
              opacity: [0.08, 0.25, 0.08],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </svg>
    </div>
  );
};

/* ─── Floating label input with glowing border ─── */
const FloatingInput = ({ id, name, value, onChange, required, type = 'text', isTextarea = false }) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value && value.length > 0;
  const isActive = isFocused || hasValue;
  const label = name.charAt(0).toUpperCase() + name.slice(1);

  const inputProps = {
    id,
    name,
    value,
    onChange,
    required,
    onFocus: () => setIsFocused(true),
    onBlur: () => setIsFocused(false),
    className: `w-full px-4 pt-6 pb-2 bg-tertiary rounded-lg focus:outline-none text-white transition-colors duration-300 ${
      isFocused ? 'ring-2 ring-secondary' : ''
    }`,
  };

  return (
    <motion.div
      className="relative"
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
    >
      {/* Glow effect behind the input */}
      <AnimatePresence>
        {isFocused && (
          <motion.div
            className="absolute inset-0 rounded-lg pointer-events-none z-0"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              boxShadow: [
                '0 0 10px rgba(101,0,31,0.3)',
                '0 0 20px rgba(101,0,31,0.5)',
                '0 0 10px rgba(101,0,31,0.3)',
              ],
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}
      </AnimatePresence>

      {/* Floating label */}
      <motion.label
        htmlFor={id}
        className="absolute left-4 pointer-events-none font-medium z-10"
        animate={{
          top: isActive ? 6 : 14,
          fontSize: isActive ? '0.7rem' : '0.875rem',
          color: isActive ? '#65001f' : '#cccccc',
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        {label}
      </motion.label>

      {/* Input or textarea */}
      {isTextarea ? (
        <motion.textarea
          {...inputProps}
          rows="4"
          whileFocus={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        />
      ) : (
        <motion.input
          {...inputProps}
          type={type}
          whileFocus={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        />
      )}
    </motion.div>
  );
};

/* ─── Animated submit button with loading/success states ─── */
const SubmitButton = ({ status }) => (
  <motion.button
    type="submit"
    disabled={status === 'sending'}
    className="w-full bg-secondary text-white py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-300 relative overflow-hidden min-h-[48px] flex items-center justify-center cursor-pointer"
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(101,0,31,0.4)' }}
    whileTap={{ scale: 0.98 }}
  >
    <AnimatePresence mode="wait">
      {status === 'sending' ? (
        <motion.div
          key="spinner"
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {/* Animated spinner */}
          <motion.div
            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
          />
          <span>Sending...</span>
        </motion.div>
      ) : status === 'success' ? (
        <motion.div
          key="check"
          className="flex items-center gap-2"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ type: 'spring', stiffness: 200, damping: 12 }}
        >
          {/* Animated checkmark */}
          <motion.svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <motion.path
              d="M5 13l4 4L19 7"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </motion.svg>
          <span>Sent!</span>
        </motion.div>
      ) : (
        <motion.span
          key="send"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          Send Message
        </motion.span>
      )}
    </AnimatePresence>
  </motion.button>
);

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

    // Reminder for setting up Email API Token not really relevant
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
      className="bg-primary pb-4 pt-12 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* Animated background dot pattern */}
      <AnimatedDotGrid />

      <div className="section-container relative z-10">
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
            <FloatingInput
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <FloatingInput
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <FloatingInput
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <FloatingInput
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              isTextarea
            />

            <SubmitButton status={status} />

            <AnimatePresence>
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
            </AnimatePresence>
          </motion.form>

          <motion.div
            className="mt-6 text-center"
            variants={containerVariants}
          >
            <motion.p
              className="text-white mb-1 text-xl"
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
              className="text-white mb-2 text-xl"
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
              className="text-white mb-3 text-xl"
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
              download="Htet_Lin_Aung_Resume.pdf"
              className="text-secondary hover:text-opacity-80 transition-colors duration-200 underline text-2xl mb-3 inline-block"
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
      </div>
    </motion.section>
  );
};

export default Contact;