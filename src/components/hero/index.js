import React from "react";
import HeroSub from "./components/hero-sub";
import Button from "../inputs/button";

export default props => (
  <React.Fragment>
    <div className="hero">
      <div className="hero__overlay hero__overlay--gradient" />
      <div className="hero__mask" />
      <div className="hero__inner">
        <div className="container">
          <div className="hero__content">
            <div className="hero__content__inner" id="navConverter">
              <h1 className="hero__title">
                A production-ready theme for your projects
              </h1>
              <p className="hero__text">
                Evie is an MIT licensed template bundled with a minimal style
                guide to build websites faster. It is extemely lightweight,
                customizable and works perfectly on modern browsers.
              </p>
              <Button type="accent">Download Evie</Button>
              <Button className="hero__button">Learn more</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {props.withSub && <HeroSub scrollByElementHeight=".hero" />}
  </React.Fragment>
);
