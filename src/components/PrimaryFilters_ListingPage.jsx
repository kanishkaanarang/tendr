import React, { useState, useEffect } from 'react'

import ClearIcon from '@mui/icons-material/Clear';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EastIcon from '@mui/icons-material/East';

const BASE_URL = "http://localhost:8080";



const PrimaryFilters_ListingPage = () => {

    const [eventType, setEventType] = useState("");
    const [locationType, setLocationType] = useState("");
    const [date, setDate] = useState("");
    const [guestCount, setGuestCount] = useState(0);

    const eventOptions = ['Wedding', 'Birthday Party', 'Corporate Event', 'Concert'];
    const locationOptions = ['Delhi', 'Bengaluru', 'Chennai', 'Mumbai'];

    const [activeDropdown, setactiveDropdown] = useState(null)

    const handleOptionClickEvent = (option) => {
        setEventType(option);
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

    const handleSearch = async () => {
        console.log("Sending filter bar data selected by user:", { eventType, date, locationType, guestCount });
        try {
            const response = await fetch(`${BASE_URL}/api/filter`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    eventType,
                    date,
                    locationType,
                    guestCount
                })
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            console.log('Filter data sent successfully:', data);

            // Navigate after successful submission
            navigate("/SecondPage");

        } catch (error) {
            console.error("Error sending filter data:", error);
        }
    };

    return (
        <>
            <div className="primary_heading ml-12 mt-5 font-bold text-2xl">Event Details</div>

            <div className="primary_filter_options flex flex-col gap-2 mt-4 ml-12">

                {/* Event Type */}
                <div className="event  flex flex-col text-sm w-[85%] relative">
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

                {/* Date */}
                <div className="date  flex flex-col text-sm w-[85%] relative">
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
                <div className="location  flex flex-col text-sm w-[85%] relative">
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
                <div className="guest  flex flex-col text-sm w-[85%] relative">
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
            <div className="search_btn text-center mt-6">
                <button onClick={handleSearch} className="w-[50%] bg-[#CCAB4A] hover:bg-[#b89b3f] text-white py-1.5 rounded-full shadow-md transition-all duration-200">
                    <div className='w-full flex gap-3 justify-center items-center'>
                        <span className='text-xl font-bold'>Search</span>
                        <EastIcon fontSize="large"/>
                    </div>
                </button>
            </div>
        </>
    )
}

export default PrimaryFilters_ListingPage
