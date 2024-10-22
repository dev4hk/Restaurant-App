import { render, screen } from "@testing-library/react";
import BookingForm from "../components/BookingForm";
import { initializeTimes, updateTimes } from "../components/Main";

test("Renders the BookingForm heading", () => {
  const availableTimes = ["11:00", "12:00"];
  const dispatch = jest.fn((action) => action);
  render(
    <BookingForm
      availableTimes={availableTimes}
      dispatchAvailableTimes={dispatch}
    />
  );
  const headingElement = screen.getByText("Reservation");
  expect(headingElement).toBeInTheDocument();
});

test("initializeTimes returns array of strings that represents time", () => {
  const times = initializeTimes();
  expect(times).toContain("11:00");
});

test("updateTimes returns the value as same as input state", () => {
  const action = { type: "" };
  const state = ["11:00", "12:00"];
  const newState = updateTimes(state, action);
  expect(newState).toEqual(state);
});
