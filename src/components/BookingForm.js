import React from "react";
import Button from "./Button";

const BookingForm = ({
  availableTimes,
  handleFormChange,
  bookingForm,
  handleSubmit,
}) => {
  return (
    <div>
      <h2 className="booking-form-title">Reservation</h2>
      <form className="booking-form">
        <div className="booking-form-group">
          <label className="booking-form-label">First Name</label>
          <input
            className="booking-form-input"
            type="text"
            value={bookingForm.firstname}
            onChange={handleFormChange}
            name="firstname"
          />
        </div>
        <div className="booking-form-group">
          <label className="booking-form-label">Last Name</label>
          <input
            className="booking-form-input"
            type="text"
            value={bookingForm.lastname}
            name="lastname"
            onChange={handleFormChange}
          />
        </div>
        <div className="booking-form-group">
          <label className="booking-form-label">Phone Number</label>
          <input
            className="booking-form-input"
            type="text"
            value={bookingForm.phoneNumber}
            name="phoneNumber"
            onChange={handleFormChange}
          />
        </div>
        <div className="booking-form-group">
          <label className="booking-form-label" htmlFor="occasion">
            Occasion
          </label>
          <select
            className="booking-form-input"
            id="occasion"
            value={bookingForm.occasion}
            name="occasion"
            onChange={handleFormChange}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>
        <div className="booking-form-group">
          <label className="booking-form-label" htmlFor="guests">
            Number of guests
          </label>
          <input
            className="booking-form-input"
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={bookingForm.numberOfGuests}
            name="numberOfGuests"
            onChange={handleFormChange}
          />
        </div>
        <div className="booking-form-group">
          <label className="booking-form-label" htmlFor="res-date">
            Date
          </label>
          <input
            className="booking-form-input"
            type="date"
            id="res-date"
            value={bookingForm.date}
            name="date"
            onChange={handleFormChange}
          />
        </div>
        <div className="booking-form-group">
          <label className="booking-form-label" htmlFor="res-time">
            Time
          </label>
          <select
            className="booking-form-input"
            id="res-time"
            value={bookingForm.time}
            name="time"
            onChange={handleFormChange}
          >
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <Button className="yellow-button" onClick={handleSubmit}>
          Reserve a Table
        </Button>
      </form>
    </div>
  );
};

export default BookingForm;
