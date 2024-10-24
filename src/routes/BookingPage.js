import React from "react";
import BookingForm from "../components/BookingForm";

const BookingPage = ({
  availableTimes,
  handleFormChange,
  bookingForm,
  handleSubmit,
}) => {
  return (
    <main className="booking">
      <div className="booking-page">
        <div></div>
        <BookingForm
          availableTimes={availableTimes}
          handleFormChange={handleFormChange}
          bookingForm={bookingForm}
          handleSubmit={handleSubmit}
        />
        <div></div>
      </div>
    </main>
  );
};

export default BookingPage;
