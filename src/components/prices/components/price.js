import React from "react";

export default props => (
  <React.Fragment>
    <h1>
      {props.price}€ <small>pe zi</small>
    </h1>
    {props.discounts &&
      props.discounts.minBookingDays &&
      props.discounts.minBookingDays.length > 0 &&
      props.discounts.minBookingDays.map((discount, index) => (
        <small key={index}>
          la peste {discount.minDays - 1} zile închiriate -{" "}
          <strong>{discount.percent}% reducere</strong>
        </small>
      ))}
  </React.Fragment>
);
