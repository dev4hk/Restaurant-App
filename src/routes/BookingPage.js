import React, { useState } from "react";
import BookingForm from "../components/BookingForm";

const BookingPage = ({ availableTimes, setAvailableTimes }) => {
  return (
    <main className="booking">
      <div className="booking-page">
        <div></div>
        <BookingForm
          availableTimes={availableTimes}
          setAvailableTimes={setAvailableTimes}
        />
        <div></div>
      </div>
    </main>
  );
};

export default BookingPage;
