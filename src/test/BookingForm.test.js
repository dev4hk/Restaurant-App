import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "../components/BookingForm";
import { initializeTimes, updateTimes } from "../components/Main";

test("Renders the BookingForm heading", () => {
  const availableTimes = ["11:00", "12:00"];
  const handleFormChange = jest.fn(() => {});
  const handleFormSubmit = jest.fn(() => {});
  render(
    <BookingForm
      availableTimes={availableTimes}
      handleFormChange={handleFormChange}
      handleFormSubmit={handleFormSubmit}
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

test("validation HTML attribute are added", () => {
  const availableTimes = ["11:00", "12:00"];
  const handleFormChange = jest.fn(() => {});
  const handleFormSubmit = jest.fn(() => {});
  render(
    <BookingForm
      availableTimes={availableTimes}
      handleFormChange={handleFormChange}
      handleFormSubmit={handleFormSubmit}
    />
  );
  const firstnameInput = screen.getByLabelText(/First Name/);
  const lastnameInput = screen.getByLabelText(/Last Name/);
  const phoneNumberInput = screen.getByLabelText(/Phone Number/);
  const occasionInput = screen.getByLabelText(/Occasion/);
  const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
  const dateInput = screen.getByLabelText(/Date/);
  const timeInput = screen.getByLabelText(/Time/);

  expect(firstnameInput).toHaveAttribute("required");
  expect(firstnameInput).toHaveAttribute("minLength");
  expect(lastnameInput).toHaveAttribute("required");
  expect(lastnameInput).toHaveAttribute("minLength");
  expect(phoneNumberInput).toHaveAttribute("required");
  expect(phoneNumberInput).toHaveAttribute("pattern");
  expect(occasionInput).toHaveAttribute("required");
  expect(numberOfGuestsInput).toHaveAttribute("required");
  expect(numberOfGuestsInput).toHaveAttribute("min");
  expect(numberOfGuestsInput).toHaveAttribute("max");
  expect(dateInput).toHaveAttribute("required");
  expect(timeInput).toHaveAttribute("required");
});

test("validation check - incorrect input", async () => {
  const availableTimes = ["11:00", "12:00"];
  const handleFormChange = jest.fn(() => {});
  const handleFormSubmit = jest.fn(() => {});
  render(
    <BookingForm
      availableTimes={availableTimes}
      handleFormChange={handleFormChange}
      handleFormSubmit={handleFormSubmit}
    />
  );
  const firstnameInput = screen.getByLabelText(/First Name/);
  const lastnameInput = screen.getByLabelText(/Last Name/);
  const phoneNumberInput = screen.getByLabelText(/Phone Number/);
  const occasionInput = screen.getByLabelText(/Occasion/);
  const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
  const dateInput = screen.getByLabelText(/Date/);
  const timeInput = screen.getByLabelText(/Time/);

  //First Name
  fireEvent.blur(firstnameInput);
  expect(await screen.findByText(/First name is required/)).toBeInTheDocument();

  fireEvent.change(firstnameInput, { target: { value: "a" } });
  fireEvent.blur(firstnameInput);
  expect(await screen.findByText(/Minimum length is 2/)).toBeInTheDocument();

  //Last Name
  fireEvent.blur(lastnameInput);
  expect(await screen.findByText(/Last name is required/)).toBeInTheDocument();

  fireEvent.change(lastnameInput, { target: { value: "a" } });
  fireEvent.blur(lastnameInput);
  expect(await screen.findByText(/Minimum length is 2/)).toBeInTheDocument();

  //Phone Number
  fireEvent.blur(phoneNumberInput);
  expect(
    await screen.findByText(/Phone number is required/)
  ).toBeInTheDocument();

  fireEvent.change(phoneNumberInput, { target: { value: "1111" } });
  fireEvent.blur(phoneNumberInput);
  expect(
    await screen.findByText(/Invalid phone number format. Use XXX-XXX-XXXX/)
  ).toBeInTheDocument();

  //Occasion
  const selectElement = screen.getByLabelText(/occasion/i);

  fireEvent.blur(selectElement);
  expect(await screen.findByText(/occasion is required/i)).toBeInTheDocument();

  // fireEvent.change(selectElement, { target: { value: "Birthday" } });
  // fireEvent.blur(selectElement);
  // const noErrorMessage = screen.queryByText((content, element) => {
  //   return (
  //     element.tagName.toLowerCase() === "p" &&
  //     content.includes("Invalid occasion selected")
  //   );
  // });
  // expect(noErrorMessage).not.toBeInTheDocument();

  //Number of Guests
  fireEvent.blur(numberOfGuestsInput);
  expect(
    await screen.findByText(/the number of guests is required/i)
  ).toBeInTheDocument();

  fireEvent.change(numberOfGuestsInput, { target: { value: "0" } });
  fireEvent.blur(numberOfGuestsInput);
  expect(await screen.findByText(/cannot be less than 1/i)).toBeInTheDocument();

  fireEvent.change(numberOfGuestsInput, { target: { value: "11" } });
  fireEvent.blur(numberOfGuestsInput);
  expect(
    await screen.findByText(/cannot be more than 10/i)
  ).toBeInTheDocument();

  //Date
  fireEvent.blur(dateInput);
  expect(await screen.findByText(/date is required/i)).toBeInTheDocument();

  fireEvent.change(dateInput, { target: { value: "2022-01-01" } });
  fireEvent.blur(dateInput);
  expect(
    await screen.findByText(/date must be today or in the future/i)
  ).toBeInTheDocument();

  //Time
  fireEvent.blur(timeInput);
  expect(await screen.findByText(/time is required/i)).toBeInTheDocument();
});
