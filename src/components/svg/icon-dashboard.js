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
        d="M3 11h2a1 1 0 0 1 0 2H3v-2zm3.34-6.07l1.42 1.41a1 1 0 0 1-1.42 1.42L4.93 6.34l1.41-1.41zM13 3v2a1 1 0 0 1-2 0V3h2zm6.07 3.34l-1.41 1.42a1 1 0 1 1-1.42-1.42l1.42-1.41 1.41 1.41zM21 13h-2a1 1 0 0 1 0-2h2v2z"
      />
      <path
        fill={primaryColor}
        d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-6.93-6h13.86a8 8 0 1 0-13.86 0z"
      />
      <path
        fill={secondaryColor}
        d="M11 14.27V9a1 1 0 0 1 2 0v5.27a2 2 0 1 1-2 0z"
      />
    </svg>
  );
};
