import React, { useState, useEffect } from 'react'

// import { useNavigate } from 'react-router-dom';

import ClearIcon from '@mui/icons-material/Clear';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EastIcon from '@mui/icons-material/East';

// const BASE_URL = "http://localhost:8080";


const PrimaryFilters_ListingPage = ({
    eventType: initialEventType,
    serviceType: initialServiceType,
    locationType: initialLocationType,
    date: initialDate,
    guestCount: initialGuestCount
}) => {

    // const navigate = useNavigate();

    const [eventType, setEventType] = useState(initialEventType || "");
    const [serviceType, setServiceType] = useState(initialServiceType || "");
    const [locationType, setLocationType] = useState(initialLocationType || "");
    const [date, setDate] = useState(initialDate || "");
    const [guestCount, setGuestCount] = useState(initialGuestCount || 0);

    const eventOptions = ['Get-together', 'Birthday', 'Office Party', 'Concert', 'Anniversary', 'Pre Wedding', 'Rituals', 'Festival', 'Others'];
    const serviceOptions = ['Decorator', 'Entertainment', 'Catering', 'Photographer'];
    const locationOptions = ['Delhi', 'Noida', 'Greater Noida', 'Gurugram', 'Ghaziabad'];

    const [activeDropdown, setactiveDropdown] = useState(null)

    const handleOptionClickEvent = (option) => {
        setEventType(option);
        setactiveDropdown(null);
    };

    const handleOptionClickService = (option) => {
        setServiceType(option);
        setactiveDropdown(null);
    };

    const handleOptionClickLocation = (option) => {
        setLocationType(option);
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

    const handleSearch = () => {``
        // To be filled
    };


    return (
        <>

            <div className="primary_heading ml-12 font-bold text-2xl">Event Details</div>



            {/* Primary Filter Options */}
            <div className="primary_filter_options flex flex-col gap-4 mt-4 items-center w-full">



                {/* Event Type */}
                <div className="event flex flex-col text-sm w-[85%] max-w-[450px] relative">
                    <label className='font-semibold text-[14px] cursor-pointer ml-3' onClick={() => { setactiveDropdown("event") }}>Event Type</label>
                    <input
                        type="text"
                        className='font-medium text-base text-[#CCAB4A] placeholder-[#CCAB4A] placeholder:font-medium outline-none bg-white cursor-pointer w-full rounded-full pl-4 p-[8px] border-2 border-[#CCAB4A] mt-[2px]'
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                        onClick={() => { setactiveDropdown("event") }}
                        placeholder="Select event"
                        readOnly
                    />

                    {activeDropdown === "event" &&
                        <div className="dropdown-wrapper absolute left-0 top-[75px] w-[200px] h-fit bg-white rounded-3xl z-30 shadow-[0_2px_10px_rgba(0,0,0,0.25)] overflow-y-auto">
                            {eventOptions.map((option, index) => {
                                return <div
                                    key={index}
                                    onClick={() => handleOptionClickEvent(option)}
                                    className={`cursor-pointer text-sm p-2 pl-7 ml-5 mr-5 mt-2 mb-2 rounded-[15px] font-medium text-black ${eventType === option ? 'bg-[#fbc0105e]' : 'hover:bg-[#ffe79e45]'}`}
                                >
                                    {option}
                                </div>
                            }
                            )}
                        </div>
                    }

                    {eventType ? (
                        <span
                            onClick={() => setEventType("")}
                            className="absolute right-4 bottom-[9px] flex items-center justify-center text-[#CCAB4A] hover:bg-[#f5cb4d71] w-fit rounded-full cursor-pointer text-lg"
                        >
                            <ClearIcon />
                        </span>
                    ) : (
                        <span
                            onClick={() => setactiveDropdown("event")}
                            className="absolute right-4 bottom-[9px] flex items-center justify-center text-[#CCAB4A] hover:bg-[#f5cb4d71] w-fit rounded-full cursor-pointer text-sm"
                        >
                            <KeyboardArrowDownIcon />
                        </span>
                    )}

                </div>



                {/* Service Type */}
                <div className="service flex flex-col text-sm w-[85%] max-w-[450px] relative">
                    <label className='font-semibold text-[14px] cursor-pointer ml-3' onClick={() => { setactiveDropdown("service") }}>Service Type</label>
                    <input
                        type="text"
                        className='font-medium text-base text-[#CCAB4A] placeholder-[#CCAB4A] placeholder:font-medium outline-none bg-white cursor-pointer w-full rounded-full pl-4 p-[8px] border-2 border-[#CCAB4A] mt-[2px]'
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                        onClick={() => { setactiveDropdown("service") }}
                        placeholder="Select service"
                        readOnly
                    />

                    {activeDropdown === "service" &&
                        <div className="dropdown-wrapper absolute left-0 top-[75px] w-[200px] h-fit bg-white rounded-3xl z-30 shadow-[0_2px_10px_rgba(0,0,0,0.25)] overflow-y-auto">
                            {serviceOptions.map((option, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleOptionClickService(option)}
                                    className={`cursor-pointer text-sm p-2 pl-7 ml-5 mr-5 mt-2 mb-2 rounded-[15px] font-medium text-black ${serviceType === option ? 'bg-[#fbc0105e]' : 'hover:bg-[#ffe79e45]'}`}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                    }

                    {serviceType ? (
                        <span
                            onClick={() => setServiceType("")}
                            className="absolute right-4 bottom-[9px] flex items-center justify-center text-[#CCAB4A] hover:bg-[#f5cb4d71] w-fit rounded-full cursor-pointer text-lg"
                        >
                            <ClearIcon />
                        </span>
                    ) : (
                        <span
                            onClick={() => setactiveDropdown("service")}
                            className="absolute right-4 bottom-[9px] flex items-center justify-center text-[#CCAB4A] hover:bg-[#f5cb4d71] w-fit rounded-full cursor-pointer text-sm"
                        >
                            <KeyboardArrowDownIcon />
                        </span>
                    )}
                </div>



                {/* Date */}
                <div className="date flex flex-col text-sm w-[85%] max-w-[450px] relative">
                    <label className='font-semibold text-[14px] cursor-pointer ml-3' onClick={() => setactiveDropdown("date")}>Date</label>
                    <input
                        type="text"
                        value={date}
                        onClick={() => setactiveDropdown("date")}
                        placeholder="Add date"
                        readOnly
                        className='text-base text-[#CCAB4A] placeholder-[#CCAB4A] font-medium outline-none bg-white cursor-pointer w-full rounded-full pl-4 p-[8px] border-2 border-[#CCAB4A] mt-[2px]'
                    />

                    {activeDropdown === "date" && (
                        <div className="dropdown-wrapper absolute left-0 top-[75px] w-fit bg-white rounded-3xl shadow-lg z-30 p-4">
                            <input
                                type="date"
                                className="text-black text-base font-semibold cursor-pointer"
                                onChange={(e) => {
                                    setDate(e.target.value);
                                    setactiveDropdown(null);
                                }}
                            />
                        </div>
                    )}

                    {date ? (
                        <span
                            onClick={() => setDate("")}
                            className="absolute right-4 bottom-[9px] flex items-center justify-center text-[#CCAB4A] hover:bg-[#f5cb4d71] w-fit rounded-full cursor-pointer text-lg"
                        >
                            <ClearIcon />
                        </span>
                    ) : (
                        <span
                            onClick={() => setactiveDropdown("date")}
                            className="absolute right-4 bottom-[9px] flex items-center justify-center text-[#CCAB4A] hover:bg-[#f5cb4d71] w-fit rounded-full cursor-pointer text-sm"
                        >
                            <KeyboardArrowDownIcon />
                        </span>
                    )}

                </div>



                {/* Location */}
                <div className="location flex flex-col text-sm w-[85%] max-w-[450px] relative">
                    <label className='font-semibold text-[14px] cursor-pointer ml-3' onClick={() => { setactiveDropdown("location") }}>Location</label>
                    <input
                        type="text"
                        className='font-medium text-base text-[#CCAB4A] placeholder-[#CCAB4A] placeholder:font-medium outline-none bg-white cursor-pointer w-full rounded-full pl-4 p-[8px] border-2 border-[#CCAB4A] mt-[2px]'
                        value={locationType}
                        onChange={(e) => setLocationType(e.target.value)}
                        onClick={() => { setactiveDropdown("location") }}
                        placeholder="Select location"
                        readOnly
                    />

                    {activeDropdown === "location" &&
                        <div className="dropdown-wrapper absolute left-0 top-[75px] w-[200px] h-fit bg-white rounded-3xl z-30 shadow-[0_2px_10px_rgba(0,0,0,0.25)] overflow-y-auto">
                            {locationOptions.map((option, index) => {
                                return <div
                                    key={index}
                                    onClick={() => handleOptionClickLocation(option)}
                                    className={`cursor-pointer text-sm p-2 pl-7 ml-5 mr-5 mt-2 mb-2 rounded-[15px] font-medium text-black ${locationType === option ? 'bg-[#fbc0105e]' : 'hover:bg-[#ffe79e45]'}`}
                                >
                                    {option}
                                </div>
                            }
                            )}
                        </div>
                    }

                    {locationType ? (
                        <span
                            onClick={() => setLocationType("")}
                            className="absolute right-4 bottom-[9px] flex items-center justify-center text-[#CCAB4A] hover:bg-[#f5cb4d71] w-fit rounded-full cursor-pointer text-lg"
                        >
                            <ClearIcon />
                        </span>
                    ) : (
                        <span
                            onClick={() => setactiveDropdown("location")}
                            className="absolute right-4 bottom-[9px] flex items-center justify-center text-[#CCAB4A] hover:bg-[#f5cb4d71] w-fit rounded-full cursor-pointer text-sm"
                        >
                            <KeyboardArrowDownIcon />
                        </span>
                    )}

                </div>



                {/* Guest Count */}
                <div className="guest flex flex-col text-sm w-[85%] max-w-[450px] relative">
                    <label className='font-semibold text-[14px] cursor-pointer ml-3' onClick={() => setactiveDropdown("guests")}>Guests</label>
                    <input
                        type="text"
                        value={guestCount > 0 ? `${guestCount} Guest${guestCount > 1 ? "s" : ""}` : ""}
                        onClick={() => setactiveDropdown("guests")}
                        placeholder="Number of guests"
                        readOnly
                        className='text-base text-[#CCAB4A] placeholder-[#CCAB4A] font-medium outline-none bg-white cursor-pointer w-full rounded-full pl-4 p-[8px] border-2 border-[#CCAB4A] mt-[2px]'
                    />

                    {activeDropdown === "guests" && (
                        <div className="dropdown-wrapper absolute left-0 top-[75px] bg-white rounded-3xl shadow-lg z-30 p-4 w-fit">
                            <div className="flex items-center justify-between gap-3">
                                <span className="text-black font-semibold text-md">Guest count</span>
                                <div className="flex items-center space-x-3">
                                    <button type="button" onClick={() => setGuestCount(prev => Math.max(prev - 1, 0))} className="text-xl w-8 h-8 bg-[#ffe69e] rounded-full">-</button>
                                    <span className="font-bold">{guestCount}</span>
                                    <button type="button" onClick={() => setGuestCount(prev => prev + 1)} className="text-xl w-8 h-8 bg-[#ffe69e] rounded-full">+</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {guestCount !== 0 ? (
                        <span
                            onClick={() => setGuestCount(0)}
                            className="absolute right-4 bottom-[9px] flex items-center justify-center text-[#CCAB4A] hover:bg-[#f5cb4d71] w-fit rounded-full cursor-pointer text-lg"
                        >
                            <ClearIcon />
                        </span>
                    ) : (
                        <span
                            onClick={() => setactiveDropdown("guests")}
                            className="absolute right-4 bottom-[9px] flex items-center justify-center text-[#CCAB4A] hover:bg-[#f5cb4d71] w-fit rounded-full cursor-pointer text-sm"
                        >
                            <KeyboardArrowDownIcon />
                        </span>
                    )}

                </div>



            </div>



            {/* Search Button */}
            <div className="search_btn flex justify-center mt-6">
                <button
                    type="button"
                    onClick={handleSearch}
                    className="group cursor-pointer bg-white hover:bg-[#CCAB4A] hover:text-white rounded-2xl pl-4 pr-2 flex items-center justify-between text-[#CCAB4A] font-bold w-[140px] h-[45px] transform transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 active:scale-95 shadow-md"
                >
                    <span className="pb-[2px] text-xl">Search</span>
                    <span
                        className="group-hover:bg-white arrowButton w-[30px] h-[30px] bg-[#CCAB4A] rounded-xl flex items-center justify-center transition duration-300"
                    >
                        <EastIcon className="text-white group-hover:text-[#CCAB4A] transition duration-300" fontSize="medium" />
                    </span>
                </button>
            </div>

        </>
    )
}

export default PrimaryFilters_ListingPage;
