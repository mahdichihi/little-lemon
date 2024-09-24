import React from "react";
import { colors } from "../../theme/colors"; // Adjust the import path as necessary

const CardTitle = ({ children, style, ...restProps }) => {
  const defaultStyle = {
    fontFamily: '"Karla", system-ui',
    fontWeight: 700,
    fontSize: "1.125rem",
    color: colors.highlight2, // Default color
  };

  return (
    <p style={{ ...defaultStyle, ...style }} {...restProps}>
      {children}
    </p>
  );
};

export default CardTitle;
