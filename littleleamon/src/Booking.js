import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Booking.css";

export default function BookingPage() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    navigate("/confirmed"); 
  };

  return (
    <div className="booking-container">
      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate("/")}>
        &larr; Back
      </button>

      <h1 className="booking-title">Reserve Your Table</h1>

      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>

        <div className="form-group">
          <label>Time</label>
          <select value={time} onChange={(e) => setTime(e.target.value)} required>
            <option value="">Select Time</option>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
          </select>
        </div>

        <div className="form-group">
          <label>Guests</label>
          <input
            type="number"
            min="1"
            max="10"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Occasion</label>
          <select value={occasion} onChange={(e) => setOccasion(e.target.value)}>
            <option value="">Select Occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </div>

        <button className="submit-btn" type="submit">Book Now</button>
      </form>
    </div>
  );
}
