import React from "react";
import { roundNumber } from "coolcamper-common";

export default props => {
  const {
    price,
    minBookingDaysDiscounts,
    temporaryDiscountPercent,
    isExtraSeason
  } = props;
  const hasTemporaryDiscount = !!temporaryDiscountPercent;
  const discountedPrice = hasTemporaryDiscount
    ? price - roundNumber((price * temporaryDiscountPercent) / 100, 2)
    : null;

  return (
    <React.Fragment>
      <h1>
        {hasTemporaryDiscount && <span className="old-price">{price}€</span>}
        <span>{hasTemporaryDiscount ? discountedPrice : price}€</span>{" "}
        <small>pe zi</small>
      </h1>
      {hasTemporaryDiscount && (
        <small>
          Beneficiază de oferta limitată de{" "}
          <strong>{roundNumber(temporaryDiscountPercent, 2)}% reducere</strong>{" "}
          la orice rezervare făcută în {isExtraSeason ? "extra-sezon" : "sezon"}
        </small>
      )}
      {!hasTemporaryDiscount &&
        minBookingDaysDiscounts &&
        minBookingDaysDiscounts.map((discount, index) => (
          <small key={index}>
            la peste {discount.minDays - 1} zile închiriate -{" "}
            <strong>{discount.percent}% reducere</strong>
          </small>
        ))}
    </React.Fragment>
  );
};
