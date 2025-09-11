import React, { useEffect, useState } from "react";
import loginbackground from "../../assets/backgrounds/login-bg.png";
import signupbackground from "../../assets/backgrounds/signup-bg.png";
import logo from "../../assets/logos/tendr-logo-secondary.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { signup, login, clearError, fetchUserProfile } from '../../redux/authSlice';
import Footer from "../../components/Footer";   // ✅ import shared footer

const Auth = () => {
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
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
    setPasswordError("");
    setShowPassword(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "password") {
      if (value.length < 8) {
        setPasswordError("Password must be at least 8 characters long");
      } else {
        setPasswordError("");
      }
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    if (formData.password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      return;
    }
    const userData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      phoneNumber: formData.phoneNumber,
    };
    dispatch(signup(userData));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (formData.password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      return;
    }
    const credentials = {
      phoneNumber: formData.phoneNumber,
      password: formData.password,
    };
    dispatch(login(credentials)).then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        dispatch(fetchUserProfile()); 
        navigate("/"); // or dashboard
      }
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="w-screen min-h-screen flex flex-col bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${isSignup ? signupbackground : loginbackground})`,
      }}
    >
      <div className="absolute inset-0 bg-[#CCAB4A] opacity-30 z-0" />

      <div className="flex-grow flex items-center justify-center px-3 sm:px-4 pt-4 relative z-10">
        <div
          className={`bg-[#F7F4EF] ${isSignup ? "py-4 sm:py-6 px-4 sm:px-6" : "p-6 sm:p-8"
            } rounded-2xl shadow-lg w-full max-w-sm`}
        >
          <div className="flex justify-center mb-3 sm:mb-4">
            <img
              src={logo}
              alt="tendr logo"
              className="w-40 sm:w-48 md:w-[300px] lg:w-[326px] h-auto"
            />
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-center mb-3 sm:mb-4 text-gray-800">
            {isSignup ? "Welcome to tendr!" : "Sign in to tendr!"}
          </h2>

          {error && (
            <div className="text-red-500 text-xs sm:text-sm text-center mb-3 sm:mb-4">
              {error}
            </div>
          )}

          {isSignup ? (
            <form className="space-y-2 sm:space-y-3" onSubmit={handleSignupSubmit}>
              {/* Full Name */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm border border-yellow-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  disabled={loading}
                />
              </div>
              {/* Email */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm border border-yellow-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  disabled={loading}
                />
              </div>
              {/* Password */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm border ${passwordError ? "border-red-500" : "border-yellow-400"
                      } rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 pr-10`}
                    disabled={loading}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 flex items-center pr-2 sm:pr-3 text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 active:outline-none rounded-r-xl transition-colors duration-200"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    disabled={loading}
                  >
                    {/* eye icon */}
                  </button>
                </div>
                {passwordError && (
                  <p className="text-red-500 text-xs mt-1">{passwordError}</p>
                )}
              </div>
              {/* Phone */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm border border-yellow-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  disabled={loading}
                />
              </div>
              {/* Location */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm border border-yellow-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  disabled={loading}
                >
                  <option value="">Select a location</option>
                  <option value="delhi">Delhi</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="bangalore">Bangalore</option>
                </select>
              </div>
              {/* Sign Up Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="text-white text-xs sm:text-sm font-semibold rounded-xl w-24 sm:w-28 h-8 sm:h-9 m-1"
                  style={{ backgroundColor: "#CCAB4A" }}
                  disabled={loading || passwordError}
                >
                  {loading ? "Signing Up..." : "Sign Up"}
                </button>
              </div>
            </form>
          ) : (
            <form className="space-y-3 sm:space-y-4" onSubmit={handleLoginSubmit}>
              {/* Phone */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm border border-yellow-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  disabled={loading}
                />
              </div>
              {/* Password */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm border ${passwordError ? "border-red-500" : "border-yellow-400"
                      } rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 pr-10`}
                    disabled={loading}
                  />
                </div>
                {passwordError && (
                  <p className="text-red-500 text-xs mt-1">{passwordError}</p>
                )}
              </div>
              <div className="text-right text-xs sm:text-sm font-bold text-gray-600 hover:underline cursor-pointer">
                Forgot Your Password?
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="text-white text-xs sm:text-sm font-semibold rounded-xl w-28 sm:w-32 h-8 sm:h-10"
                  style={{ backgroundColor: "#CCAB4A" }}
                  disabled={loading || passwordError}
                >
                  {loading ? "Signing In..." : "Sign In"}
                </button>
              </div>
            </form>
          )}

          <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row items-center justify-center text-xs sm:text-sm text-gray-700 font-bold gap-1 bg-white rounded-xl p-2 sm:p-3">
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

      {/* ✅ Reusable Footer */}
      <Footer />
    </div>
  );
};

export default Auth;
