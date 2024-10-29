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
          <div className="booking-description">
            <h2 className="booking-description-title">
              Make a Reservation at Little Lemon🍋
            </h2>
            <p className="booking-description-detail">
              Reserve your table at Little Lemon and enjoy an unforgettable
              Italian dining experience. Whether it's a romantic dinner, a
              family gathering, or a night out with friends, our cozy ambiance
              and delectable dishes are perfect for every occasion. Book your
              spot today and savor the flavors of Italy in every bite.
              <br />
              <br />
              <span>Buon appetito! 🍝🍋✨</span>
            </p>
          </div>
          <div className="booking-form-wrapper">
            <BookingForm
              availableTimes={availableTimes}
              handleFormChange={handleFormChange}
              handleFormSubmit={handleFormSubmit}
            />
          </div>
          <div></div>
        </div>
      </section>
    </main>
  );
};

export default BookingPage;
