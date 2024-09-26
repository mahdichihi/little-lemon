import React from "react";
import styles from "./Hero.module.css";
import DisplayTitle from "../../components/typography/DisplayTitle";
import SubTitle from "../../components/typography/SubTitle";
import LeadText from "../../components/typography/LeadText";
import { colors } from "../../theme/colors";
import Button from "../../components/button/Button";
import IMG from "../../assets/images/restauranFood.jpg";

const Hero = ({ text, image = IMG, showButton, onClick }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.overlay} />
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <DisplayTitle style={{ color: colors.primary2 }}>
            Little Lemon
          </DisplayTitle>
          <SubTitle style={{ color: colors.highlight1 }}>Chicago</SubTitle>
          <div className={styles.leadText}>
            <LeadText style={{ color: colors.highlight1 }}>{text}</LeadText>
          </div>
          {showButton && (
            <div className={styles.btn}>
              <Button
                onClick={onClick}
                className={styles.btn}
                style={{ height: 50 }}
                text="Reserve a table"
              />
            </div>
          )}
        </div>
        <img src={image} alt="restaurant food" className={styles.img} />
      </div>
    </section>
  );
};

export default Hero;
