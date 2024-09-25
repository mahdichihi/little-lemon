import React from "react";
import styles from "./Footer.module.css";
import BigLogo from "../../assets/images/bigLogo.png";
import SectionCategories from "../typography/SectionCategories";
import SectionTitle from "../typography/SectionTitle";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer className={styles.footer}>
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
              <NavLink end to="/">
                <SectionCategories>home</SectionCategories>
              </NavLink>
            </li>
            <li>
              <HashLink to="/#about" smooth>
                <SectionCategories>about</SectionCategories>
              </HashLink>
            </li>
            <li>
              <HashLink to="/#menu" smooth>
                <SectionCategories>menu</SectionCategories>
              </HashLink>
            </li>
            <li>
              <NavLink to="/booking">
                <SectionCategories>reservations</SectionCategories>
              </NavLink>
            </li>
            <li>
              <HashLink to="#" smooth>
                <SectionCategories>order online</SectionCategories>
              </HashLink>
            </li>
            <li>
              <HashLink to="#" smooth>
                <SectionCategories>login</SectionCategories>
              </HashLink>
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
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FiInstagram />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <IoLogoTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
