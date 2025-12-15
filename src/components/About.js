const About = () => {
  return (
    <section
      id="about"
      className="relative py-28 px-6 bg-[#081C15] text-white overflow-hidden"
    >
      {/* subtle background glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#52B788]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT — TEXT */}
        <div data-aos="fade-right">
          <p className="text-sm uppercase tracking-[0.3em] text-[#95D5B2] mb-4">
            About Me
          </p>

          <h2 className="text-4xl font-bold mb-6 leading-tight">
            Building digital products<br />
            with purpose & precision.
          </h2>

          {/* accent line */}
          <div className="w-20 h-[3px] bg-[#52B788] rounded-full mb-6" />

          <p className="text-white/70 leading-relaxed mb-6">
            I’m a Full-Stack Web Developer and Computer Science Master’s student,
            specialized in building modern, scalable web applications.
            My work focuses on combining clean user interfaces with solid backend
            architecture to deliver reliable real-world solutions.
          </p>

          <p className="text-white/60 leading-relaxed">
            I have a strong foundation in frontend and backend development,
            experience working on collaborative projects, and a constant drive
            to improve code quality, performance, and user experience.
          </p>
        </div>

        {/* RIGHT — PROFESSIONAL SNAPSHOT */}
        <div
          className="relative pl-8 border-l border-white/10 space-y-10"
          data-aos="fade-left"
        >
          {/* Item */}
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40 mb-1">
              Experience
            </p>
            <p className="text-3xl font-bold text-[#52B788]">
              3+ Projects
            </p>
            <p className="text-sm text-white/60 mt-2 max-w-xs">
              Real-world applications developed from concept to deployment.
            </p>
          </div>

          <div className="h-px w-12 bg-white/10" />

          <div>
            <p className="text-xs uppercase tracking-widest text-white/40 mb-1">
              Role
            </p>
            <p className="text-3xl font-bold text-[#52B788]">
              Full-Stack Developer
            </p>
            <p className="text-sm text-white/60 mt-2 max-w-xs">
              Frontend and backend development with a strong architectural mindset.
            </p>
          </div>

          <div className="h-px w-12 bg-white/10" />

          <div>
            <p className="text-xs uppercase tracking-widest text-white/40 mb-1">
              Education
            </p>
            <p className="text-3xl font-bold text-[#52B788]">
              Master’s Degree
            </p>
            <p className="text-sm text-white/60 mt-2 max-w-xs">
              Computer Science — advanced academic and practical training.
            </p>
          </div>

          <div className="h-px w-12 bg-white/10" />

          <div>
            <p className="text-xs uppercase tracking-widest text-white/40 mb-1">
              Focus
            </p>
            <p className="text-3xl font-bold text-[#52B788]">
              Clean Code
            </p>
            <p className="text-sm text-white/60 mt-2 max-w-xs">
              Maintainable, scalable, and performance-driven solutions.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
