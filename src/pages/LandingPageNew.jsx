import React, { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom';

import HeroSection_LandingPage from '../components/HeroSection_LandingPage';

import EastIcon from '@mui/icons-material/East';

import BadgeIcon from '@mui/icons-material/Badge';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import VerifiedIcon from '@mui/icons-material/Verified';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


import LandingPage2 from "../assets/LandingPage2.jpg";

import Catering from "../assets/LandingPageCatering.jpg";
import Entertainment from "../assets/LandingPageEntertainment.jpg";
import Decorator from "../assets/LandingPageDecorator.jpg";
import Photographer from "../assets/LandingPagePhotographer.jpg";

import NotSure from "../assets/LandingPageNotSure.jpg";
import VendorNetwork from "../assets/LandingPageVendorNetwork.jpg";



// ARRAY CONTAINING FAQ QUESTION AND ANSWERS
const ques_ans = [
    {
        key: 1,
        question: "How does this platform work?",
        answer: "We help you book everything you need for a house party or corporate event — from caterers and decorators to artists and venues. Just choose your service, chat with the vendor, and book in a few clicks."
    },
    {
        key: 2,
        question: "Is your platform for individuals or companies?",
        answer: "Both! We serve house parties, birthdays, weekend get-togethers, and also cater to offices for team outings, festive events, and internal functions."
    },
    {
        key: 3,
        question: "How do I book a service?",
        answer: "Simply click on a vendor or package, start a chat to finalize details, and pay 40% upfront to confirm. The rest can be paid closer to the event"
    },
    {
        key: 4,
        question: "What if I need help during the event?",
        answer: "Every booking comes with a dedicated team member from our side to assist you before and during the event. You're never alone!"
    }
];



// ARRAY CONTAINING OBJECTS OF RECOMMENDED VENDORS IMAGES AND LABEL
const recommended_arr = [
    { src: Catering, label: "Catering" },
    { src: Entertainment, label: "Entertainment" },
    { src: Decorator, label: "Decorator" },
    { src: Photographer, label: "Photographer" }
]



//UPDATE QUESTIONS PART AND ADD SHOW MORE
//MAKE ALL THE BUTTONS AND CLICKABLE THINGS WORK
//FILTER BAR DROPDOWN IMPROVE, ADD ICONS AND STUFF AND UPDATE DATE DROPDOWN TOO
//FONTS CHANGE
//IMRPOVE IMAGE QUALITY FOR EACH IMAGE CHANGE PARAMETERS SUCH AS SATURATION, CONTRAST, ETC
//ADD SERVICE NAME,CURSOR-POINTER,ZOOM AND MOVE UP A BIT EFFECT EFFECT IN RECOMMEND VENDORS
//DELETE OLD LANDING PAGE, COMPONENTS AND IMAGES ASSOCIATED WITH IT
//MAKE IT RESPONSIVE
//WORK DURATION OF SLOGAN BANNER AND MAKE IT SUCH THAT TEXT DONT OVERFLOW IT
//WORK ON TEXT ABOVE GROUP BOOKING OPTION
//ADD BUTTON TO GO UP AND IF POSSIBLE ALSO TO GO DOWN LIKE IN MOST WEBSITES IN THE RIGHT CORENER OF THE SCREEN LIKE IN SPOTIFY
//MAKE SIGN IN AND SIGN UP BUTTON AS SUCH THAT WHEN PRESSED IT SHRINKS A LITTLE BIT
//ASK FOR SVG VERSION OF LOGO OF THE SITE



const LandingPageNew = () => {
    const navigate = useNavigate();

    const [activeQuestion, setactiveQuestion] = useState(null)

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest(".questions-answers-main")) {
                setactiveQuestion(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <>
            <div className='h-fit'>



                {/* HERO SECTION PART */}
                <HeroSection_LandingPage />



                {/* SLOGAN BANNER */}
                <div className="slogan_banner group my-24 mx-4 md:mx-16 h-[422px] rounded-[80px] flex items-center justify-center text-center bg-center bg-cover cursor-pointer transition-transform duration-500 ease-in-out hover:scale-105 overflow-hidden"
                    style={{
                        backgroundImage: `url(${LandingPage2})`,
                        backgroundSize: '100%',
                    }}
                >

                    <div
                        className="text-white font-bold text-4xl md:text-6xl lg:text-[120px] transition-transform duration-00 ease-in-out group-hover:-translate-y-2 group-hover:scale-110"
                        style={{ WebkitTextStroke: '1px #CCAB4A' }}
                    >
                        “We Curate You Celebrate”
                    </div>
                </div>



                {/* RECOMMENDED VENDORS */}
                <div className="recommendedvendors my-24">
                    <div className="heading mx-16 my-12 text-5xl font-bold underline text-[#CCAB4A]">
                        RECOMMENDED VENDORS
                    </div>
                    <div className="content_box mx-40 grid grid-cols-2 gap-10">
                        {recommended_arr.map((item, index) => (
                            <div
                                key={index}
                                className="relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out hover:scale-105 hover:rounded-[50px]"
                            >
                                <img
                                    src={item.src}
                                    alt={item.label}
                                    className="w-full h-[400px] object-cover transition-all duration-500 ease-in-out"
                                />
                                <div className="label_btn absolute bottom-4 left-0 right-0 mx-auto w-fit group cursor-pointer bg-white text-[#D48060] hover:bg-[#D48060] hover:text-white font-bold text-lg rounded-2xl h-[40px] px-5 pl-4 pr-2 flex items-center justify-between transform transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 hover:-translate-y-1">
                                    <span className="pb-[2px]">{item.label}</span>
                                    <span
                                        // onClick={() => handleSearch()}
                                        className="arrowButton ml-2 w-[30px] h-[30px] bg-[#D48060] group-hover:bg-white rounded-xl flex items-center justify-center transition duration-300"
                                    >
                                        <EastIcon className="text-white group-hover:text-[#D48060] transition duration-300" fontSize="medium" />
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>



                {/* WHY YOU WILL LOVE US */}
                <div className="why_love_us my-24 mx-16 h-[480px] bg-[#FFD3C3] rounded-[80px] flex flex-col gap-14 items-center cursor-pointer transition-transform duration-700 ease-in-out hover:scale-105">

                    <div className="first text-[85px] font-extrabold mt-14 text-[#D48060] hover:text-white duration-300">
                        Why you'll love us!
                    </div>

                    <div className="second flex gap-20 mx-16">

                        <div className="verified group flex flex-col items-center h-[170px] justify-evenly cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-1">
                            <BadgeIcon className="text-[#D48060] group-hover:text-white transition-colors duration-300" sx={{ fontSize: 60 }} />
                            <span className='text-xl font-bold text-[#D48060] group-hover:text-white transition-colors duration-300'>Verified Vendors</span>
                        </div>

                        <div className="secure group flex flex-col items-center h-[170px] justify-evenly cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-1">
                            <CreditScoreIcon className="text-[#D48060] group-hover:text-white transition-colors duration-300" sx={{ fontSize: 60 }} />
                            <span className='text-xl font-bold text-[#D48060] group-hover:text-white transition-colors duration-300'>Secure Payment</span>
                        </div>

                        <div className="quality group flex flex-col items-center h-[170px] justify-evenly cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-1">
                            <VerifiedIcon className="text-[#D48060] group-hover:text-white transition-colors duration-300" sx={{ fontSize: 60 }} />
                            <span className='text-xl font-bold text-[#D48060] group-hover:text-white transition-colors duration-300'>Quality Assurance</span>
                        </div>

                        <div className="assitance group flex flex-col items-center h-[170px] justify-evenly cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-1">
                            <SupervisedUserCircleIcon className="text-[#D48060] group-hover:text-white transition-colors duration-300" sx={{ fontSize: 60 }} />
                            <span className='text-xl font-bold text-[#D48060] group-hover:text-white transition-colors duration-300'>Event Planning Assistance</span>
                        </div>

                        <div className="discounts group flex flex-col items-center h-[170px] justify-evenly cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-1">
                            <LocalOfferIcon className="text-[#D48060] group-hover:text-white transition-colors duration-300" sx={{ fontSize: 60 }} />
                            <span className='text-xl font-bold text-[#D48060] group-hover:text-white transition-colors duration-300'>Seasonal Discounts</span>
                        </div>

                    </div>

                </div>



                {/* NOT SURE BOX */}
                <div className="not_sure mx-16 my-24 flex justify-center gap-20">

                    <div
                        className="left cursor-pointer h-[520px] w-[520px] rounded-[40px] bg-[#FFD3C3] my-2 bg-cover transition-transform duration-500 ease-in-out hover:-translate-y-3"
                        style={{ backgroundImage: `url(${NotSure})`, backgroundSize: '100%' }}
                    ></div>

                    <div
                        className="right cursor-pointer h-[520px] w-[520px] rounded-[40px] bg-[#FFD3C3] my-2 flex flex-col gap-12 pt-16 pb-16 px-6 text-center transition-transform duration-500 ease-in-out hover:-translate-y-3"
                    >

                        <span className="text-6xl font-extrabold text-[#D48060]">Not Sure Where to begin?</span>

                        <span className="text-2xl font-bold text-[#D48060]">
                            Don't worry — we've got you. <br /> Our dedicated company representative will be with you from start to finish — helping you plan, coordinating with vendors and making sure your entire event goes off without a hitch.
                        </span>

                    </div>

                </div>



                {/* JOIN VENDOR NETWORK BOX */}
                <div className="vendornetwork my-24 mx-16 flex justify-center gap-20">

                    <div
                        className="left cursor-pointer h-[620px] w-[520px] rounded-[40px] bg-[#FFD3C3] my-2 flex flex-col gap-6 pt-16 pb-16 px-6 text-center transition-transform duration-500 ease-in-out hover:-translate-y-3"
                    >

                        <span className="text-6xl font-extrabold text-[#D48060]">Grow Your Event Business</span>

                        <span className="text-2xl font-bold text-[#D48060] mt-4">
                            Expand your reach and attract more clients by showcasing your event services on our platform.
                            Get discovered, receive bookings, and grow your business—all in one convenient place.
                        </span>

                        <span className="text-4xl font-extrabold text-[#D48060] pt-10">Join us Today!</span>

                        <div className="btn flex justify-center">

                            <button
                                type="button"
                                onClick={() => { navigate("") }}
                                className="group cursor-pointer bg-white hover:bg-[#D48060] hover:text-white rounded-2xl pl-4 pr-2 flex items-center justify-between text-[#D48060] font-bold w-[240px] h-[45px] transform transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 active:scale-95"
                            >

                                <span className="pb-[2px] text-lg">BECOME A PARTNER</span>

                                <span
                                    type="button"
                                    // onClick={() => handleSearch()}
                                    className="group-hover:bg-white arrowButton w-[30px] h-[30px] bg-[#D48060] rounded-xl flex items-center justify-center transition duration-300"
                                >
                                    <EastIcon className="text-white group-hover:text-[#D48060] transition duration-300" fontSize="medium" />
                                </span>

                            </button>

                        </div>

                    </div>

                    <div
                        className="right cursor-pointer h-[620px] w-[520px] rounded-[40px] bg-[#FFD3C3] my-2 transition-transform duration-500 ease-in-out hover:-translate-y-3"
                        style={{ backgroundImage: `url(${VendorNetwork})`, backgroundSize: '100%' }}
                    ></div>

                </div>



                {/* FAQ QUESTIONS AND ANSWERS */}
                <div className="questions-answers my-24">
                    <div className="heading mx-16 my-12 text-5xl font-bold underline text-[#CCAB4A]">
                        QUESTIONS? ANSWERED!
                    </div>
                    <div className="bigger_box flex flex-col items-center">
                        <div className="questions-answers-main w-[80%] mx-20">

                            {ques_ans.map((item) => (
                                <div key={item.key} className="map_div pb-7">

                                    {/* QUESTION */}

                                    <div
                                        className="flex flex-col justify-center cursor-pointer"
                                        onClick={() =>
                                            setactiveQuestion((prev) => (prev === item.key ? null : item.key))
                                        }
                                    >
                                        <div
                                            className="ques bg-[#FFD3C3] hover:bg-[#fbbfa7] transition-colors duration-300 h-[90px] rounded-[30px] flex items-center justify-between px-10"
                                        >
                                            <span className="ques text-2xl font-bold text-[#D48060]">
                                                {item.question}
                                            </span>
                                            {activeQuestion !== item.key && (
                                                <AddIcon
                                                    className="text-[#D48060] transition-transform duration-300"
                                                    sx={{ fontSize: 50 }}
                                                />
                                            )}
                                            {activeQuestion === item.key && (
                                                <ClearIcon
                                                    className="text-[#D48060] transition-transform duration-300 rotate-180"
                                                    sx={{ fontSize: 50 }}
                                                />
                                            )}
                                        </div>
                                    </div>

                                    {/* ANSWER */}
                                    <div
                                        className={`transition-all duration-500 ease-in-out overflow-hidden ${activeQuestion === item.key ? 'max-h-[500px] opacity-100 mt-[3px]' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <div className="bg-[#FFD3C3] px-10 py-5 rounded-[30px]">
                                            <span className="ques text-2xl font-bold text-[#D48060]">
                                                {item.answer}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>



                {/* FOOTER PART */}
                <div className="footer h-fit pt-20 pb-5 bg-[#FFD3C3] text-[#D48060] rounded-t-[80px] transition-colors duration-300">

                    <div className="top mx-20 flex justify-between">

                        {/* Left Section */}
                        <div className="left flex flex-col gap-16">
                            <div className="top text-[45px] font-bold">tendr</div>

                            <div className="bottom flex flex-col gap-3">
                                <div className="first text-2xl font-semibold">Follow us on :-</div>

                                <div className="second flex gap-5">
                                    <div className="group cursor-pointer transition-colors duration-300">
                                        <LinkedInIcon className="text-black group-hover:text-white" sx={{ fontSize: 40 }} />
                                    </div>
                                    <div className="group cursor-pointer transition-colors duration-300">
                                        <InstagramIcon className="text-black group-hover:text-white" sx={{ fontSize: 40 }} />
                                    </div>
                                    <div className="group cursor-pointer transition-colors duration-300">
                                        <FacebookIcon className="text-black group-hover:text-white" sx={{ fontSize: 40 }} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="right mt-4 font-bold text-[24px] flex flex-col gap-2">
                            {["Support", "Help Center", "Vendor Support", "Vendor", "Get in touch"].map((text, index) => (
                                <div key={index} className="group cursor-pointer transition-colors duration-300 hover:text-white">
                                    {text}
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* Big tendr text in center */}
                    <div className="relative overflow-hidden">
                        <div className="center mx-20 text-[380px] font-bold text-center leading-none">tendr</div>
                    </div>

                    {/* Bottom row */}
                    <div className="bottom mx-12 text-xl font-bold flex justify-between">
                        <div className="left group cursor-pointer transition-colors duration-300 hover:text-white">
                            Copyright 2025 | tendr
                        </div>
                        <div className="right group cursor-pointer transition-colors duration-300 hover:text-white">
                            Privacy policy
                        </div>
                    </div>

                </div>



            </div >


        </>
    )
}

export default LandingPageNew