import React from "react";
import { useForm } from "react-hook-form";
import { format, isAfter } from "date-fns";

const BookingForm = ({
  availableTimes,
  handleFormChange,
  bookingForm,
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
    console.log("value", value);
    const selectedDate = new Date(value);
    const today = new Date();
    // Set the time to 00:00:00 to ensure it's only the date being compared
    today.setHours(0, 0, 0, 0);
    return selectedDate >= today || "Date must be today or in the future";
  };

  console.log(errors);
  return (
    <div>
      <h2 className="booking-form-title">Reservation</h2>
      <form
        className="booking-form"
        onSubmit={handleSubmit((data) => {
          handleFormSubmit(data);
        })}
      >
        <div className="booking-form-group">
          <label className="booking-form-label">First Name</label>
          <input
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
          />
          <p className="field-error">{errors.firstname?.message}</p>
        </div>
        <div className="booking-form-group">
          <label className="booking-form-label">Last Name</label>
          <input
            className="booking-form-input"
            type="text"
            {...register("lastname", {
              required: "Last name is required",
              minLength: { value: 2, message: "Minimum length is 2" },
            })}
            onBlur={() => {
              trigger("lastname");
            }}
          />
          <p className="field-error">{errors.lastname?.message}</p>
        </div>
        <div className="booking-form-group">
          <label className="booking-form-label">Phone Number</label>
          <input
            className="booking-form-input"
            type="text"
            {...register("phoneNumber", {
              required: "Phone number is required",
              pattern: {
                value: "/^d{3}-d{3}-d{4}$/",
                message: "Phone number should be 111-111-1111 format",
              },
            })}
            onBlur={() => {
              trigger("phoneNumber");
            }}
          />
          <p className="field-error">{errors.phoneNumber?.message}</p>
        </div>
        <div className="booking-form-group">
          <label className="booking-form-label" htmlFor="occasion">
            Occasion
          </label>
          <select
            className="booking-form-input"
            id="occasion"
            {...register("occasion", {
              required: "Occasion is required",
              minLength: { value: 1, message: "Please select occasion" },
            })}
            onBlur={() => {
              trigger("occasion");
            }}
          >
            <option value="" disabled selected hidden>
              Choose here
            </option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
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
          />
          <p className="field-error">{errors.numberOfGuests?.message}</p>
        </div>
        <div className="booking-form-group">
          <label className="booking-form-label" htmlFor="res-date">
            Date
          </label>
          <input
            className="booking-form-input"
            type="date"
            id="res-date"
            {...register("date", {
              required: "Date is required",
              validate: validateDate,
              onChange: handleFormChange,
            })}
            onBlur={() => {
              trigger("date");
            }}
          />
          <p className="field-error">{errors.date?.message}</p>
        </div>
        <div className="booking-form-group">
          <label className="booking-form-label" htmlFor="res-time">
            Time
          </label>
          <select
            className="booking-form-input"
            id="res-time"
            {...register("time", {
              required: "Time is required",
              minLength: { value: 1, message: "Please select time" },
            })}
            onBlur={() => {
              trigger("time");
            }}
          >
            <option value="" disabled selected hidden>
              Choose here
            </option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          <p className="field-error">{errors.time?.message}</p>
        </div>
        <input type="submit" className="yellow-button" />
      </form>
    </div>
  );
};

export default BookingForm;
