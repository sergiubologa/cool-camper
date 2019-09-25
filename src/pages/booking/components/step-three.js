import React from "react";
import Card from "../../../components/card";
import SummaryCardHeader from "./summary-card-header";
import IconLabel from "../../../components/icon-label";
import CheckmarkIcon from "../../../components/svg/checkmark";
import PriceDetails from "./price-details";
import Button from "../../../components/inputs/button";
import { Link } from "react-router-dom";
import {
  getNoOfDays,
  formatPhoneForDisplay,
  getPrices
} from "coolcamper-common";
import Loader from "../../../components/loader";

export const Name = "Sumar";
export default class extends React.Component {
  constructor(props) {
    super(props);
    window.ga("send", "event", {
      eventCategory: "New booking",
      eventAction: "view booking step",
      eventLabel: "step 3"
    });
  }

  render() {
    const {
      startDate,
      endDate,
      firstName,
      lastName,
      email,
      phone,
      isLoading,
      submitError,
      onSubmit
    } = this.props;
    const noOfDays = getNoOfDays(startDate, endDate);
    const prices = getPrices(startDate, endDate);

    return (
      <div className="step__three">
        <Card
          className="step__three__card step__three__card--type"
          renderHeader={() => (
            <SummaryCardHeader title="Tip autorulotă și perioada" />
          )}
          renderBody={() => (
            <React.Fragment>
              <p>Benimar Tessoro 495</p>
              <p>5 locuri de dormit + 5 pe scaune</p>
              <p>
                <strong>
                  {noOfDays} zile - {startDate.format("D MMM YYYY")} &rarr;{" "}
                  {endDate.format("D MMM YYYY")}
                </strong>
              </p>
            </React.Fragment>
          )}
        />
        <Card
          className="step__three__card step__three__card--contactData"
          renderHeader={() => <SummaryCardHeader title="Date de contact" />}
          renderBody={() => (
            <React.Fragment>
              <p>
                {firstName} {lastName}
              </p>
              <p>{formatPhoneForDisplay(phone)}</p>
              <p>{email}</p>
            </React.Fragment>
          )}
        />
        <Card
          className="step__three__card step__three__card--benefits"
          renderHeader={() => <SummaryCardHeader title="Beneficii incluse" />}
          renderBody={() => (
            <React.Fragment>
              <IconLabel
                text="Asigurare full CASCO"
                icon={CheckmarkIcon}
                iconWidth={16}
              />
              <IconLabel text="Rovignetă" icon={CheckmarkIcon} iconWidth={16} />
              <IconLabel
                text="Număr nelimitat de km"
                icon={CheckmarkIcon}
                iconWidth={16}
              />
              <IconLabel
                text="Suport de biciclete"
                icon={CheckmarkIcon}
                iconWidth={16}
              />
              <IconLabel
                text="Masă și scaune de camping"
                icon={CheckmarkIcon}
                iconWidth={16}
              />
              <IconLabel
                text="Veselă, oale și tigăi pentru gătit"
                icon={CheckmarkIcon}
                iconWidth={16}
              />
              <IconLabel
                text="Preluare începând cu ora 08:00"
                icon={CheckmarkIcon}
                iconWidth={16}
              />
              <IconLabel
                text="Predare până la ora 22:00"
                icon={CheckmarkIcon}
                iconWidth={16}
              />
              <IconLabel
                text="Anularea rezervării este gratuită, cu minimum 30 de zile înainte de preluare"
                icon={CheckmarkIcon}
                iconWidth={16}
              />
            </React.Fragment>
          )}
        />
        <Card
          className="step__three__card step__three__card--price"
          renderHeader={() => <SummaryCardHeader title="Preț" />}
          renderBody={() => (
            <React.Fragment>
              <PriceDetails
                startDate={startDate}
                endDate={endDate}
                prices={prices}
              />
              <div className="step__three__card__paymentMethods">
                <div className="step__three__card__paymentMethods--left">
                  <p>
                    <strong>Modalitate de plată</strong>
                  </p>
                  <small>
                    Prin transfer bancar, la cursul BNR din ziua facturării
                  </small>
                  <small>Avans: 30% în max. 2 zile după rezervare</small>
                  <small>Restul de 70%: cu 15 zile înainte de plecare</small>
                </div>
                <div className="step__three__card__paymentMethods--right">
                  <p>
                    <strong>Garanție</strong>
                  </p>
                  <small>
                    Garanția returnabilă de {prices.deposit}€ se plătește în
                    numerar (cash) la preluarea autorulotei.
                  </small>
                  <p>
                    <strong>Anulare gratuită</strong>
                  </p>
                  <small>
                    În cazul anulării rezervării cu minimum 30 de zile înainte
                    de preluare, suma plătită va fi returnată integral.
                  </small>
                </div>
              </div>
            </React.Fragment>
          )}
        />
        <Card
          className="step__three__card step__three__card--general"
          renderBody={() => (
            <div className="step__three__card__sendReservation">
              <h3>
                Total de plată: {prices.totalPriceWithDiscount.toLocaleString()}
                €
              </h3>
              <small>
                Prin plasarea comenzii, ești de acord cu{" "}
                <Link
                  to="/termeni-si-conditii"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Termenii și Condițiile
                </Link>
                , cu{" "}
                <Link
                  to="/politica-de-confidentialitate"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Politica de Confidențialitate și Utilizare a cookie-urilor
                </Link>{" "}
                și cu{" "}
                <Link
                  to="/anulare-rezervare"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Politica de Anulare
                </Link>
              </small>
              <div className="step__three__card__sendReservation--submit">
                <Button
                  type="primary"
                  onClick={() => onSubmit(prices)}
                  className={isLoading ? "loading" : ""}
                  ga-on="click"
                  ga-event-category="Button"
                  ga-event-action="Verifică disponibilitatea"
                  ga-event-label="booking step 3"
                  ga-event-value={Math.floor(prices.totalPriceWithDiscount)}
                >
                  Verifică disponibilitatea
                </Button>
                <Loader className={isLoading ? "loading" : ""} />
              </div>
              {submitError && <label className="error">{submitError}</label>}
            </div>
          )}
        />
      </div>
    );
  }
}
