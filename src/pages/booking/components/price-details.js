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

  const highSeasonDiscounts =
    prices.discounts.length === 0
      ? []
      : prices.discounts.filter(
          discount =>
            discount.highSeasonAmount > 0 && discount.lowSeasonAmount === 0
        );
  const lowSeasonDiscounts =
    prices.discounts.length === 0
      ? []
      : prices.discounts.filter(
          discount =>
            discount.lowSeasonAmount > 0 && discount.highSeasonAmount === 0
        );
  const remainingDiscounts =
    prices.discounts.length === 0
      ? []
      : prices.discounts.filter(
          discount =>
            discount.lowSeasonAmount > 0 && discount.highSeasonAmount > 0
        );

  return (
    <div className={classes.join(" ")}>
      <div className="price__details__notes">
        <small>Preluare începând cu ora 08:00</small>
        <small style={{ flexGrow: 1 }} />
        <small style={{ textAlign: "right" }}>Predare până la ora 22:00</small>
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
      {lowSeasonDiscounts && renderDiscounts(lowSeasonDiscounts, true, false)}
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
      {highSeasonDiscounts && renderDiscounts(highSeasonDiscounts, false, true)}
      {remainingDiscounts && renderDiscounts(remainingDiscounts, true, true)}

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

const renderDiscounts = (discounts, isLowSeason, isHighSeason) =>
  discounts.map((discount, index) => (
    <div
      className="price__details__row price__details__row__discount"
      key={index}
    >
      <span>{discount.message}</span>
      <span>
        -
        {(
          (isLowSeason ? discount.lowSeasonAmount : 0) +
          (isHighSeason ? discount.highSeasonAmount : 0)
        ).toLocaleString()}
        €
      </span>
    </div>
  ));
