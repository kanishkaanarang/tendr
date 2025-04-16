import React, { useState } from 'react'

import NavUpper from '../components/NavUpper';
import FilterBar from '../components/FilterBar';

import Christmas from "../assets/Home-Christmas.jpg";
import Halloween from "../assets/Home-Halloween.jpg";
import Kids_Theme from "../assets/Home-Kids.jpg";
import Catering from "../assets/Home-Catering.jpg";
import Entertainment from "../assets/Home-Entertainment.jpg";
import Decorator from "../assets/Home-Decorator.jpg";
import Photographer from "../assets/Home-Photographer.jpg";
import MoreToCome from "../assets/Home-MoreToCome.jpg";
import Gift from "../assets/Home-Gift.jpg";

// import { useNavigate } from 'react-router-dom';
// import EastIcon from '@mui/icons-material/East';

const LandingPage = () => {
  // const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>

      <div className="navbar bg-[#EBE7DE] border-b-2 border-[#CCAB4A]">

        <div className='container mx-auto'>

          <NavUpper />

          <div className="navlower pb-5">

            <FilterBar/>

          </div>


        </div>

      </div>

      <div className="recommend container mx-auto mt-4">
        <div className="title text-[#CCAB4A] font-bold text-3xl underline underline-offset-2 decoration-2">Recommended Vendors</div>
        <div className="vendor_images mt-4 flex gap-10">

          <div className="first">

            <div className="catering relative mb-5 w-[360px] h-[240px] rounded-[18px] cursor-pointer overflow-hidden">
              {isLoaded && (<div className='bg-white text-black font-bold rounded-full m-3 absolute z-20 flex items-center justify-center'>
                <span className='pl-2 pr-2'>Catering</span>
              </div>)}
              <img
                src={Catering}
                alt="Catering"
                className={`object-cover w-full h-full rounded-2xl transition-all duration-200 hover:scale-110 ${isLoaded ? "opacity-100" : "opacity-0"}`}
                onLoad={() => setIsLoaded(true)}
              />
              {!isLoaded && (
                <div className="absolute inset-0 bg-gray-100 rounded-2xl z-10" />
              )}
            </div>

            <div className="entertainment w-[360px] h-[240px] rounded-[18px] cursor-pointer overflow-hidden">
              {isLoaded && (<div className='bg-white text-black font-bold rounded-full m-3 absolute z-20 flex items-center justify-center'>
                <span className='pl-2 pr-2'>Entertainment</span>
              </div>)}
              <img
                src={Entertainment}
                alt="Entertainment"
                className={`object-cover w-full h-full rounded-2xl transition-all duration-200 hover:scale-110 ${isLoaded ? "opacity-100" : "opacity-0"}`}
                onLoad={() => setIsLoaded(true)}
              />
              {!isLoaded && (
                <div className="absolute inset-0 bg-gray-100 rounded-2xl z-10" />
              )}
            </div>
          </div>

          <div className="second relative decorator w-[350px] h-[500px] rounded-[18px] cursor-pointer overflow-hidden">
            {isLoaded && (<div className='bg-white text-black font-bold rounded-full m-3 absolute z-20 flex items-center justify-center'>
              <span className='pl-2 pr-2'>Decorator</span>
            </div>)}
            <img
              src={Decorator}
              alt="Decorator"
              className={`object-cover w-full h-full rounded-2xl transition-all duration-200 hover:scale-110 ${isLoaded ? "opacity-100" : "opacity-0"}`}
              onLoad={() => setIsLoaded(true)}
            />
            {!isLoaded && (
              <div className="absolute inset-0 bg-gray-100 rounded-2xl z-10" />
            )}
          </div>

          <div className="third">

            <div className="photographer relative mb-5 w-[360px] h-[240px] rounded-[18px] cursor-pointer overflow-hidden">
              {isLoaded && (<div className='bg-white text-black font-bold rounded-full m-3 absolute z-20 flex items-center justify-center'>
                <span className='pl-2 pr-2'>Photographer</span>
              </div>)}
              <img
                src={Photographer}
                alt="Photographer"
                className={`object-cover w-full h-full rounded-2xl transition-all duration-200 hover:scale-110 ${isLoaded ? "opacity-100" : "opacity-0"}`}
                onLoad={() => setIsLoaded(true)}
              />
              {!isLoaded && (
                <div className="absolute inset-0 bg-gray-100 rounded-2xl z-10" />
              )}
            </div>

            <div className="gift relative w-[360px] h-[240px] rounded-[18px] cursor-pointer overflow-hidden">
              {isLoaded && (<div className='bg-white text-black font-bold rounded-full m-3 absolute z-20 flex items-center justify-center'>
                <span className='pl-2 pr-2'>Gift</span>
              </div>)}
              <img
                src={Gift}
                alt="Gift"
                className={`object-cover w-full h-full rounded-2xl transition-all duration-200 hover:scale-110 ${isLoaded ? "opacity-100" : "opacity-0"}`}
                onLoad={() => setIsLoaded(true)}
              />
              {!isLoaded && (
                <div className="absolute inset-0 bg-gray-100 rounded-2xl z-10" />
              )}
            </div>
          </div>

          <div className="fourth moretocome relative w-[350px] h-[500px] rounded-[18px] cursor-pointer overflow-hidden">
            {isLoaded && (<div className='font-bold text-7xl ml-9 absolute z-20 flex items-center h-full'>
              <span>
                More
                <br />
                To
                <br />
                Come
                <br />
                Soon...
              </span>
            </div>)}
            <img
              src={MoreToCome}
              alt="More To Come"
              className={`object-cover w-full h-full rounded-2xl transition-all duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
              onLoad={() => setIsLoaded(true)}
            />
            {!isLoaded && (
              <div className="absolute inset-0 bg-gray-100 rounded-2xl z-10" />
            )}
          </div>

        </div>
      </div>

      <div className="themed container mx-auto mt-4">
        <div className="title text-[#CCAB4A] font-bold text-3xl underline underline-offset-2 decoration-2">Get Themed Decorations</div>
        <div className="cards flex mt-4 gap-10 justify-center">

          <div className="first_card w-[470px] h-[342px] rounded-2xl bg-white flex flex-col items-center shadow-[0_2px_10px_rgba(0,0,0,0.25)] cursor-pointer">
            <div className="w-[435px] h-[240px] relative mt-4 overflow-hidden rounded-2xl">
              <img
                src={Halloween}
                alt="Halloween Theme"
                className={`object-cover w-full h-full rounded-2xl transition-all duration-700 hover:scale-110 ${isLoaded ? "opacity-100" : "opacity-0"}`}
                onLoad={() => setIsLoaded(true)}
              />
              {!isLoaded && (
                <div className="absolute inset-0 bg-gray-100 rounded-2xl z-10" />
              )}
            </div>

            <div className="textbelow mt-3.5 flex flex-col justify-center items-center">
              <div className="theme font-semibold text-xl">Halloween Theme</div>
              <div className="pricing text-[#CCAB4A]">Contact for Pricing</div>
            </div>

          </div>

          <div className="second_card w-[470px] h-[342px] rounded-2xl bg-white flex flex-col items-center shadow-[0_2px_10px_rgba(0,0,0,0.25)] cursor-pointer">
            <div className="w-[435px] h-[240px] relative mt-4 overflow-hidden rounded-2xl">
              <img
                src={Kids_Theme}
                alt="Kids Theme"
                className={`object-cover w-full h-full rounded-2xl transition-all duration-700 hover:scale-110 ${isLoaded ? "opacity-100" : "opacity-0"}`}
                onLoad={() => setIsLoaded(true)}
              />
              {!isLoaded && (
                <div className="absolute inset-0 bg-gray-100 rounded-2xl z-10" />
              )}
            </div>

            <div className="textbelow mt-3.5 flex flex-col justify-center items-center">
              <div className="theme font-semibold text-xl">Kids Theme</div>
              <div className="pricing text-[#CCAB4A]">Contact for Pricing</div>
            </div>

          </div>

          <div className="third_card w-[470px] h-[342px] rounded-2xl bg-white flex flex-col items-center shadow-[0_2px_10px_rgba(0,0,0,0.25)] cursor-pointer">
            <div className="w-[435px] h-[240px] relative mt-4 overflow-hidden rounded-2xl">
              <img
                src={Christmas}
                alt="Christmas Theme"
                className={`object-cover w-full h-full rounded-2xl transition-all duration-700 hover:scale-110 ${isLoaded ? "opacity-100" : "opacity-0"}`}
                onLoad={() => setIsLoaded(true)}
              />
              {!isLoaded && (
                <div className="absolute inset-0 bg-gray-100 rounded-2xl z-10" />
              )}
            </div>

            <div className="textbelow mt-3.5 flex flex-col justify-center items-center">
              <div className="theme font-semibold text-xl">Christmas Theme</div>
              <div className="pricing text-[#CCAB4A]">Contact for Pricing</div>
            </div>

          </div>

        </div>
      </div>

      <div className="vendornetwork container mx-auto mt-10 mb-10 w-[1600px] h-[130px] bg-[#EBE7DE] rounded-2xl flex justify-center items-center">
        <div className="contains w-full pl-10 pr-10 flex justify-between items-center">
          <div className="left">
            <div className="icon">
              {/* Icon to be placed here */}
            </div>
            <div className='flex flex-col'>
              <span className='text-2xl font-bold'>Exclusive deals for our Vendor partners !</span>
              <span className='text-[#CCAB4A] text-lg'>Looking for exclusive deals on our services? Sign Up to access special offers from our us</span>
            </div>
          </div>
          <div className="right">
            <button type="button" className='bg-[#CCAB4A] w-[270px] rounded-full p-3 flex items-center justify-center text-white font-bold'>
              <span className='text-xl font-semibold'>JOIN VENDOR NETWORK</span>
              {/* Onclick to be applied on above */}
            </button>
          </div>
        </div>

      </div>

      <div className="footer_home container mx-auto mt-10 mb-10 w-[1600px] h-[190px] bg-[#EBE7DE] rounded-2xl">

        <div className="containsfooter w-full h-full flex justify-between items-center pl-10 pr-10">

          <div className="left flex flex-col justify-between pt-5 pb-5 h-full">
            <div className="top flex flex-col">
              <span className='font-bold text-3xl'>tendr</span>
              <span className='text-[#CCAB4A] font-medium'>Simplified event planning</span>
            </div>
            <div className="bottom">
              <div className='font-semibold text-lg'>tendr ©</div>
            </div>
          </div>

          <div className="right pt-5 pb-5 h-full flex flex-col justify-evenly">
            <span className='font-medium'>Support</span>
            <span className='font-medium'>Help Center</span>
            <span className='font-medium'>Vendor Support</span>
            <span className='font-medium'>Vendor</span>
            <span className='font-medium'>Get in touch</span>
          </div>

        </div>

      </div>

    </>
  )
}

export default LandingPage
