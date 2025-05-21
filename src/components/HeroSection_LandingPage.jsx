import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import logo from "../assets/logo2.png";
import LandingPage1 from "../assets/LandingPage1.jpg";

import FilterBar from '../components/FilterBar';

import EastIcon from '@mui/icons-material/East';

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

  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

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



  return (
    <>
      <div className="Hero_section relative h-[110vh] w-full bg-cover bg-bottom rounded-b-[80px]" style={{ backgroundImage: `url(${LandingPage1})`, backgroundPosition: 'center top -50px' }}>



        {/* TOP PART CONTAINING SIGN IN, SIGN UP AND LOGO */}
        <div className="top flex w-full justify-between px-3 py-3">

          <div className="logo">
            <img src={logo} alt="tendr logo" style={{ height: "60px" }} className='transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer' onClick={() => navigate("/")} />
          </div>

          <div className="btns flex items-center justify-between w-[220px] px-1">

            <button
              type="button"
              onClick={() => { navigate("/signup") }}
              className="group bg-transparent border-[3px] border-white rounded-xl pl-2.5 pr-2.5 pt-1 pb-1.5 flex items-center justify-center text-white font-bold w-[100px] h-[40px] hover:bg-white hover:text-black hover:font-extrabold transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <span className="transition duration-300 group-hover:text-black group-hover:font-extrabold">
                Sign Up
              </span>
            </button>

            <button
              type="button"
              onClick={() => { navigate("/login") }}
              className="group bg-white rounded-xl pl-2.5 pr-2.5 pt-1 pb-1.5 flex items-center justify-center font-bold w-[100px] h-[40px] transition duration-300 ease-in-out transform hover:-translate-y-1 hover:font-extrabold"
            >
              <span className="text-black group-hover:text-[#CCAB4A] transition duration-300 group-hover:font-extrabold">
                Sign In
              </span>
            </button>

          </div>

        </div>



        {/* BANNER PART WITH WORDS CHANGING ANIMATION */}
        <div className="banner_text pl-[132px] pr-16 py-14 font-black text-white text-[90px] leading-[100px]"
          style={{ WebkitTextStroke: "1px #CCAB4A" }}
        >
          <span>Everything You Need to Plan the Perfect </span>
          <span
            className={`inline-block transition-all duration-1000 ease-in-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4" } text-[#ffffff]`}
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
              onClick={() => { navigate("") }}
              className="group cursor-pointer bg-white hover:bg-[#CCAB4A] hover:text-white rounded-2xl pl-4 pr-2 flex items-center justify-between text-[#CCAB4A] font-bold w-[220px] h-[45px] transform transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 hover:-translate-y-1"
            >

              <span className="pb-[2px] text-lg">GROUP BOOKING</span>

              <span
                type="button"
                // onClick={() => handleSearch()}
                className="arrowButton w-[30px] h-[30px] bg-[#CCAB4A] group-hover:bg-white rounded-xl flex items-center justify-center transition duration-300"
              >
                <EastIcon className="text-white transition duration-300 group-hover:text-[#CCAB4A]" fontSize="medium" />
              </span>

            </button>

          </div>

        </div>



      </div>
    </>
  )
}

export default HeroSection_LandingPage
