import React from "react";
import StepsHeader from "./components/steps-header";
import Steps from "./components/steps";
import Step from "./components/step";
import StepMedia from "./components/step-media";
import StepText from "./components/step-text";
import StepsMoreInfo from "./components/steps-more-info";
import StepsInfo from "./components/steps-info";

export default props => {
  return <div className="steps landing__section">{props.children}</div>;
};

export {
  StepsHeader,
  Steps,
  Step,
  StepMedia,
  StepText,
  StepsMoreInfo,
  StepsInfo
};
