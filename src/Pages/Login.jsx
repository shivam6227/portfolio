import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Lock, MailIcon } from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import digtal from "../assets/digtal.png";

const Login = () => {
  const { navigate, setUser, loading } = useContext(AppContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.success("Login Successful");
    setUser(true);
    navigate("/");
    console.log(formData);
  };

  return (
    <div className="relative min-h-screen">
      <img
        src={digtal}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative min-h-screen flex items-center justify-center ">
        <form
          onSubmit={handleSubmit}
          className="max-w-96 w-full mx-auto  text-center border border-gray-300/60 rounded-2xl px-8 bg-primary/20 backdrop-blur-md "
        >
          <h1 className="text-white text-3xl mt-10 font-medium">Login</h1>
          <p className="text-white text-sm mt-2">Please sign in to continue</p>
          <div className="flex items-center w-full mt-10 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <MailIcon />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent text-gray-800 placeholder-gray-800 outline-none text-sm w-full h-full"
              placeholder="Email"
              required
            />
          </div>

          <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <Lock />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className=" text-gray-800 placeholder-gray-800 outline-none text-sm w-full h-full"
              placeholder="Password"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-yellow-300 mt-4 w-30 h-11 rounded-full items-center text-black bg-secondary  cursor-pointer hover:opacity-90 transition-opacity"
          >
            {loading ? "please wait..." : "Login"}
          </button>
          <p className="py-4 text-white">
            Don't have an account?
            <Link to="/signup">
              <span className="text-secondary">Signup</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
