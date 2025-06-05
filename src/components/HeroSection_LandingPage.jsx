import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import logo from "../assets/logo2.png";
import LandingPage1 from "../assets/LandingPage1.jpg";
import FilterBar from '../components/FilterBar';
import EastIcon from '@mui/icons-material/East';
import DashboardIcon from '@mui/icons-material/Dashboard'; // Icon for Dashboard
import LogoutIcon from '@mui/icons-material/Logout'; // Icon for Logout

const words = [
  "Event",
  "Pre-Wedding",
  "Anniversary",
  "Birthday",
  "Office Party",
  "Festival",
  "Get-together",
];

const HeroSection_LandingPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth); // Get user and token from Redux
  const isAuthenticated = !!user && !!token; // Check if authenticated
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  // Get the first letter of the user's name for the badge
  const userInitial = isAuthenticated && user.name ? user.name.charAt(0).toUpperCase() : '';

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false); // trigger fade + slide out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length); // update word
        setIsVisible(true);
      }, 400);
    }, 2300);

    return () => clearInterval(interval);
  }, []);

  // Handle clicking outside the modal to close it
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".user-badge") && !e.target.closest(".user-modal")) {
        setIsModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    dispatch(logout()).then(() => {
      navigate('/'); // Redirect to home page after logout
      setIsModalOpen(false); // Close modal
    });
  };

  const handleDashboard = () => {
    navigate('/dashboard'); // Navigate to dashboard
    setIsModalOpen(false); // Close modal
  };

  return (
    <>
      <div className="Hero_section relative h-[110vh] w-full bg-cover bg-bottom rounded-b-[80px]" style={{ backgroundImage: `url(${LandingPage1})`, backgroundPosition: 'center top -50px' }}>
        {/* TOP PART CONTAINING SIGN IN, SIGN UP AND LOGO */}
        <div className="top flex w-full justify-between px-3 py-3">
          <div className="logo">
            <img
              src={logo}
              alt="tendr logo"
              style={{ height: "60px" }}
              className='transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer'
              onClick={() => navigate("/")}
            />
          </div>

          {/* Conditional rendering based on authentication */}
          {isAuthenticated ? (
            <div className="user-badge relative flex items-center">
              {/* User Badge */}
              <div
                onClick={() => setIsModalOpen(!isModalOpen)}
                className="w-10 h-10 bg-[#CCAB4A] text-white rounded-full flex items-center justify-center text-xl font-bold shadow-md cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
              >
                {userInitial}
              </div>

              {/* Modal for Dashboard and Logout */}
              {isModalOpen && (
                <div className="user-modal absolute top-12 right-0 w-48 bg-[#F7F4EF] rounded-xl shadow-lg py-2 z-50">
                  {/* Dashboard Option */}
                  <div
                    onClick={handleDashboard}
                    className="flex items-center gap-2 px-4 py-2 text-[#D48060] font-semibold hover:bg-[#FFD3C3] cursor-pointer transition-colors duration-300"
                  >
                    <DashboardIcon fontSize="small" />
                    <span>Dashboard</span>
                  </div>
                  {/* Logout Option */}
                  <div
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-4 py-2 text-[#D48060] font-semibold hover:bg-[#FFD3C3] cursor-pointer transition-colors duration-300"
                  >
                    <LogoutIcon fontSize="small" />
                    <span>Logout</span>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="btns flex items-center justify-between w-[220px] px-1">
              <button
                type="button"
                onClick={() => navigate("/signup")}
                className="group bg-transparent border-[3px] border-white rounded-xl pl-2.5 pr-2.5 pt-1 pb-1.5 flex items-center justify-center text-white font-bold w-[100px] h-[40px] hover:bg-white hover:text-black hover:font-extrabold transition duration-300 ease-in-out transform hover:-translate-y-1 active:scale-95"
              >
                <span className="transition duration-300 group-hover:text-black group-hover:font-extrabold">
                  Sign Up
                </span>
              </button>

              <button
                type="button"
                onClick={() => navigate("/login")}
                className="group bg-white rounded-xl pl-2.5 pr-2.5 pt-1 pb-1.5 flex items-center justify-center font-bold w-[100px] h-[40px] transition duration-300 ease-in-out transform hover:-translate-y-1 hover:font-extrabold active:scale-95"
              >
                <span className="text-black group-hover:text-[#CCAB4A] transition duration-300 group-hover:font-extrabold">
                  Sign In
                </span>
              </button>
            </div>
          )}
        </div>

        {/* BANNER PART WITH WORDS CHANGING ANIMATION */}
        <div className="banner_text pl-[132px] pr-16 py-14 font-black text-white text-[90px] leading-[100px]"
          style={{ WebkitTextStroke: "1px #CCAB4A" }}
        >
          <span>Everything You Need to Plan the Perfect </span>
          <span
            className={`inline-block transition-all duration-1000 ease-in-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} text-[#ffffff]`}
            style={{ WebkitTextStroke: "1px #CCAB4A" }}
          >
            {words[index]}
          </span>
        </div>

        {/* FILTER BAR PART */}
        <div className="filterbar_container pt-5 pb-14">
          <FilterBar />
        </div>

        {/* GROUP BOOKING TEXT AND BTN PART */}
        <div className="make_a_group pt-5 flex flex-col items-center gap-5">
          <div className="make_a_group_text font-extrabold text-2xl">
            <span className='text-white'>Require more than one service?</span>
            <span> </span>
            <span className='text-[#CCAB4A]'>Click the button below</span>
          </div>

          <div className="make_a_group_btn">
            <button
              type="button"
              onClick={() => navigate("/plan-event/form")}
              className="group cursor-pointer bg-white hover:bg-[#CCAB4A] hover:text-white rounded-2xl pl-4 pr-2 flex items-center justify-between text-[#CCAB4A] font-bold w-[220px] h-[45px] transform transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 hover:-translate-y-1"
            >
              <span className="pb-[2px] text-lg">GROUP BOOKING</span>
              <span
                className="arrowButton w-[30px] h-[30px] bg-[#CCAB4A] group-hover:bg-white rounded-xl flex items-center justify-center transition duration-300"
              >
                <EastIcon className="text-white transition duration-300 group-hover:text-[#CCAB4A]" fontSize="medium" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection_LandingPage;