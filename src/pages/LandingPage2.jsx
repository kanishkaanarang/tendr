import React from 'react';
import { useNavigate } from 'react-router-dom';

import FilterBar from '../components/FilterBar';

import logo from "../assets/logo2.png";
import LandingPage1 from "../assets/LandingPage1.jpg";

const LandingPage2 = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='h-[200vh]'>
                <div
                    className="relative h-[110vh] w-full bg-cover bg-bottom rounded-b-[50px]"
                    style={{
                        backgroundImage: `url(${LandingPage1})`,
                        backgroundPosition: 'center top -50px'
                    }}
                >
                    <div className="top flex w-full justify-between px-2 pt-2">
                        <div className="logo">
                            <img src={logo} alt="tendr logo" style={{ height: "70px" }} />
                        </div>
                        <div className="btns flex items-center justify-between w-[220px]">
                            <button
                                type="button"
                                onClick={() => navigate("/signup")}
                                className='bg-[#CCAB4A] hover:bg-[#a98d3b] rounded-xl px-2.5 py-1.5 flex items-center justify-center text-white font-bold w-[100px] h-[40px]'
                            >
                                Sign Up
                            </button>
                            <button
                                type="button"
                                onClick={() => navigate("/login")}
                                className='bg-white hover:ring-1 hover:ring-[#CCAB4A] rounded-xl px-2.5 py-1.5 flex items-center justify-center font-bold w-[100px] h-[40px]'
                            >
                                Sign In
                            </button>
                        </div>
                    </div>

                    {/* You can uncomment and position FilterBar here */}
                    {/* <FilterBar className="absolute top-[60%] left-1/2 transform -translate-x-1/2" /> */}
                </div>
            </div>
        </>
    );
};

export default LandingPage2
