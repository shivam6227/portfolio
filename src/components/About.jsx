import { assets } from "../assets/assets.js";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#05010a] text-gray-300 px-6 py-24"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative flex justify-center">
          <div className="relative w-79 h-79 rounded-full flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-4 border-purple-500 blur-xl opacity-70"></div>

            <div className="absolute inset-3 rounded-full border-2 border-cyan-400"></div>

            <img
              src={assets.Shivam}
              alt=""
              className="w-72 h-72 object-cover rounded-full z-10"
            />
          </div>

          <span className="absolute -left-10 top-10 w-4 h-4 bg-purple-500 rounded-full blur-sm"></span>
          <span className="absolute left-10 bottom-8 w-6 h-6 bg-cyan-400 rounded-full blur-sm"></span>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-white mb-2">
            About <span className="text-purple-500">Me</span>
          </h2>

          <div className="w-16 h-1 bg-purple-500 mb-6 rounded"></div>

          <p className="text-sm leading-relaxed mb-4">
            I’m a Full-Stack Developer with 1 year of hands-on experience
            building fast, scalable, and responsive web applications using
            React.js, Node.js, Express, MongoDB, and PostgreSQL/MySQL.
          </p>

          <p className="text-sm leading-relaxed mb-6">
            I specialize in creating secure RESTful APIs, modern frontend
            interfaces, and managing full deployment pipelines using tools like
            Docker and Git. I’m passionate about clean code, smooth user
            experiences, and animation-driven UI.
          </p>

          <div className="flex flex-wrap gap-4">
            <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
              1+ Years Experience
            </div>
            <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
              3+ Projects Completed
            </div>
            <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
              100% Client Satisfaction
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
