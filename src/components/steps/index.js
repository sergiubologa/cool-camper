import React from "react";
import StepsHeader from "./components/steps-header";
import Steps from "./components/steps";
import Step from "./components/step";
import StepMedia from "./components/step-media";
import StepText from "./components/step-text";

export default props => {
  return <div className="steps landing__section">{props.children}</div>;
};

export { StepsHeader, Steps, Step, StepMedia, StepText };
