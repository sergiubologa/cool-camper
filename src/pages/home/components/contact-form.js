import React from "react";
import Button from "../../../components/inputs/button";
import {
  isEmailValid as validateEmail,
  isFirstNameValid as validateFirstName
} from "coolcamper-common";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.isFormValid = this.isFormValid.bind(this);

    this.state = {
      name: "",
      email: "",
      message: "",
      errors: {
        name: { error: "", isTouched: false },
        email: { error: "", isTouched: false },
        message: { error: "", isTouched: false }
      }
    };

    this.validators = {
      name: name =>
        validateFirstName(name)
          ? { isValid: true, error: "" }
          : { isValid: false, error: "Numele este obligatoriu" },
      email: email =>
        validateEmail(email)
          ? { isValid: true, error: "" }
          : { isValid: false, error: "Adresa de email nu este corecta" },
      message: message =>
        validateFirstName(message)
          ? { isValid: true, error: "" }
          : { isValid: false, error: "Mesajul este obligatoriu" }
    };
  }

  onSubmit() {
    if (this.isFormValid()) {
      // do the call
    }
    const { errors } = this.state;
    if (!errors.isFormTouched) {
      this.setState({
        errors: {
          ...errors,
          name: { ...errors.name, isTouched: true },
          email: { ...errors.email, isTouched: true },
          message: { ...errors.message, isTouched: true }
        }
      });
    }
  }

  onChange(event) {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const fieldValidation = this.validators[fieldName](fieldValue.trim());
    const { errors } = this.state;
    const fieldErrorsProps = errors[fieldName];

    this.setState({
      [fieldName]: fieldValue,
      errors: {
        ...errors,
        [fieldName]: {
          ...fieldErrorsProps,
          error: fieldValidation.error,
          isTouched: true
        }
      }
    });
  }

  onBlur(event) {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const { errors } = this.state;
    const fieldErrorsProps = errors[fieldName];
    const validation = this.validators[fieldName](fieldValue.trim());

    this.setState({
      errors: {
        ...errors,
        [fieldName]: {
          ...fieldErrorsProps,
          error: validation.error,
          isTouched: true
        }
      }
    });
  }

  isFormValid() {
    // call all validators
    const { errors } = this.state;
    return Object.keys(errors).find(key => errors[key].error) === undefined;
  }

  render() {
    const { name, email, message, errors } = this.state;
    const {
      name: nameError,
      email: emailError,
      message: messageError
    } = errors;
    const showNameError = nameError.error && nameError.isTouched;
    const showEmailError = emailError.error && emailError.isTouched;
    const showMessageError = messageError.error && messageError.isTouched;
    return (
      <div>
        {!showNameError && <label htmlFor="name">Nume</label>}
        {showNameError && (
          <label htmlFor="lastnameName" className="error">
            {nameError.error}
          </label>
        )}
        <input
          type="text"
          name="name"
          id="name"
          onChange={this.onChange}
          onBlur={this.onBlur}
          value={name}
          className={showNameError ? "error" : ""}
          placeholder="Numele complet..."
        />

        {!showEmailError && <label htmlFor="email">Email</label>}
        {showEmailError && (
          <label htmlFor="email" className="error">
            {emailError.error}
          </label>
        )}
        <input
          type="email"
          name="email"
          id="email"
          onChange={this.onChange}
          onBlur={this.onBlur}
          value={email}
          className={showEmailError ? "error" : ""}
          placeholder="you@example.com"
        />

        {!showMessageError && <label htmlFor="message">Mesaj</label>}
        {showMessageError && (
          <label htmlFor="message" className="error">
            {messageError.error}
          </label>
        )}
        <textarea
          name="message"
          id="message"
          placeholder="Mesajul pe care vrei sa ni-l trimiti..."
          value={message}
          onChange={this.onChange}
          onBlur={this.onBlur}
          className={showMessageError ? "error" : ""}
        />
        <Button onClick={this.onSubmit}>Trimite mesajul</Button>
      </div>
    );
  }
}
