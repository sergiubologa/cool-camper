import React from "react";
import IconLabel from "../../../components/icon-label";
import SecureData from "../../../assets/img/secure-data.svg";
import CheckmarkIcon from "../../../components/svg/checkmark";
import TooltipIcon from "../../../components/tooltip";

export const Name = "Date de contact";
export default props => {
  const { onInputChange, firstName, lastName, email, phone } = props;
  return (
    <div className="step__two">
      <div className="step__two__inputs">
        <div className="step__two__inputs__row">
          <div className="step__two__inputs__row__input">
            <label htmlFor="lastName">Nume</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              onChange={onInputChange}
              value={lastName}
            />
          </div>
          <div className="step__two__inputs__row__input">
            <label htmlFor="firstName">Prenume</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              onChange={onInputChange}
              value={firstName}
            />
          </div>
        </div>
        <div className="step__two__inputs__row">
          <div className="step__two__inputs__row__input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              onChange={onInputChange}
              value={email}
            />
          </div>
        </div>
        <div className="step__two__inputs__row">
          <div className="step__two__inputs__row__input">
            <label htmlFor="phone">
              Telefon mobil
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
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              autoComplete="tel"
              onChange={onInputChange}
              value={phone}
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
