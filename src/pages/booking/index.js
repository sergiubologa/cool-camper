import React from "react";
import SimpleLayout from "../layouts/simple-layout";
import Multisteps from "../../components/multisteps";
import "../../styles/booking.css";
import StepOne, { Name as StepOneName } from "./components/step-one";
import StepTwo, { Name as StepTwoName } from "./components/step-two";
import StepThree, { Name as StepThreeName } from "./components/step-three";
import SocialButton from "../../components/inputs/social-button";
import {
  isEmailValid as validateEmail,
  isPhoneValid as validatePhone,
  isFirstNameValid as validateFirstName,
  isLastNameValid as validateLastName
} from "coolcamper-common";
import SuperThankYou from "../../assets/img/super-thank-you.svg";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

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
        firstName: { error: "", isTouched: false },
        lastName: { error: "", isTouched: false },
        email: { error: "", isTouched: false },
        phone: { error: "", isTouched: false }
      },
      isSubmitting: false,
      submitError: "",
      submitSuccessful: false
    };
    this.onStepChanged = this.onStepChanged.bind(this);
    this.onDatesChange = this.onDatesChange.bind(this);
    this.stepTwoInputChange = this.stepTwoInputChange.bind(this);
    this.stepTwoInputBlur = this.stepTwoInputBlur.bind(this);
    this.canChangeStep = this.canChangeStep.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.stepTwoValidators = {
      firstName: firstName =>
        validateFirstName(firstName)
          ? { isValid: true, error: "" }
          : { isValid: false, error: "Prenumele este obligatoriu" },
      lastName: lastName =>
        validateLastName(lastName)
          ? { isValid: true, error: "" }
          : { isValid: false, error: "Numele este obligatoriu" },
      email: email =>
        validateEmail(email)
          ? { isValid: true, error: "" }
          : { isValid: false, error: "Adresa de email nu este corecta" },
      phone: phone =>
        validatePhone(phone)
          ? { isValid: true, error: "" }
          : { isValid: false, error: "Telefonul nu este corect" }
    };
  }

  onDatesChange({ startDate, endDate }) {
    this.setState({
      startDate,
      endDate
    });
  }

  stepTwoInputChange(event) {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const fieldValidation = this.stepTwoValidators[fieldName](
      fieldValue.trim()
    );
    const { stepTwoErrors } = this.state;
    const fieldErrorsProps = stepTwoErrors[fieldName];

    this.setState({
      [fieldName]: fieldValue,
      stepTwoErrors: {
        ...stepTwoErrors,
        [fieldName]: {
          ...fieldErrorsProps,
          error: fieldValidation.error
        }
      }
    });
  }

  stepTwoInputBlur(event) {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const { stepTwoErrors } = this.state;
    const fieldErrorsProps = stepTwoErrors[fieldName];
    const validation = this.stepTwoValidators[fieldName](fieldValue.trim());

    this.setState({
      stepTwoErrors: {
        ...stepTwoErrors,
        [fieldName]: {
          ...fieldErrorsProps,
          error: validation.error,
          isTouched: true
        }
      }
    });
  }

  onStepChanged(newStepIndex) {
    this.setState({
      currentStep: newStepIndex
    });
    window.scrollTo({ top: 0 });
  }

  onSubmit(prices) {
    this.setState({ isSubmitting: true, submitError: "" });
    const dateFormat = "YYYY-MM-DDD";
    // call api to send the emails
    const {
      startDate,
      endDate,
      firstName,
      lastName,
      email,
      phone
    } = this.state;
    const data = {
      startDate: startDate.utc(dateFormat),
      endDate: endDate.utc(dateFormat),
      firstName,
      lastName,
      email,
      phone
    };
    fetch("/api/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          isSubmitting: false,
          submitError: res.error,
          submitSuccessful: res.error ? false : true
        });
        if (!res.error) {
          window.scrollTo({ top: 0 });
          window.ga("send", "event", {
            eventCategory: "New booking",
            eventAction: "view booking step",
            eventLabel: "step thank you",
            eventValue: prices.totalPriceWithDiscount
          });
        }
      })
      .catch(error => {
        this.setState({
          isSubmitting: false,
          submitError: "S-a produs o eroare. Încearcă din nou!"
        });
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
    const fnValidation = this.stepTwoValidators["firstName"](firstName.trim());
    const lnValidation = this.stepTwoValidators["lastName"](lastName.trim());
    const emailValidation = this.stepTwoValidators["email"](email.trim());
    const phoneValidation = this.stepTwoValidators["phone"](phone.trim());

    this.setState({
      stepTwoErrors: {
        firstName: {
          error: fnValidation.error,
          isTouched: true
        },
        lastName: {
          error: lnValidation.error,
          isTouched: true
        },
        email: {
          error: emailValidation.error,
          isTouched: true
        },
        phone: {
          error: phoneValidation.error,
          isTouched: true
        }
      }
    });

    return (
      fnValidation.isValid &&
      lnValidation.isValid &&
      emailValidation.isValid &&
      phoneValidation.isValid
    );
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
      stepTwoErrors,
      isSubmitting,
      submitError,
      submitSuccessful
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
            onInputBlur={this.stepTwoInputBlur}
            {...stepTwoData}
            errors={stepTwoErrors}
          />
        )
      },
      {
        name: StepThreeName,
        component: (
          <StepThree
            {...stepOneData}
            {...stepTwoData}
            isLoading={isSubmitting}
            submitError={submitError}
            onSubmit={this.onSubmit}
          />
        )
      }
    ];
    const noOfSteps = steps.length;
    const currentStepName = steps[currentStep].name;
    return (
      <SimpleLayout>
        <Helmet>
          <title>CoolCamper - Rezerva autorulote in Cluj-Napoca</title>
          <meta
            name="description"
            content="Rezerva acum o autorulota in Cluj-Napoca! Ti-am pregatit o autorulota moderna, toate dotarile necesare si itinerarii complete. Vei avea parte de o experienta unica!"
          />
        </Helmet>
        <div className="booking">
          {!submitSuccessful && (
            <React.Fragment>
              <div className="booking__header">
                <div className="container">
                  <h4>Verifică disponibilitatea autorulotelor</h4>
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
            </React.Fragment>
          )}
          {submitSuccessful && (
            <div className="booking__successful">
              <img src={SuperThankYou} alt="Super multumim!" />
              <h2>Îți mulțumim!</h2>
              <p>
                În cel mai scurt timp te vom contacta pentru a confirma
                disponibilitatea autorulotei și pentru a stabili detaliile unei
                posibile rezervări.
              </p>
              <p>Până atunci, spune-le și prietenilor tăi despre noi</p>
              <div className="booking__successful--socialButtons">
                <SocialButton
                  type="facebook"
                  text="Facebook"
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.coolcamper.ro"
                  ga-on="click,auxclick,contextmenu"
                  ga-hit-type="social"
                  ga-social-network="Facebook"
                  ga-social-action="share on Facebook"
                  ga-social-target="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.coolcamper.ro"
                  ga-event-label="after booking - thank you screen"
                />
                <SocialButton
                  type="twitter"
                  text="Twitter"
                  href="https://twitter.com/home?status=Tocmai%20am%20rezervat%20o%20autorulota%20de%20la%20CoolCamper%20cu%20care%20vrem%20sa%20mergem%20in%20vacanta!%20%F0%9F%8E%8A"
                  ga-on="click,auxclick,contextmenu"
                  ga-hit-type="social"
                  ga-social-network="Twitter"
                  ga-social-action="tweet"
                  ga-social-target="https://twitter.com/home?status=Tocmai%20am%20rezervat%20o%20autorulota%20de%20la%20CoolCamper%20cu%20care%20vrem%20sa%20mergem%20in%20vacanta!%20%F0%9F%8E%8A"
                  ga-event-label="after booking - thank you screen"
                />
              </div>
              <small>sau</small>
              <Link
                to="/"
                ga-on="click,auxclick,contextmenu"
                ga-event-category="Link"
                ga-event-action="Mergi înapoi la pagina principală"
                ga-event-label="step thank you"
              >
                Mergi înapoi la pagina principală
              </Link>
            </div>
          )}
        </div>
      </SimpleLayout>
    );
  }
}
