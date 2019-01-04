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
export default props => {
  const { onInputChange, firstName, lastName, email, phone, errors } = props;
  const {
    firstName: fnError,
    lastName: lnError,
    phone: phoneError,
    email: emailError
  } = errors || {};
  return (
    <div className="step__two">
      <div className="step__two__inputs">
        <div className="step__two__inputs__row">
          <div className="step__two__inputs__row__input">
            {!lnError && <label htmlFor="lastName">Nume</label>}
            {lnError && (
              <label htmlFor="lastName" className="error">
                {lnError}
              </label>
            )}
            <input
              type="text"
              name="lastName"
              id="lastName"
              onChange={onInputChange}
              value={lastName}
              className={lnError ? "error" : ""}
            />
          </div>
          <div className="step__two__inputs__row__input">
            {!fnError && <label htmlFor="firstName">Prenume</label>}
            {fnError && (
              <label htmlFor="firstName" className="error">
                {fnError}
              </label>
            )}
            <input
              type="text"
              name="firstName"
              id="firstName"
              onChange={onInputChange}
              value={firstName}
              className={fnError ? "error" : ""}
            />
          </div>
        </div>
        <div className="step__two__inputs__row">
          <div className="step__two__inputs__row__input">
            {!emailError && <label htmlFor="email">Email</label>}
            {emailError && (
              <label htmlFor="email" className="error">
                {emailError}
              </label>
            )}
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              onChange={onInputChange}
              value={email}
              className={emailError ? "error" : ""}
            />
          </div>
        </div>
        <div className="step__two__inputs__row">
          <div className="step__two__inputs__row__input">
            {!phoneError && (
              <label htmlFor="phone">Telefon mobil {phoneTooltip}</label>
            )}
            {phoneError && (
              <label htmlFor="phone" className="error">
                {phoneError} {phoneTooltip}
              </label>
            )}
            <input
              type="text"
              name="phone"
              id="phone"
              autoComplete="tel"
              onChange={onInputChange}
              value={phone}
              className={phoneError ? "error" : ""}
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
};
