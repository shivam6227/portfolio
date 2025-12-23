import {
  FaHtml5,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import { MdDesignServices } from "react-icons/md";

const skills = [
  { name: "HTML5 / CSS3", percent: 95, icon: <FaHtml5 /> },
  { name: "JavaScript", percent: 90, icon: <FaJs /> },
  { name: "React / Redux", percent: 95, icon: <FaReact /> },
  { name: "Tailwind CSS", percent: 91, icon: <SiTailwindcss /> },
  { name: "Bootstrap", percent: 91, icon: <FaBootstrap /> },
  { name: "Next.js", percent: 85, icon: <SiNextdotjs /> },
  { name: "UI / UX Design", percent: 87, icon: <MdDesignServices /> },
  { name: "Node.js / Express.js", percent: 87, icon: <FaNodeJs /> },
  { name: "MongoDB", percent: 88, icon: <SiMongodb /> },
  { name: "PostgreSQL", percent: 86, icon: <SiPostgresql /> },
  { name: "Git", percent: 90, icon: <FaGitAlt /> },
  { name: "GitHub", percent: 92, icon: <FaGithub /> },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#05010a] text-gray-300 px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          My <span className="text-purple-500">Skills</span>
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur hover:border-purple-500 transition"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-500/20 text-purple-400 text-xl mb-4">
                {skill.icon}
              </div>

              <h3 className="text-white font-semibold mb-4">{skill.name}</h3>

              <div className="w-full h-2 bg-white/10 rounded-full mb-2">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>

              <p className="text-sm text-purple-400 text-right">
                {skill.percent}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
