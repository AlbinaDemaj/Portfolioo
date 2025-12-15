import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiLaravel,
  SiMysql,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      icon: <FaReact />,
      name: "React",
      years: "2+ years",
      projects: "6 projects",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
      years: "3+ years",
      projects: "10+ projects",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML5",
      years: "3+ years",
      projects: "12+ projects",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS3",
      years: "3+ years",
      projects: "12+ projects",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
      years: "2+ years",
      projects: "7 projects",
    },
    {
      icon: <SiBootstrap />,
      name: "Bootstrap",
      years: "2 years",
      projects: "5 projects",
    },
    {
      icon: <FaPhp />,
      name: "PHP",
      years: "2+ years",
      projects: "6 projects",
    },
    {
      icon: <SiLaravel />,
      name: "Laravel",
      years: "1.5+ years",
      projects: "4 projects",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
      years: "2+ years",
      projects: "6 projects",
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-28 px-6 bg-[#081C15] text-white overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#52B788]/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-[#95D5B2] mb-4">
            Skills
          </p>
          <h2 className="text-4xl font-bold mb-6">
            Experience Overview
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Technologies I’ve worked with across real-world projects,
            measured by experience and practical usage.
          </p>
        </div>

        {/* SKILLS GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                group p-6 rounded-2xl
                bg-[#1B4332]/85
                border border-white/10
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]
              "
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="text-3xl text-[#52B788] group-hover:scale-110 transition">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold">
                  {skill.name}
                </h3>
              </div>

              {/* Metrics */}
              <div className="flex justify-between text-sm text-white/70">
                <div>
                  <p className="font-medium text-white">
                    {skill.years}
                  </p>
                  <p className="text-xs text-white/50">
                    Experience
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-medium text-white">
                    {skill.projects}
                  </p>
                  <p className="text-xs text-white/50">
                    Projects
                  </p>
                </div>
              </div>

              {/* underline */}
              <div className="mt-5 h-[2px] w-0 bg-[#52B788] transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
