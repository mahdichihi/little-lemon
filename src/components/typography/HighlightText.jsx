import React from "react";
import { colors } from "../../theme/colors"; // Adjust the import path as necessary

const HighlightText = ({ children, style }) => {
  const defaultStyle = {
    fontFamily: '"Karla", system-ui',
    fontWeight: 500,
    fontSize: "1rem",
    color: colors.highlight2, // Default color
  };

  return <p style={{ ...defaultStyle, ...style }}>{children}</p>;
};

export default HighlightText;
