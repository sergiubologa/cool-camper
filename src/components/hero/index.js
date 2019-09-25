import React from "react";
import HeroSub from "./components/hero-sub";
import Button from "../inputs/button";
import { Link } from "react-router-dom";
import { smoothScrollToSelector } from "../../common/utils";

export default props => (
  <React.Fragment>
    <div className="hero">
      <div className="hero__overlay hero__overlay--gradientVertical" />
      <div className="hero__inner">
        <div className="container">
          <div className="hero__content">
            <div className="hero__content__inner" id="navConverter">
              <h1 className="hero__title">
                Închirieri autorulote. Aventura începe. Experiențe de neuitat!
              </h1>
              <p className="hero__text">
                Închiriază o autorulotă modernă, adună-ți prietenii sau familia
                și bucură-te de vacanța mult visată! Noi îți punem la dispoziție
                o{" "}
                <a
                  href="#motorhome-images"
                  onClick={e => {
                    e.preventDefault();
                    smoothScrollToSelector("#motorhome-images");
                  }}
                  ga-on="click,auxclick,contextmenu"
                  ga-event-category="Link"
                  ga-event-action="autorulotă nouă"
                  ga-event-label="page header"
                >
                  autorulotă nouă
                </a>
                , un{" "}
                <a
                  href="#itinerary-header"
                  onClick={e => {
                    e.preventDefault();
                    smoothScrollToSelector(".itinerary__header", 20);
                  }}
                  ga-on="click,auxclick,contextmenu"
                  ga-event-category="Link"
                  ga-event-action="itinerariu complet"
                  ga-event-label="page header"
                >
                  itinerariu complet
                </a>{" "}
                și toate{" "}
                <a
                  href="#faq-insurance"
                  onClick={e => {
                    e.preventDefault();
                    smoothScrollToSelector("#faq-insurance", 20);
                    document
                      .querySelector("#faq-insurance .faq__question")
                      .click();
                  }}
                  ga-on="click,auxclick,contextmenu"
                  ga-event-category="Link"
                  ga-event-action="asigurările"
                  ga-event-label="page header"
                >
                  asigurările
                </a>{" "}
                de care ai nevoie.
              </p>
              <Link
                to="/rezervare-autorulota"
                className="button button__accent"
                ga-on="click,auxclick,contextmenu"
                ga-event-category="Button"
                ga-event-action="Verifică disponibilitatea"
                ga-event-label="page header"
              >
                Verifică disponibilitatea
              </Link>
              <Button
                className="hero__button"
                onClick={() => smoothScrollToSelector("#preturi", 20)}
                ga-on="click,auxclick,contextmenu"
                ga-event-category="Button"
                ga-event-action="Vezi prețuri"
                ga-event-label="page header"
              >
                Vezi prețuri
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {props.withSub && <HeroSub scrollTo="#why-coolcamper" />}
  </React.Fragment>
);
