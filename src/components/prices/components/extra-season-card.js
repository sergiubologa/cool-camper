import React from "react";
import PriceCard from "./price-card";
import Button from "../../inputs/button";

export default () => (
  <PriceCard
    title="Extra sezon"
    subtitle="16 Octombrie - 14 Iunie"
    type="extra-season"
    renderContent={() => (
      <h1>
        100€ <small>pe zi</small>
      </h1>
    )}
    renderFooter={() => (
      <React.Fragment>
        <div className="discounts">
          <span>Se aplica discount-uri:</span>
          <ul>
            <li>intre 7 si 13 zile - 10% reducere</li>
            <li>peste 13 zile - 15% reducere</li>
          </ul>
        </div>
        <Button type="accent">Rezerva acum</Button>
      </React.Fragment>
    )}
  />
);
