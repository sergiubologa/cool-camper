import React from "react";

export default props => {
  const { width = 18, color, className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={width}
      height={width}
      className={className}
    >
      <path
        d="M14.5 2.793l-9 9-3.648-3.645-.352-.355-.707.707.355.352L5.5 13.207 15.207 3.5z"
        fill={color || "currentColor"}
      />
    </svg>
  );
};
