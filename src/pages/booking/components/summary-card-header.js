import React from "react";
import CheckIcon from "../../../components/svg/check-circle";
import AgreementIcon from "../../../components/svg/agreement";

const headerTypes = {
  done: [CheckIcon, "#4DB5AC", 24],
  agreement: [AgreementIcon, "#4DB5AC", 24]
};

export default props => {
  const { type = "done", title, className, ...rest } = props;
  const classes = ["step__three__card__summaryHeader"];
  if (className) classes.push(className);
  const Icon = headerTypes[type][0];
  const iconColor = headerTypes[type][1];
  const iconWidth = headerTypes[type][2];
  return (
    <div className={classes.join(" ")} {...rest}>
      <Icon color={iconColor} width={iconWidth} />
      <h4>{title}</h4>
    </div>
  );
};
