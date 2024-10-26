import React from "react";
import { useForm } from "react-hook-form";
import { format, isAfter } from "date-fns";

const BookingForm = ({
  availableTimes,
  handleFormChange,
  handleFormSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm({
    firstname: "",
    lastname: "",
    phoneNumber: "",
    occasion: "",
    numberOfGuests: "",
    date: "",
    time: "",
  });

  const validateDate = (value) => {
    const selectedDate = new Date(value);
    const today = new Date();
    // Set the time to 00:00:00 to ensure it's only the date being compared
    today.setHours(0, 0, 0, 0);
    return selectedDate >= today || "Date must be today or in the future";
  };

  const validateTime = (value) => {
    return availableTimes.includes(value) || "Invalid time slot";
  };

  return (
    <section>
      <h2 className="booking-form-title">Reservation</h2>
      <form
        className="booking-form"
        onSubmit={handleSubmit((data) => {
          console.log(data);
          handleFormSubmit(data);
        })}
      >
        <div className="booking-form-group">
          <label className="booking-form-label" htmlFor="firstname">
            First Name
          </label>
          <input
            id="firstname"
            className="booking-form-input"
            name="firstname"
            type="text"
            {...register("firstname", {
              required: "First name is required",
              minLength: { value: 2, message: "Minimum length is 2" },
            })}
            onBlur={() => {
              trigger("firstname");
            }}
            required
            minLength={2}
            aria-label="firstname input"
          />
          <p className="field-error" data-testid="error-firstname">
            {errors.firstname?.message}
          </p>
        </div>
        <div className="booking-form-group">
          <label className="booking-form-label" htmlFor="lastname">
            Last Name
          </label>
          <input
            id="lastname"
            className="booking-form-input"
            type="text"
            {...register("lastname", {
              required: "Last name is required",
              minLength: { value: 2, message: "Minimum length is 2" },
            })}
            onBlur={() => {
              trigger("lastname");
            }}
            required
            minLength={2}
            aria-label="lastname input"
          />
          <p className="field-error">{errors.lastname?.message}</p>
        </div>
        <div className="booking-form-group">
          <label className="booking-form-label" htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            id="phoneNumber"
            className="booking-form-input"
            type="text"
            {...register("phoneNumber", {
              required: "Phone number is required",
              pattern: {
                value: /^\d{3}-\d{3}-\d{4}$/,
                message: "Invalid phone number format. Use XXX-XXX-XXXX",
              },
            })}
            onBlur={() => {
              trigger("phoneNumber");
            }}
            required
            aria-label="phone number input"
          />
          <p className="field-error">{errors.phoneNumber?.message}</p>
        </div>
        <div className="booking-form-group">
          <label htmlFor="occasion" className="booking-form-label">
            Occasion
          </label>
          <select
            className="booking-form-input"
            id="occasion"
            {...register("occasion", {
              required: "Occasion is required",
              validate: (value) =>
                value === "Birthday" ||
                value === "Anniversary" ||
                "Invalid occasion selected",
            })}
            onBlur={() => {
              trigger("occasion");
            }}
            required
            aria-label="occasion input"
          >
            <option value="">--Select an occasion--</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
          <p className="field-error">{errors.occasion?.message}</p>
        </div>
        <div className="booking-form-group">
          <label className="booking-form-label" htmlFor="guests">
            Number of guests
          </label>
          <input
            className="booking-form-input"
            type="number"
            min="1"
            max="10"
            id="guests"
            {...register("numberOfGuests", {
              required: "The number of guests is required",
              min: { value: 1, message: "Cannot be less than 1" },
              max: { value: 10, message: "Cannot be more than 10" },
            })}
            onBlur={() => {
              trigger("numberOfGuests");
            }}
            required
            aria-label="number of guests input"
          />
          <p className="field-error">{errors.numberOfGuests?.message}</p>
        </div>
        <div className="booking-form-group">
          <label className="booking-form-label" htmlFor="date">
            Date
          </label>
          <input
            className="booking-form-input"
            type="date"
            id="date"
            {...register("date", {
              required: "Date is required",
              validate: validateDate,
              onChange: handleFormChange,
            })}
            onBlur={() => {
              trigger("date");
            }}
            required
            aria-label="date input"
          />
          <p className="field-error">{errors.date?.message}</p>
        </div>
        <div className="booking-form-group">
          <label className="booking-form-label" htmlFor="time">
            Time
          </label>
          <select
            className="booking-form-input"
            id="time"
            {...register("time", {
              required: "Time is required",
              validate: validateTime,
            })}
            onBlur={() => {
              trigger("time");
            }}
            required
            aria-label="time input"
          >
            <option value="">Choose here</option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          <p className="field-error">{errors.time?.message}</p>
        </div>
        <button type="submit" className="yellow-button">
          Book
        </button>
      </form>
    </section>
  );
};

export default BookingForm;
