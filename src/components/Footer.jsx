const Footer = () => {
  return (
    <footer className="bg-tertiary py-8">
      <div className="section-container">
        <div className="flex flex-col items-center">
          {/* Social Links with Icons */}
          <div className="flex gap-4">
            <a 
              href="https://github.com/yourgithub" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 hover:scale-110 transition-transform"
              aria-label="GitHub Profile"
            >
              <img src="/src/assets/icons/github-social.svg" alt="GitHub" className="w-full h-full" />
            </a>
            
            <a 
              href="https://linkedin.com/in/yourlinkedin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 hover:scale-110 transition-transform"
              aria-label="LinkedIn Profile"
            >
              <img src="/src/assets/icons/linkedin-social.svg" alt="LinkedIn" className="w-full h-full" />
            </a>
            
            <a 
              href="https://instagram.com/yourinstagram" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 hover:scale-110 transition-transform"
              aria-label="Instagram Profile"
            >
              <img src="/src/assets/icons/instagram-social.svg" alt="Instagram" className="w-full h-full" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;