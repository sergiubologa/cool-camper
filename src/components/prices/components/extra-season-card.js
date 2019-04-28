import React from "react";
import PriceCard from "./price-card";
import { Link } from "react-router-dom";
import { pricesData } from "coolcamper-common";
import moment from "moment";
import Price from "./price";
import PriceDetails from "./price-details";

export default () => {
  const lowSeasonStartDate = moment(
    pricesData.highSeasonInterval[1],
    pricesData.datesFormat
  )
    .add(1, "d")
    .format("D MMMM");
  const lowSeasonEndDate = moment(
    pricesData.highSeasonInterval[0],
    pricesData.datesFormat
  )
    .add(-1, "d")
    .format("D MMMM");
  return (
    <PriceCard
      title="În extra sezon"
      subtitle={`${lowSeasonStartDate} - ${lowSeasonEndDate}`}
      type="extra-season"
      renderContent={() => (
        <Price
          price={pricesData.lowSeasonPricePerDay}
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
            ga-event-label="extra-season card"
          >
            Fă o cerere
          </Link>
        </React.Fragment>
      )}
    />
  );
};
