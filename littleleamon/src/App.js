import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./homepage";
import BookingPage from "./Booking";
import ConfirmedBooking from "./ConfirmationPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/confirmed" element={<ConfirmedBooking />} />
    </Routes>
  );
}

export default App;
