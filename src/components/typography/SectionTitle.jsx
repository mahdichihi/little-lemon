import React from "react";
import { colors } from "../../theme/colors"; // Adjust the import path as necessary

const SectionTitle = ({ children, style, isActive, ...restProps }) => {
  const defaultStyle = {
    fontFamily: '"Karla", system-ui',
    fontWeight: 800,
    fontSize: "1.25rem",
    color: isActive ? colors.primary1 : colors.highlight2, // Default color
    textTransform: "uppercase",
  };

  return (
    <p style={{ ...defaultStyle, ...style }} {...restProps}>
      {children}
    </p>
  );
};

export default SectionTitle;
