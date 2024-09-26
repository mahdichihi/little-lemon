import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";

const ConfirmedBooking = () => {
  const navigate = useNavigate();
  const [booking, setBooking] = useState();

  useEffect(() => {
    const booking = localStorage.getItem("Bookings");
    if (booking) {
      setBooking(JSON.parse(booking));
    }
  }, []);

  return (
    <>
      <>
        <h1>Thank you for your reservation!</h1>
        <h3 className="lead-txt">
          We look forward to seeing you at Little Lemon.
        </h3>
      </>
      {booking && (
        <>
          <h2>Confirmation details</h2>
          <div>
            <p>Occasion:</p> {booking.occasion}
          </div>
          <div>
            <p>Guests:</p> {booking.guests}
          </div>
          <div>
            <p>Date:</p> {booking.date}
          </div>
          <div>
            <p>Time:</p> {booking.time}
          </div>
        </>
      )}

      <Button text="Back to home" onClick={() => navigate("/")} />
    </>
  );
};

export default ConfirmedBooking;
