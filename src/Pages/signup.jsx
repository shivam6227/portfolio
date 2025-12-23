import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Lock, MailIcon, PhoneIcon, User2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { assets } from "../assets/assets.js";

const Signup = () => {
  const { navigate, user, setUser, setLoading, loading } =
    useContext(AppContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.success("Signup Successful");
    console.log(formData);
  };

  return (
    <div className="relative min-h-screen">
      <Link to="/">
        <img
          src={assets.Signup1}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </Link>
      <Link />

      <div className="relative min-h-screen flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="max-w-96 w-full mx-auto  text-center border border-gray-300/60 rounded-2xl px-8 bg-primary/20 backdrop-blur-md"
        >
          <h1 className="font-bold text-3xl bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-clip-text text-transparent">
            Signup
          </h1>
          <p className="font-bold text-2xl bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-clip-text text-transparent">
            Please sign up to continue
          </p>
          <div className="flex items-center w-full mt-10 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <User2Icon />
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="bg-transparent text-gray-800 placeholder-gray-800 outline-none text-sm w-full h-full"
              placeholder="First Name"
              required
            />
          </div>

          <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <User2Icon />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="bg-transparent text-gray-800 placeholder-gray-800 outline-none text-sm w-full h-full"
              placeholder="Last Name"
              required
            />
          </div>

          <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <PhoneIcon />
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="bg-transparent text-gray-800 placeholder-gray-800 outline-none text-sm w-full h-full"
              placeholder="Phone Number"
              required
            />
          </div>
          <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
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
              className="bg-transparent text-gray-800 placeholder-gray-800 outline-none text-sm w-full h-full"
              placeholder="Password"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-yellow-300 mt-4 w-30 h-11 rounded-full items-center text-bold bg-secondary  cursor-pointer hover:opacity-90 transition-opacity"
          >
            {loading ? "please wait..." : "Signup"}
          </button>
          <p className="py-4 text-black">
            Already have an account?
            <Link to="/login">
              <span className="text-secondary rounded-full text-black  cursor-pointer hover:opacity-90 transition-opacity">
                Login here
              </span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Signup;
