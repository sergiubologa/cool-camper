import React from "react";
import PriceCard from "./price-card";
import Button from "../../inputs/button";
import { prices } from "coolcamper-common";
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
          <div className="discounts">
            <span>Se aplică discount-uri:</span>
            <ul>
              {prices.discounts.map(discount => (
                <li key={discount.minDays}>
                  peste {discount.minDays} zile - {discount.percent}% reducere
                </li>
              ))}
            </ul>
          </div>
          <Button
            type="accent"
            to="/rezervare-autorulota"
            ga-on="click"
            ga-event-category="Button"
            ga-event-action="click"
            ga-event-label="season card"
            ga-event-value="Rezervă acum"
          >
            Rezervă acum
          </Button>
        </React.Fragment>
      )}
    />
  );
};
