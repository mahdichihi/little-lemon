import React from "react";
import BookingForm from "../../components/bookingForm/BookingForm";
import styles from "./Reservation.module.css";

const Reservation = ({ availableTimes, dispatch }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </div>
    </section>
  );
};

export default Reservation;
