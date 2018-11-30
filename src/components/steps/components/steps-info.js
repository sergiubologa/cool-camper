import React from "react";
import Check from "../../svg/check";

export default props => (
  <div className="reason">
    <Check color="#6c63ff" />
    <span>{props.text}</span>
  </div>
);
