import React, { useState } from 'react'

import FilterBar from '../components/FilterBar';

import logo from "../assets/logo2.png";
import LandingPage1 from "../assets/LandingPage1.jpg";



const LandingPage2 = () => {
    return (
        <>
            <div className='h-[200vh]'>

                <div className="relative h-[110vh] w-full bg-cover bg-bottom rounded-b-[50px]" style={{ backgroundImage: `url(${LandingPage1})`, backgroundPosition: 'center top -50px' }}>





                    <div className="top flex w-full justify-between px-3 pt-2">
                        <div className="logo">
                            <img src={logo} alt="tendr logo" style={{ height: "70px" }} />
                        </div>
                        <div className="btns flex items-center justify-between w-[220px] px-1">
                            <button type="button" onClick={() => { navigate("/signup") }} className='bg-transparent hover:bg-white border-[3px] border-white hover:text-transparent rounded-xl pl-2.5 pr-2.5 pt-1 pb-1.5 flex items-center justify-center text-white font-bold w-[100px] h-[40px]'>
                                <span>Sign Up</span>
                            </button>
                            <button type="button" onClick={() => { navigate("/login") }} className='bg-white rounded-xl pl-2.5 pr-2.5 pt-1 pb-1.5 flex items-center justify-center font-extrabold w-[100px] h-[40px]'>
                                <span className="text-transparent bg-clip-text" 
                                style={{ backgroundImage: `url(${LandingPage1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                                >Sign In</span>
                            </button>
                        </div>
                    </div>






                    {/* HEADING WILL BE PLACED HERE */}

                    {/* <FilterBar className="absolute top-[60%] left-1/2 transform -translate-x-1/"/> */}

                    {/* MAKE A GROUP HERE */}

                </div>

            </div>


        </>
    )
}

export default LandingPage2
