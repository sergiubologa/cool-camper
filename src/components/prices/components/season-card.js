import React from "react";
import PriceCard from "./price-card";
import { pricesData } from "coolcamper-common";
import { Link } from "react-router-dom";
import Price from "./price";
import PriceDetails from "./price-details";
import moment from "moment";

export default () => {
  const highSeasonStartDate = moment(
    pricesData.highSeasonInterval[0],
    pricesData.datesFormat
  ).format("D MMMM");
  const highSeasonEndDate = moment(
    pricesData.highSeasonInterval[1],
    pricesData.datesFormat
  ).format("D MMMM");
  return (
    <PriceCard
      title="În sezon"
      subtitle={`${highSeasonStartDate} - ${highSeasonEndDate}`}
      renderContent={() => (
        <Price
          price={pricesData.highSeasonPricePerDay}
          discounts={pricesData.discounts}
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
            ga-event-action="Fă o cerere"
            ga-event-label="season card"
          >
            Fă o cerere
          </Link>
        </React.Fragment>
      )}
    />
  );
};
