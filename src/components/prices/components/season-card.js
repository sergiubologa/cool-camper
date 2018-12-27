import React from "react";
import PriceCard from "./price-card";
import Button from "../../inputs/button";

export default () => (
  <PriceCard
    title="În sezon"
    subtitle="15 Iunie - 15 Octombrie"
    renderContent={() => (
      <h1>
        140€ <small>pe zi</small>
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
