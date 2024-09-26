import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./BookingForm.module.css";
import { submitAPI } from "../../utils/utils";

const BookingForm = ({ availableTimes, dispatch, ...props }) => {
  const navigate = useNavigate();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const formik = useFormik({
    initialValues: {
      date: new Date().toLocaleDateString("en-CA"),
      time: availableTimes.times[0],
      guests: 1,
      occasion: "birthday",
    },
    onSubmit: (values) => {
      const response = submitAPI(values);
      console.log("response : ", response);

      if (response) {
        localStorage.setItem("reservation", JSON.stringify(values));
        navigate("/confirmation");
      }
    },
    validationSchema: Yup.object({
      date: Yup.date()
        .min(today, "Date must be today or in the future")
        .required("Date is required"),
      time: Yup.string()
        .oneOf(availableTimes.times)
        .required("Time is required"),
      guests: Yup.number()
        .min(1, "Must be at least 1")
        .max(10, "Must be at most 10")
        .required("Number of guests is required"),
      occasion: Yup.string()
        .oneOf(["birthday", "engagement", "anniversary"])
        .required("Occasion is required"),
    }),
  });

  useEffect(() => {
    dispatch({ type: "UPDATE_TIMES", date: new Date(formik.values.date) });
  }, [formik.values.date, dispatch]);

  return (
    <div {...props} className={styles.container}>
      <div className={styles.top}>
        <h1>Book Now</h1>
      </div>
      <form onSubmit={formik.handleSubmit} className={styles.form} noValidate>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          data-testid="res-date"
          id="res-date"
          {...formik.getFieldProps("date")}
        />
        <span data-testid="res-date-error" className={styles.formMessageError}>
          {formik.touched.date && formik.errors.date}
        </span>

        <label htmlFor="res-time">Choose time</label>
        <select
          data-testid="res-time"
          id="res-time"
          {...formik.getFieldProps("time")}
        >
          {availableTimes.times.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        <span data-testid="res-time-error" className={styles.formMessageError}>
          {formik.touched.time && formik.errors.time}
        </span>

        <label htmlFor="guests">Number of guests</label>
        <input
          data-testid="guests"
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          {...formik.getFieldProps("guests")}
        />
        <span data-testid="guests-error" className={styles.formMessageError}>
          {formik.touched.guests && formik.errors.guests}
        </span>

        <label htmlFor="occasion">Occasion</label>
        <select
          data-testid="occasion"
          id="occasion"
          {...formik.getFieldProps("occasion")}
        >
          <option value="birthday">Birthday</option>
          <option value="engagement">Engagement</option>
          <option value="anniversary">Anniversary</option>
        </select>
        <span data-testid="occasion-error" className={styles.formMessageError}>
          {formik.touched.occasion && formik.errors.occasion}
        </span>

        <input
          data-testid="submit-btn"
          type="submit"
          value="Make Your reservation"
        />
      </form>
    </div>
  );
};

export default BookingForm;
