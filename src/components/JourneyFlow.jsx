import React, { useState } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Photography",
    description: "Capture timeless memories with our curated photographers.",
    
    image:
      "https://images.unsplash.com/photo-1747319820357-3f37244a3b27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    title: "Entertainment",
    description:
      "Keep the celebration alive with top-tier artists and entertainers.",
    
    image:
      "https://images.unsplash.com/photo-1729553199933-c897fea4f41f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    title: "Decor",
    description:
      "Transform your venue with stunning decor themes and elegance.",
    
    image:
      "https://images.unsplash.com/photo-1532276865658-80462d4b71cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    title: "Catering",
    description:
      "Delight your guests with premium cuisines and curated menus.",
    
    image:
      "https://images.unsplash.com/photo-1751651054934-3fbdf1d54d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
];

const JourneyFlow = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () =>
    setActiveIndex((prev) => (prev - 1 + steps.length) % steps.length);
  const next = () => setActiveIndex((prev) => (prev + 1) % steps.length);

  return (
    <div
      style={{
        minHeight: "85vh",
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "Segoe UI, sans-serif",
        textAlign: "center",
        overflow: "hidden",
        padding: "30px 0",
      }}
    >
      <h2 style={{ fontSize: "4rem",marginTop: "30px" ,marginBottom: "90px", color: "#4a2e1f", fontWeight: "500" }}>
        Top Rated Vendors
      </h2>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          position: "relative",
          width: "90%",
          justifyContent: "center",
        }}
      >
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
          }}
        >
          ◀
        </button>

        {/* Cards */}
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            width: "100%",
            height: "400px",
            perspective: "1000px",
            overflow: "visible",
            
          }}
        >
          {steps.map((step, idx) => {
            const offset = (idx - activeIndex + steps.length) % steps.length;

            let scale = 0.7;
            let opacity = 0.5;
            let zIndex = 0;
            let xPos = (offset - 2) * 250;
            let bg = "#d3b89c";

            if (offset === 0) {
              scale = 1.2;
              opacity = 1;
              zIndex = 10;
              xPos = 0;
              bg = "#cfa18d";
            } else if (offset === 1 || offset === steps.length - 1) {
              scale = 0.9;
              opacity = 0.7;
              zIndex = 5;
              xPos = offset === 1 ? 480 : -480;
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
                  width: "500px",
                  height: "500px",
                  background: bg,
                  border: "none",
                  borderRadius: "20px",
                  overflow: "hidden",
                  textAlign: "center",
                  color: offset === 0 ? "#fff" : "#333",
                  boxShadow:
                    offset === 0
                      ? "0 10px 30px rgba(0,0,0,0.3)"
                      : "0 5px 15px rgba(0,0,0,0.15)",
                  zIndex,
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "500px",
                    backgroundImage: `url(${step.image})`, opacity: 0.75,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: offset === 0 ? "none" : "grayscale(30%) blur(1.5px)",
                    alignItems: "center", 
                    justifyContent: "center",
                    display: "flex",
                    textAlign: "center",
                    textpriority: "high",
                  }}
                >
                <div style={{ padding: "120px" , textpriority: "high"}}>
                  <div style={{ fontSize: "2rem", marginBottom: "250px" , color: "#fff"}}>
                    {step.icon}
                  </div>
                  <h3 style={{ fontSize: "1.5rem", marginBottom: "0px", fontWeight: "bold", color: "#fff" , textpriority: "high"}}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "#fff", textpriority:"high" }}>{step.description}</p>
                </div>
                </div>
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
          }}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default JourneyFlow;
