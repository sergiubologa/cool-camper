import React from "react";

export default props => {
  const { width = 18, color, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={props.width}
      height={props.width}
      {...rest}
    >
      <circle cx="31.978" cy="50.363" r="2" />
      <path
        d="M31.533 13.38c-6.268 0-10.162 3.894-10.162 10.162a1 1 0 1 0 2 0c0-5.188 2.975-8.162 8.162-8.162 7.876 0 9.052 5.672 9.052 9.053 0 3.288-2.702 7.029-6.285 8.7-4.056 1.892-3.347 8.53-3.315 8.81a.999.999 0 1 0 1.987-.226c-.006-.055-.548-5.501 2.174-6.77 4.31-2.012 7.439-6.434 7.439-10.514 0-6.921-4.132-11.053-11.052-11.053z"
        fill={color || "currentColor"}
      />
      <path
        d="M32 0C14.327 0 0 14.327 0 32s14.327 32 32 32 32-14.327 32-32S49.673 0 32 0zm0 62C15.458 62 2 48.542 2 32S15.458 2 32 2s30 13.458 30 30-13.458 30-30 30z"
        fill={color || "currentColor"}
      />
    </svg>
  );
};
