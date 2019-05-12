import React from "react";
import colors, { defaultPalette } from "../../common/colors";

export default props => {
  const palette = props.palette || defaultPalette;
  const primaryColor = colors[palette].primary;
  const secondaryColor = colors[palette].secondary;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240.2 240.2"
      width={props.width}
      height={props.height}
    >
      <path
        fill={secondaryColor}
        d="M213.6 44.9l1.5-13.2c.8-2 1.2-4 1.4-6.1l.3-5c.4-5.5-1.4-10.7-5.1-14.6-3.6-3.8-8.7-6-14.2-6h-15.1c-11.2 0-21.8 8.9-23.7 19.9l-1 5.4c-1 5.5.3 10.7 3.6 14.6S169.5 46 175 46h19.6c2.7.1 5.4-.5 19-1.1z"
      />
      <path
        fill={primaryColor}
        d="M193.8 61h-22.3c-9.6 0-19 7.6-20.9 17l-19.7 93-93.1-6.7c-5-.4-9.2 1.3-11.8 4.7-2.4 3.1-3.2 7.3-2 11.8l10.8 42.6c2.3 9.2 12 16.7 21.5 16.7h119c9.7 0 18.3-7.8 19.4-17.4l15.3-144c.1-.8.1-1.6.1-2.4l1.6-13.8c-13.4-1-15.7-1.5-17.9-1.5z"
      />
    </svg>
  );
};
