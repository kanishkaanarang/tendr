import React from "react";
import "./CancellationPolicy.css";

export default function CancellationPolicy() {
  return (
    <body>
      <div className="policy-container">
        <h1 className="policy-title">Vendor Cancellation Policy</h1>
        <div className="policy-card">
          <p>
            At tendr, we value reliability and fairness. To maintain trust with
          customers, repeated cancellations by vendors will lead to penalties
          as outlined below:
        </p>

        <ul className="policy-list">
          <li><b>1st Cancellation in a Month:</b> Warning only ⚠ — no penalty, but logged in the system.</li>
          <li><b>2–3 Cancellations:</b> Small rating reduction (<b>-0.2 to -0.5 stars</b>) + lower priority in search ✅.</li>
          <li><b>4–5 Cancellations:</b> Commission increase (<b>+2–5%</b>) for the next 5 orders ✅.</li>
          <li><b>6–7 Cancellations:</b> <b>7-day suspension</b> ❌ + higher commission (<b>5–10%</b>) for 10 orders after reinstatement.</li>
          <li><b>8+ Cancellations:</b> <b>30-day suspension</b> ⚠ + mandatory vendor re-evaluation before reactivation.</li>
        </ul>

        <p>
          These measures ensure accountability and maintain high standards for
          both vendors and customers on the tendr platform.
        </p>
      </div>
    </div>
    </body>
  );
}
