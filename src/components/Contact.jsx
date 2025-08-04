import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    setStatus('sending');

    try {
      // You'll need to replace these with your EmailJS credentials
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formData,
        'YOUR_USER_ID'
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-primary pb-4 pt-12">
      <div className="section-container">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          Get In <span className="text-white">Touch</span>
        </h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-tertiary rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-tertiary rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 bg-tertiary rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-secondary text-white py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-300"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && (
              <p className="text-green-500 text-center">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
            )}
          </form>

          <div className="mt-6 text-center">
            <p className="text-white mb-1">
              Email: <span className="text-secondary">htetlinaungpc@gmail.com</span>
            </p>
            <p className="text-white mb-2">
              WhatsApp: <span className="text-secondary">+6584024132</span>
            </p>
            <a
              href="/cv.pdf"
              download="Htet_Lin_Aung_CV.pdf"
              className="text-secondary hover:text-opacity-80 transition-colors duration-200 underline text-lg mb-3 inline-block"
            >
              Download CV
            </a>

            {/* Social Links */}
            <div className="flex justify-center gap-8 mt-3">
              <a
                href="https://github.com/yourgithub"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 hover:scale-110 transition-transform"
                aria-label="GitHub Profile"
              >
                <img src="/icons/github-social.svg" alt="GitHub" className="w-full h-full" />
              </a>
              <a
                href="https://linkedin.com/in/yourlinkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 hover:scale-110 transition-transform"
                aria-label="LinkedIn Profile"
              >
                <img src="/icons/linkedin-social.svg" alt="LinkedIn" className="w-full h-full" />
              </a>
              <a
                href="https://instagram.com/yourinstagram"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 hover:scale-110 transition-transform"
                aria-label="Instagram Profile"
              >
                <img src="/icons/instagram-social.svg" alt="Instagram" className="w-full h-full" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;