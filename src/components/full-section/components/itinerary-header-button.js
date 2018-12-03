import React from "react";

export default React.forwardRef((props, ref) => {
  const { children, onClick, className, flags, ...rest } = props;
  const classes = ["itinerary__button"];
  if (className) classes.push(className);

  return (
    <button ref={ref} onClick={onClick} className={classes.join(" ")} {...rest}>
      <div>{children}</div>
      {flags &&
        flags.length > 0 &&
        flags.map((flag, index) => (
          <img src={flag} alt="Country flag" key={index} />
        ))}
    </button>
  );
});
