import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo2.png";

const NavUpper = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="navupper flex justify-between pl-5 pr-5 pt-1 pb-1.5 bg-[#EBE7DE] ">
                <div className="logo">
                    <img src={logo} alt="tendr logo" style={{ height: "50px" }} />
                </div>
                <div className="buttons flex gap-5 items-start pt-2">
                    <button type="button" onClick={() => { navigate("/signup") }} className='bg-[#CCAB4A] hover:bg-[#a98d3b] rounded-full pl-2.5 pr-2.5 pt-1 pb-1.5 flex items-center justify-center text-white font-bold w-[80px]'>
                        <span>Sign Up</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default NavUpper