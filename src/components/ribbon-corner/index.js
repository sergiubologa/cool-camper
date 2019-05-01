import React from "react";
import "../../styles/ribbons.css";

export default props => (
  <div className="ribbon-corner-wrapper">
    <span className="ribbon">{props.text}</span>
  </div>
);
