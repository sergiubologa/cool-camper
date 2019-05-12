import React from "react";
import colors, { defaultPalette } from "../../common/colors";

export default props => {
  const palette = props.palette || defaultPalette;
  const primaryColor = colors[palette].primary;
  const secondaryColor = colors[palette].secondary;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 426 320"
      width={props.width}
      height={props.height}
    >
      <path
        fill={primaryColor}
        d="M164 61h79v32h-79zM317 289v-39.5c0-3.9 3.2-7.5 7.1-7.5H346v-89h-21.9c-3.9-.1-7.1-3.4-7.1-7.3V107H89v38.7c0 3.9-3.1 7.2-7 7.3H60v89h22c3.9 0 7 3.6 7 7.5V289h228zm-139-79c-3.9 0-7-3.1-7-7 0-1.9.8-3.7 2.2-5.1l42-40c2.8-2.6 7.3-2.5 9.9.3 2.6 2.8 2.5 7.1-.2 9.8l-29.4 28H218c3.9 0 7 3.1 7 7 0 1.9-.7 3.6-2.1 5l-40 40c-2.7 2.7-7.2 2.7-9.9 0s-2.7-7.2 0-9.9l28-28.1h-23zM399 239.2c3.9 0 7-3.1 7-7V163c0-3.9-3.1-7-7-7s-7 3.1-7 7v24h-32v21h32v24.2c0 3.8 3.1 7 7 7zM27 156c-3.9 0-7 3.1-7 7v69.2c0 3.9 3.1 7 7 7s7-3.1 7-7V208h13v-21H34v-24c0-3.9-3.1-7-7-7zM243 37h24c3.9 0 7-3.1 7-7s-3.1-7-7-7H140.2c-3.9 0-7 3.1-7 7s3.1 7 7 7H164v10h79V37z"
      />
      <path
        fill={secondaryColor}
        d="M178 210c-3.9 0-7-3.1-7-7 0-1.9.8-3.7 2.2-5.1l42-40c2.8-2.6 7.3-2.5 9.9.3 2.6 2.8 2.5 7.1-.2 9.8l-29.4 28H218c3.9 0 7 3.1 7 7 0 1.9-.7 3.6-2.1 5l-40 40c-2.7 2.7-7.2 2.7-9.9 0s-2.7-7.2 0-9.9l28-28.1h-23z"
      />
    </svg>
  );
};
