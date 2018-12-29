import React from "react";
import { withRouter } from "react-router";

export default withRouter(props => {
  // type options: delete, accent, primary, tertiary or no type
  const {
    type,
    className,
    children,
    renderIcon,
    formType,

    history,
    location,
    match,
    staticContext,
    to,
    onClick,
    // ⬆ filtering out props that `button` doesn’t know what to do with.

    ...rest
  } = props;

  const classes = ["button"];
  if (type) classes.push(`button__${type}`);
  if (className) classes.push(className);

  return (
    <button
      className={classes.join(" ")}
      type={formType}
      onClick={event => {
        onClick && onClick(event);
        to && history.push(to);
      }}
      {...rest}
    >
      {renderIcon && renderIcon()}
      {children}
    </button>
  );
});
