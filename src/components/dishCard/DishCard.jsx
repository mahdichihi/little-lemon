import React from "react";
import styles from "./DishCard.module.css";
import CardTitle from "../typography/CardTitle";
import ParagraphText from "../typography/ParagraphText";
import HighlightText from "../typography/HighlightText";
import Delivery from "../../assets/svg/delivery.svg";
import { colors } from "../../theme/colors";

const DishCard = ({ name, image, description, price, onClick }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgContainer}>
        <img src={image} alt={name} className={styles.img} />
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.titleContainer}>
          <CardTitle>{name}</CardTitle>
          <HighlightText
            style={{ color: colors.secondary1 }}
          >{`$ ${price.toFixed(2)}`}</HighlightText>
        </div>
        <div>
          <ParagraphText>{description}</ParagraphText>
        </div>
        <button className={styles.button} onClick={onClick}>
          <CardTitle>Order a delivery</CardTitle>
          <img src={Delivery} alt="delivery icon" />
        </button>
      </div>
    </div>
  );
};

export default DishCard;
