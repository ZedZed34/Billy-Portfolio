import { motion } from 'framer-motion';
import profilePic from '../assets/profiles/profile.jpeg';
import cvFile from '../assets/resume/HLA_Resume.pdf';
import githubIcon from '../assets/icons/github-social.svg';
import linkedinIcon from '../assets/icons/linkedin-social.svg';
import instagramIcon from '../assets/icons/instagram-social.svg';
import lineIcon from '../assets/icons/line-social.svg';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/ZedZed34', icon: githubIcon },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/htet-lin-aung-5159491a0',
    icon: linkedinIcon,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/billyhtet.hla',
    icon: instagramIcon,
  },
  { label: 'LINE', href: 'https://line.me/ti/p/I8tP8Q7-Ym', icon: lineIcon },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => (
  <section
    id="home"
    className="relative flex min-h-screen items-center overflow-hidden bg-primary pt-28 sm:pt-32"
  >
    <div
      className="pointer-events-none absolute -right-48 top-20 h-[32rem] w-[32rem] rounded-full bg-secondary opacity-20 blur-[120px]"
      aria-hidden="true"
    />
    <div
      className="pointer-events-none absolute -left-48 bottom-0 h-96 w-96 rounded-full border border-secondary opacity-30"
      aria-hidden="true"
    />

    <div className="section-container relative z-10 w-full">
      <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
        <motion.div
          className="order-2 text-center lg:order-1 lg:text-left"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1, delayChildren: 0.15 }}
        >
          <motion.h1
            className="text-balance text-5xl font-bold leading-[1.04] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl"
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            Hi, I&apos;m <span className="text-secondary">Billy.</span>
          </motion.h1>

          <motion.h2
            className="mt-5 text-xl font-semibold text-white sm:text-2xl"
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            I design and build thoughtful digital products.
          </motion.h2>

          <motion.p
            className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-8 text-textSecondary sm:text-lg lg:mx-0"
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            A passionate Software Engineer who turns modern technologies and
            appealing ideas into elegant, efficient, and user-friendly
            applications.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <a href="#projects" className="btn-primary">
              Explore my work
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href={cvFile} download="Htet_Lin_Aung_Resume.pdf" className="btn-secondary">
              Download résumé
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>

          <motion.div
            className="mt-8 flex items-center justify-center gap-3 lg:justify-start"
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <span className="mr-1 text-xs font-semibold uppercase tracking-[0.18em] text-textSecondary">
              Find me
            </span>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={`${social.label} profile`}
              >
                <img src={social.icon} alt="" className="h-full w-full" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="order-1 mx-auto w-full max-w-[28rem] lg:order-2"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
        >
          <div className="relative">
            <div
              className="absolute -inset-4 translate-x-6 translate-y-6 rounded-[2rem] border border-secondary"
              aria-hidden="true"
            />
            <div
              className="absolute -left-6 -top-6 h-24 w-24 rounded-2xl bg-secondary opacity-60"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-tertiary shadow-2xl shadow-black/40">
              <img
                src={profilePic}
                alt="Htet Lin Aung, Software Engineer"
                className="h-full w-full object-cover object-center"
                fetchPriority="high"
              />
              <div
                className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary to-transparent"
                aria-hidden="true"
              />
              <div className="absolute inset-x-5 bottom-5 flex items-center justify-between rounded-xl border border-white/10 bg-primary/80 px-4 py-3 backdrop-blur-md">
                <div>
                  <p className="text-sm font-bold text-white">Htet Lin Aung</p>
                  <p className="text-xs text-textSecondary">AKA Billy</p>
                </div>
                <span className="h-2.5 w-2.5 rounded-full bg-secondary shadow-[0_0_0_5px_rgba(101,0,31,0.25)]" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
