import React from "react";
import PriceCard from "./price-card";
import { Link } from "react-router-dom";
import { pricesData } from "coolcamper-common";
import moment from "moment";
import Price from "./price";
import PriceDetails from "./price-details";
import RibbonCorner from "../../ribbon-corner";

export default () => {
  const lowSeasonStartDate = moment
    .utc(pricesData.highSeasonInterval[1], pricesData.datesFormat)
    .add(1, "d")
    .format("D MMMM");
  const lowSeasonEndDate = moment
    .utc(pricesData.highSeasonInterval[0], pricesData.datesFormat)
    .add(-1, "d")
    .format("D MMMM");
  const hasLowSeasonDiscount =
    pricesData.discounts.temporary &&
    pricesData.discounts.temporary.lowSeasonPercent > 0;
  return (
    <PriceCard
      title="În extra sezon"
      subtitle={`${lowSeasonStartDate} - ${lowSeasonEndDate}`}
      type="extra-season"
      renderContent={() => (
        <Price
          price={pricesData.lowSeasonPricePerDay}
          minBookingDaysDiscounts={pricesData.discounts.minBookingDays}
          temporaryDiscountPercent={
            hasLowSeasonDiscount
              ? pricesData.discounts.temporary.lowSeasonPercent
              : null
          }
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
            ga-event-action="Disponibilitate"
            ga-event-label="extra-season card"
          >
            Disponibilitate
          </Link>
        </React.Fragment>
      )}
      renderRibbons={() =>
        hasLowSeasonDiscount && (
          <RibbonCorner
            text={"-" + pricesData.discounts.temporary.lowSeasonPercent + "%"}
          />
        )
      }
    />
  );
};
