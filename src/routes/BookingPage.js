import React from "react";
import BookingForm from "../components/BookingForm";
import RestaurantDetail from "../components/RestaurantDetail";

const BookingPage = ({
  availableTimes,
  handleFormChange,
  bookingForm,
  handleFormSubmit,
}) => {
  return (
    <main>
      <RestaurantDetail />
      <section className="booking" aria-label="booking section">
        <div className="booking-page">
          <div></div>
          <BookingForm
            availableTimes={availableTimes}
            handleFormChange={handleFormChange}
            handleFormSubmit={handleFormSubmit}
          />
          <div></div>
        </div>
      </section>
    </main>
  );
};

export default BookingPage;
