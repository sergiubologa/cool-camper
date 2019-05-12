import React from "react";

export default props => {
  const Icon = props.icon;
  return (
    <div className="main-asset-wrapper">
      <div className="icon" style={{ width: props.iconWidth || null }}>
        <Icon palette={props.palette} />
      </div>
      <div className="text">{props.text}</div>
    </div>
  );
};
