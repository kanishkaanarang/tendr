import React from 'react'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



const VendorList_ListingPage = () => {

    const vendors = [
        { id: 1, name: 'Vendor 1', location: 'Location 1' },
        { id: 2, name: 'Vendor 2', location: 'Location 2' },
        { id: 3, name: 'Vendor 3', location: 'Location 3' },
        { id: 4, name: 'Vendor 4', location: 'Location 4' },
        { id: 5, name: 'Vendor 5', location: 'Location 5' },
        { id: 6, name: 'Vendor 6', location: 'Location 6' },
    ];


    return (
        <>

            <div className="header flex justify-between">
                <div className="leftside leading-7">
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
                <div className="rightside">
                    <button type="button" className='rounded-full shadow-md px-3 py-2 font-semibold flex gap-1.5 ring-2 ring-red-600'>
                        <span>Sort by</span>
                        <KeyboardArrowDownIcon />
                    </button>
                </div>
            </div>

            <div className="vendorlist grid grid-cols-2 gap-y-[30px] gap-x-[30px] border-2 border-yellow-600 my-7 w-fit mx-auto">
                {vendors.map((vendor) => (
                    <div key={vendor.id} className="p-4 border border-gray-200 rounded-lg shadow-md w-[500px] h-[255px]">
                        <h3 className="font-bold text-lg">{vendor.name}</h3>
                        <p>{vendor.location}</p>
                    </div>
                ))}
            </div>




        </>
    )
}

export default VendorList_ListingPage
