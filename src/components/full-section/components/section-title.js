import React from "react";

export default props => {
  const { className, ...rest } = props;
  const classes = ["expanded__title"];
  if (className) classes.push(className);
  return (
    <h2 className={classes.join(" ")} {...rest}>
      {props.children}
    </h2>
  );
};
