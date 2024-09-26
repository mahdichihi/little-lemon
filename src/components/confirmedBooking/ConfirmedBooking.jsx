import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import styles from "./ConfirmedBooking.module.css";
import DisplayTitle from "../typography/DisplayTitle";
import { colors } from "../../theme/colors";
import LeadText from "../typography/LeadText";
import IMG from "../../assets/images/restaurantChefB.jpg";

const ConfirmedBooking = () => {
  const navigate = useNavigate();
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const booking = localStorage.getItem("reservation");
    console.log("booking  :  ", booking);

    if (booking) {
      setBooking(JSON.parse(booking));
    }
  }, []);

  // return (
  //   <>
  //     <>
  //       <h1>Thank you for your reservation!</h1>
  //       <h3 className="lead-txt">
  //         We look forward to seeing you at Little Lemon.
  //       </h3>
  //     </>
  //     {booking && (
  //       <>
  //         <h2>Confirmation details</h2>
  //         <div>
  //           <p>Occasion:</p> {booking.occasion}
  //         </div>
  //         <div>
  //           <p>Guests:</p> {booking.guests}
  //         </div>
  //         <div>
  //           <p>Date:</p> {booking.date}
  //         </div>
  //         <div>
  //           <p>Time:</p> {booking.time}
  //         </div>
  //       </>
  //     )}

  //     <Button text="Back to home" onClick={() => navigate("/")} />
  //   </>
  // );
  return (
    <section className={styles.wrapper}>
      <div className={styles.overlay} />
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <DisplayTitle style={{ color: colors.primary2 }}>
            Well done!
          </DisplayTitle>
          {/* <SubTitle style={{ color: colors.highlight1 }}>Chicago</SubTitle> */}
          {booking && (
            <div className={styles.leadText}>
              <LeadText style={{ color: colors.highlight1 }}>
                Your reservation is confirmed. We look forward to welcoming you
                and your guests!
              </LeadText>
              <LeadText
                style={{ color: colors.highlight1, marginTop: "1rem" }}
              >{`• Occasion: ${booking.occasion}`}</LeadText>
              <LeadText
                style={{ color: colors.highlight1 }}
              >{`• Guests: ${booking.guests}`}</LeadText>
              <LeadText
                style={{ color: colors.highlight1 }}
              >{`• Date: ${booking.date}`}</LeadText>
              <LeadText
                style={{ color: colors.highlight1 }}
              >{`• Time: ${booking.time}`}</LeadText>
            </div>
          )}
          <div className={styles.btn}>
            <Button
              onClick={() => navigate("/")}
              className={styles.btn}
              style={{ height: 50 }}
              text="Back to home"
            />
          </div>
        </div>
        <img src={IMG} alt="restaurant food" className={styles.img} />
      </div>
    </section>
  );
};

export default ConfirmedBooking;
