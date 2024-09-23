import React from "react";
import SectionTitle from "../typography/SectionTitle";
import styles from "./Navbar.module.css";
import Logo from "../../assets/svg/logo.svg";
import HamburgerMenu from "../../assets/svg/hamburgerMenu.svg";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.hamburgerMenu}>
          <img
            src={HamburgerMenu}
            alt="hamburger menu"
            className={styles.menuIcon}
          />
          <img src={Logo} alt="logo" className={styles.logo} />
        </div>

        <ul className={styles.list}>
          <li>
            <SectionTitle>home</SectionTitle>
          </li>
          <li>
            <SectionTitle>about</SectionTitle>
          </li>
          <li>
            <SectionTitle>menu</SectionTitle>
          </li>
          <li>
            <SectionTitle>reservations</SectionTitle>
          </li>
          <li>
            <SectionTitle>order online</SectionTitle>
          </li>
          <li>
            <SectionTitle>login</SectionTitle>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
