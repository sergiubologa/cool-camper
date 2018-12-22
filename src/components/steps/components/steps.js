import React from "react";

export default props => {
  const { children, className, ...rest } = props;
  const classes = ["container"];
  if (className) classes.push(className);
  return (
    <div className={classes.join(" ")} {...rest}>
      <div className="steps__inner">{children}</div>
    </div>
  );
};
