import { render, screen } from "@testing-library/react";
import BookingForm from "../components/BookingForm";
import { initializeTimes, updateTimes } from "../components/Main";
import { fetchAPI } from "../api/api";

test("Renders the BookingForm heading", () => {
  const availableTimes = ["11:00", "12:00"];
  const handleFormChange = jest.fn(() => {});
  const bookingForm = {};
  const handleSubmit = jest.fn(() => {});
  render(
    <BookingForm
      availableTimes={availableTimes}
      handleFormChange={handleFormChange}
      bookingForm={bookingForm}
      handleSubmit={handleSubmit}
    />
  );
  const headingElement = screen.getByText("Reservation");
  expect(headingElement).toBeInTheDocument();
});

test("initializeTimes returns array of strings that represents time", () => {
  const times = initializeTimes();
  expect(times).toContain("17:00");
});

test("updateTimes returns the value which is not null", () => {
  const action = { type: "UPDATE", date: "01-01-2024" };
  const state = [];
  const newState = updateTimes(state, action);
  expect(newState).not.toBeNull();
});

test("updateTimes returns null", () => {
  const action = { type: "SOMETHING_ELSE", date: "01-01-2024" };
  const state = [];
  const newState = updateTimes(state, action);
  expect(newState).toBeNull();
});
