import React from "react";
import PriceCard from "./price-card";
import Button from "../../inputs/button";
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
            <span>Se aplică discount-uri:</span>
            <ul>
              {prices.discounts.map(discount => (
                <li key={discount.minDays}>
                  peste {discount.minDays} zile - {discount.percent}% reducere
                </li>
              ))}
            </ul>
          </div>
          <Button type="accent" to="/rezervare-autorulota">
            Rezervă acum
          </Button>
        </React.Fragment>
      )}
    />
  );
};
