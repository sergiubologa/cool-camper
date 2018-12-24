import React from "react";
import { Sunny, Rainy } from "../../svg/forecasts";

export default props => {
  const { type, title, subtitle, renderContent, renderFooter } = props;
  let IconComponent = Sunny;
  if (type === "extra-season") IconComponent = Rainy;

  return (
    <div className="price__card">
      <div className="price__card__header">
        <IconComponent />
        <div className="price__card__title">
          <h4>{title}</h4>
          <span>{subtitle}</span>
        </div>
      </div>
      <div className="price__card__content">{renderContent()}</div>
      <div className="price__card__footer">{renderFooter()}</div>
    </div>
  );
};
