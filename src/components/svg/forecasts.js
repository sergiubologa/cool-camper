import React from "react";
import "../../styles/forecasts.css";

export const Sunny = () => <div className="forecast__sunny" />;

export const Cloudy = () => (
  <div className="forecast__cloudy">
    <div className="forecast__cloudy__sun" />
    <div className="forecast__cloudy__cloud forecast__cloudy__cloud--small" />
    <div className="forecast__cloudy__cloud forecast__cloudy__cloud--normal" />
  </div>
);

export const Rainy = () => (
  <div className="forecast__rainy">
    <div className="forecast__rainy__rain forecast__rainy__rain--one" />
    <div className="forecast__rainy__rain forecast__rainy__rain--two" />
    <div className="forecast__rainy__rain forecast__rainy__rain--three" />
    <div className="forecast__rainy__rain forecast__rainy__rain--four" />
    <div className="forecast__rainy__cloud forecast__rainy__cloud--grey" />
  </div>
);

export const Snowy = () => (
  <div className="forecast__snow">
    <div className="forecast__snow__snow forecast__snow__snow--first" />
    <div className="forecast__snow__snow forecast__snow__snow--second" />
    <div className="forecast__snow__snow forecast__snow__snow--third" />
    <div className="forecast__snow__snow forecast__snow__snow--fourth" />
    <div className="forecast__snow__cloud forecast__snow__cloud--grey" />
  </div>
);
