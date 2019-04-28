import React from "react";
import TooltipIcon from "../../../components/tooltip";
import { getPrices, pricesData } from "coolcamper-common";
import { dayOrDays } from "../../../common/utils";
import moment from "moment";

export default props => {
  const {
    className,
    startDate,
    endDate,
    prices = getPrices(startDate.hours(0), endDate.hours(0))
  } = props;

  const classes = ["price__details"];
  if (className) classes.push(className);
  const highSeasonStart = moment(
    pricesData.highSeasonInterval[0],
    pricesData.datesFormat
  ).format("D MMM");

  const highSeasonEnd = moment(
    pricesData.highSeasonInterval[1],
    pricesData.datesFormat
  ).format("D MMM");

  return (
    <div className={classes.join(" ")}>
      <div className="price__details__notes">
        <small>Preluare incepand cu ora 08:00</small>
        <small style={{ flexGrow: 1 }} />
        <small style={{ textAlign: "right" }}>Predare pana la ora 22:00</small>
      </div>
      {prices.lowSeasonDays > 0 && (
        <div className="price__details__row">
          <span>
            {prices.lowSeasonPricePerDay}€ x {prices.lowSeasonDays}{" "}
            {dayOrDays(prices.lowSeasonDays)}
          </span>
          <span>{prices.lowSeasonPrice.toLocaleString()}€</span>
        </div>
      )}
      {prices.highSeasonDays > 0 && (
        <div className="price__details__row">
          <span>
            {prices.highSeasonPricePerDay}€ x {prices.highSeasonDays}{" "}
            {dayOrDays(prices.highSeasonDays)}
            <TooltipIcon>
              <small>
                În intervalul {highSeasonStart} &rarr; {highSeasonEnd}
              </small>
              <small>
                prețul este de {prices.highSeasonPricePerDay}€ pe zi
              </small>
            </TooltipIcon>
          </span>
          <span>{prices.highSeasonPrice.toLocaleString()}€</span>
        </div>
      )}
      {prices.discounts.length > 0 &&
        prices.discounts.map((discount, index) => (
          <div
            className="price__details__row price__details__row__discount"
            key={index}
          >
            <span>{discount.message}</span>
            <span>
              -
              {(
                discount.lowSeasonAmount + discount.highSeasonAmount
              ).toLocaleString()}
              €
            </span>
          </div>
        ))}

      <div className="price__details__row">
        <span>
          <strong>Total</strong>
        </span>
        <span>
          <strong>{prices.totalPriceWithDiscount.toLocaleString()}€</strong>
        </span>
      </div>
    </div>
  );
};
