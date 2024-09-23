import React from "react";
import { colors } from "../../theme/colors"; // Adjust the import path as necessary

const DisplayTitle = ({ children, style }) => {
  const defaultStyle = {
    fontFamily: '"Markazi Text", serif',
    fontWeight: 500,
    fontSize: "64px",
    color: colors.highlight2, // Default color
  };

  return <h1 style={{ ...defaultStyle, ...style }}>{children}</h1>;
};

export default DisplayTitle;
