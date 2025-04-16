import React, { useState, useEffect } from 'react'
import EastIcon from '@mui/icons-material/East';
import { useNavigate } from 'react-router-dom';
import { style } from '@mui/system';

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

const FilterBar = () => {
    const navigate = useNavigate();

    const [eventType, setEventType] = useState("");
    const [activeDropdown, setactiveDropdown] = useState(null)

    const eventOptions = ['Wedding', 'Birthday Party', 'Corporate Event', 'Concert'];

    const handleOptionClick = (option) => {
        setEventType(option);
        setactiveDropdown(null);
    };
    
    useEffect(() => {
        const handleClickOutside = (e) => {
          if (!e.target.closest(".dropdown-wrapper")) {
            setactiveDropdown(null);
          }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
      }, []);

    return (
        <form>

            <div className="bardiv flex justify-center">

                <div className="bar w-[950px] h-[66px] bg-white rounded-full flex justify-between items-center ring-[1px] ring-[#CCAB4A] shadow-[0_2px_10px_rgba(0,0,0,0.25)]">
                    <div className="flex w-full h-full justify-between">

                        <div className="event p-3 pl-12 flex flex-col text-sm rounded-full w-[250px] hover:bg-[#ffe69e4a] relative">
                            <label className='font-semibold text-[16px] cursor-pointer' onClick={() => { setactiveDropdown("event") }}>Event Type</label>
                            <input
                                type="text"
                                className='font-bold text-[#CCAB4A] placeholder-[#CCAB4A] placeholder:font-medium outline-none bg-transparent pl-[1px] cursor-pointer w-full'
                                value={eventType}
                                onChange={(e) => setEventType(e.target.value)}
                                onClick={() => { setactiveDropdown("event") }}
                                placeholder="Select events"
                                readOnly
                            />

                            {activeDropdown === "event" &&
                                <div className="dropdown-wrapper absolute left-0 top-[75px] w-[350px] h-[250px] bg-white rounded-3xl z-30 shadow-[0_2px_10px_rgba(0,0,0,0.25)] overflow-y-auto">
                                    {eventOptions.map((option, index) => {
                                      return <div 
                                      key={index}
                                      onClick={() => handleOptionClick(option)}
                                      className={`cursor-pointer text-lg p-3 pl-10 pr-10 ml-5 mr-5 mt-2 rounded-full font-medium text-black ${eventType === option ? 'bg-[#ffe69e]' : 'hover:bg-[#ffe79e45]'}`}
                                      >
                                        {option}
                                      </div>
                                    }
                                    )}
                                </div>
                            }



                        </div>

                        <div className='bg-[#CCAB4A] mt-2 mb-2 w-[0.5px] ml-3 mr-3'></div>

                        <div className="date p-3 pl-5 flex flex-col text-sm rounded-full w-[180px] hover:bg-[#ffe69e4a] relative">
                            <span className='font-semibold text-[16px]'>Date</span>
                            <span className='font-medium text-[#CCAB4A]'>Add dates</span>
                        </div>

                        <div className='bg-[#CCAB4A] mt-2 mb-2 w-[0.5px] ml-3 mr-3'></div>

                        <div className="location p-3 pl-5 flex flex-col text-sm rounded-full w-[180px] hover:bg-[#ffe69e4a] relative">
                            <span className='font-semibold text-[16px]'>Location</span>
                            <span className='font-medium text-[#CCAB4A]'>Add location</span>
                        </div>

                        <div className='bg-[#CCAB4A] mt-2 mb-2 w-[0.5px] ml-3 mr-3'></div>

                        <div className="guests p-3 pl-5 text-sm flex justify-between rounded-full w-[250px] hover:bg-[#ffe69e4a] relative">

                            {/* <div className='guests_box flex'> */}

                            <div className="guests_left flex flex-col ">
                                <span className='font-semibold text-[16px]'>Guests</span>
                                <span className='font-medium text-[#CCAB4A]'>Number of guests</span>
                            </div>

                            <div className="search_btn flex justify-center items-center">
                                <button type="button" onClick={() => { navigate("/SecondPage") }} className="arrowButton mr w-[45px] h-[45px] bg-[#CCAB4A] rounded-full">
                                    <EastIcon className='text-white' fontSize="large" />
                                </button>
                                {/*The above needs to be filled */}
                            </div>

                            {/* </div> */}

                        </div>

                    </div>



                </div>



            </div>
        </form>
    )
}

export default FilterBar
