import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import ListingsNav from '../components/ListingsNav';
import PrimaryFilters_ListingPage from '../components/PrimaryFilters_ListingPage';
import SecondaryFilters_ListingPage from '../components/SecondaryFilters_ListingPage';

import WestIcon from '@mui/icons-material/West';
import VendorList_ListingPage from '../components/VendorList_ListingPage';

const ListingPage = () => {
  const navigate = useNavigate();

  return (
    <>

      <div className="navbar bg-[#EBE7DE] sticky top-0 z-50">    {/* border-b-2 border-[#CCAB4A] */}
        <ListingsNav />
      </div>




      <div className="mainbody w-full h-fit flex">




        <div className="left w-[30%] h-full bg-[#FDFAF0]">
          <div className="left_content p-2">

            <div className="back_btn">
              <button type="button" onClick={() => { navigate("/") }} className="arrowButton mr w-[45px] h-[45px] bg-[#CCAB4A] hover:bg-[#b89b3f] transition-all duration-200 rounded-full">
                <WestIcon className='text-white' fontSize="large" />
              </button>
            </div>

            <div className="primary_filter">
              <PrimaryFilters_ListingPage/>
            </div>

            <div className="secondary_filter">
              <SecondaryFilters_ListingPage/>
            </div>

          </div>
        </div>





        <div className="right w-[70%] bg-white border-l-2 border-[#CCAB4A]">
          <div className="right_content px-7 pt-6">

            {/* <div className="border-[1px] border-black h-[100vh]"> */}
              <VendorList_ListingPage/>
            {/* </div> */}

          </div>
        </div>




      </div>





      <div className="blackbox border-2 bg-emerald-400 border-black h-56 w-full"></div>

    </>
  )
}

export default ListingPage
