import React, { useState } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Fill the Form",
    description: "Start your journey by sharing some basic details with us. This helps us understand your requirements better.",
    icon: "📝",
  },
  {
    title: "Choose Services",
    description: "Explore different service categories and apply filters to find exactly what you need for your event.",
    icon: "🎯",
  },
  {
    title: "Check Availability",
    description: "Connect with vendors, ask for their availability, and chat directly to discuss your preferences.",
    icon: "💬",
  },
  {
    title: "Transparent Pricing",
    description: "Get clear, upfront pricing during your chat with vendors. No hidden costs, just full transparency.",
    icon: "💰",
  },
  {
    title: "Special Add-ons",
    description: "Enhance your experience with exclusive add-ons curated to make your event more memorable.",
    icon: "✨",
  },
  {
    title: "Confirm & Pay",
    description: "Once you finalize everything, lock in the best deal and complete your payment securely.",
    icon: "✅",
  },
];


const JourneyFlow = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((prev) => (prev - 1 + steps.length) % steps.length);
  const next = () => setActiveIndex((prev) => (prev + 1) % steps.length);

  return (
    <div
      style={{
        minHeight: "50vh",
        background: "linear-gradient(to right, #e9d5c2, #f5e6d3)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Segoe UI, sans-serif",
        overflow: "hidden",

      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "40px",marginTop: "60px", color: "#4a2e1f", textAlign: "center", fontWeight: "bold" }}>
        Your Journey with Tendr
      </h2>

      <div style={{ display: "flex", alignItems: "center", gap: "20px",  width: "80%", justifyContent: "center" }}>
        {/* Left Arrow */}
        <button
          onClick={prev}
          style={{
            fontSize: "2rem",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: "#4a2e1f",
            zIndex: 20,
            marginBottom: "65px",
          }}
        >
          ◀
        </button>

        {/* Cards */}
        <div style={{ position: "relative", display: "flex", justifyContent: "center", width: "100%", height: "450px", marginTop: "60px" }}>
          {steps.map((step, idx) => {
            const offset = (idx - activeIndex + steps.length) % steps.length;

            let scale = 0.7;
            let opacity = 0.5;
            let zIndex = 0;
            let xPos = (offset - 2) * 250; // spacing between cards
            let bg = "#d3b89c";

            if (offset === 0) {
              scale = 1.2;
              opacity = 1;
              zIndex = 10;
              xPos = 0; // main card center
              bg = "#3e2416"; // dark
            } else if (offset === 1 || offset === steps.length - 1) {
              scale = 0.9;
              opacity = 0.7;
              zIndex = 5;
              xPos = offset === 1 ? 260 : -260; // right and left
            } else {
              opacity = 0;
            }

            return (
              <motion.div
                key={idx}
                animate={{ opacity, scale, x: xPos }}
                transition={{ duration: 0.5 }}
                style={{
                  position: "absolute",
                  width: "220px",
                  height: "300px",
                  background: bg,
                  borderRadius: "20px",
                  padding: "20px",
                  textAlign: "center",
                  color: offset === 0 ? "#fff" : "#333",
                  boxShadow:
                    offset === 0
                      ? "0 10px 30px rgba(0,0,0,0.3)"
                      : "0 5px 15px rgba(0,0,0,0.15)",
                  zIndex,
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "15px" }}>
                  {step.icon}
                </div>
                <h3 style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: "0.9rem" }}>{step.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          style={{
            fontSize: "2rem",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: "#4a2e1f",
            zIndex: 20,
            marginBottom: "65px",
          }}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default JourneyFlow;
