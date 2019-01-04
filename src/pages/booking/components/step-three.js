import React from "react";
import Card from "../../../components/card";
import SummaryCardHeader from "./summary-card-header";
import IconLabel from "../../../components/icon-label";
import CheckmarkIcon from "../../../components/svg/checkmark";
import PriceDetails from "./price-details";
import Button from "../../../components/inputs/button";
import { Link } from "react-router-dom";
import { getNoOfDays, formatPhoneForDisplay } from "../../../common/utils";

export const Name = "Sumar";
export default props => {
  const { startDate, endDate, firstName, lastName, email, phone } = props;
  const noOfDays = getNoOfDays(startDate, endDate);
  return (
    <div className="step__three">
      <Card
        className="step__three__card step__three__card--type"
        renderHeader={() => (
          <SummaryCardHeader title="Tip autorulotă și perioada" />
        )}
        renderBody={() => (
          <React.Fragment>
            <p>Benimar 340 UP</p>
            <p>5 locuri de dormit + 5 pe scaun</p>
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
              text="Așternuturi, perne și lenjerii de pat"
              icon={CheckmarkIcon}
              iconWidth={16}
            />
            <IconLabel
              text="Prosoape de baie"
              icon={CheckmarkIcon}
              iconWidth={16}
            />
            <IconLabel
              text="Veselă, oale și tigăi pentru gătit"
              icon={CheckmarkIcon}
              iconWidth={16}
            />
            <IconLabel
              text="Anularea rezervării este gratuită, oricând"
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
            <PriceDetails days={noOfDays} />
            <div className="step__three__card__paymentMethods">
              <div className="step__three__card__paymentMethods--left">
                <p>
                  <strong>Modalitate de plată</strong>
                </p>
                <small>Prin transfer bancar</small>
                <small>Avans: 30% în max. 2 zile după rezervare</small>
                <small>Restul de 70%: cu 15 zile înainte de plecare</small>
              </div>
              <div className="step__three__card__paymentMethods--right">
                <p>
                  <strong>Anulare gratuită</strong>
                </p>
                <small>
                  În cazul anulării rezervării, suma plătită va fi returnată
                  integral, în maximum 15 zile lucrătoare.
                </small>
              </div>
            </div>
          </React.Fragment>
        )}
      />
      <Card
        className="step__three__card step__three__card--general"
        // renderHeader={() => (
        //   <SummaryCardHeader type="agreement" title="Conditii generale" />
        // )}
        renderBody={() => (
          <div className="step__three__card__sendReservation">
            <h3>Total de plată: 980€</h3>
            <small>
              Prin plasarea comenzii, ești de acord cu{" "}
              <Link to="/termeni-si-conditii" target="_blank">
                Termenii și Condițiile
              </Link>
              , cu{" "}
              <Link to="/politica-de-confidentialitate" target="_blank">
                Politica de Confidențialitate și Utilizare a cookie-urilor
              </Link>{" "}
              și cu{" "}
              <Link to="/anulare-rezervare" target="_blank">
                Politica de Anulare
              </Link>
            </small>
            <Button type="primary">Trimite rezervarea</Button>
          </div>
        )}
      />
    </div>
  );
};
