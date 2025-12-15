const Footer = () => {
  return (
    <footer className="bg-[#081C15] border-t border-white/10 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-white/60 text-sm">

        <p>
          © {new Date().getFullYear()} Albina Demaj. All rights reserved.
        </p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            href="https://github.com/albinademaj"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#52B788] transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/albina-demaj-881293300/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#52B788] transition"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
