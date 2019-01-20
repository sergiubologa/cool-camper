import React from "react";
import PriceCard from "./price-card";
import { Link } from "react-router-dom";
import { prices } from "coolcamper-common";
import moment from "moment";

export default () => {
  const lowSeasonStartDate = moment(
    prices.highSeasonInterval[1],
    prices.datesFormat
  )
    .add(1, "d")
    .format("D MMMM");
  const lowSeasonEndDate = moment(
    prices.highSeasonInterval[0],
    prices.datesFormat
  )
    .add(-1, "d")
    .format("D MMMM");
  return (
    <PriceCard
      title="În extra sezon"
      subtitle={`${lowSeasonStartDate} - ${lowSeasonEndDate}`}
      type="extra-season"
      renderContent={() => (
        <h1>
          {prices.lowSeasonPricePerDay}€ <small>pe zi</small>
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
            ga-event-label="extra-season card"
          >
            Rezervă acum
          </Link>
        </React.Fragment>
      )}
    />
  );
};
