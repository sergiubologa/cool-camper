import React from "react";

export default props => {
  const {
    className,
    renderHeader,
    renderBody,
    renderFooter,
    renderRibbons,
    ...rest
  } = props;
  const classes = ["card"];
  if (className) classes.push(className);
  return (
    <div className={classes.join(" ")} {...rest}>
      {renderHeader && renderHeader()}
      {renderBody && renderBody()}
      {renderFooter && renderFooter()}
      {renderRibbons && renderRibbons()}
    </div>
  );
};
