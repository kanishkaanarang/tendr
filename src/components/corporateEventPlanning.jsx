// src/pages/Corporate/Corporate.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import corpo from '../assets/ui/corpo.jpg';
import '../pages/Home/Home.css'; // Assuming you have a CSS file for styling
const Corporate = () => {
  const navigate = useNavigate();

  const features = [
    {
      id: 1,
      icon: "🏢",
      title: "Corporate Events",
      description: "From conferences to gala dinners — we handle every aspect of planning.",
    },
    {
      id: 2,
      icon: "🎯",
      title: "Team Building",
      description: "Engaging experiences that strengthen collaboration and morale.",
    },
    {
      id: 3,
      icon: "🏆",
      title: "Award Ceremonies",
      description: "Celebrate achievements with elegance and precision.",
    },
    {
      id: 4,
      icon: "🎤",
      title: "Product Launches",
      description: "Create an unforgettable impression with well-executed launch events.",
    },
  ];

  return (
    <div className="corporate-booking">
    <section id="corporate-section" className="corporate-booking-section">

            <div className="corporate-container">
              <div className="corporate-content">
                <div className="corporate-text">
                  <span className="corporate-badge">Professional Services</span>
                  <h2 className="corporate-title">Corporate Event Planning</h2>
                  <p className="corporate-description">
                    Elevate your business events with our comprehensive corporate planning services. 
                    From executive meetings to large-scale conferences, we handle every detail with 
                    professional excellence.
                  </p>
                  <div className="corporate-features">
                    {features.map((feature) => (
                      <div key={feature.id} className="feature-item">
                        <div className="feature-icon">{feature.icon}</div>
                        <div className="feature-text">
                          <h4>{feature.title}</h4>
                          <p>{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <a href="#corporate-contact" className="corporate-btn" onClick={(e) => { e.preventDefault(); navigate('/corporate'); }}>
                    Book Corporate Events
                  </a>
                </div>
                <div className="corporate-image">
                  <div className="corporate-img" style={{ backgroundImage: `url(${corpo})` }}></div>
                </div>
              </div>
            </div>
          </section>
    </div>
  );
}

export default Corporate;
