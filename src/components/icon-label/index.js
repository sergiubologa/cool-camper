import React from "react";
import Check from "../svg/check-circle";

export default props => {
  const {
    text,
    className,
    icon: IconComponent = Check,
    iconWidth,
    iconColor = "#6c63ff"
  } = props;
  const classes = ["icon__label"];
  if (className) {
    classes.push(className);
  }
  return (
    <div className={classes.join(" ")}>
      <IconComponent color={iconColor} width={iconWidth} />
      <span>{text}</span>
    </div>
  );
};
