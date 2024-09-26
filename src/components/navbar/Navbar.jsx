import React, { useEffect, useRef, useState } from "react";
import SectionTitle from "../typography/SectionTitle";
import styles from "./Navbar.module.css";
import Logo from "../../assets/svg/logo.svg";
import HamburgerMenu from "../../assets/svg/hamburgerMenu.svg";
import { NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useClickOutside from "../../hooks/useClickOutside";

const Navbar = () => {
  const mobile = window.innerWidth <= 992;

  const location = useLocation();
  const navRef = useRef(null);

  const [isNavOpen, setIsNavOpen] = useState(false);

  useClickOutside(navRef, () => {
    setIsNavOpen(false);
    // setIsCategoriesOpen(false);
  });

  useEffect(() => {
    console.log("isNavOpen : ", isNavOpen);
    console.log("  mobile : ", mobile);
  }, [isNavOpen, mobile]);

  return (
    <>
      <nav ref={navRef} className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.hamburgerMenu}>
            <button
              className={styles.menuBtn}
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <img
                src={HamburgerMenu}
                alt="hamburger menu"
                className={styles.menuIcon}
              />
            </button>

            <img src={Logo} alt="logo" className={styles.logo} />
          </div>

          <ul
            className={styles.list}
            style={{
              display: mobile ? (isNavOpen ? "flex" : "none") : "flex",
              // Ensures the list is always visible on larger screens
            }}
          >
            <li>
              <NavLink
                end
                to="/"
                onClick={() => {
                  setIsNavOpen(false);
                }}
              >
                {({ isActive }) => (
                  <SectionTitle isActive={isActive && !location.hash}>
                    home
                  </SectionTitle>
                )}
              </NavLink>
            </li>
            <li>
              <HashLink
                to="/#about"
                smooth
                onClick={() => {
                  setIsNavOpen(false);
                }}
              >
                <SectionTitle isActive={location.hash === "#about"}>
                  about
                </SectionTitle>
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#menu"
                smooth
                onClick={() => {
                  setIsNavOpen(false);
                }}
              >
                <SectionTitle isActive={location.hash === "#menu"}>
                  menu
                </SectionTitle>
              </HashLink>
            </li>
            <li>
              <NavLink
                to="/booking"
                onClick={() => {
                  setIsNavOpen(false);
                }}
              >
                {({ isActive }) => (
                  <SectionTitle isActive={isActive}>reservations</SectionTitle>
                )}
              </NavLink>
            </li>
            <li>
              <HashLink
                to="#"
                smooth
                onClick={() => {
                  setIsNavOpen(false);
                }}
              >
                <SectionTitle>order online</SectionTitle>
              </HashLink>
            </li>
            <li>
              <HashLink
                to="#"
                smooth
                onClick={() => {
                  setIsNavOpen(false);
                }}
              >
                <SectionTitle>login</SectionTitle>
              </HashLink>
            </li>
          </ul>
        </div>
      </nav>
      {/* Overlay */}
      {isNavOpen && mobile && (
        <div className={styles.overlay} onClick={() => setIsNavOpen(false)} />
      )}
    </>
  );
};

export default Navbar;
