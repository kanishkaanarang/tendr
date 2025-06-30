import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import ListingsNav from '../components/ListingsNav';

import logo from "../assets/logo2.png";
import user from "../assets/user.png";

import main1 from "../assets/vendor_details_main_1.avif";
import main2 from "../assets/vendor_details_main_2.avif";
import main3 from "../assets/vendor_details_main_3.avif";
import main4 from "../assets/vendor_details_main_4.avif";
import main5 from "../assets/vendor_details_main_5.avif";

import south_indian from "../assets/vendor_details_south_indian_catering.jpeg";
import north_indian from "../assets/vendor_details_north_indian_catering.jpeg";
import snacks from "../assets/vendor_details_snacks_catering.jpeg";
import beverage from "../assets/vendor_details_beverage_catering.jpeg";
import desert from "../assets/vendor_details_desert_catering.jpeg";
import live_counter from "../assets/vendor_details_live_counter_catering.jpeg";

const VendorDetailsPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const navigate = useNavigate();

  const selectedVendor = {
    name: "Luxe Experience",
    approved: true,
  };

  const filtersData = {
    guest: 100,
    location: "Jalandhar",
    date: "2025-05-10",
    time: "7:00 PM",
    foodType: "South Indian",
    decorTheme: "Royal",
  };

  return (
    <div className="w-full min-h-screen bg-[#F7F4EF] text-gray-800">

      {/* Navbar */}
      <div className="navbar bg-[#FDFAF0]">    {/* border-b-2 border-[#CCAB4A] */}
        <ListingsNav />
      </div>



      {/* Gallery */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-6 pt-6">
        <img
          src={main1}
          alt="Main 1"
          className={`h-[400px] w-full object-cover rounded-2xl transition-all duration-200 ${isLoaded ? "opacity-100" : "opacity-0"
            }`}
          onLoad={() => setIsLoaded(true)}
        />
        <div className="grid grid-cols-2 gap-2">
          {[main2, main3, main4, main5].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Gallery ${idx + 2}`}
              className={`h-[195px] w-full object-cover rounded-xl transition-all duration-200 ${isLoaded ? "opacity-100" : "opacity-0"
                }`}
              onLoad={() => setIsLoaded(true)}
            />
          ))}
        </div>
        <button
          className="col-span-full text-sm text-gray-600 hover:underline"
          onClick={() => setShowAllPhotos(!showAllPhotos)}
        >
          {showAllPhotos ? "Show less photos" : "Show all photos"}
        </button>
      </section>



      {/* Title and Booking Info */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6 py-8">
        <div className="lg:col-span-2 space-y-4">
          <h1 className="text-2xl font-bold">Vendor Name - Luxe Experience</h1>
          <p className="text-gray-600">Location: Jalandhar, Punjab</p>
          <div className="flex items-center text-sm text-yellow-600 font-semibold">
            ⭐ 4.9 (112 reviews)
          </div>
          <p className="text-sm text-gray-700">
            We offer premium services with a focus on quality and luxury.
            Whether it's a wedding, corporate event, or private celebration, our
            team ensures excellence in every detail.
          </p>
          <p className="text-sm text-gray-700">Response time: 1 hour</p>
        </div>



        {/* Booking + Message Preview */}
        <div className="bg-white p-5 rounded-2xl shadow-lg space-y-4 border border-yellow-400">
          <h2 className="text-xl font-semibold">Price to be updated</h2>
          <div className="text-sm text-gray-600">
            Event Location, Date & Time
          </div>

          {/* Message Preview */}
          <div className="bg-yellow-50 border border-yellow-200 text-sm p-3 rounded-xl whitespace-pre-line text-gray-800">
            {`Guest: ${filtersData.guest}
              Location: ${filtersData.location}
              Date: ${filtersData.date}
              Time: ${filtersData.time}
              Food Type: ${filtersData.foodType}
              Decor Theme: ${filtersData.decorTheme}
              Are you available?`}
          </div>

          {/* Chat Button */}
          <button
            onClick={() =>
              navigate("/chat", {
                state: {
                  vendor: selectedVendor,
                  filters: filtersData,
                },
              })
            }
            className="w-full px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-white rounded-xl text-sm font-semibold"
          >
            Chat with Vendor
          </button>

          {/* Pay Button */}
          <button
            onClick={() => alert("Redirect to payment")}
            className="w-full px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-white rounded-xl text-sm font-semibold"
          >
            Pay
          </button>
        </div>
      </section>



      {/* Specializes In */}
      <section className="px-6 pb-12">
        <h3 className="text-xl font-bold mb-4">Specializes In - Catering</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { title: "South Indian", img: south_indian },
            { title: "North Indian", img: north_indian },
            { title: "Snacks", img: snacks },
            { title: "Desserts", img: desert },
            { title: "Beverages", img: beverage },
            { title: "Live Counters", img: live_counter },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.title}
                className={`h-32 w-full object-cover transition-all duration-200 ${isLoaded ? "opacity-100" : "opacity-0"
                  }`}
                onLoad={() => setIsLoaded(true)}
              />
              <div className="p-3 text-center font-semibold text-sm text-gray-700">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </section>



    </div>
  );
};

export default VendorDetailsPage;
