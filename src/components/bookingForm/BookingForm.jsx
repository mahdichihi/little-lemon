import React from "react";

const BookingForm = ({
  date,
  today,
  setDate,
  time,
  setTime,
  guests,
  setGuests,
  occasion,
  setOccasion,
  availableTimes,
  onSubmit,
}) => {
  return (
    <form
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
      onSubmit={onSubmit}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={setDate} // Use the handler passed down
        required
        min={today}
      />

      {date && (
        <>
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            value={time}
            onChange={(e) => setTime(e.target.value)} // Update the selected time
            // disabled={!date} // Disable time selection if no date is selected
          >
            {/* Placeholder option */}
            {availableTimes.map((availableTime) => (
              <option key={availableTime} value={availableTime}>
                {availableTime}
              </option>
            ))}
          </select>
        </>
      )}

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        value={guests}
        min="1"
        max="10"
        onChange={(e) => setGuests(Number(e.target.value))}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
};

export default BookingForm;
