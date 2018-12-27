import React from "react";

export default props => {
  const { children, ...rest } = props;
  return (
    <p className="expanded__text" {...rest}>
      {children}
    </p>
  );
};
