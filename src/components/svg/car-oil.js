import React from "react";
import colors, { defaultPalette } from "../../common/colors";

export default props => {
  const palette = props.palette || defaultPalette;
  const primaryColor = colors[palette].primary;
  const secondaryColor = colors[palette].secondary;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={props.width}
      height={props.height}
    >
      <path
        d="M418.981 0v30h-229.39c-7.12 0-12.91 5.79-12.91 12.91v61.74h-30V42.91c0-23.66 19.25-42.91 42.91-42.91h229.39z"
        fill={primaryColor}
      />
      <path
        fill={secondaryColor}
        d="M22.49 117.732l79.537-69.592 41.612 47.557-79.537 69.592z"
      />
      <path fill={primaryColor} d="M273.481 0h145.5v30h-145.5z" />
      <path
        d="M489.511 72.68v366.64c0 40.08-31.42 72.68-70.04 72.68h-295.98c-38.62 0-70.04-32.6-70.04-72.68V167.53l4.98-4.47c26.25-23.57 80.33-75.01 80.87-75.53l4.34-4.13h179.19L396.161 0h23.31c38.62 0 70.04 32.6 70.04 72.68z"
        fill={primaryColor}
      />
      <path
        d="M489.511 72.68v366.64c0 40.08-31.42 72.68-70.04 72.68h-145.99V83.4h49.35L396.161 0h23.31c38.62 0 70.04 32.6 70.04 72.68z"
        fill={primaryColor}
      />
      <path
        fill={secondaryColor}
        d="M369.981 375.38l46 46-21.21 21.22-46.01-46.01h-150.57l-46 46.01-21.22-21.22 46.01-46V224.81l-46.01-46.01 21.22-21.21 46 46h150.57l46.01-46 21.21 21.21-46 46.01z"
      />
      <path
        fill={secondaryColor}
        d="M369.981 224.81v150.57l46 46-21.21 21.22-46.01-46.01h-75.28v-193h75.28l46.01-46 21.21 21.21z"
      />
    </svg>
  );
};
