import React from "react";
import PriceCard from "./price-card";
import Button from "../../inputs/button";

export default () => (
  <PriceCard
    title="În extra sezon"
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
          <span>Se aplică discount-uri:</span>
          <ul>
            <li>între 7 și 13 zile - 10% reducere</li>
            <li>peste 13 zile - 15% reducere</li>
          </ul>
        </div>
        <Button type="accent" to="/rezervare-autorulota">
          Rezervă acum
        </Button>
      </React.Fragment>
    )}
  />
);
