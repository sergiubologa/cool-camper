import React from "react";

export default props => {
  const { className, ...rest } = props;
  const classes = ["icon-button"];
  if (className) {
    classes.push(className);
  }
  return (
    <button className={classes.join(" ")} {...rest}>
      {props.children}
    </button>
  );
};
