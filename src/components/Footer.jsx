const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-primary">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8 lg:px-10">
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold text-white">Billy Htet</p>
          <p className="mt-1 text-xs text-textSecondary">
            © {new Date().getFullYear()} Htet Lin Aung. Built with care.
          </p>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm font-semibold text-textSecondary transition duration-200 hover:border-secondary hover:text-white"
          aria-label="Scroll back to the top of the page"
        >
          Back to top
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
            <path d="m6 15 6-6 6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
