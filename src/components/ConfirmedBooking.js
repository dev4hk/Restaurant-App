import React from "react";
import RestaurantDetail from "./RestaurantDetail";
import { capitalizeFirstLetter, convertTimeToBase12 } from "../utils";

const ConfirmedBooking = ({ confirmation, bookingForm }) => {
  return (
    <>
      <RestaurantDetail />
      <main className="booking">
        <section className="booking-page">
          <div></div>
          <article className="confirmation-wrapper">
            <h2 className="booking-form-title">Confirmation</h2>
            <p className="confirmation-subtitle">
              Your table has been reserved. Please check details below.
            </p>
            <div className="confirmation-row" aria-label="confirmation detail">
              <div>
                <h3>Confirmation Number:</h3>
                <h3>Name:</h3>
                <h3>Phone Number:</h3>
                <h3>Number of Guests:</h3>
                <h3>Date:</h3>
                <h3>Time:</h3>
              </div>
              <div>
                <h3>{confirmation}</h3>
                <h3>{`${capitalizeFirstLetter(
                  bookingForm.firstname
                )} ${capitalizeFirstLetter(bookingForm.lastname)}`}</h3>
                <h3>{bookingForm.phoneNumber}</h3>
                <h3>{bookingForm.numberOfGuests}</h3>
                <h3>{bookingForm.date}</h3>
                <h3>{convertTimeToBase12(bookingForm.time)}</h3>
              </div>
            </div>
          </article>
          <div></div>
        </section>
      </main>
    </>
  );
};

export default ConfirmedBooking;
