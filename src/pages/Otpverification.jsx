import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const OTPPage = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true); // Enable resend button when timer reaches 0
    }
  }, [timeLeft]);

  const handleChange = (e) => {
    const value = e.target.value;
    const index = e.target.dataset.index; // Getting the index from the input data attribute

    if (value.length > 1) return; // Only accept 1 character per box
    const updatedOtp = [...otp];
    updatedOtp[index] = value; // Set the value of the correct OTP index
    setOtp(updatedOtp);

    // Automatically move to the next input when the current one is filled
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-input-${parseInt(index) + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "") {
      // If current input is empty and backspace is pressed, focus on previous input
      if (index > 0) {
        document.getElementById(`otp-input-${index - 1}`).focus();
      }
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    const finalOtp = otp.join("");
    console.log("Verifying OTP:", finalOtp);

    // Simulate a verification process 
    const isValidOtp = true;  // You would replace this with actual backend verification

    if (isValidOtp) {
      // Navigate to dashboard if OTP is valid
      navigate("/vendordashboard");
    } else {
      console.log("Invalid OTP. Please try again.");
      // Handle invalid OTP (e.g., show an error message)
    }
  };

  const handleResend = () => {
    setTimeLeft(60); // Reset the timer to 60 seconds
    setCanResend(false); // Disable the resend button again
    // resend OTP logic, you would call backend to resend OTP here
    console.log("OTP resent!");
  };

  return (
    <div className="w-screen min-h-screen flex flex-col bg-[#E8DED1]">
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="bg-[#F7F4EF] rounded-2xl shadow-lg w-[454px] h-[530px] p-6 flex flex-col items-center">
          <img src={logo} alt="Tendr Logo" className="w-[325px] h-[106px] mb-4" />
          
          <div className="w-[424px] h-[312px] flex flex-col items-center">
            <h2 className="text-xl font-bold text-center mb-2">OTP verification</h2>
            <p className="text-sm text-center text-gray-700 font-bold mb-4">
              Please enter the OTP (One-Time Password) sent to your registered phone number to complete your verification.
            </p>
            <form onSubmit={handleVerify} className="space-y-4 w-full">
              <div className="flex justify-evenly gap-2 mb-1">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={handleChange}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    id={`otp-input-${index}`} // Give each input an ID
                    data-index={index} // Store the index for identification
                    className="w-10 h-10 text-center text-xl border border-yellow-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                ))}
              </div>
              <div className="flex justify-between text-xs text-gray-700 font-medium px-1">
                <span>
                  Remaining Time:{" "}
                  <span className="text-yellow-600 font-bold">00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}s</span>
                </span>
                <span>
                  Didn’t get the code?{" "}
                  <button
                    type="button"
                    className="text-yellow-600 font-semibold hover:underline"
                    onClick={handleResend}
                    disabled={!canResend} // Disable button if canResend is false
                  >
                    Resend
                  </button>
                </span>
              </div>
              <div className="flex justify-center mt-2">
                <button
                  type="submit"
                  className="text-white font-semibold rounded-xl w-[137px] h-[37px]"
                  style={{ backgroundColor: "#CCAB4A" }}
                >
                  Verify
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <footer className="w-full text-black text-sm py-3 px-4 text-center bg-opacity-60">
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
};

export default OTPPage;
