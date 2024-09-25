import React from "react";

const BookingSlot = ({ availableTimes }) => {
  return (
    <div>
      <h2>Available Booking Slots</h2>
      <ul>
        {availableTimes.map((time) => (
          <li key={time}>{time}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookingSlot;
