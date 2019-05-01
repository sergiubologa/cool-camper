import React from "react";
import { Sunny, Cloudy } from "../../svg/forecasts";
import Card from "../../card";

export default props => {
  const {
    type,
    title,
    subtitle,
    renderContent,
    renderFooter,
    renderRibbons
  } = props;
  let IconComponent = Sunny;
  if (type === "extra-season") IconComponent = Cloudy;

  return (
    <Card
      className="price__card"
      renderHeader={() => (
        <div className="price__card__header">
          <IconComponent />
          <div className="price__card__title">
            <h4>{title}</h4>
            <span>{subtitle}</span>
          </div>
        </div>
      )}
      renderBody={() => (
        <div className="price__card__content">{renderContent()}</div>
      )}
      renderFooter={() => (
        <div className="price__card__footer">{renderFooter()}</div>
      )}
      renderRibbons={renderRibbons}
    />
  );
};
