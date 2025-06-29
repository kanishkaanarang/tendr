import React, { useState, useEffect } from 'react'
import EastIcon from '@mui/icons-material/East';
import { useNavigate } from 'react-router-dom';
import Separator_FilterBar from './Separator_FilterBar';
const BASE_URL = "http://localhost:8080";

const FilterBar = () => {
    const navigate = useNavigate();

    const [eventType, setEventType] = useState("");
    const [date, setDate] = useState("");
    const [locationType, setLocationType] = useState("");
    const [serviceType, setServiceType] = useState('');
    const [guestCount, setGuestCount] = useState(0);

    const [activeDropdown, setactiveDropdown] = useState(null)

    const eventOptions = ['Get-together', 'Birthday', 'Office Party', 'Concert', 'Anniversary', 'Pre Wedding', 'Rituals', 'Festival', 'Others'];
    const locationOptions = ['Delhi', 'Noida', 'Greater Noida', 'Gurugram', 'Ghaziabad'];
    const serviceOptions = ['Decorator', 'Entertainment', 'Catering', 'Photographer'];

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

    const handleSearch = () => {
        console.log("Navigating with selected filter values:", {
            eventType,
            serviceType,
            date,
            locationType,
            guestCount
        });

        navigate('/listings', {
            state: {
                eventType,
                serviceType,
                date,
                locationType,
                guestCount
            }
        });
    };

    return (
        <form>

            <div className="bardiv flex justify-center">

                <div className="bar w-[1200px] h-[66px] bg-white rounded-full flex justify-between items-center ring-[1px] ring-[#CCAB4A] shadow-[0_2px_10px_rgba(0,0,0,0.25)]">

                    <div className="flex w-full h-full justify-between">



                        {/* Event Type */}
                        <div className="event p-3 pl-12 flex flex-col text-sm rounded-full w-[200px] hover:bg-[#ffe69e4a] relative">
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
                                            onClick={() => handleOptionClickEvent(option)}
                                            className={`cursor-pointer text-lg p-3 pl-10 pr-10 ml-5 mr-5 mt-2 rounded-full font-medium text-black ${eventType === option ? 'bg-[#ffe69e]' : 'hover:bg-[#ffe79e45]'}`}
                                        >
                                            {option}
                                        </div>
                                    }
                                    )}
                                </div>
                            }

                        </div>



                        <Separator_FilterBar />



                        {/* Service Type */}
                        <div className="service p-3 pl-5 flex flex-col text-sm rounded-full w-[200px] hover:bg-[#ffe69e4a] relative">
                            <label className='font-semibold text-[16px] cursor-pointer' onClick={() => { setactiveDropdown("service") }}>Service Type</label>
                            <input
                                type="text"
                                className='font-bold text-[#CCAB4A] placeholder-[#CCAB4A] placeholder:font-medium outline-none bg-transparent pl-[1px] cursor-pointer w-full'
                                value={serviceType}
                                onChange={(e) => setServiceType(e.target.value)}
                                onClick={() => { setactiveDropdown("service") }}
                                placeholder="Select service"
                                readOnly
                            />

                            {activeDropdown === "service" &&
                                <div className="dropdown-wrapper absolute left-0 top-[75px] w-[350px] h-[250px] bg-white rounded-3xl z-30 shadow-[0_2px_10px_rgba(0,0,0,0.25)] overflow-y-auto">
                                    {serviceOptions.map((option, index) => {
                                        return <div
                                            key={index}
                                            onClick={() => handleOptionClickService(option)}
                                            className={`cursor-pointer text-lg p-3 pl-10 pr-10 ml-5 mr-5 mt-2 rounded-full font-medium text-black ${serviceType === option ? 'bg-[#ffe69e]' : 'hover:bg-[#ffe79e45]'}`}
                                        >
                                            {option}
                                        </div>
                                    }
                                    )}
                                </div>
                            }
                        </div>



                        <Separator_FilterBar />



                        {/* Date */}
                        <div className="date p-3 pl-5 flex flex-col text-sm rounded-full w-[180px] hover:bg-[#ffe69e4a] relative">
                            <label
                                className='font-semibold text-[16px] cursor-pointer'
                                onClick={() => setactiveDropdown("date")}
                            >
                                Date
                            </label>
                            <input
                                type="text"
                                className='font-bold text-[#CCAB4A] placeholder-[#CCAB4A] placeholder:font-medium outline-none bg-transparent cursor-pointer'
                                value={date}
                                onClick={() => setactiveDropdown("date")}
                                placeholder="Add date"
                                readOnly
                            />

                            {activeDropdown === "date" && (
                                <div className="dropdown-wrapper absolute left-0 top-[75px] bg-white rounded-3xl z-30 shadow-[0_2px_10px_rgba(0,0,0,0.25)] p-5 ">
                                    <input
                                        type="date"
                                        className="text-[#CCAB4A] text-md font-semibold cursor-pointer"
                                        onChange={(e) => {
                                            setDate(e.target.value);
                                            setactiveDropdown(null);
                                        }}
                                    />
                                </div>
                            )}

                        </div>



                        <Separator_FilterBar />



                        {/* Location */}
                        <div className="location p-3 pl-5 flex flex-col text-sm rounded-full w-[200px] hover:bg-[#ffe69e4a] relative">
                            <label
                                className='font-semibold text-[16px] cursor-pointer'
                                onClick={() => setactiveDropdown("location")}
                            >
                                Location
                            </label>
                            <input
                                type="text"
                                className='font-bold text-[#CCAB4A] placeholder-[#CCAB4A] placeholder:font-medium outline-none bg-transparent cursor-pointer'
                                value={locationType}
                                onChange={(e) => setLocationType(e.target.value)}
                                onClick={() => setactiveDropdown("location")}
                                placeholder="Add location"
                                readOnly
                            />

                            {activeDropdown === "location" &&
                                <div className="dropdown-wrapper absolute left-0 top-[75px] w-[350px] h-[250px] bg-white rounded-3xl z-30 shadow-[0_2px_10px_rgba(0,0,0,0.25)] overflow-y-auto">
                                    {locationOptions.map((option, index) => {
                                        return <div
                                            key={index}
                                            onClick={() => handleOptionClickLocation(option)}
                                            className={`cursor-pointer text-lg p-3 pl-10 pr-10 ml-5 mr-5 mt-2 rounded-full font-medium text-black ${locationType === option ? 'bg-[#ffe69e]' : 'hover:bg-[#ffe79e45]'}`}
                                        >
                                            {option}
                                        </div>
                                    }
                                    )}
                                </div>
                            }


                        </div>



                        <Separator_FilterBar />



                        {/* Guest Count */}
                        <div className="guests p-3 pl-5 text-sm flex flex-col justify-center rounded-full w-[180px] hover:bg-[#ffe69e4a] relative cursor-pointer" onClick={() => setactiveDropdown("guests")}>
                            <span className='font-semibold text-[16px]'>Guests</span>
                            <span className={`${guestCount > 0 ? 'font-bold' : 'font-medium'} text-[#CCAB4A]`}>
                                {guestCount > 0 ? `${guestCount} Guest${guestCount > 1 ? "s" : ""}` : "Number of guests"}
                            </span>

                            {activeDropdown === "guests" && (
                                <div className="dropdown-wrapper absolute left-0 top-[75px] bg-white rounded-3xl z-30 shadow-[0_2px_10px_rgba(0,0,0,0.25)] p-5 w-[220px]">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[#CCAB4A] font-semibold text-md">Guest count</span>
                                        <div className="flex items-center space-x-3">
                                            <button type="button" onClick={(e) => { e.stopPropagation(); setGuestCount(prev => Math.max(prev - 1, 0)); }} className="text-xl w-8 h-8 bg-[#ffe69e] rounded-full">-</button>
                                            <span className="font-bold">{guestCount}</span>
                                            <button type="button" onClick={(e) => { e.stopPropagation(); setGuestCount(prev => prev + 1); }} className="text-xl w-8 h-8 bg-[#ffe69e] rounded-full">+</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>



                        {/* Btn Search arrow */}
                        <div className="search_btn flex justify-center items-center ml-4 mr-4">
                            <button
                                type="button"
                                onClick={() => handleSearch()}
                                className="arrowButton w-[45px] h-[45px] bg-[#CCAB4A] rounded-full transform transition-transform duration-300 hover:scale-110 active:bg-[#b28f3e]"
                            >
                                <EastIcon className='text-white' fontSize="large" />
                            </button>
                        </div>



                    </div>

                </div>

            </div>

        </form>
    )
}

export default FilterBar
