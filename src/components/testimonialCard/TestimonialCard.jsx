import React from "react";
import styles from "./TestimonialCard.module.css";
import CardTitle from "../typography/CardTitle";
import ParagraphText from "../typography/ParagraphText";
import Rating_5 from "../../assets/svg/rating_5.svg";
import Rating_4 from "../../assets/svg/rating_4.svg";
import Rating_3 from "../../assets/svg/rating_3.svg";
import Rating_2 from "../../assets/svg/rating_2.svg";
import Rating_1 from "../../assets/svg/rating_1.svg";

const TestimonialCard = ({ name, image, description, rating }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgContainer}>
        <div style={{ position: "relative", zIndex: 2 }}>
          <img src={image} alt={name} className={styles.img} />
        </div>

        <div style={{ position: "relative" }}>
          <img
            src={
              rating === 5
                ? Rating_5
                : rating === 4
                ? Rating_4
                : rating === 3
                ? Rating_3
                : rating === 2
                ? Rating_2
                : rating === 1
                ? Rating_1
                : Rating_1
            }
            alt={`${rating} stars rating`}
            className={styles.rating}
          />
        </div>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.titleContainer}>
          <CardTitle style={{ textAlign: "center" }}>{name}</CardTitle>
        </div>
        <div>
          <ParagraphText style={{ textAlign: "center" }}>
            {description}
          </ParagraphText>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
