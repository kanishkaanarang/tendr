import React from 'react'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

import DummyPhoto from "../assets/GrayDummyPhoto.jpg";



const VendorList_ListingPage = () => {

    const vendors = [
        { id: 1, name: 'Vendor 1', location: "Chennai", image: DummyPhoto, rating: 4.1, number_of_reviews: 49, price: "11,999" },
        { id: 2, name: 'Vendor 2', location: "Mumbai", image: DummyPhoto, rating: 4.6, number_of_reviews: 13, price: "43,999" },
        { id: 3, name: 'Vendor 3', location: "Bengaluru", image: DummyPhoto, rating: 3.9, number_of_reviews: 12, price: "5,599" },
        { id: 4, name: 'Vendor 4', location: "Kochi", image: DummyPhoto, rating: 4.1, number_of_reviews: 34, price: "7,199" },
        { id: 5, name: 'Vendor 5', location: "Mumbai", image: DummyPhoto, rating: 4.7, number_of_reviews: 67, price: "14,999" },
        { id: 6, name: 'Vendor 6', location: "Delhi", image: DummyPhoto, rating: 4.4, number_of_reviews: 26, price: "17,999" },
        { id: 7, name: 'Vendor 7', location: "Kochi", image: DummyPhoto, rating: 4.5, number_of_reviews: 32, price: "8,999" },
        { id: 8, name: 'Vendor 8', location: "Bengaluru", image: DummyPhoto, rating: 4.9, number_of_reviews: 24, price: "12,999" }
    ];


    return (
        <>

            <div className="flex flex-col h-full">

                <div className="first">

                    <div className="header flex justify-between">

                        <div className="leftside leading-7 ">
                            <div className="smaller_text text-sm font-semibold">Top picks for</div>
                            <div className="larger_text text-[25px] font-bold">
                                <span className="location">Kochi</span>
                                <span>, </span>
                                <span className="service">Birthday</span>
                                <span>, </span>
                                <span className="date">15 July</span>
                                <span>, </span>
                                <span className="guest">12 guests</span>
                            </div>
                        </div>

                        <div className="rightside mt-1">
                            <button type="button" className='rounded-full shadow-md px-5 py-2 font-semibold flex border-[1px] border-[#CCAB4A] transition-colors duration-300'>
                                <span>Sort by</span>
                                <KeyboardArrowDownIcon />
                            </button>
                        </div>

                    </div>

                    <div className="vendorcards grid grid-cols-2 gap-y-[30px] gap-x-[30px] mt-5 w-fit mx-auto">
                        {vendors.map((vendor) => (
                            <div key={vendor.id} className="p-4 border-[1px] border-gray-200 hover:border-[#CCAB4A] rounded-[18px] shadow-md w-[520px] h-[260px] cursor-pointer transition-colors duration-300">
                                <div className=" border-black h-full flex justify-between">

                                    <div className="img h-full">
                                        <img src={vendor.image} alt="" srcset="" className='w-[210px] h-full rounded-[18px]' />
                                    </div>

                                    <div className="right_text my-1 flex flex-col justify-between flex-1 pl-4">

                                        <div className="uppertext space-y-4">
                                            <div className="first">
                                                <div className="vendor_name font-semibold text-2xl">{vendor.name}</div>
                                                <div className="vendor_location">{vendor.location}</div>
                                            </div>
                                            <div className="vendor_expertise text-[#CCAB4A] text-sm">
                                                <div className="first">On-Site Chef</div>
                                                <div className="second">Vegan Option</div>
                                                <div className="third">Customizable Menu</div>
                                            </div>
                                        </div>

                                        <div className="lowertext flex justify-between items-end">
                                            <div className="ratings flex items-center">
                                                <StarRateRoundedIcon />
                                                <div className="right flex gap-1 items-center">
                                                    <div className="rating_text font-semibold text-lg">{vendor.rating}</div>
                                                    <div className="number_of_reviews text-lg">{"("}{vendor.number_of_reviews}{")"}</div>
                                                </div>
                                            </div>
                                            <div className="price mb-1.5">
                                                <div className="top text-xs leading-5">Starts at</div>
                                                <div className="bottom font-semibold text-2xl leading-5">{"₹"}{vendor.price}</div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                <div className="second show_more flex-1 flex items-center justify-center">
                    <button type="button" className='rounded-full shadow-md px-6 py-2 font-semibold border-[1px] border-[#CCAB4A] transition-colors duration-300'>Show More</button>
                </div>

            </div>

        </>
    )
}

export default VendorList_ListingPage
