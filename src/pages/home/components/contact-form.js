import React from "react";
import Button from "../../../components/inputs/button";
import {
  isEmailValid as validateEmail,
  isFirstNameValid as validateFirstName
} from "coolcamper-common";
import Loader from "../../../components/loader";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.isFormValid = this.isFormValid.bind(this);
    this.validateField = this.validateField.bind(this);
    this.validateAllFields = this.validateAllFields.bind(this);

    this.state = {
      name: "",
      email: "",
      message: "",
      isSubmitting: false,
      submitError: "",
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
    this.validateAllFields().then(() => {
      if (this.isFormValid()) {
        this.setState({ isSubmitting: true, submitError: "" });
        // call api to send the message
        const { name, email, message } = this.state;
        const data = { name, email, message };
        fetch("/api/message", {
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
              submitSuccessful: res.error ? false : true,
              name: res.error ? this.state.name : "",
              email: res.error ? this.state.email : "",
              message: res.error ? this.state.message : ""
            });
            setTimeout(() => {
              this.setState({ submitSuccessful: false });
            }, 5000);
          })
          .catch(error => {
            this.setState({
              isSubmitting: false,
              submitError: "S-a produs o eroare. Încearcă din nou!"
            });
          });
      }
    });
  }

  onChange(event) {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    this.validateField(fieldName, fieldValue);
  }

  onBlur(event) {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    this.validateField(fieldName, fieldValue);
  }

  isFormValid() {
    const { errors } = this.state;
    return Object.keys(errors).find(key => errors[key].error) === undefined;
  }

  validateAllFields() {
    const { name, email, message } = this.state;
    const nameError = this.validators["name"](name);
    const emailError = this.validators["email"](email);
    const msgError = this.validators["message"](message);
    return new Promise(resolve =>
      this.setState(
        {
          errors: {
            name: { ...nameError, isTouched: true },
            email: { ...emailError, isTouched: true },
            message: { ...msgError, isTouched: true }
          }
        },
        resolve
      )
    );
  }

  validateField(fieldName, fieldValue) {
    const { errors } = this.state;
    const fieldErrorsProps = errors[fieldName];
    const validation = this.validators[fieldName](fieldValue.trim());

    this.setState({
      [fieldName]: fieldValue,
      errors: {
        ...errors,
        [fieldName]: {
          ...fieldErrorsProps,
          ...validation,
          isTouched: true
        }
      }
    });
  }

  render() {
    const {
      name,
      email,
      message,
      errors,
      isSubmitting,
      submitError,
      submitSuccessful
    } = this.state;
    const {
      name: nameError,
      email: emailError,
      message: messageError
    } = errors;
    const showNameError = !nameError.isValid && nameError.isTouched;
    const showEmailError = !emailError.isValid && emailError.isTouched;
    const showMessageError = !messageError.isValid && messageError.isTouched;
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
        {!submitSuccessful && (
          <div className="contact__form__submit">
            <Button
              onClick={this.onSubmit}
              className={isSubmitting ? "loading" : ""}
            >
              Trimite mesajul
            </Button>
            <Loader className={isSubmitting ? "loading" : ""} />
          </div>
        )}
        {submitError && (
          <label className="error contact__form__error">{submitError}</label>
        )}
        {submitSuccessful && (
          <label className="success contact__form__success">
            Mesajul a fost trimis. Multumim!
          </label>
        )}
      </div>
    );
  }
}
