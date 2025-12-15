import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";  // Importojmë iconën për telefonin

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-40 px-6 bg-[#081C15] text-white"
    >
      <div className="max-w-5xl mx-auto">

        <p className="text-sm uppercase tracking-[0.3em] text-[#95D5B2] mb-10">
          Contact
        </p>

        <h2 className="text-5xl md:text-6xl font-bold leading-tight max-w-4xl">
          Interested in working together?
        </h2>

        <p className="mt-8 text-white/70 text-lg max-w-3xl leading-relaxed">
          I’m currently open to full-time roles, internships, and freelance projects.
          If you have an idea, a position, or simply want to start a conversation,
          feel free to reach out.
        </p>

        {/* EMAIL */}
        <div className="mt-20">
          <a
            href="mailto:demajalbina3@gmail.com"
            className="
              group inline-flex items-center gap-4
              text-2xl md:text-3xl font-medium
              text-[#52B788]
            "
          >
            <FiMail className="opacity-70 group-hover:opacity-100 transition" />
            <span className="relative">
              demajalbina3@gmail.com
              <span
                className="absolute left-0 -bottom-2 h-[2px] w-0 bg-[#52B788] transition-all duration-300 group-hover:w-full"
              />
            </span>
          </a>
        </div>

        {/* PHONE NUMBER */}
        <div className="mt-8">
          <a
            href="tel:+38349119008"
            className="
              group inline-flex items-center gap-4
              text-2xl md:text-3xl font-medium
              text-[#52B788]
            "
          >
            <FiPhone className="opacity-70 group-hover:opacity-100 transition" />
            <span className="relative">
              +383 49 119 008
              <span
                className="absolute left-0 -bottom-2 h-[2px] w-0 bg-[#52B788] transition-all duration-300 group-hover:w-full"
              />
            </span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;
