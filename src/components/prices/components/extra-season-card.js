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
          <Link
            className="button button__accent"
            to="/rezervare-autorulota"
            ga-on="click"
            ga-event-category="Button"
            ga-event-action="click"
            ga-event-label="extra-season card"
            ga-event-value="Rezervă acum"
          >
            Rezervă acum
          </Link>
        </React.Fragment>
      )}
    />
  );
};
