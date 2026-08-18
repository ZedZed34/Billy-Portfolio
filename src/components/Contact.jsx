import { useState } from 'react';
import { motion } from 'framer-motion';
import cvFile from '../assets/resume/HLA_Resume.pdf';

const ACCESS_KEY = '3a3798cf-c5a2-4a3a-8083-b17e3c754a90';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/ZedZed34', icon: '/icons/github-social.svg' },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/htet-lin-aung-5159491a0',
    icon: '/icons/linkedin-social.svg',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/billyhtet.hla',
    icon: '/icons/instagram-social.svg',
  },
  { label: 'LINE', href: 'https://line.me/ti/p/I8tP8Q7-Ym', icon: '/icons/line-social.svg' },
];

const fieldClass =
  'mt-2 w-full rounded-xl border border-white/10 bg-primary px-4 py-3 text-white placeholder:text-textSecondary/70 transition duration-200 hover:border-white/20 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/40';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          ...formData,
          replyto: formData.email,
          from_name: formData.name,
          to_name: 'Htet Lin Aung',
        }),
      });
      const result = await response.json();

      if (!result.success) throw new Error('Form submission failed');
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-primary">
      <div
        className="pointer-events-none absolute -bottom-44 -right-44 h-[30rem] w-[30rem] rounded-full bg-secondary opacity-20 blur-[120px]"
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-kicker">Let&apos;s connect</span>
          <h2 className="section-title">Have a project or opportunity in mind?</h2>
          <p className="section-intro">
            Tell me a little about what you&apos;re building. I&apos;ll get back
            to you as soon as I can.
          </p>
        </motion.header>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
          <motion.aside
            className="surface-card flex flex-col p-6 sm:p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
              Direct contact
            </p>
            <h3 className="mt-3 text-2xl font-bold text-white">Start a conversation.</h3>
            <p className="mt-4 text-sm leading-7 text-textSecondary">
              Prefer email or messaging? Reach me directly through any of the
              channels below.
            </p>

            <dl className="mt-8 space-y-6">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-textSecondary">Email</dt>
                <dd className="mt-1">
                  <a
                    href="mailto:htetlinaungpc@gmail.com"
                    className="break-all font-semibold text-white transition hover:text-secondary"
                  >
                    htetlinaungpc@gmail.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-textSecondary">WhatsApp</dt>
                <dd className="mt-1">
                  <a
                    href="https://wa.me/6584024132"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-white transition hover:text-secondary"
                  >
                    +65 8402 4132
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-textSecondary">LINE ID</dt>
                <dd className="mt-1 font-semibold text-white">1446895</dd>
              </div>
            </dl>

            <a
              href={cvFile}
              download="Htet_Lin_Aung_Resume.pdf"
              className="btn-secondary mt-8 w-full"
            >
              Download résumé
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <div className="mt-auto pt-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-textSecondary">Elsewhere</p>
              <div className="flex gap-3">
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
              </div>
            </div>
          </motion.aside>

          <motion.form
            onSubmit={handleSubmit}
            className="surface-card p-6 sm:p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block text-sm font-semibold text-white">
                Name
                <input
                  className={fieldClass}
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  placeholder="Your name"
                  required
                />
              </label>
              <label className="block text-sm font-semibold text-white">
                Email
                <input
                  className={fieldClass}
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                />
              </label>
            </div>

            <label className="mt-6 block text-sm font-semibold text-white">
              Subject
              <input
                className={fieldClass}
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What would you like to discuss?"
                required
              />
            </label>

            <label className="mt-6 block text-sm font-semibold text-white">
              Message
              <textarea
                className={fieldClass}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="A few details about your project or opportunity..."
                rows="7"
                required
              />
            </label>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary mt-6 w-full cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'sending' ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Sending message...
                </>
              ) : (
                <>
                  Send message
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                    <path d="m4 4 16 8-16 8 3-8-3-8Zm3 8h13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </>
              )}
            </button>

            <div className="mt-4 min-h-6 text-center text-sm" aria-live="polite">
              {status === 'success' && (
                <p className="font-medium text-white">Thanks — your message was sent successfully.</p>
              )}
              {status === 'error' && (
                <p className="font-medium text-white">Something went wrong. Please try again or email me directly.</p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
