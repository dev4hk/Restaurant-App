import React, { useEffect, useReducer, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../routes/Home";
import About from "../routes/About";
import Menu from "../routes/Menu";
import BookingPage from "../routes/BookingPage";
import OnlineOrder from "../routes/OnlineOrder";
import Login from "../routes/Login";
import { fetchAPI, submitAPI } from "../api/api";
import ConfirmedBooking from "./ConfirmedBooking";

export const updateTimes = (state, action) => {
  if (action.type === "UPDATE") {
    return initializeTimes(action.date);
  }
  return null;
};

export const initializeTimes = (date) => {
  return date ? fetchAPI(new Date(date)) : fetchAPI(new Date());
};

const getToday = () => {
  return new Date().toISOString().slice(0, 10);
};

const Main = () => {
  const navigate = useNavigate();

  const [availableTimes, dispatchAvailableTimes] = useReducer(
    updateTimes,
    initializeTimes()
  );

  const [bookingForm, setBookingForm] = useState({
    firstname: "",
    lastname: "",
    phoneNumber: "",
    occasion: "",
    numberOfGuests: 1,
    date: "",
    time: "",
  });

  const [confirmation, setConfirmation] = useState("");

  const handleFormChange = (e) => {
    if (e.target.name === "date") {
      console.log("triggered");
      dispatchAvailableTimes({ type: "UPDATE", date: e.target.value });
    }
    setBookingForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitForm = (form) => {
    setBookingForm(form);
    setConfirmation(new Date().getTime().toString());
    submitAPI(form);
    navigate("/reservations/confirmation");
  };

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/menu" element={<Menu />}></Route>
      <Route
        path="/reservations"
        element={
          <BookingPage
            availableTimes={availableTimes}
            handleFormChange={handleFormChange}
            handleFormSubmit={submitForm}
          />
        }
      ></Route>
      <Route
        path="/reservations/confirmation"
        element={
          <ConfirmedBooking
            confirmation={confirmation}
            bookingForm={bookingForm}
          />
        }
      ></Route>
      <Route path="/order-online" element={<OnlineOrder />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};

export default Main;
