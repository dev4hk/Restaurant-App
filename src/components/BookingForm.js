import React, { useState } from "react";
import Button from "./Button";

const BookingForm = ({ availableTimes, setAvailableTimes }) => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    phoneNumber: "",
    occasion: "birthday",
    numberOfGuests: 1,
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <h2 className="booking-form-title">Reservation</h2>
      <form className="booking-form">
        <div className="booking-form-group">
          <label className="booking-form-label">First Name</label>
          <input
            className="booking-form-input"
            type="text"
            value={form.firstname}
            onChange={handleChange}
            name="firstname"
          />
        </div>
        <div className="booking-form-group">
          <label className="booking-form-label">Last Name</label>
          <input
            className="booking-form-input"
            type="text"
            value={form.lastname}
            name="lastname"
            onChange={handleChange}
          />
        </div>
        <div className="booking-form-group">
          <label className="booking-form-label">Phone Number</label>
          <input
            className="booking-form-input"
            type="text"
            value={form.phoneNumber}
            name="phoneNumber"
            onChange={handleChange}
          />
        </div>
        <div className="booking-form-group">
          <label className="booking-form-label" htmlFor="occasion">
            Occasion
          </label>
          <select
            className="booking-form-input"
            id="occasion"
            value={form.occasion}
            name="occasion"
            onChange={handleChange}
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
            value={form.numberOfGuests}
            name="numberOfGuests"
            onChange={handleChange}
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
            value={form.date}
            name="date"
            onChange={handleChange}
          />
        </div>
        <div className="booking-form-group">
          <label className="booking-form-label" htmlFor="res-time">
            Time
          </label>
          <select
            className="booking-form-input"
            id="res-time"
            value={form.time}
            name="time"
            onChange={handleChange}
          >
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <Button className="yellow-button">Reserve a Table</Button>
      </form>
    </div>
  );
};

export default BookingForm;
