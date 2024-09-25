import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders the BookingForm heading", () => {
  const mockSetDate = jest.fn();
  const mockSetTime = jest.fn();
  const mockSetGuests = jest.fn();
  const mockSetOccasion = jest.fn();
  const mockOnSubmit = jest.fn();

  render(
    <BookingForm
      date=""
      setDate={mockSetDate}
      time=""
      setTime={mockSetTime}
      guests={1}
      setGuests={mockSetGuests}
      occasion=""
      setOccasion={mockSetOccasion}
      availableTimes={["12:00", "13:00", "14:00"]}
      onSubmit={mockOnSubmit}
    />
  );

  const headingElement = screen.getByText("Choose date");
  expect(headingElement).toBeInTheDocument();
});
