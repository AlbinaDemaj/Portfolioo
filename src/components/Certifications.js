const Certifications = () => {
  const achievements = [
    {
      title: "Bachelor in Computer Science – Software Design",
      provider: "University Degree",
      note: "Strong foundation in programming, software engineering principles, databases, and system design.",
    },
    {
      title: "Master’s Degree in Computer Science (In Progress)",
      provider: "Graduate Studies",
      note: "Advanced studies focused on modern computing concepts, research, and real-world problem solving.",
    },
    {
      title: "Full Stack Web Development",
      provider: "Professional Training Program",
      note: "Comprehensive training covering frontend, backend, and database-driven web applications.",
    },
    {
      title: "Agile Basics & Scrum Foundations",
      provider: "Agile Training",
      note: "Practical understanding of agile methodologies, teamwork, and iterative development.",
    },
    {
      title: "Cyber Security Fundamentals",
      provider: "ARRA Academy",
      note: "Core concepts of web security, threats, and best practices for protecting applications.",
    },
    {
      title: "UI/UX Design with Figma",
      provider: "Design Training",
      note: "User-centered design principles, wireframing, prototyping, and usability thinking.",
    },
    {
      title: "HTML5, CSS3 & Web Hosting",
      provider: "Web Technologies",
      note: "Solid foundation in web standards, responsive layouts, and basic deployment workflows.",
    },
  ];

  return (
    <section
      id="certifications"
      className="relative py-28 px-6 bg-[#081C15] text-white overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-[#52B788]/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-[#95D5B2] mb-4">
            Achievements
          </p>
          <h2 className="text-4xl font-bold mb-6">
            Education & Professional Growth
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            My academic background and professional training reflect a continuous
            commitment to growth, learning, and building reliable software solutions.
          </p>
        </div>

        {/* MILESTONE TIMELINE */}
        <div className="relative border-l border-white/10 ml-4">
          {achievements.map((item, index) => (
            <div key={index} className="relative pl-12 pb-16 group">

              {/* number */}
              <div
                className="
                  absolute -left-5 top-1
                  w-10 h-10 rounded-full
                  bg-[#1B4332]
                  border border-[#52B788]/40
                  flex items-center justify-center
                  text-sm font-semibold text-[#52B788]
                  group-hover:scale-110 transition
                "
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* content */}
              <div
                className="
                  p-6 rounded-2xl
                  bg-[#1B4332]/85
                  border border-white/10
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]
                "
              >
                <h3 className="text-lg font-semibold mb-1">
                  {item.title}
                </h3>

                <p className="text-sm text-[#95D5B2] mb-3">
                  {item.provider}
                </p>

                <p className="text-sm text-white/60 leading-relaxed">
                  {item.note}
                </p>

                <div className="mt-4 h-[2px] w-0 bg-[#52B788] transition-all duration-300 group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
