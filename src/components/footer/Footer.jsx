import React from "react";
import styles from "./Footer.module.css";
import BigLogo from "../../assets/images/bigLogo.png";
import SectionCategories from "../typography/SectionCategories";
import SectionTitle from "../typography/SectionTitle";

const Footer = () => {
  return (
    <nav className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img src={BigLogo} alt="logo" />
        </div>
        <div className={styles.section}>
          <div className={styles.SectionTitleContainer}>
            <SectionTitle>doormat navigation</SectionTitle>
          </div>

          <ul className={styles.list}>
            <li>
              <SectionCategories>home</SectionCategories>
            </li>
            <li>
              <SectionCategories>about</SectionCategories>
            </li>
            <li>
              <SectionCategories>menu</SectionCategories>
            </li>
            <li>
              <SectionCategories>reservations</SectionCategories>
            </li>
            <li>
              <SectionCategories>order online</SectionCategories>
            </li>
            <li>
              <SectionCategories>login</SectionCategories>
            </li>
          </ul>
        </div>
        <div className={styles.section}>
          <div className={styles.SectionTitleContainer}>
            <SectionTitle>contact</SectionTitle>
          </div>
          <ul className={styles.list}>
            <li>
              <SectionCategories>address</SectionCategories>
            </li>
            <li>
              <SectionCategories>phone number</SectionCategories>
            </li>
            <li>
              <SectionCategories>email</SectionCategories>
            </li>
          </ul>
        </div>
        <div className={styles.section}>
          <div className={styles.SectionTitleContainer}>
            <SectionTitle>Social media links</SectionTitle>
          </div>
          <ul className={styles.list}>
            <li>
              <SectionCategories>facebook</SectionCategories>
            </li>
            <li>
              <SectionCategories>instagram</SectionCategories>
            </li>
            <li>
              <SectionCategories>twitter</SectionCategories>
            </li>
            <li>
              <SectionCategories>youtube</SectionCategories>
            </li>
            <li>
              <SectionCategories>linkedIn</SectionCategories>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
