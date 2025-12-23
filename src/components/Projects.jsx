const projects = [
  {
    title: "shivam-portfolio",
    description: "",
    image: "",
    tech: [],
  },
  {
    title: "shivam-portfolio",
    description: "",
    image: "",
    tech: [],
  },
  {
    title: "shivam-portfolio",
    description: " ",
    image: "",
    tech: [],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#05010a] text-gray-300 px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Featured <span className="text-purple-500">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-purple-500 mx-auto mb-6 rounded"></div>

        {/* <p className="text-center max-w-3xl mx-auto text-sm text-gray-400 mb-16">
          A curated collection of full stack projects demonstrating my expertise
          in building modern, scalable web applications — from intuitive
          frontends to robust backend systems.
        </p> */}

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur hover:border-purple-500 transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href="#"
                  className="text-purple-400 text-sm hover:underline inline-flex items-center gap-1"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
