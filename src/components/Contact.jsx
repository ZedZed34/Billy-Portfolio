import { useState } from 'react';

const Contact = () => {
  // IMPORTANT: Replace this with your actual access key from https://web3forms.com/
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
    
    // Check if access key is still the placeholder
    if (ACCESS_KEY === "YOUR_ACCESS_KEY") {
      alert("Please get your free access key from https://web3forms.com/ and replace YOUR_ACCESS_KEY in the code!");
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
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
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
              Email: <a href="mailto:htetlinaungpc@gmail.com" className="text-secondary hover:underline">htetlinaungpc@gmail.com</a>
            </p>
            <p className="text-white mb-2">
              WhatsApp: <a href="https://wa.me/6584024132" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">+6584024132</a>
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
                href="https://github.com/ZedZed34"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 hover:scale-110 transition-transform"
                aria-label="GitHub Profile"
              >
                <img src="/icons/github-social.svg" alt="GitHub" className="w-full h-full" />
              </a>
              <a
                href="https://linkedin.com/in/htet-lin-aung-5159491a0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 hover:scale-110 transition-transform"
                aria-label="LinkedIn Profile"
              >
                <img src="/icons/linkedin-social.svg" alt="LinkedIn" className="w-full h-full" />
              </a>
              <a
                href="https://www.instagram.com/billyhtet.hla"
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