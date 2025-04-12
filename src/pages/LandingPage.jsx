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

      <div className="recommend container mx-auto mt-4">
        <div className="title text-[#CCAB4A] font-bold text-3xl underline underline-offset-2 decoration-2">Recommended Vendors</div>
        <div className="vendor_images mt-4 flex gap-10">
          <div className="first">
            <div className="catering mb-5 w-[360px] h-[240px] bg-gray-500 rounded-[18px]"></div>
            <div className="entertainment w-[360px] h-[240px] bg-gray-500 rounded-[18px]"></div>
          </div>
          <div className="second decorator w-[350px] h-[500px] bg-gray-500 rounded-[18px]"></div>
          <div className="third">
            <div className="photography mb-5 w-[360px] h-[240px] bg-gray-500 rounded-[18px]"></div>
            <div className="gift w-[360px] h-[240px] bg-gray-500 rounded-[18px]"></div>
          </div>
          <div className="fourth moretocome w-[350px] h-[500px] bg-gray-500 rounded-[18px]"></div>
        </div>
      </div>

      <div className="themed container mx-auto mt-4">
        <div className="title text-[#CCAB4A] font-bold text-3xl underline underline-offset-2 decoration-2">Get Themed Decorations</div>
        <div className="cards flex mt-4 gap-10 justify-center">
          <div className="first_card w-[470px] h-[342px] rounded-2xl bg-gray-200 flex flex-col items-center">
            <div className="img w-[435px] h-[240px] rounded-2xl bg-purple-300 mt-4">
              {/* Image to be place here */}
            </div>
            <div className="textbelow mt-3.5 flex flex-col justify-center items-center">
              <div className="theme font-semibold text-xl">Halloween Theme</div>
              <div className="pricing text-[#CCAB4A]">Contact for Pricing</div>
            </div>
          </div>
          <div className="second_card w-[470px] h-[342px] rounded-2xl bg-gray-200 flex flex-col items-center">
            <div className="img w-[435px] h-[240px] rounded-2xl bg-purple-300 mt-4">
              {/* Image to be place here */}
            </div>
            <div className="textbelow mt-3.5 flex flex-col justify-center items-center">
              <div className="theme font-semibold text-xl">Kids Theme</div>
              <div className="pricing text-[#CCAB4A]">Contact for Pricing</div>
            </div>
          </div>
          <div className="third_card w-[470px] h-[342px] rounded-2xl bg-gray-200 flex flex-col items-center">
            <div className="img w-[435px] h-[240px] rounded-2xl bg-purple-300 mt-4">
              {/* Image to be place here */}
            </div>
            <div className="textbelow mt-3.5 flex flex-col justify-center items-center">
              <div className="theme font-semibold text-xl">Christmas Theme</div>
              <div className="pricing text-[#CCAB4A]">Contact for Pricing</div>
            </div>
          </div>
        </div>
      </div>

      <div className="vendornetwrok container mx-auto mt-10 mb-10 w-[1600px] h-[130px] bg-[#EBE7DE] rounded-2xl flex justify-center items-center">
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

      <div className="vendornetwrok container mx-auto mt-10 mb-10 w-[1600px] h-[190px] bg-[#EBE7DE] rounded-2xl">

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
