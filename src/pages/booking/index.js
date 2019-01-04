import React from "react";
import SimpleLayout from "../layouts/simple-layout";
import Multisteps from "../../components/multisteps";
import "../../styles/booking.css";
import StepOne, { Name as StepOneName } from "./components/step-one";
import StepTwo, { Name as StepTwoName } from "./components/step-two";
import StepThree, { Name as StepThreeName } from "./components/step-three";
import {
  isEmailValid as validateEmail,
  isPhoneValid as validatePhone
} from "../../common/utils";

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
      phone: "",
      stepOneError: "",
      stepTwoErrors: {
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
      }
    };
    this.onStepChanged = this.onStepChanged.bind(this);
    this.onDatesChange = this.onDatesChange.bind(this);
    this.stepTwoInputChange = this.stepTwoInputChange.bind(this);
    this.canChangeStep = this.canChangeStep.bind(this);
  }

  onDatesChange({ startDate, endDate }) {
    this.setState({
      startDate,
      endDate
    });
  }

  stepTwoInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
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
        return this.validateStepOne();
      case 1:
        return this.validateStepTwo();
      default:
        return true;
    }
  }

  validateStepOne() {
    const { startDate, endDate } = this.state;
    const isValid = startDate && endDate && true;
    this.setState({
      stepOneError: isValid ? "" : "Perioada pentru inchiriere este obligatorie"
    });
    return isValid;
  }

  validateStepTwo() {
    const { firstName, lastName, email, phone } = this.state;
    const isFNValid = firstName && firstName.length > 1;
    const isLNValid = lastName && lastName.length > 1;
    const isEmailValid = validateEmail(email.trim());
    const isPhoneValid = validatePhone(phone.trim());

    this.setState({
      stepTwoErrors: {
        firstName: isFNValid ? "" : "Prenumele este obligatoriu",
        lastName: isLNValid ? "" : "Numele este obligatoriu",
        email: isEmailValid ? "" : "Adresa de email nu este corecta",
        phone: isPhoneValid ? "" : "Telefonul nu este corect"
      }
    });

    return isFNValid && isLNValid && isEmailValid && isPhoneValid;
  }

  render() {
    const {
      currentStep,
      startDate,
      endDate,
      firstName,
      lastName,
      email,
      phone,
      stepOneError,
      stepTwoErrors
    } = this.state;
    const stepOneData = { startDate, endDate };
    const stepTwoData = { firstName, lastName, email, phone };
    const steps = [
      {
        name: StepOneName,
        component: (
          <StepOne
            onDatesChange={this.onDatesChange}
            {...stepOneData}
            error={stepOneError}
          />
        )
      },
      {
        name: StepTwoName,
        component: (
          <StepTwo
            onInputChange={this.stepTwoInputChange}
            {...stepTwoData}
            errors={stepTwoErrors}
          />
        )
      },
      {
        name: StepThreeName,
        component: <StepThree {...stepOneData} {...stepTwoData} />
      }
    ];
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
            canChangeStep={this.canChangeStep}
            onStepChanged={this.onStepChanged}
          />
        </div>
      </SimpleLayout>
    );
  }
}
