import { TypeAnimation } from "react-type-animation";
import CodeBackground from "./CodeBackground";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative min-h-screen flex items-center
        bg-[#081C15] text-white px-6 pt-24 overflow-hidden
      "
    >
      {/* BACKGROUND CODE */}
      <CodeBackground />

      {/* OVERLAY – kontrollon kontrastin */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#081C15]/60 via-transparent to-[#081C15]/70" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT — TEXT */}
        <div className="text-center md:text-left">

          <p className="text-sm uppercase tracking-[0.3em] text-[#95D5B2] mb-4">
            Full-Stack Web Developer
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Albina <span className="text-[#52B788]">Demaj</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-white/80 mb-8">
            <TypeAnimation
              sequence={[
                "Building modern web applications",
                2000,
                "Designing clean user interfaces",
                2000,
                "Developing scalable backend systems",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>

          <p className="text-white/70 max-w-xl leading-relaxed mb-10">
            I’m a Computer Science Master’s student and Full-Stack Developer
            specialized in React, Laravel, and MySQL, focused on building
            real-world digital products with clean code and thoughtful design.
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="px-8 py-3 rounded-xl bg-[#52B788] text-[#081C15] font-semibold hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-8 py-3 rounded-xl border border-white/30 text-white hover:bg-white/10 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT — PHOTO */}
        <div className="flex justify-center md:justify-end">
          <div className="relative group">

            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-[#52B788]/30 blur-3xl opacity-80 group-hover:opacity-100 transition" />

            <img
              src="/albina.jpg"
              alt="Albina Demaj"
              className="
                relative z-10
                w-64 h-64
                md:w-80 md:h-80
                lg:w-96 lg:h-96
                object-cover
                rounded-full
                border-4 border-[#52B788]/40
                shadow-[0_25px_60px_rgba(0,0,0,0.6)]
                transition-transform duration-500
                group-hover:scale-105
              "
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
