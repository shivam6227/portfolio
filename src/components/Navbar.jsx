import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets.js";
import { Menu, X } from "lucide-react";
import toast from "react-hot-toast";
const Navbar = () => {
  const { navigate, user, setUser } = useContext(AppContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menus = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Skills", link: "/Skills" },
    { name: "Projects", link: "/Projects" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-8">
      <div className="hidden md:flex items-center justify-between bg-white/20 backdrop-blur-md  rounded-2xl border border-gray-200 shadow-sm">
        <Link to="/">
          <img src={assets.logo} alt="" className="w-11.5 font-bold" />
        </Link>

        <div className="flex items-center gap-4">
          {menus.map((menu, index) => (
            <Link
              className="font-medium text-lg text-[#231F69]"
              to={menu.link}
              key={index}
            >
              {menu.name}
            </Link>
          ))}
        </div>
        <div>
          <button
            onClick={() => navigate("/login")}
            className="bg-yellow-300  text-[#231F69] cursor-pointer py-2 px-8
        hover:bg-primary duration-300 transition-all rounded-lg"
          >
            Login
          </button>
        </div>
      </div>
      <div className="md:hidden bg-white py-4 rounded-2xl border border-gray-200">
        <div className="flex items-center justify-between ">
          <Link to="/">
            <img src={assets.logo} alt="" className="w-40 font-black" />
          </Link>
          <Link />

          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className="mt-4 flex flex-col gap-2">
            {menus.map((menu, index) => (
              <Link
                onClick={() => setIsMenuOpen(false)}
                key={index}
                to={menu.link}
                className="text-[#231F69] font-medium text-lg"
              >
                {menu.name}
              </Link>
            ))}

            <button
              className="bg-yellow-300 text-[#231F69] cursor-pointer py-2 px-8
          hover:bg-primary duration-300 transition-all rounded-lg"
              onClick={() => {
                navigate("/login");
                setIsMenuOpen(false);
              }}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
