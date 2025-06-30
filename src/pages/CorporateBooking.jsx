import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowDown } from "react-icons/fi";

const plans = [
  {
    id: "basic",
    title: "Basic Plan",
    price: "Free",
    subtext: "Ideal for Small Teams and Trial Runs",
    highlights: [
      "Full access to vendor marketplace",
      "Self-service event booking",
      "24/7 customer support",
      "Premium quality service",
      "Transparent pricing - no hidden fees",
    ],
    mandatoryAddon: "Platform usage + on-ground support → ₹750/event",
    optionalAddons: [
      "Custom Memorabilia ₹1,100",
      "Professional After Movie ₹1,100",
      "Customized Invitation Flyer ₹1,100",
    ],
    isPaid: false,
  },
  {
    id: "pro",
    title: "Pro Plan",
    price: "₹12,000/year",
    subtext: "Smart choice for growing companies",
    highlights: [
      "Everything in Basic Plan",
      "Priority WhatsApp support",
      "Real-time dashboard",
      "Faster support response",
    ],
    mandatoryAddon: "Platform usage + on-ground support → ₹500/event",
    optionalAddons: [
      "Custom Memorabilia ₹750",
      "Professional After Movie ₹750",
      "Customized Invitation Flyer ₹750",
    ],
    isPaid: true,
  },
  {
    id: "elite",
    title: "Elite Plan",
    price: "₹18,000/year",
    subtext: "Premium end-to-end event management",
    highlights: [
      "Everything in Pro Plan",
      "Top-rated vendor recommendations",
      "Dedicated event coordinator",
      "Exclusive photoshoot backdrop",
      "All add-ons included",
      "Complimentary Social media shoutout and event marketing",
      "Dedicated 24/7 Premium support",
      "Full planning-to-execution event support",
    ],
    mandatoryAddon: "Included",
    optionalAddons: ["All included"],
    isPaid: true,
  },
];

export default function CorporateBooking() {
  const navigate = useNavigate();
  const plansRef = useRef(null);

  const scrollToPlans = () => {
    plansRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handlePlanClick = (plan) => {
    navigate("/corporate-signup", { state: { plan } });
  };

  return (
    <div className="min-h-screen bg-[#F7F4EF] py-10 px-4">
      {/* HERO SECTION */}
      <div className="bg-[#fff6eb] w-full py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-5xl font-extrabold text-[#6B4226] leading-snug">
              Upgrade Corporate Events with{" "}
              <span className="text-[#CCAB4A]">Tendr Premium</span>
            </h1>
            <p className="text-lg text-[#6B4226] font-medium">
              Plan smarter — save time, eliminate vendor stress, and make your
              office events look exceptional. Starting at under ₹2000/month.
            </p>
            <ul className="list-disc ml-6 text-[#6B4226] space-y-2 text-sm">
              <li>✅ Save 12+ hours — focus on real HR work</li>
              <li>✅ Save ₹25,000+ annually vs. agencies</li>
              <li>✅ No vendor stress — we handle it all</li>
              <li>✅ Professional results that wow teams</li>
              <li>✅ Easy budget approval — under ₹2000/month</li>
            </ul>
            <button
              onClick={scrollToPlans}
              className="mt-6 flex items-center gap-2 bg-[#CCAB4A] hover:bg-[#b7973f] text-white px-6 py-3 rounded-2xl font-bold transition"
            >
              Go Premium <FiArrowDown />
            </button>
          </div>

          <div className="lg:w-1/2 w-full flex flex-col gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-md border border-[#CCAB4A]">
              <h3 className="text-xl font-bold text-[#D48060] mb-4">
                Perfect For:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm text-[#6B4226]">
                <li>🎉 Diwali / Festival Parties</li>
                <li>🎂 Monthly Birthday Events</li>
                <li>🏆 Achievement Recognition Events</li>
                <li>👨‍👩‍👧‍👦 Team Celebrations</li>
                <li>🚌 Quarterly Team Outings</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl py-6 px-4 flex flex-col sm:flex-row justify-around items-center text-center shadow-md border border-[#CCAB4A]">
              {["80%", "12+ hrs", "₹25,000+", "100%"].map((value, idx) => (
                <div
                  key={idx}
                  className="mb-6 sm:mb-0 sm:px-4 w-full sm:w-auto"
                >
                  <h3 className="text-3xl font-extrabold text-[#D48060]">
                    {value}
                  </h3>
                  <p className="text-sm text-[#6B4226] font-medium">
                    {
                      [
                        "Less planning effort vs traditional process",
                        "Saved per event by HRs and Admins",
                        "Saved yearly vs. agency costs",
                        "Vendor coordination handled by us",
                      ][idx]
                    }
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* EXCLUSIVE PERKS */}
      <div className="bg-[#fff6eb] py-16 px-6 mb-12">
        <h2 className="text-center text-4xl font-bold text-[#6B4226] mb-12">
          Exclusive Corporate Perks
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            {
              title: "Centralized Vendor Access",
              desc: "One platform to book decorators, caterers, anchors, and entertainers without back-and-forth.",
              icon: "📦",
            },
            {
              title: "Professional Planning",
              desc: "Dedicated planning support with event execution & communication handled for you.",
              icon: "🧑‍💼",
            },
            {
              title: "24/7 HR Support",
              desc: "Your company representative or HR can reach out to us anytime, stress-free.",
              icon: "📞",
            },
            {
              title: "Budget Friendly",
              desc: "Plans starting under ₹2000/month — with transparent, flexible billing.",
              icon: "💰",
            },
            {
              title: "Custom Branding",
              desc: "Flyers, shoutouts, team visuals, and memorabilia — all tailored to your event.",
              icon: "🎨",
            },
            {
              title: "Hassle-Free Execution",
              desc: "No more tracking vendors. Our team manages on-ground operations and delivery.",
              icon: "🧾",
            },
          ].map((perk, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">{perk.icon}</div>
              <h3 className="text-lg font-bold text-[#D48060] mb-2">
                {perk.title}
              </h3>
              <p className="text-sm text-[#6B4226]">{perk.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* PLANS */}
      <div
        ref={plansRef}
        className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6"
      >
        {plans.map((plan, idx) => (
          <div
            key={plan.id}
            className={`relative flex flex-col rounded-3xl p-6 shadow-xl cursor-pointer transition-transform transform hover:scale-105 bg-white border ${
              idx === 1
                ? "border-[#CCAB4A] ring-2 ring-[#CCAB4A]"
                : "border-[#6B4226]"
            }`}
            style={{ minHeight: "700px" }}
            onClick={() => handlePlanClick(plan)}
          >
            {/* Most Popular Tag */}
            {idx === 2 && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#CCAB4A] text-white px-12 py-2 text-xs font-bold shadow-lg z-10 rounded-xl">
                Most Popular
              </div>
            )}

            {/* Top Content */}
            <div className="flex-grow">
              <h2 className="text-2xl font-bold text-[#CCAB4A] mb-1">
                {plan.title}
              </h2>
              <p className="text-3xl font-extrabold text-[#CCAB4A] mb-1">
                {plan.price}
              </p>
              <p className="text-sm text-[#CCAB4A] mb-4">{plan.subtext}</p>

              <ul className="space-y-2 text-[#000000] text-sm mb-6">
                {plan.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#CCAB4A] font-bold">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="text-sm text-[#000000] space-y-4">
                <div>
                  <p className="font-semibold underline text-[#6B4226] mb-1">
                    Mandatory Add-on:
                  </p>
                  <ul className="list-disc list-inside ml-4 text-sm">
                    <li>{plan.mandatoryAddon}</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold underline text-[#6B4226] mb-1">
                    Optional Add-ons:
                  </p>
                  <ul className="list-disc list-inside ml-4 text-sm">
                    {plan.optionalAddons.map((addon, idx) => (
                      <li key={idx}>{addon}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Button */}
            <button className="mt-6 w-full h-[45px] bg-[#CCAB4A] hover:bg-[#dfba4a] text-white font-semibold rounded-xl transition-transform transform hover:-translate-y-1 active:scale-95">
              Get Started
            </button>
          </div>
        ))}
      </div>

      {/* TESTIMONIALS */}
      <div className="bg-[#F7F4EF] py-16 px-6">
        <h2 className="text-center text-4xl font-bold text-[#6B4226] mb-12">
          What Our Clients Say
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md border border-[#CCAB4A]"
            >
              <p className="text-sm text-[#6B4226] italic mb-4">
                “Tendr made our Diwali celebration hassle-free. Everything was
                handled beautifully and on time. Highly recommend the premium
                plan!”
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-yellow-400 text-white font-bold flex items-center justify-center">
                  {["A", "B", "C"][idx]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#6B4226]">
                    HR Manager
                  </p>
                  <p className="text-xs text-gray-500">
                    Company {["X", "Y", "Z"][idx]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
