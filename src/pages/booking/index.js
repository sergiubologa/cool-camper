import React from "react";
import SimpleLayout from "../layouts/simple-layout";
import Multisteps from "../../components/multisteps";
import "../../styles/booking.css";
import StepOne, { Name as StepOneName } from "./components/step-one";
import StepTwo, { Name as StepTwoName } from "./components/step-two";
import StepThree, { Name as StepThreeName } from "./components/step-three";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
      startDate: null,
      endDate: null,
      firstName: "",
      lastName: "",
      email: "",
      phone: ""
    };
    this.onStepChanged = this.onStepChanged.bind(this);
    this.onDatesChange = this.onDatesChange.bind(this);

    this.steps = [
      {
        name: StepOneName,
        component: <StepOne onDatesChange={this.onDatesChange} />
      },
      { name: StepTwoName, component: <StepTwo /> },
      { name: StepThreeName, component: <StepThree /> }
    ];
  }

  onDatesChange(startDate, endDate) {
    this.setState({
      startDate,
      endDate
    });
  }

  onStepChanged(newStepIndex) {
    this.setState({
      currentStep: newStepIndex
    });
  }

  canChangeStep(stepIndex) {
    switch (stepIndex) {
      case 0:
        return this.validateStepOne(this.state.startDate, this.state.endDate);
      case 1:
        return this.validateStepTwo(this.state.startDate, this.state.endDate);
      default:
        return true;
    }
  }
  validateStepOne(startDate, endDate) {
    return true;
  }
  validateStepTwo() {
    return false;
  }

  render() {
    const { currentStep } = this.state;
    const noOfSteps = this.steps.length;
    const currentStepName = this.steps[currentStep].name;
    return (
      <SimpleLayout>
        <div className="booking">
          <div className="booking__header">
            <div className="container">
              <h4>Rezervă o autorulotă</h4>
              <p>
                pasul {currentStep + 1} din {noOfSteps} - {currentStepName}
              </p>
            </div>
          </div>
          <Multisteps
            showNavigation
            steps={this.steps}
            canChangeStep={this.canChangeStep}
            onStepChanged={this.onStepChanged}
          />
        </div>
      </SimpleLayout>
    );
  }
}
