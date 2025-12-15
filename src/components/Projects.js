const Projects = () => {
  const projects = [
    {
      title: "GrowCast",
      tech: "React · Tailwind · Laravel · MySQL · AI",
      description:
        "Smart agriculture application that helps farmers choose the right planting time using weather data and artificial intelligence.",
      image: "/projects/growcast.png",
      link: null,
    },
    {
      title: "Hotel Management System",
      tech: "PHP · MySQL · HTML · CSS",
      description:
        "Web-based system for managing hotel rooms, reservations, and customers.",
      image: "/projects/hotel.png",
      link: "https://relaxhotel.infinityfreeapp.com/?i=1",
    },
    {
      title: "Webline Studio",
      tech: "HTML · CSS · JavaScript",
      description:
        "IT studio website focused on professional web development services.",
      image: "/projects/Webline.jpg",
      link: "https://www.weblinestudio.site",
    },
    {
      title: "FFlower Atelier",
      tech: "HTML · CSS · JavaScript",
      description:
        "Elegant website for a flower shop showcasing bouquets and arrangements.",
      image: "/projects/FFlover.jpg",
      link: "https://albinademaj.github.io/fflower-atlier/",
    },
    {
      title: "Dermacare",
      tech: "HTML · CSS",
      description:
        "Website for a skin care clinic with a clean and professional layout.",
      image: "/projects/dermacare.png",
      link: "https://albinademaj.github.io/DERMACARE/",
    },
    {
      title: "CozyHouse",
      tech: "HTML · CSS",
      description:
        "Pet adoption shop website designed for user-friendly browsing.",
      image: "/projects/cozyhouse.png",
      link: "https://albinademaj.github.io/CozyHouse/",
    },
    {
      title: "Restaur",
      tech: "HTML · Tailwind CSS",
      description:
        "Restaurant website with a modern and responsive design.",
      image: "/projects/restaur.png",
      link: "https://albinademaj.github.io/RESTAUR/",
    },
    {
      title: "RioRelax",
      tech: "HTML · CSS",
      description:
        "Hotel website showcasing rooms and services.",
      image: "/projects/riorelax.png",
      link: "https://albinademaj.github.io/RioRelax/",
    },
    {
      title: "Mixtas",
      tech: "HTML · CSS · JavaScript",
      description:
        "E-commerce website with product listings and interactions.",
      image: "/projects/mixtas.png",
      link: "https://albinademaj.github.io/Mixtas/",
    },
    {
      title: "TastyBite",
      tech: "Bootstrap · JavaScript",
      description:
        "Cooking recipes website with categorized meals.",
      image: "/projects/tastybite.png",
      link: "https://albinademaj.github.io/TastyBite/",
    },
    {
      title: "Coffee Shop",
      tech: "React · Tailwind CSS",
      description:
        "Coffee ordering website focused on clean UI and responsiveness.",
      image: "/projects/coffe-shop.png",
      link: "https://startling-entremet-906389.netlify.app/",
    },
    {
      title: "Glowly",
      tech: "React · Tailwind CSS",
      description:
        "Skincare products website with modern e-commerce layout.",
      image: "/projects/glowly.png",
      link: "https://glowinga.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="relative py-32 px-6 bg-[#081C15] text-white">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-24">
          <p className="text-sm uppercase tracking-[0.3em] text-[#95D5B2] mb-4">
            Projects
          </p>
          <h2 className="text-4xl font-bold">Selected Work</h2>
        </div>

        {/* PROJECT CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                group relative rounded-3xl
                bg-[#1B4332]/90
                border border-white/10
                overflow-hidden
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-[0_25px_50px_rgba(0,0,0,0.35)]
              "
            >
              {/* TEXT */}
              <div
                className="
                  relative z-10 p-8
                  transition-all duration-300
                  group-hover:opacity-0
                  group-hover:-translate-y-4
                "
              >
                <h3 className="text-2xl font-semibold mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-[#95D5B2] mb-4">
                  {project.tech}
                </p>
                <p className="text-white/70 text-sm">
                  {project.description}
                </p>
              </div>

              {/* IMAGE OVERLAY */}
              <div
                className="
                  absolute inset-0
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                  pointer-events-none
                "
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover scale-105"
                />

                <div className="absolute inset-0 bg-[#081C15]/80 flex items-center justify-center">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        relative z-20 pointer-events-auto
                        px-6 py-3 rounded-xl
                        bg-[#52B788]
                        text-[#081C15]
                        font-semibold text-sm
                        opacity-0 translate-y-4
                        group-hover:opacity-100
                        group-hover:translate-y-0
                        transition-all duration-300
                        hover:scale-105
                      "
                    >
                      View Project
                    </a>
                  ) : (
                    <span className="relative z-20 pointer-events-auto text-sm text-white/70 italic">
                      Coming soon
                    </span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
