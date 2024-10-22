import React, { useReducer, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import About from "../routes/About";
import Menu from "../routes/Menu";
import BookingPage from "../routes/BookingPage";
import OnlineOrder from "../routes/OnlineOrder";
import Login from "../routes/Login";

export const updateTimes = (state, action) => {
  return [...state];
};

export const initializeTimes = () => {
  const times = [
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];
  return times;
};

const Main = () => {
  const [availableTimes, dispatchAvailableTimes] = useReducer(
    updateTimes,
    initializeTimes()
  );

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
            dispatchAvailableTimes={dispatchAvailableTimes}
          />
        }
      ></Route>
      <Route path="/order-online" element={<OnlineOrder />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};

export default Main;
