import { assets } from "../assets/assets.js";
const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-pink-600/20 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 mt-20">
        <div className="w-44 h-44 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 p-1 mb-8">
          <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-6xl">
            <img
              src={assets.logo}
              alt=""
              className="w-65 h-65 object-cover rounded-full z-10"
            />
          </div>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Codeshivam.
          </span>
          <br />
          <span className="text-purple-400">Full Stack Developer</span>
        </h2>

        <p className="mt-6 max-w-2xl text-gray-400">
          Full Stack Developer crafting modern, responsive web apps with clean
          UI and robust backend architecture.
        </p>

        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <button className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition shadow-lg">
            Hire Me
          </button>

          <button className="px-6 py-3 rounded-full border border-gray-600 hover:border-purple-500 transition">
            Download CV
          </button>

          <button className="px-6 py-3 text-gray-300 hover:text-purple-400 transition">
            View My Work →
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border border-purple-500 flex justify-center">
          <span className="w-1 h-2 bg-purple-500 rounded-full mt-2 animate-bounce"></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
