import React from "react";
import SimpleLayout from "../layouts/simple-layout";
import Multisteps from "../../components/multisteps";
import "../../styles/booking.css";
import StepOne, { Name as StepOneName } from "./components/step-one";
import StepTwo, { Name as StepTwoName } from "./components/step-two";
import StepThree, { Name as StepThreeName } from "./components/step-three";

const steps = [
  { name: StepOneName, component: <StepOne /> },
  { name: StepTwoName, component: <StepTwo /> },
  { name: StepThreeName, component: <StepThree /> }
];

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0
    };
    this.onStepChange = this.onStepChange.bind(this);
  }

  onStepChange(newStepIndex) {
    this.setState({
      currentStep: newStepIndex
    });
  }

  render() {
    const { currentStep } = this.state;
    const noOfSteps = steps.length;
    const currentStepName = steps[currentStep].name;
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
            steps={steps}
            onStepChange={this.onStepChange}
          />
        </div>
      </SimpleLayout>
    );
  }
}
