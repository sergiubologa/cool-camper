import React from "react";
import PriceCard from "./price-card";
import { prices } from "coolcamper-common";
import { Link } from "react-router-dom";
import Price from "./price";
import PriceDetails from "./price-details";
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
        <Price
          price={prices.highSeasonPricePerDay}
          discounts={prices.discounts}
        />
      )}
      renderFooter={() => (
        <React.Fragment>
          <PriceDetails />

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
