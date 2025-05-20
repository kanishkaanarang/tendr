import React, { useState, useEffect } from 'react'
import logo from "../assets/logo2.png";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';

const NavUpper = () => {
    const [activeDropdown, setactiveDropdown] = useState(null)

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest(".dropdown-wrapper")) {       // Checking if the element clicked or its parent have class .dropdown-wrapper
                setactiveDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);

        

    }, []);

    return (
        <>
            <div className="navupper flex justify-between pl-5 pr-5 pt-1 pb-1.5 bg-[#EBE7DE] ">
                <div className="logo">
                    <img src={logo} alt="tendr logo" style={{ height: "50px" }} />
                </div>
                <div className="buttons flex gap-5 items-start pt-1">
                    <button type="button" onClick={() => { setactiveDropdown("user") }} className='bg-white outline-none hover:ring-2 hover:ring-[#CCAB4A] rounded-full pl-2.5 pr-2.5 pt-1 pb-1 flex items-center justify-center gap-2 text-white font-bold w-[80px]'>
                        {/* Remove the ring in above */}
                        <MenuIcon className='text-[#CCAB4A]' fontSize="medium" />
                        <AccountCircleIcon className='text-[#CCAB4A]' fontSize="large" />
                    </button>
                </div>
            </div>

            {activeDropdown === "user" &&
                <div className="dropdown-wrapper absolute right-5 top-14 w-[200px] h-[414px] bg-white rounded-3xl z-30 shadow-[0_2px_10px_rgba(0,0,0,0.25)] overflow-y-auto">
                    <ul className=''>
                        <li className='cursor-pointer text-sm p-2 pl-5 pr-5 ml-2 mr-2 mt-2 rounded-full font-medium text-black  hover:bg-[#ffe79e45]'>Personal Info</li>
                        <li className='cursor-pointer text-sm p-2 pl-5 pr-5 ml-2 mr-2 mt-2 rounded-full font-medium text-black  hover:bg-[#ffe79e45]'>Planner Checklist</li>
                        <li className='cursor-pointer text-sm p-2 pl-5 pr-5 ml-2 mr-2 mt-2 rounded-full font-medium text-black  hover:bg-[#ffe79e45]'>Upcoming Events</li>
                        <li className='cursor-pointer text-sm p-2 pl-5 pr-5 ml-2 mr-2 mt-2 rounded-full font-medium text-black  hover:bg-[#ffe79e45]'>Past Events</li>
                        <li className='cursor-pointer text-sm p-2 pl-5 pr-5 ml-2 mr-2 mt-2 rounded-full font-medium text-black  hover:bg-[#ffe79e45]'>Transactions</li>
                        <li className='cursor-pointer text-sm p-2 pl-5 pr-5 ml-2 mr-2 mt-2 rounded-full font-medium text-black  hover:bg-[#ffe79e45]'>Favourites</li>
                        <li className='border-[1px] mt-2 border-[#CCAB4A] w-full'></li>
                        <li className='cursor-pointer text-sm p-2 pl-5 pr-5 ml-2 mr-2 mt-2 rounded-full font-medium text-black  hover:bg-[#ffe79e45]'>Help Center</li>
                        <li className='cursor-pointer text-sm p-2 pl-5 pr-5 ml-2 mr-2 mt-2 rounded-full font-medium text-black  hover:bg-[#ffe79e45]'>Support</li>
                        <li className='cursor-pointer text-sm p-2 pl-5 pr-5 ml-2 mr-2 mt-2 rounded-full font-medium text-black  hover:bg-[#ffe79e45]'>Log Out</li>
                    </ul>
                </div>
            }



        </>
    )
}

export default NavUpper