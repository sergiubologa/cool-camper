import React from "react";
import colors, { defaultPalette } from "../../common/colors";

export default props => {
  const palette = props.palette || defaultPalette;
  const primaryColor = colors[palette].primary;
  const secondaryColor = colors[palette].secondary;
  const tertiaryColor = colors[palette].tertiary;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width={props.width}
      height={props.height}
    >
      <path
        fill={primaryColor}
        d="M4 11.7c0-1.1-.9-2-2-2s-2 .9-2 2V40h4v-8h42v8h4V28H4V11.7z"
      />
      <path
        fill={secondaryColor}
        d="M6.7 23.5c0 1 .8 1.5 1.8 1.5H50v-4.9c0-1.6-1.4-2.6-2.9-2.8l-29-2.8h-.2c-1 0-1.9.8-1.9 1.8V22H8.5c-1 0-1.8.5-1.8 1.5z"
      />
      <path
        fill={tertiaryColor}
        d="M10.3 19.9c2 0 3.7-1.6 3.7-3.7 0-2-1.7-3.7-3.7-3.7s-3.7 1.6-3.7 3.7c0 2 1.7 3.6 3.7 3.7z"
      />
    </svg>
  );
};
