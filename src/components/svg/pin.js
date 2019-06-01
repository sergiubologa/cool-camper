import React from "react";
import colors, { defaultPalette } from "../../common/colors";

export default props => {
  const palette = props.palette || defaultPalette;
  const primaryColor = colors[palette].primary;
  const secondaryColor = colors[palette].secondary;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={props.width}
      height={props.height}
    >
      <path
        fill={secondaryColor}
        d="M12 1v6a3 3 0 0 0 0 6v9.31a1 1 0 0 1-.7-.29l-5.66-5.66A9 9 0 0 1 12 1z"
      />
      <path
        fill={primaryColor}
        d="M12 1a9 9 0 0 1 6.36 15.36l-5.65 5.66a1 1 0 0 1-.71.3V13a3 3 0 0 0 0-6V1z"
      />
    </svg>
  );
};
