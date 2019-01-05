import React from "react";
import "../../styles/loader.css";

export default props => {
  const { width = 40, color = "#6c63ff", className, ...rest } = props;
  const colorStyle = {
    backgroundColor: color
  };
  const classes = ["loader"];
  if (className) classes.push(className);
  return (
    <div
      className={classes.join(" ")}
      style={{ width, height: width }}
      {...rest}
    >
      <div className="double-bounce1" style={colorStyle} />
      <div className="double-bounce2" style={colorStyle} />
    </div>
  );
};
