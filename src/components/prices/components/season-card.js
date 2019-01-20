import React from "react";
import PriceCard from "./price-card";
import { prices } from "coolcamper-common";
import { Link } from "react-router-dom";
import moment from "moment";

export default () => {
  const highSeasonStartDate = moment(
    prices.highSeasonInterval[0],
    prices.datesFormat
  ).format("D MMMM");
  const highSeasonEndDate = moment(
    prices.highSeasonInterval[1],
    prices.datesFormat
  ).format("D MMMM");
  return (
    <PriceCard
      title="În sezon"
      subtitle={`${highSeasonStartDate} - ${highSeasonEndDate}`}
      renderContent={() => (
        <h1>
          {prices.highSeasonPricePerDay}€ <small>pe zi</small>
        </h1>
      )}
      renderFooter={() => (
        <React.Fragment>
          {prices.discounts && prices.discounts.length > 0 && (
            <div className="discounts">
              <span>Se aplică reduceri:</span>
              <ul>
                {prices.discounts.map(discount => (
                  <li key={discount.minDays}>
                    peste {discount.minDays} zile - {discount.percent}% reducere
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Link
            className="button button__accent"
            to="/rezervare-autorulota"
            ga-on="click,auxclick,contextmenu"
            ga-event-category="Button"
            ga-event-action="Rezervă acum"
            ga-event-label="season card"
          >
            Rezervă acum
          </Link>
        </React.Fragment>
      )}
    />
  );
};
