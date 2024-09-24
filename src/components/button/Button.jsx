import React from "react";
import styles from "./Button.module.css";
import SectionCategories from "../typography/SectionCategories";

const Button = ({ style, text, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={styles.button}
      style={style}
      disabled={disabled}
    >
      <SectionCategories>{text}</SectionCategories>
    </button>
  );
};

export default Button;
