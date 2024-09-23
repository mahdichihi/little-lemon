import React from "react";
import { colors } from "../../theme/colors"; // Adjust the import path as necessary

const SubTitle = ({ children, style }) => {
  const defaultStyle = {
    fontFamily: '"Markazi Text", serif',
    fontWeight: 400,
    fontSize: "40px",
    color: colors.highlight2, // Default color
  };

  return <h3 style={{ ...defaultStyle, ...style }}>{children}</h3>;
};

export default SubTitle;
