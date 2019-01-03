import React from "react";
import Button from "../inputs/button";

const getNavStates = (indx, length) => {
  let styles = [];
  for (let i = 0; i < length; i++) {
    if (i < indx) {
      styles.push("done");
    } else if (i === indx) {
      styles.push("doing");
    } else {
      styles.push("todo");
    }
  }
  return { current: indx, styles: styles };
};

const getNavButtonsState = (currentStep, stepsLength) => {
  if (currentStep > 0 && currentStep < stepsLength - 1) {
    return {
      showPreviousBtn: true,
      showNextBtn: true
    };
  } else if (currentStep === 0) {
    return {
      showPreviousBtn: false,
      showNextBtn: true
    };
  } else {
    return {
      showPreviousBtn: true,
      showNextBtn: false
    };
  }
};

export default class MultiStep extends React.Component {
  state = {
    showPreviousBtn: false,
    showNextBtn: true,
    currentStep: 0,
    navState: getNavStates(0, this.props.steps.length)
  };

  setNavState = next => {
    const noOfSteps = this.props.steps.length;
    const navButtonsState = getNavButtonsState(next, noOfSteps);
    const navState = getNavStates(next, noOfSteps);
    this.setState(
      {
        navState,
        currentStep: next < noOfSteps ? next : this.state.currentStep,
        ...navButtonsState
      },
      () => {
        if (this.props.onStepChanged)
          this.props.onStepChanged(this.state.currentStep);
      }
    );
  };

  onHeaderStepClick = evt => {
    const { currentStep } = this.state;
    const currentClickedStep = evt.currentTarget.value;
    const wantsOneStepFurther = currentClickedStep === currentStep + 1;
    const wantsStepBack = currentClickedStep < currentStep;

    if (wantsStepBack) return true;

    const isStepValidFunc = this.props.canChangeStep;
    if (wantsOneStepFurther && isStepValidFunc && isStepValidFunc())
      this.setNavState(currentClickedStep);
  };

  next = () => {
    this.setNavState(this.state.currentStep + 1);
  };

  previous = () => {
    if (this.state.currentStep > 0) {
      this.setNavState(this.state.currentStep - 1);
    }
  };

  render() {
    const { currentStep, showPreviousBtn, showNextBtn, navState } = this.state;
    const { steps, showNavigation } = this.props;
    return (
      <div className="container">
        <ol className="progtrckr">
          {steps.map((s, i) => (
            <li
              className={`progtrckr-${navState.styles[i]}`}
              onClick={this.onHeaderStepClick}
              key={i}
              value={i}
            >
              <em>{i + 1}</em>
              <span>{steps[i].name}</span>
            </li>
          ))}
        </ol>
        {steps[currentStep].component}
        <div
          className="progtrckr__buttons"
          style={showNavigation ? {} : { display: "none" }}
        >
          <Button
            type="tertiary"
            style={showPreviousBtn ? {} : { visibility: "hidden" }}
            onClick={this.previous}
          >
            Înapoi
          </Button>

          <Button
            style={showNextBtn ? {} : { visibility: "hidden" }}
            onClick={this.next}
          >
            Pasul Următor
          </Button>
        </div>
      </div>
    );
  }
}

MultiStep.defaultProps = {
  showNavigation: true
};
