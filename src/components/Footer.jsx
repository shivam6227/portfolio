import { FaInstagram, FaGithub, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#0b0b14]">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">
            Code Shivam Kumar.
          </h2>
          <p className="text-sm  text-white leading-relaxed mb-6">
            Building modern, high-performance web experiences through elegant
            design, clean code, and the latest technologies.
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              className="w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-tr from-pink-500 to-purple-500 text-white hover:scale-110 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-500 text-white hover:scale-110 transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-white text-sm">
            <li className="hover:text-purple-500 cursor-pointer">Home</li>
            <li className="hover:text-purple-500 cursor-pointer">About</li>
            <li className="hover:text-purple-500 cursor-pointer">Projects</li>
            <li className="hover:text-purple-500 cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
          <p className="text-sm text-white mb-2">
            <span className="text-purple-400">Email:</span>{" "}
            shivamk47757@gmail.com
          </p>
          <p className="text-sm text-white">
            <span className="text-purple-400">Location:</span> Najafgarh, Delhi,
            a locality in the South West district, 110043
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 px-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        <p className="text-xs text-gray-500">
          © 2025 Codeshivam. All rights reserved.
        </p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-4 md:mt-0 flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm hover:scale-105 transition"
        >
          Back to Top <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
