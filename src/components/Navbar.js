import { useState, useEffect, useMemo } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");

  // FIX: useMemo për të shmangur ESLint warning
  const links = useMemo(() => [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      links.forEach((link) => {
        const section = document.querySelector(link.href);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(link.href);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#081C15]/80 backdrop-blur-md border-b border-white/10">
      <div className="relative max-w-7xl mx-auto px-6 h-[72px] flex items-center">

        {/* BRAND */}
        <span className="text-white font-semibold text-lg tracking-wide">
          Albina<span className="text-[#52B788]">.</span>
        </span>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium absolute left-1/2 -translate-x-1/2">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`relative transition ${
                  active === link.href
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-2 h-[2px] bg-[#52B788] transition-all ${
                    active === link.href ? "w-full" : "w-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="ml-auto md:hidden text-white text-2xl"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 bg-[#081C15]/95">
          <ul className="flex flex-col gap-5 mt-4 text-sm font-medium text-white/80">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#52B788] transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
