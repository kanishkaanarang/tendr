import React from 'react'
import logo from "../assets/logo2.png";
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar bg-[#EBE7DE]">

        <div className='container mx-auto'>

          <div className="navupper flex  justify-between pl-10 pr-10 pt-3">
            <div className="logo">
              <img src={logo} alt="tendr logo" style={{ height: "84px" }} />
            </div>
            <div className="buttons flex gap-5 items-start pt-3">
              <button type="button" className='bg-[#CCAB4A] rounded-full pl-2.5 pr-2.5 pt-1 pb-1.5 flex items-center justify-center text-white font-bold w-[80px]'>
                <span>Sign Up</span>
              </button>
              <button type="button" onClick={() => { navigate("/login") }} className='bg-white rounded-full pl-2.5 pr-2.5 pt-1 pb-1.5 flex items-center justify-center font-bold w-[80px]'>
                <span>Sign In</span>
              </button>
            </div>
          </div>

          <div className="navlower pb-5">
            <div className="bardiv flex justify-center">
              <div className="bar w-[950px] h-[66px] bg-white rounded-full flex justify-between items-center">

                <div className="text flex">
                  <div className="event p-3 pl-10 flex flex-col text-sm pr-24">
                    <span className='font-medium'>Event Type</span>
                    <span className='font-medium text-[#CCAB4A]'>Select events</span>
                  </div>
                  
                  <div className='bg-[#CCAB4A] mt-2 mb-2 w-[1px] ml-5 mr-5'></div>

                  <div className="date p-3 pl-2 flex flex-col text-sm pr-12">
                    <span className='font-medium'>Date</span>
                    <span className='font-medium text-[#CCAB4A]'>Add dates</span>
                  </div>
                  
                  <div className='bg-[#CCAB4A] mt-2 mb-2 w-[1px] ml-5 mr-5'></div>
                  
                  <div className="location p-3 pl-2 flex flex-col text-sm pr-12">
                    <span className='font-medium'>Location</span>
                    <span className='font-medium text-[#CCAB4A]'>Add location</span>
                  </div>

                  <div className='bg-[#CCAB4A] mt-2 mb-2 w-[1px] ml-5 mr-5'></div>
                  
                  <div className="guests p-3 pl-2 flex flex-col text-sm pr-12">
                    <span className='font-medium'>Guests</span>
                    <span className='font-medium text-[#CCAB4A]'>Number of guests</span>
                  </div>
                </div>


                <div className="flex justify-center items-center">
                  <button type="button" onClick={() => { navigate("/SecondPage") }} className="arrowButton mr-3 w-[45px] h-[45px] bg-[#CCAB4A] rounded-full"></button>
                  {/*The above needs to be filled */}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto recommend ml-10 mt-8">
        <div className="title text-[#CCAB4A] font-bold text-3xl underline underline-offset-2 decoration-2">Recommended Vendors</div>
        div.
      </div>

    </>
  )
}

export default LandingPage
