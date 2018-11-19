import React, { Component } from "react";
import "./app.css";
import UndrawDesigner from "../../assets/img/undraw_designer.svg";
import UndrawResponsive from "../../assets/img/undraw_responsive.svg";
import UndrawCreation from "../../assets/img/undraw_creation.svg";
import UndrawBrowser from "../../assets/img/undraw_browser.svg";
import UndrawFrameworks from "../../assets/img/undraw_frameworks.svg";
import UndrawTogether from "../../assets/img/together.svg";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";

class IndexPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Hero withSub />
        <div className="steps landing__section">
          <div className="container">
            <h2>Who can use Evie?</h2>
            <p>
              Here's who we can think of, but surely creative people will
              surprise us.
            </p>
          </div>
          <div className="container">
            <div className="steps__inner">
              <div className="step">
                <div className="step__media">
                  <img alt="" src={UndrawDesigner} className="step__image" />
                </div>
                <h4>Programmers</h4>
                <p className="step__text">
                  A landing page for your open source projects. Present your
                  solution, easily create docs.
                </p>
              </div>
              <div className="step">
                <div className="step__media">
                  <img alt="" src={UndrawResponsive} className="step__image" />
                </div>
                <h4>Designers</h4>
                <p className="step__text">
                  A website for your own freebies. Let the world download and
                  use your artwork.
                </p>
              </div>
              <div className="step">
                <div className="step__media">
                  <img alt="" src={UndrawCreation} className="step__image" />
                </div>
                <h4>Makers</h4>
                <p className="step__text">
                  A great starting point for your web application. Focus on your
                  idea and execution.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="expanded landing__section">
          <div className="container">
            <div className="expanded__inner">
              <div className="expanded__media">
                <img alt="" src={UndrawBrowser} className="expanded__image" />
              </div>
              <div className="expanded__content">
                <h2 className="expanded__title">
                  Natural styling with almost nothing to learn
                </h2>
                <p className="expanded__text">
                  Evie brings you the pages you'll need and the structure to
                  create your own, without a learning curve. It is minimal and
                  mostly styles plain elements. There are only a few classNamees
                  you'll need to know but nothing to disrupt your preferred
                  coding style.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="expanded landing__section">
          <div className="container">
            <div className="expanded__inner">
              <div className="expanded__media">
                <img
                  alt=""
                  src={UndrawFrameworks}
                  className="expanded__image"
                />
              </div>
              <div className="expanded__content">
                <h2 className="expanded__title">
                  Framework agnostic. Your front-end setup, your choice.
                </h2>
                <p className="expanded__text">
                  Evie has zero dependencies and uses vanilla JavaScript for a
                  few functions with minimal footprint. You can use React, Vue,
                  Angular, jQuery or whatever you prefer.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="expanded landing__section">
          <div className="container">
            <div className="expanded__inner">
              <div className="expanded__media">
                <img src={UndrawTogether} alt="" className="expanded__image" />
              </div>
              <div className="expanded__content">
                <h2 className="expanded__title">
                  Ready for production or rapid prototyping
                </h2>
                <p className="expanded__text">
                  Landing, authentication and a few other pages to select from,
                  despite the small size. Tested on production at unDraw with
                  amazing speeds and unopinionated on how to structure your
                  project. We really hope you'll find it awesome and useful!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="cta cta--reverse">
          <div className="container">
            <div className="cta__inner">
              <h2 className="cta__title">Get started now</h2>
              <p className="cta__sub cta__sub--center">
                Grab the production version and begin your project instantly.
              </p>
              <a href="#" className="button button__accent">
                Download Evie
              </a>
            </div>
          </div>
        </div>

        <div className="footer footer--dark">
          <div className="container">
            <div className="footer__inner">
              <a href="index.html" className="footer__textLogo">
                Evie theme
              </a>
              <div className="footer__data">
                <div className="footer__data__item">
                  <div className="footer__row">
                    Created by{" "}
                    <a
                      href="https://twitter.com/ninalimpi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer__link"
                    >
                      Katerina Limpitsouni
                    </a>
                  </div>
                  <div className="footer__row">
                    Code/design by{" "}
                    <a
                      href="https://twitter.com/anges244"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer__link"
                    >
                      Aggelos Gesoulis
                    </a>
                  </div>
                </div>
                <div className="footer__data__item">
                  <div className="footer__row">
                    Created for{" "}
                    <a
                      href="https://undraw.co"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer__link"
                    >
                      unDraw
                    </a>
                  </div>
                  <div className="footer__row">
                    Special thx to{" "}
                    <a
                      href="https://shareboost.co"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer__link"
                    >
                      ShareBoost
                    </a>{" "}
                    for the support
                  </div>
                </div>
                <div className="footer__data__item">
                  <div className="footer__row">
                    <a
                      href="https://github.com/anges244/evie"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer__link"
                    >
                      GitHub
                    </a>
                  </div>
                  <div className="footer__row">
                    <a
                      href="https://twitter.com/undraw_co"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer__link"
                    >
                      Twitter
                    </a>
                  </div>
                  <div className="footer__row">
                    <a
                      href="https://www.facebook.com/undraw.co/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer__link"
                    >
                      Facebook
                    </a>
                  </div>
                  <div className="footer__row">
                    <a href="./additional.html" className="footer__link">
                      MIT license
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default IndexPage;
