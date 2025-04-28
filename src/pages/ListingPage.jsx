import React from 'react'

import NavUpper from '../components/NavUpper';


const ListingPage = () => {
  return (
    <>
      
      <div className="navbar bg-[#EBE7DE] border-b-2 border-[#CCAB4A]">
          <NavUpper/>
      </div>

      <div className="mainbody w-full h-[100vh] flex">

          <div className="left w-[35%] h-full bg-[#FDFAF0]">
            LEFT
          </div>

          <div className="right w-[65%] bg-white border-l-2 border-[#CCAB4A]">
            RIGHT
          </div>


      </div>

    </>
  )
}

export default ListingPage
