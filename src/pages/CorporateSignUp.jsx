import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import signupBgImage from "../assets/signup-bg-image.png";
import logo from "../assets/logo2.png";

export default function CorporateSignup() {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedPlan = location.state?.plan;

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const coupon = selectedPlan?.isPaid
      ? `TENDR-CORP-${Math.floor(1000 + Math.random() * 9000)}`
      : null;
    localStorage.setItem(
      "corporatePlan",
      JSON.stringify({ ...formData, plan: selectedPlan?.title, coupon })
    );
    navigate("/otp");
  };

  return (
    <div
      className="w-screen min-h-screen flex flex-col bg-cover bg-center relative"
      style={{ backgroundImage: `url(${signupBgImage})` }}
    >
      <div className="absolute inset-0 bg-[#CCAB4A] opacity-30 z-0" />

      <div className="flex-grow flex items-center justify-center px-4 pt-4 relative z-10">
        <div className="bg-[#F7F4EF] py-6 px-6 rounded-2xl shadow-lg w-full max-w-sm">
          <div className="flex justify-center mb-4 sm:mb-6">
            <img
              src={logo}
              alt="tendr logo"
              className="w-48 sm:w-48 md:w-[300px] lg:w-[326px] h-auto"
            />
          </div>

          <h2 className="text-2xl font-bold text-center mb-4 sm:mb-6 text-gray-800">
            Corporate Signup - {selectedPlan?.title || "Selected Plan"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-3">
            {["companyName", "location", "personName", "designation", "email", "password", "confirmPassword", "phone", "teamSize"].map((field, i) => (
              <div key={field}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {field === "personName" ? "Your Name" :
                  field === "companyName" ? "Company Name" :
                  field === "confirmPassword" ? "Confirm Password" :
                  field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type={field.includes("password") ? "password" : "text"}
                  name={field}
                  required
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 text-sm border border-yellow-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
            ))}
            <div className="flex justify-center">
              <button
                type="submit"
                className="text-white text-sm font-semibold rounded-xl w-28 h-9 m-1"
                style={{ backgroundColor: "#CCAB4A" }}
              >
                Proceed to OTP
              </button>
            </div>
          </form>
        </div>
      </div>

      <footer className="w-full text-black text-sm py-3 px-4 text-center bg-opacity-60 mt-8">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 font-semibold">
          <span>tendr ©</span>
          <span>|</span>
          <a href="#" className="hover:underline cursor-pointer">Support</a>
          <span>|</span>
          <a href="#" className="hover:underline cursor-pointer">Help Center</a>
          <span>|</span>
          <a href="#" className="hover:underline cursor-pointer">Vendor Support</a>
          <span>|</span>
          <a href="#" className="hover:underline cursor-pointer">Get in touch</a>
        </div>
      </footer>
    </div>
  );
}