import React from "react";
import Check from "../svg/check-circle";

export default props => {
  const {
    text,
    className,
    icon: IconComponent = Check,
    iconColor = "#6c63ff",
    size = "normal",
    ...rest
  } = props;
  let { iconWidth } = props;
  const classes = ["icon__label"];
  if (className) {
    classes.push(className);
  }
  if (size === "small") {
    classes.push("small");
    if (!iconWidth) {
      iconWidth = 16;
    }
  }

  return (
    <div className={classes.join(" ")}>
      <IconComponent color={iconColor} width={iconWidth} {...rest} />
      {size === "small" ? <small>{text}</small> : <span>{text}</span>}
    </div>
  );
};
