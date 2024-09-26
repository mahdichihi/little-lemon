import React, { useReducer } from "react";
import { initializeTimes, updateTimes } from "../utils/utils";
import Reservation from "../sections/reservation/Reservation";
import Hero from "../sections/hero/Hero";
import IMG from "../assets/images/restaurant.jpg";

const Bookingpage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <>
      <Hero
        text={
          "Secure your table effortlessly! Book online, choose your ideal spot, and share any special details. It’s quick and smooth, setting up a great experience for you and your guests. Just a few clicks and you’re ready for a memorable dining experience!"
        }
        image={IMG}
      />
      <Reservation availableTimes={availableTimes} dispatch={dispatch} />
    </>
  );
};

export default Bookingpage;
