import React, { useEffect, useState } from "react";
import loginbackground from "../assets/login-bg-image.png";
import signupbackground from "../assets/signup-bg-image.png";
import logo from "../assets/logo2.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { signup, login, clearError } from '../redux/authSlice';

const AuthPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, verificationId } = useSelector((state) => state.auth);
  
  const isSignupPath = location.pathname === "/signup";
  const [isSignup, setIsSignup] = useState(isSignupPath);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    location: "",
  });

  useEffect(() => {
    setIsSignup(location.pathname === "/signup");
    dispatch(clearError());
  }, [location.pathname, dispatch]);

  useEffect(() => {
    if (verificationId) {
      navigate("/otp");
    }
  }, [verificationId, navigate]);

  const toggleAuthMode = () => {
    setIsSignup(!isSignup);
    navigate(isSignup ? "/login" : "/signup");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      phoneNumber: formData.phoneNumber,
    };
    // console.log("Submitting signup data:", userData);
    dispatch(signup(userData));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const credentials = {
      phoneNumber: formData.phoneNumber,
      password: formData.password,
    };
    dispatch(login(credentials)).then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        navigate("/"); // Redirect to dashboard or home after login
      }
    });
  };

  return (
    <div
      className="w-screen min-h-screen flex flex-col bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${isSignup ? signupbackground : loginbackground})`,
      }}
    >
      <div className="absolute inset-0 bg-[#CCAB4A] opacity-30 z-0" />

      <div className="flex-grow flex items-center justify-center px-4 pt-4 relative z-10">
        <div
          className={`bg-[#F7F4EF] ${
            isSignup ? "py-6 px-6" : "p-8"
          } rounded-2xl shadow-lg w-full max-w-sm`}
        >
          <div className="flex justify-center mb-4 sm:mb-6">
            <img
              src={logo}
              alt="tendr logo"
              className="w-48 sm:w-48 md:w-[300px] lg:w-[326px] h-auto"
            />
          </div>

          <h2 className="text-2xl font-bold text-center mb-4 sm:mb-6 text-gray-800">
            {isSignup ? "Welcome to tendr!" : "Sign in to tendr!"}
          </h2>

          {error && (
            <div className="text-red-500 text-sm text-center mb-4">
              {error}
            </ div>
          )}

          {isSignup ? (
            <form className="space-y-3" onSubmit={handleSignupSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 text-sm border border-yellow-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  disabled={loading}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 text-sm border border-yellow-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  disabled={loading}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 text-sm border border-yellow-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  disabled={loading}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 text-sm border border-yellow-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  disabled={loading}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 text-sm border border-yellow-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  disabled={loading}
                >
                  <option value="">Select a location</option>
                  <option value="delhi">Delhi</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="bangalore">Bangalore</option>
                </select>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="text-white text-sm font-semibold rounded-xl w-28 h-9 m-1"
                  style={{ backgroundColor: "#CCAB4A" }}
                  disabled={loading}
                >
                  {loading ? "Signing Up..." : "Sign Up"}
                </button>
              </div>
            </form>
          ) : (
            <form className="space-y-4" onSubmit={handleLoginSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-yellow-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  disabled={loading}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-yellow-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  disabled={loading}
                />
              </div>
              <div className="text-right text-sm font-bold text-gray-600 hover:underline cursor-pointer">
                Forgot Your Password?
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="text-white font-semibold rounded-xl w-32 h-10"
                  style={{ backgroundColor: "#CCAB4A" }}
                  disabled={loading}
                >
                  {loading ? "Signing In..." : "Sign In"}
                </button>
              </div>
            </form>
          )}

          <div className="mt-5 flex flex-col sm:flex-row items-center justify-center text-sm text-gray-700 font-bold gap-1 bg-white rounded-xl p-3">
            <span>{isSignup ? "Already have an account?" : "New to tendr?"}</span>
            <span
              className="font-semibold cursor-pointer hover:underline"
              style={{ color: "#CCAB4A" }}
              onClick={toggleAuthMode}
            >
              {isSignup ? "Sign In" : "Create an account"}
            </span>
          </div>
        </div>
      </div>

      <footer className="w-full text-black text-sm py-3 px-4 text-center bg-opacity-60 mt-8">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 font-semibold">
          <span>tendr ©</span>
          <span>|</span>
          <a href="#" className="hover:underline cursor-pointer">
            Support
          </a>
          <span>|</span>
          <a href="#" className="hover:underline cursor-pointer">
            Help Center
          </a>
          <span>|</span>
          <a href="#" className="hover:underline cursor-pointer">
            Vendor Support
          </a>
          <span>|</span>
          <a href="#" className="hover:underline cursor-pointer">
           

 Get in touch
          </a>
        </div>
      </footer>
    </div>
  );
};

export default AuthPage;