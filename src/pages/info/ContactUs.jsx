import React from "react";
import "./ContactUs.css";

export default function ContactUs() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <div className="contact-card">
        <p><strong>Email:</strong> contacttendr@gmail.com</p>
        <p><strong>Phone:</strong> +91-9211668427</p>
        <p><strong>Address:</strong> DELHI NCR</p>
        <p className="availability">
          We are available from <b>10 AM to 6 PM IST</b> on weekdays.
        </p>
      </div>
    </div>
  );
}
