import React from "react";

export default props => {
  return (
    <div className="other-asset-wrapper">
      <div className="title">{props.title}</div>
      <div className="text">{props.text}</div>
    </div>
  );
};
