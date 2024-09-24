import React from "react";
import { colors } from "../../theme/colors"; // Adjust the import path as necessary

const DisplayTitle = ({ children, style, ...restProps }) => {
  const defaultStyle = {
    fontFamily: '"Markazi Text", serif',
    fontWeight: 500,
    fontSize: "4rem",
    color: colors.highlight2, // Default color
  };

  return (
    <h1 style={{ ...defaultStyle, ...style }} {...restProps}>
      {children}
    </h1>
  );
};

export default DisplayTitle;
