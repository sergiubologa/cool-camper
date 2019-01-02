import React from "react";
import Check from "../svg/check-circle";

export default props => {
  const { text, className, icon: IconComponent = Check, iconWidth } = props;
  const classes = ["icon__label"];
  if (className) {
    classes.push(className);
  }
  return (
    <div className={classes.join(" ")}>
      <IconComponent color="#6c63ff" width={iconWidth} />
      <span>{text}</span>
    </div>
  );
};
