import React, { useState } from "react";
import BookingForm from "../components/BookingForm";

const BookingPage = ({ availableTimes, dispatchAvailableTimes }) => {
  return (
    <main className="booking">
      <div className="booking-page">
        <div></div>
        <BookingForm
          availableTimes={availableTimes}
          dispatchAvailableTimes={dispatchAvailableTimes}
        />
        <div></div>
      </div>
    </main>
  );
};

export default BookingPage;
