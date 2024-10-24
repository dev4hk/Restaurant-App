import React from "react";
import BookingForm from "../components/BookingForm";
import RestaurantDetail from "../components/RestaurantDetail";

const BookingPage = ({
  availableTimes,
  handleFormChange,
  bookingForm,
  handleSubmit,
}) => {
  return (
    <main>
      <RestaurantDetail />
      <div className="booking">
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
      </div>
    </main>
  );
};

export default BookingPage;
