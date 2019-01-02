import React from "react";
import TooltipIcon from "../../../components/tooltip";

export default props => {
  const { className, days } = props;
  const classes = ["price__details"];
  if (className) classes.push(className);

  const pricePerDay = 140;
  const totalPrice = days * pricePerDay;

  return (
    <div className={classes.join(" ")}>
      <div className="price__details__row">
        <span>
          140€ x {days} {days > 1 ? "zile" : "zi"}
          <TooltipIcon>
            <div>
              <div>Popover Content</div>
              <div>Popover Content</div>
              <div>Popover Content</div>
            </div>
          </TooltipIcon>
        </span>
        <span>{totalPrice.toLocaleString()}€</span>
      </div>
      <div className="price__details__row">
        <span>garanție</span>
        <span>0€</span>
      </div>
      <div className="price__details__row price__details__row__discount">
        <span>10% discount</span>
        <span>-100€</span>
      </div>

      <div className="price__details__row">
        <span>
          <strong>Total</strong>
        </span>
        <span>
          <strong>{totalPrice.toLocaleString()}€</strong>
        </span>
      </div>
    </div>
  );
};
