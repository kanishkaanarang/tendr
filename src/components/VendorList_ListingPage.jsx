import React from "react";
import { useNavigate } from "react-router-dom";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";

import DummyPhoto from "../assets/GrayDummyPhoto.jpg";

const VendorList_ListingPage = ({
  eventType,
  serviceType,
  date,
  locationType,
  guestCount,
  vendors = [],
  paginationInfo = {},
  currentPage = 1,
  handleShowMore,
  isLoading,
  sortBy,
  sortOrder,
  setSortBy,
  setSortOrder,
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="header flex justify-between">
        <div className="leftside leading-7 ml-3">
          <div className="text-sm font-semibold">Top picks for</div>
          <div className="text-[25px] font-bold">
            <span>{eventType}</span>, <span>{serviceType}</span>,{" "}
            <span>{locationType}</span>, <span>{date}</span>,{" "}
            <span>{guestCount} guests</span>
          </div>
        </div>

        <div className="rightside mt-1 flex gap-2 items-center">
          <label className="text-sm font-semibold">Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-full border px-4 py-1 text-sm border-[#CCAB4A] bg-white shadow-md"
          >
            <option value="rankingScore">Best Match</option>
            <option value="rating">Rating</option>
            <option value="price">Price</option>
            <option value="experience">Experience</option>
          </select>

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="rounded-full border px-4 py-1 text-sm border-[#CCAB4A] bg-white shadow-md"
          >
            <option value="desc">High to Low</option>
            <option value="asc">Low to High</option>
          </select>
        </div>
      </div>

      {/* Vendor Cards */}
      <div className="vendorcards grid grid-cols-2 gap-y-[30px] gap-x-[30px] mt-5 w-fit mx-auto">
        {vendors.length > 0
          ? vendors.map((vendor) => (
              <div
                key={vendor.id}
                onClick={() =>
                  navigate("/VendorDetails", { state: { vendor } })
                }
                className="p-4 border-[1px] border-gray-200 hover:border-[#CCAB4A] rounded-[18px] shadow-md w-[520px] h-[260px] cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1"
              >
                <div className="h-full flex justify-between">
                  {/* Image */}
                  <div className="h-full">
                    <img
                      src={vendor.image || DummyPhoto}
                      alt={vendor.name}
                      className="w-[210px] h-full rounded-[18px] object-cover"
                    />
                  </div>

                  {/* Right Text */}
                  <div className="my-1 flex flex-col justify-between flex-1 pl-4">
                    {/* Top Section */}
                    <div className="space-y-4">
                      <div>
                        <div className="font-semibold text-2xl">
                          {vendor.name}
                        </div>
                        <div className="text-gray-700">{vendor.location}</div>
                      </div>
                      <div className="text-[#CCAB4A] text-sm space-y-1">
                        {(vendor.expertise?.length > 0
                          ? vendor.expertise
                          : [
                              "On-Site Chef",
                              "Vegan Option",
                              "Customizable Menu",
                            ]
                        ).map((item, i) => (
                          <div key={i}>{item}</div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="flex justify-between items-end">
                      {/* Ratings */}
                      <div className="flex items-center">
                        <StarRateRoundedIcon />
                        <div className="flex gap-1 items-center">
                          <div className="font-semibold text-lg">
                            {vendor.rating ?? "-"}
                          </div>
                          <div className="text-lg text-gray-600">
                            ({vendor.number_of_reviews ?? 0})
                          </div>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="mb-1.5 text-right">
                        <div className="text-xs leading-5 text-gray-500">
                          Starts at
                        </div>
                        <div className="font-semibold text-2xl leading-5">
                          ₹{vendor.price ?? "-"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : !isLoading && (
              <div className="col-span-2 text-center text-gray-600 mt-10 text-lg">
                No vendors found for selected filters.
              </div>
            )}
      </div>

      {/* Show More */}
      {paginationInfo?.totalPages > currentPage && (
        <div className="flex justify-center mt-7 mb-10">
          <button
            type="button"
            onClick={handleShowMore}
            disabled={isLoading}
            className={`rounded-full shadow-md px-6 py-2 font-semibold border-[1px] border-[#CCAB4A] transition-colors duration-300 ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Loading..." : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default VendorList_ListingPage;
