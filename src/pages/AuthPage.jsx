import React from "react";
import background from "../assets/image.png";
import logo from "../assets/logo.png";

const LoginPage = () => {
  return (
    <div
      className="w-screen h-screen flex flex-col justify-between bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex-grow flex items-center justify-center">
        <div
          className="bg-[#F7F4EF] p-10 rounded-2xl shadow-lg"
          style={{ width: "512px", height: "600px" }}
        >
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src={logo}
              alt="tendr logo"
              style={{ width: "326px", height: "106px" }}
            />
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Sign in to tendr!
          </h2>

          {/* Form */}
          <form className="space-y-4 ">
            <div style={{ width: "415px", height: "65px" }}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-yellow-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div style={{ width: "415px", height: "65px" }}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-yellow-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div className="text-right text-sm font-bold text-gray-600 hover:underline cursor-pointer">
              Forgot Your Password?
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="text-white font-semibold rounded-xl"
                style={{
                  backgroundColor: "#CCAB4A",
                  width: "137px",
                  height: "37px",
                }}
              >
                Sign In
              </button>
            </div>
          </form>

          {/* Create account */}
          <div
            className="mt-6 flex items-center justify-center text-sm"
            style={{ width: "424px", height: "57px" }}
          >
            <span className="text-gray-700 font-bold">New to tendr?</span>
            <span
              className="ml-1 font-semibold cursor-pointer hover:underline"
              style={{ color: "#CCAB4A" }}
            >
              Create an account
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-black text-sm py-4 px-4 text-center bg-opacity-60">
        <div className="flex flex-wrap justify-center gap-4">
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

export default LoginPage;
