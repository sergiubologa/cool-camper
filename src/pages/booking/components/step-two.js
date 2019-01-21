import React from "react";
import IconLabel from "../../../components/icon-label";
import SecureData from "../../../assets/img/secure-data.svg";
import CheckmarkIcon from "../../../components/svg/checkmark";
import TooltipIcon from "../../../components/tooltip";

const phoneTooltip = (
  <TooltipIcon>
    <div id="stepTwoPhoneTooltip">
      <small>Formate de numere valide:</small>
      <IconLabel
        icon={CheckmarkIcon}
        iconWidth={16}
        text="0720 512 346"
        iconColor="#4DB5AC"
      />
      <IconLabel
        icon={CheckmarkIcon}
        iconWidth={16}
        text="0720-512-346"
        iconColor="#4DB5AC"
      />
      <IconLabel
        icon={CheckmarkIcon}
        iconWidth={16}
        text="0720.512.346"
        iconColor="#4DB5AC"
      />
      <IconLabel
        icon={CheckmarkIcon}
        iconWidth={16}
        text="0720512346"
        iconColor="#4DB5AC"
      />
    </div>
  </TooltipIcon>
);

export const Name = "Date de contact";
export default class extends React.Component {
  constructor(props) {
    super(props);
    window.ga("send", "event", {
      eventCategory: "New booking",
      eventAction: "view booking step",
      eventLabel: "step 2"
    });
  }

  render() {
    const {
      onInputChange,
      onInputBlur,
      firstName,
      lastName,
      email,
      phone,
      errors
    } = this.props;
    const {
      firstName: fnError,
      lastName: lnError,
      phone: phoneError,
      email: emailError
    } = errors || {};
    const showFNError = fnError.error && fnError.isTouched;
    const showLNError = lnError.error && lnError.isTouched;
    const showEmailError = emailError.error && emailError.isTouched;
    const showPhoneError = phoneError.error && phoneError.isTouched;
    return (
      <div className="step__two">
        <div className="step__two__inputs">
          <div className="step__two__inputs__row">
            <div className="step__two__inputs__row__input">
              {!showLNError && <label htmlFor="lastName">Nume</label>}
              {showLNError && (
                <label htmlFor="lastName" className="error">
                  {lnError.error}
                </label>
              )}
              <input
                type="text"
                name="lastName"
                id="lastName"
                onChange={onInputChange}
                onBlur={onInputBlur}
                value={lastName}
                className={showLNError ? "error" : ""}
              />
            </div>
            <div className="step__two__inputs__row__input">
              {!showFNError && <label htmlFor="firstName">Prenume</label>}
              {showFNError && (
                <label htmlFor="firstName" className="error">
                  {fnError.error}
                </label>
              )}
              <input
                type="text"
                name="firstName"
                id="firstName"
                onChange={onInputChange}
                onBlur={onInputBlur}
                value={firstName}
                className={showFNError ? "error" : ""}
              />
            </div>
          </div>
          <div className="step__two__inputs__row">
            <div className="step__two__inputs__row__input">
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
                autoComplete="email"
                onChange={onInputChange}
                onBlur={onInputBlur}
                value={email}
                className={showEmailError ? "error" : ""}
              />
            </div>
          </div>
          <div className="step__two__inputs__row">
            <div className="step__two__inputs__row__input">
              {!showPhoneError && (
                <label htmlFor="phone">Telefon mobil {phoneTooltip}</label>
              )}
              {showPhoneError && (
                <label htmlFor="phone" className="error">
                  {phoneError.error} {phoneTooltip}
                </label>
              )}
              <input
                type="text"
                name="phone"
                id="phone"
                autoComplete="tel"
                onChange={onInputChange}
                onBlur={onInputBlur}
                value={phone}
                className={showPhoneError ? "error" : ""}
              />
            </div>
          </div>
        </div>
        <div className="step__two__details">
          <img src={SecureData} alt="Datele sunt în siguranță" />
          <h4>Datele tale sunt în siguranță</h4>
          <div className="step__two__details__labels">
            <IconLabel text="Respectăm regulile GDPR" />
            <IconLabel text="Nu trimitem spam-uri" />
            <IconLabel text="Nu vindem datele tale altor terți" />
          </div>
        </div>
      </div>
    );
  }
}
