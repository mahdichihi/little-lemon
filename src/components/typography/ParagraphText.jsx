import React from "react";
import { colors } from "../../theme/colors"; // Adjust the import path as necessary

const ParagraphText = ({ children, style, ...restProps }) => {
  const defaultStyle = {
    fontFamily: '"Karla", system-ui',
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: "1.375rem",
    color: colors.highlight2, // Default color
  };

  return (
    <p style={{ ...defaultStyle, ...style }} {...restProps}>
      {children}
    </p>
  );
};

export default ParagraphText;
