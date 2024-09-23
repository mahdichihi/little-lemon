import React from "react";
import { colors } from "../../theme/colors"; // Adjust the import path as necessary

const SectionTitle = ({ children, style }) => {
  const defaultStyle = {
    fontFamily: '"Karla", system-ui',
    fontWeight: 800,
    fontSize: "1.25rem",
    color: colors.highlight2, // Default color
    textTransform: "uppercase",
  };

  return <p style={{ ...defaultStyle, ...style }}>{children}</p>;
};

export default SectionTitle;
