const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tertiary py-8">
      <div className="section-container">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            {/* Add your social media links here */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-secondary transition-colors duration-300"
            >
              GitHub
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-secondary transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-secondary transition-colors duration-300"
            >
              Twitter
            </a>
          </div>
          <p className="text-textSecondary text-sm">
            © {currentYear} Billy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;