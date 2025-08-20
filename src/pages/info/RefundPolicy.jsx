import React from "react";
import "./RefundPolicy.css";

export default function RefundPolicy() {
  return (
    <div className="refund-container">
      <h1 className="refund-title">Refund Policy</h1>
      <div className="refund-card">
        <p>
          At tendr, we strive to create a seamless experience for our customers.
          We understand that plans can change, and our refund policy is designed
          to be fair to both our users and our vendors.
        </p>

        <h2>Standard Refunds</h2>
        <ul className="refund-list">
          <li>Cancellation within 24 hours of booking → <b>100% refund</b></li>
          <li>15+ days before the event → <b>75% refund</b></li>
          <li>8–14 days before the event → <b>50% refund</b></li>
          <li>4–7 days before the event → <b>25% refund</b></li>
          <li>Less than 4 days before the event → <b>No refund</b></li>
        </ul>

        <h2>Special Circumstances</h2>
        <ul className="refund-list">
          <li>
            <b>Bookings made 7–14 days before the event:</b> Cancel within 48
            hours → <b>50% refund</b>
          </li>
          <li>
            <b>Bookings made 3–6 days before the event:</b> Cancel within 24
            hours → <b>25% refund</b>
          </li>
          <li>
            <b>Bookings made less than 3 days before the event:</b> Cancel
            within 12 hours → <b>10% refund</b>
          </li>
        </ul>

        <h2>Processing</h2>
        <p>
          All refunds will be processed within <b>5–7 business days</b> and will
          be issued to the original payment method. Please note that processing
          fees are non-refundable.
        </p>
      </div>
    </div>
  );
}
