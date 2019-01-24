import React from "react";

export default props => (
  <React.Fragment>
    <h1>
      {props.price}€ <small>pe zi</small>
    </h1>
    {props.discounts &&
      props.discounts.length > 0 &&
      props.discounts.map((discount, index) => (
        <small key={index}>
          la peste {discount.minDays - 1} zile de inchiriere -{" "}
          <i>{discount.percent}% reducere</i>
        </small>
      ))}
  </React.Fragment>
);
