import React from "react";
import styles from "./About.module.css";
import DisplayTitle from "../../components/typography/DisplayTitle";
import SubTitle from "../../components/typography/SubTitle";
import LeadText from "../../components/typography/LeadText";
import IMG1 from "../../assets/images/marioAndAdrianA.jpg";
import IMG2 from "../../assets/images/marioAndAdrianB.jpg";

const About = () => {
  return (
    <section id="about" className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <DisplayTitle>Little Lemon</DisplayTitle>
          <SubTitle>Chicago</SubTitle>
          <img src={IMG1} alt="Mario and Adrian" className={styles.img} />

          <div className={styles.leadText}>
            <LeadText>
              Mario and Adrian, the dreamers behind Little Lemon, are not just
              founders; they’re the heart of the kitchen. With passion as their
              main ingredient, they’re on a mission to turn their culinary
              dreams into a dining experience you'll never forget.
            </LeadText>
          </div>
        </div>
        <div className={styles.imgsContainer}>
          <img src={IMG1} loading="lazy" alt="Mario and Adrian" />
          <img src={IMG2} loading="lazy" alt="Mario and Adrian" />
        </div>
      </div>
    </section>
  );
};

export default About;
