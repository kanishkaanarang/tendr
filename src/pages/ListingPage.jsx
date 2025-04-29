import React from 'react'

import ListingsNav from '../components/ListingsNav';


const ListingPage = () => {
  return (
    <>
      
      <div className="navbar bg-[#EBE7DE] sticky top-0 border-b-2 border-[#CCAB4A]">
          <ListingsNav/>
      </div>

      <div className="mainbody w-full h-[200vh] flex">

          <div className="left w-[30%] h-full bg-[#FDFAF0]">
            LEFT
          </div>

          <div className="right w-[70%] bg-white border-l-2 border-[#CCAB4A]">
            RIGHT
          </div>


      </div>

    </>
  )
}

export default ListingPage
