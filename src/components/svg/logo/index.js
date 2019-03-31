import React, { useState } from "react";
import SeaSideLogo from "./sea-side";
import HillsLogo from "./hills";
import NightLogo from "./night";

export default props => {
  const {
    timeOfDay,
    textColor = "#D4DAE1",
    hoverTextColor = "#fff",
    ...rest
  } = props;
  const [textColorState, setTextColor] = useState(textColor);
  const colors = {
    text: textColorState,
    sky: "#bfe1ff",
    skyNight: "#3b4da1",
    water: "#4079a3",
    grass: "#64bc46",
    stars: "#e8af3b",
    sun: "#e8af3b",
    mainShape: "#414141"
  };
  const Logo =
    timeOfDay === "morning"
      ? SeaSideLogo
      : timeOfDay === "night"
      ? NightLogo
      : HillsLogo;

  return (
    <Logo
      colors={colors}
      onMouseEnter={() => setTextColor(hoverTextColor)}
      onMouseLeave={() => setTextColor(textColor)}
      textStyle={{
        fill: colors.text,
        WebkitTransition: "all 0.7s ease",
        OTransition: "all 0.7s ease",
        transition: "all 0.7s ease"
      }}
      {...rest}
    />
  );
};
