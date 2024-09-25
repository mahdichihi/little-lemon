import React, { useReducer, useState, useEffect } from "react";
import Reservation from "../sections/reservation/Reservation";
import BookingSlot from "../components/bookingSlot/BookingSlot";
import { initializeTimes, timeReducer } from "../reducers/timeReducer";

const BookingPage = () => {
  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  const [date, setDate] = useState(""); // Set initial date to today
  const [time, setTime] = useState(""); // Initialize time as an empty string
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  // Initialize available times
  const [availableTimes, dispatch] = useReducer(timeReducer, initializeTimes());

  // Store booked times by date
  const [bookedTimes, setBookedTimes] = useState({});

  useEffect(() => {
    // Initialize available times when the component mounts or date changes
    if (date) {
      const timesToFilter = bookedTimes[date] || [];
      const updatedTimes = initializeTimes().filter(
        (time) => !timesToFilter.includes(time)
      );
      dispatch({ type: "INITIALIZE_TIMES", payload: updatedTimes });

      // Set the initial time to the first available time
      if (updatedTimes.length > 0) {
        setTime(updatedTimes[0]); // Set the initial time to the first available time
      }
    }
  }, [date, bookedTimes]);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
  };

  const handleTimeChange = (selectedTime) => {
    setTime(selectedTime); // Update selected time
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Add the booked time to the booked times state
    setBookedTimes((prev) => ({
      ...prev,
      [date]: [...(prev[date] || []), time],
    }));

    // Dispatch action to book the selected time
    dispatch({ type: "BOOK_TIME", payload: time });

    console.log("Reservation details:", {
      date,
      time,
      guests,
      occasion,
    });

    // Reset the form fields if needed
    setDate(""); // Reset to today's date
    setTime(""); // Reset time
    setGuests(1); // Reset to default
    setOccasion("Birthday"); // Reset to default
  };

  return (
    <div>
      <h1>Booking Page</h1>
      <Reservation
        date={date}
        today={today}
        setDate={handleDateChange} // Pass the updated handler
        time={time}
        setTime={handleTimeChange} // Use the new handler for time selection
        guests={guests}
        setGuests={setGuests}
        occasion={occasion}
        setOccasion={setOccasion}
        availableTimes={availableTimes} // Pass available times
        onSubmit={handleSubmit} // Pass the submit handler
      />
      {/* <BookingSlot availableTimes={availableTimes} /> */}
      {date && <BookingSlot availableTimes={availableTimes} />}{" "}
      {/* Conditionally render BookingSlot */}
    </div>
  );
};

export default BookingPage;
