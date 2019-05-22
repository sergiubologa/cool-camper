import React from "react";
import colors, { defaultPalette } from "../../common/colors";

export default props => {
  const palette = props.palette || defaultPalette;
  const primaryColor = colors[palette].primary;
  const secondaryColor = colors[palette].secondary;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496.158 496.158"
      width={props.width || 18}
      height={props.height || 18}
    >
      <path
        d="M496.158 248.085C496.158 111.064 385.088.003 248.082.003 111.07.003 0 111.063 0 248.085c0 137.002 111.07 248.07 248.082 248.07 137.006 0 248.076-111.068 248.076-248.07z"
        fill={primaryColor}
      />
      <path
        d="M351.08 248.083c0-56.891-46.115-103.002-103-103.002-56.886 0-103.002 46.111-103.002 103.002 0 56.881 46.116 102.996 103.002 102.996 56.885 0 103-46.115 103-102.996z"
        fill={secondaryColor}
      />
    </svg>
  );
};
