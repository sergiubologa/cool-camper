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
                Ia-ți familia în vacanța mult visată!
              </h1>
              <p className="hero__text">
                Închiriază o autorulotă modernă, adună-ți prietenii sau familia
                și bucură-te de vacanța mult visată! Noi îți punem la dispoziție
                o <a href="#">autorulotă modernă</a>, un{" "}
                <a href="#">itinerariu complet</a> și toate{" "}
                <a href="#">asigurările</a> de care ai putea să ai nevoie.
              </p>
              <Button type="accent">Rezerva acum</Button>
              <Button className="hero__button">Vezi preturi</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {props.withSub && <HeroSub scrollByElementHeight=".hero" />}
  </React.Fragment>
);
