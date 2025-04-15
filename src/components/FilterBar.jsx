import React from 'react'
import EastIcon from '@mui/icons-material/East';
import { useNavigate } from 'react-router-dom';

const FilterBar = () => {
    const navigate = useNavigate();
    return (
        <form>
            <div className="bardiv flex justify-center">
                <div className="bar w-[950px] h-[66px] bg-white rounded-full flex justify-between items-center">

                    <div className="text flex">

                        <div className="event p-3 pl-10 flex flex-col text-sm pr-24 gap-0.5">
                            <span className='font-semibold text-[16px]'>Event Type</span>
                            <span className='font-medium text-[#CCAB4A]'>Select events</span>
                        </div>

                        <div className='bg-[#CCAB4A] mt-2 mb-2 w-[1px] ml-5 mr-5'></div>

                        <div className="date p-3 pl-2 flex flex-col text-sm pr-12 gap-0.5">
                            <span className='font-semibold text-[16px]'>Date</span>
                            <span className='font-medium text-[#CCAB4A]'>Add dates</span>
                        </div>

                        <div className='bg-[#CCAB4A] mt-2 mb-2 w-[1px] ml-5 mr-5'></div>

                        <div className="location p-3 pl-2 flex flex-col text-sm pr-12 gap-0.5">
                            <span className='font-semibold text-[16px]'>Location</span>
                            <span className='font-medium text-[#CCAB4A]'>Add location</span>
                        </div>

                        <div className='bg-[#CCAB4A] mt-2 mb-2 w-[1px] ml-5 mr-5'></div>

                        <div className="guests p-3 pl-2 flex flex-col text-sm pr-12 gap-0.5">
                            <span className='font-semibold text-[16px]'>Guests</span>
                            <span className='font-medium text-[#CCAB4A]'>Number of guests</span>
                        </div>

                    </div>


                    <div className="search_btn flex justify-center items-center">
                        <button type="button" onClick={() => { navigate("/SecondPage") }} className="arrowButton mr-3 w-[45px] h-[45px] bg-[#CCAB4A] rounded-full">
                            <EastIcon className='text-white' fontSize="large" />
                        </button>
                        {/*The above needs to be filled */}
                    </div>

                </div>
            </div>
        </form>
    )
}

export default FilterBar
