import React from "react";

export default props => {
  // type options: delete, primary, accent or no type
  const { type, className, children, ...rest } = props;
  const classes = ["button"];
  if (type) {
    classes.push(`button__${type}`);
  }
  if (className) {
    classes.push(className);
  }
  return (
    <button className={classes.join(" ")} {...rest}>
      {children}
    </button>
  );
};
