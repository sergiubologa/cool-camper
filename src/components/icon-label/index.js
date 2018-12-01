import React from "react";
import Check from "../svg/check";

export default props => {
  const { text, className, icon } = props;
  const classes = ["icon__label"];
  if (className) {
    classes.push(className);
  }
  let IconComponent = icon ? icon : Check;
  return (
    <div className={classes.join(" ")}>
      <IconComponent color="#6c63ff" />
      <span>{text}</span>
    </div>
  );
};
