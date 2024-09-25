import React from "react";
import BookingForm from "../../components/bookingForm/BookingForm";

const Reservation = ({
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
    <div>
      <h2>Reservation</h2>
      <BookingForm
        date={date}
        today={today}
        setDate={setDate}
        time={time}
        setTime={setTime}
        guests={guests}
        setGuests={setGuests}
        occasion={occasion}
        setOccasion={setOccasion}
        availableTimes={availableTimes}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default Reservation;
