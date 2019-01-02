import React from "react";
import HeroSub from "./components/hero-sub";
import Button from "../inputs/button";
import { smoothScrollToSelector } from "../../common/utils";

export default props => (
  <React.Fragment>
    <div className="hero">
      <div className="hero__overlay hero__overlay--gradientVertical" />
      <div className="hero__mask" />
      <div className="hero__inner">
        <div className="container">
          <div className="hero__content">
            <div className="hero__content__inner" id="navConverter">
              <h1 className="hero__title">Travel Anywhere. Be a CoolCamper!</h1>
              <p className="hero__text">
                Închiriază o autorulotă modernă, adună-ți prietenii sau familia
                și bucură-te de vacanța mult visată! Noi îți punem la dispoziție
                o{" "}
                <a
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    smoothScrollToSelector("#motorhome-images");
                  }}
                >
                  autorulotă modernă
                </a>
                , un{" "}
                <a
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    smoothScrollToSelector(".itinerary__header", 20);
                  }}
                >
                  itinerariu complet
                </a>{" "}
                și toate{" "}
                <a
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    smoothScrollToSelector("#faq-insurance", 20);
                    document
                      .querySelector("#faq-insurance .faq__question")
                      .click();
                  }}
                >
                  asigurările
                </a>{" "}
                de care ai putea să ai nevoie.
              </p>
              <Button type="accent" to="/rezervare-autorulota">
                Rezervă acum
              </Button>
              <Button
                className="hero__button"
                onClick={() => smoothScrollToSelector("#prices", 20)}
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
