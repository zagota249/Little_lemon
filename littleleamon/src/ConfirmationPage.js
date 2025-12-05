import React from "react";
import { Link } from "react-router-dom";
import "./Booking.css";

export default function ConfirmedBooking() {
  return (
    <div className="confirm-page">
      <h1>Booking Confirmed!</h1>
      <p>Your table has been successfully reserved.</p>
      {/* Button to go back to homepage */}
      <Link to="/" className="submit-btn">
        Back to Homepage
      </Link>
    </div>
  );
}
