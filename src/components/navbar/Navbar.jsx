import React from "react";
import SectionTitle from "../typography/SectionTitle";
import styles from "./Navbar.module.css";
import Logo from "../../assets/svg/logo.svg";
import HamburgerMenu from "../../assets/svg/hamburgerMenu.svg";
import { NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const location = useLocation();

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
            <NavLink end to="/">
              {({ isActive }) => (
                <SectionTitle isActive={isActive && !location.hash}>
                  home
                </SectionTitle>
              )}
            </NavLink>
          </li>
          <li>
            <HashLink to="/#about" smooth>
              <SectionTitle isActive={location.hash === "#about"}>
                about
              </SectionTitle>
            </HashLink>
          </li>
          <li>
            <HashLink to="/#menu" smooth>
              <SectionTitle isActive={location.hash === "#menu"}>
                menu
              </SectionTitle>
            </HashLink>
          </li>
          <li>
            <NavLink to="/booking">
              {({ isActive }) => (
                <SectionTitle isActive={isActive}>reservations</SectionTitle>
              )}
            </NavLink>
          </li>
          <li>
            <HashLink to="#" smooth>
              <SectionTitle>order online</SectionTitle>
            </HashLink>
          </li>
          <li>
            <HashLink to="#" smooth>
              <SectionTitle>login</SectionTitle>
            </HashLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
