import React from "react";
import IconLabel from "../../../components/icon-label";
import SecureData from "../../../assets/img/secure-data.svg";

export const Name = "Date de contact";
export default () => (
  <div className="step__two">
    <div className="step__two__inputs">
      <div className="step__two__inputs__row">
        <div className="step__two__inputs__row__input">
          <label htmlFor="lastName">Nume</label>
          <input type="text" name="lastName" id="lastName" />
        </div>
        <div className="step__two__inputs__row__input">
          <label htmlFor="firstName">Prenume</label>
          <input type="text" name="firstName" id="firstName" />
        </div>
      </div>
      <div className="step__two__inputs__row">
        <div className="step__two__inputs__row__input">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" autoComplete="email" />
        </div>
      </div>
      <div className="step__two__inputs__row">
        <div className="step__two__inputs__row__input">
          <label htmlFor="phone">Telefon mobil</label>
          <input type="text" name="phone" id="phone" autoComplete="tel" />
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
