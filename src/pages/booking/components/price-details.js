import React from "react";
import TooltipIcon from "../../../components/tooltip";
import { getPrices } from "coolcamper-common";

export default props => {
  const {
    className,
    startDate,
    endDate,
    prices = getPrices(startDate, endDate)
  } = props;
  const classes = ["price__details"];
  if (className) classes.push(className);

  return (
    <div className={classes.join(" ")}>
      <div className="price__details__row">
        <span>
          {prices.averagePricePerDay}€ x {prices.totalNoOfDays}{" "}
          {prices.totalNoOfDays > 1 ? "zile" : "zi"}
          {prices.highSeasonDays > 0 && prices.lowSeasonDays > 0 && (
            <TooltipIcon>
              <small>
                <strong>
                  Sezon: {prices.highSeasonStart.format("D MMMM")} &rarr;{" "}
                  {prices.highSeasonEnd.format("D MMMM")}
                </strong>
              </small>
              <div
                className="price_details price__details__tooltip"
                style={{ minWidth: 200 }}
              >
                <div className="price__details__row">
                  <span>
                    <small>
                      {prices.lowSeasonPricePerDay}€ x {prices.lowSeasonDays}{" "}
                      zile
                    </small>
                  </span>
                  <span>
                    <small>{prices.lowSeasonPrice.toLocaleString()}€</small>
                  </span>
                </div>
                <div className="price__details__row">
                  <span>
                    <small>
                      {prices.highSeasonPricePerDay}€ x {prices.highSeasonDays}{" "}
                      zile
                    </small>
                  </span>
                  <span>
                    <small>{prices.highSeasonPrice.toLocaleString()}€</small>
                  </span>
                </div>
                <div className="price__details__row">
                  <small>pretul mediu pe zi de mai jos este rotunjit</small>
                </div>
              </div>
            </TooltipIcon>
          )}
        </span>
        <span>{prices.totalPrice.toLocaleString()}€</span>
      </div>
      <div className="price__details__row">
        <span>garanție</span>
        <span>{prices.deposit}€</span>
      </div>
      {prices.discount.amount > 0 && (
        <div className="price__details__row price__details__row__discount">
          <span>{prices.discount.percent}% discount</span>
          <span>-{prices.discount.amount.toLocaleString()}€</span>
        </div>
      )}

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
