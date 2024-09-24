import React from "react";
import { colors } from "../../theme/colors"; // Adjust the import path as necessary

const LeadText = ({ children, style, ...restProps }) => {
  const defaultStyle = {
    fontFamily: '"Karla", system-ui',
    fontWeight: 500,
    fontSize: "1.125rem",
    lineHeight: "1.75rem",
    color: colors.highlight2, // Default color
  };

  return (
    <p style={{ ...defaultStyle, ...style }} {...restProps}>
      {children}
    </p>
  );
};

export default LeadText;
