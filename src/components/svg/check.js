import React from "react";

export default props => {
  const { width = 18, color, className } = props;
  return (
    <div
      style={{
        width: width,
        height: width
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 426.667 426.667"
        className={className}
      >
        <path
          d="M293.333 135.04L190.08 240.213l-52.907-53.12-28.373 28.374 83.413 83.2 133.974-129.92z"
          fill={color || "currentColor"}
        />
        <path
          d="M213.333 0C95.513 0 0 95.513 0 213.333s95.513 213.333 213.333 213.333 213.333-95.513 213.333-213.333S331.154 0 213.333 0zm0 388.053c-96.495 0-174.72-78.225-174.72-174.72s78.225-174.72 174.72-174.72c96.446.117 174.602 78.273 174.72 174.72 0 96.496-78.224 174.72-174.72 174.72z"
          fill={color || "currentColor"}
        />
      </svg>
    </div>
  );
};
